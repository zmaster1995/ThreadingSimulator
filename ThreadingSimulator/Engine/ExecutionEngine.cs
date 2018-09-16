using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Models;

namespace ThreadingSimulator.Engine
{
    public class ExecutionEngine
    {
        #region Singleton
        public static ExecutionEngine Instance { get; }

        static ExecutionEngine()
        {
            Instance = new ExecutionEngine();
        }

        private ExecutionEngine()
        {
            variableStack = new VariableStack();
            criticalRegionControl = new CriticalRegionControl();
            initialized = false;
            logs = new List<BaseLogModel>();
            runningProcesses = new List<int>();
            randomGenerator = new Random();
            takenValues = new Dictionary<int, int>();
        }

        private CriticalRegionControl criticalRegionControl;
        private VariableStack variableStack;
        #endregion

        private ExecutableProgramModel program;
        private bool initialized;
        private bool executionFinished;
        private bool awakeCommand;
        private int[] processPositions;
        private List<BaseLogModel> logs;
        private List<int> runningProcesses;
        private Random randomGenerator;
        private int dispatcherPos;
        private int[] dispatcher;
        private List<int> processesToAwake;
        private int runningProcessesCount;
        private Dictionary<int, int> takenValues;

        public void Init(ExecutableProgramModel program, ExecutionSettingsModel settings)
        {
            this.program = program;

            awakeCommand = true;
            dispatcherPos = 0;
            executionFinished = false;

            processesToAwake = new List<int>();

            processPositions = new int[program.ProcessCount];
            runningProcessesCount = program.ProcessCount;

            logs.Clear();
            takenValues.Clear();
            variableStack.Reset();
            criticalRegionControl.Reset();

            runningProcesses.Clear();

            for (int i = 0; i < program.ProcessCount; i++) 
            {
                takenValues.Add(i, 0);
                runningProcesses.Add(i);
                processPositions[i] = 0;
            }

            dispatcher = settings.Dispatcher.Select(x=>x-1).ToArray();
            variableStack.InitVariables(settings.Variables);
            criticalRegionControl.InitSemaphores(settings.Semaphores);

            initialized = true;
        }

        public Task Execute()
        {
            if (!initialized)
            {
                throw new Exception("Engine not initialized");
            }

            TaskCompletionSource<bool> tcs = new TaskCompletionSource<bool>();

            ThreadPool.QueueUserWorkItem(x =>
            {
                try
                {                
                    ExecuteInternal();

                    executionFinished = true;
                    initialized = false;

                    tcs.SetResult(true);
                }
                catch(Exception ex)
                {
                    tcs.SetException(ex);
                }
            });

            return tcs.Task;
        }

        private void ExecuteInternal()
        {
            int value;
            int processNo;
            CommandModel command;
            bool deadlock = false;

            while (runningProcessesCount > 0)
            {
                processNo = ChooseProcess(ref deadlock);

                if(deadlock)
                {
                    AddLog(LogType.ALL_SUSPENDED);
                    return;
                }

                command = program.Processes[processNo].Commands[processPositions[processNo]];
                
                switch (command.Type)
                {
                    case CommandType.SEMAPHOR_ENTER:
                        ResourceLockType resLock = criticalRegionControl.Lock(command.Variable, processNo);

                        if (resLock == ResourceLockType.AVAILABLE)
                        {                      
                            processPositions[processNo]++;
                            AddLog(LogType.ENTER_REGION, command.Variable, processNo, command);
                        }
                        else if (resLock == ResourceLockType.LOCKED)
                        {
                            runningProcesses.Remove(processNo);
                            AddLog(LogType.SUSPENDED, command.Variable, processNo, command);
                        }
                        else
                        {
                            AddLog(LogType.DEADLOCK);
                            return;
                        }
                        break;
                    case CommandType.SEMAPHOR_EXIT:
                        int toAwake = -1;

                        ResourceUnlockAvailabilityType resUnlock = criticalRegionControl.Unlock(command.Variable, processNo, ref toAwake);

                        if (resUnlock == ResourceUnlockAvailabilityType.OK_AWAKE_OTHER)
                        {
                            processesToAwake.Add(toAwake);
                        }

                        processPositions[processNo]++;
                        AddLog(LogType.EXIT_REGION, command.Variable, processNo, command);
                        break;
                    case CommandType.OTHER:
                        processPositions[processNo]++;
                        AddLog(LogType.MOVE, processNo, command);
                        break;
                    case CommandType.SHARED_VARIABLE_CALC_DIFF:
                        takenValues[processNo] -= command.Value.Value;

                        processPositions[processNo]++;
                        AddLog(LogType.CALC_VALUE, command.Variable, takenValues[processNo], processNo, command);
                        break;
                    case CommandType.SHARED_VARIABLE_CALC_SUM:
                        takenValues[processNo] += command.Value.Value;

                        processPositions[processNo]++;
                        AddLog(LogType.CALC_VALUE, command.Variable, takenValues[processNo], processNo, command);
                        break;
                    case CommandType.SHARED_VARIABLE_GET:
                        value = variableStack.GetValue(command.Variable);
                        takenValues[processNo] = value;

                        processPositions[processNo]++;
                        AddLog(LogType.GET_VALUE, command.Variable, value, processNo, command);
                        break;
                    case CommandType.SHARED_VARIABLE_SET:
                        value = command.Value.HasValue ? command.Value.Value : takenValues[processNo];
                        variableStack.SetValue(command.Variable, value);

                        processPositions[processNo]++;
                        AddLog(LogType.SET_VALUE, command.Variable, value, processNo, command);
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                }

                if (processPositions[processNo] == program.Processes[processNo].CommandCount)
                {
                    runningProcessesCount--;
                    runningProcesses.Remove(processNo);
                    //List<int> toAwake = criticalRegionControl.ReleaseAll(processNo);

                    //processesToAwake.AddRange(toAwake);
                }
            }
        }

        public List<BaseLogModel> GetLogs()
        {
            if (!executionFinished)
            {
                throw new Exception("Simulation is not executed!");
            }

            return logs;
        }

        private void AddLog(LogType type)
        {
            logs.Add(new BaseLogModel()
            {
                Type = type
            });
        }

        private void AddLog(LogType type, int processNo)
        {
            logs.Add(new LogModel()
            {
                Type = type,
                Process = processNo
            });
        }

        private void AddLog(LogType type, int processNo, CommandModel command)
        {
            logs.Add(new LogModel()
            {
                Type = type,
                Process = processNo,
                Command = command
            });
        }

        private void AddLog(LogType type, string semaphore, int processNo, CommandModel command)
        {
            logs.Add(new SemaphoreLogModel()
            {
                Process = processNo,
                Type = type,
                Semaphore = semaphore,
                Command = command
            });
        }

        private void AddLog(LogType type, string variable, int value, int processNo, CommandModel command)
        {
            logs.Add(new VariableLogModel()
            {
                Process = processNo,
                Type = type,
                Value = value,
                Variable = variable,
                Command = command
            });
        }

        private int ChooseProcess(ref bool deadlock)
        {
            if(processesToAwake.Any())
            {
                int process = processesToAwake[0];

                awakeCommand = !awakeCommand;

                if(awakeCommand)
                {
                    processesToAwake.RemoveAt(0);
                }
                else
                {
                    runningProcesses.Add(process);
                }

                return process;
            }

            if(!runningProcesses.Any())
            {
                deadlock = true;
                return -1;
            }

            while (dispatcherPos < dispatcher.Length)
            {
                int processNo = dispatcher[dispatcherPos];
                dispatcherPos++;

                if (runningProcesses.Contains(processNo))
                {
                    return processNo;
                }
                else
                {
                    AddLog(LogType.DISPATCHER_SKIP, processNo);
                }
            };

            return runningProcesses[randomGenerator.Next(runningProcesses.Count)];
        }
    }
}
