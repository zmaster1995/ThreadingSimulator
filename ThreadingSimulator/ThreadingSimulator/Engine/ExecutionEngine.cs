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
            logs = new List<LogModel>();
            runningProcessors = new List<int>();
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
        private int[] processorPositions;
        private List<LogModel> logs;
        private List<int> runningProcessors;
        private Random randomGenerator;
        private int dispatcherPos;
        private int[] dispatcher;
        private List<int> processorsToAwake;
        private int runningProcessorsCount;
        private Dictionary<int, int> takenValues;

        public void Init(ExecutableProgramModel program, ExecutionSettingsModel settings)
        {
            this.program = program;

            awakeCommand = true;
            dispatcherPos = 0;
            executionFinished = false;

            processorsToAwake = new List<int>();

            processorPositions = new int[program.ProcessorCount];
            runningProcessorsCount = program.ProcessorCount;

            logs.Clear();
            takenValues.Clear();
            variableStack.Reset();
            criticalRegionControl.Reset();

            runningProcessors.Clear();

            for (int i = 0; i < program.ProcessorCount; i++) 
            {
                takenValues.Add(i, 0);
                runningProcessors.Add(i);
                processorPositions[i] = 0;
            }

            dispatcher = settings.Dispatcher.Select(x => x.Value - 1).ToArray();
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
            int processorNo;
            CommandModel command;

            while (runningProcessorsCount > 0)
            {
                processorNo = ChooseProcessor();
                command = program.Processors[processorNo].Commands[processorPositions[processorNo]];
                
                switch (command.Type)
                {
                    case CommandType.SEMAPHOR_ENTER:
                        ResourceLockType resLock = criticalRegionControl.Lock(command.Variable, processorNo);

                        if (resLock == ResourceLockType.AVAILABLE)
                        {                      
                            processorPositions[processorNo]++;
                            AddLog(processorNo, LogType.ENTER_REGION, command.Variable);
                        }
                        else if (resLock == ResourceLockType.LOCKED)
                        {
                            runningProcessors.Remove(processorNo);
                            AddLog(processorNo, LogType.SUSPENDED, command.Variable);
                        }
                        else
                        {
                            AddLog(processorNo, LogType.DEADLOCK);
                            return;
                        }
                        break;
                    case CommandType.SEMAPHOR_EXIT:
                        int toAwake = -1;

                        ResourceUnlockAvailabilityType resUnlock = criticalRegionControl.Unlock(command.Variable, processorNo, ref toAwake);

                        if (resUnlock == ResourceUnlockAvailabilityType.OK_AWAKE_OTHER)
                        {
                            processorsToAwake.Add(toAwake);
                        }

                        processorPositions[processorNo]++;
                        AddLog(processorNo, LogType.EXIT_REGION, command.Variable);
                        break;
                    case CommandType.OTHER:
                        processorPositions[processorNo]++;
                        AddLog(processorNo, LogType.MOVE);
                        break;
                    case CommandType.SHARED_VARIABLE_CALC_DIFF:
                        takenValues[processorNo] -= command.Value.Value;

                        processorPositions[processorNo]++;
                        AddLog(processorNo, LogType.CALC_VALUE, command.Variable, takenValues[processorNo]);
                        break;
                    case CommandType.SHARED_VARIABLE_CALC_SUM:
                        takenValues[processorNo] += command.Value.Value;

                        processorPositions[processorNo]++;
                        AddLog(processorNo, LogType.CALC_VALUE, command.Variable, takenValues[processorNo]);
                        break;
                    case CommandType.SHARED_VARIABLE_GET:
                        value = variableStack.GetValue(command.Variable);
                        takenValues[processorNo] = value;

                        processorPositions[processorNo]++;
                        AddLog(processorNo, LogType.GET_VALUE, command.Variable, value);
                        break;
                    case CommandType.SHARED_VARIABLE_SET:
                        value = command.Value.HasValue ? command.Value.Value : takenValues[processorNo];
                        variableStack.SetValue(command.Variable, value);

                        processorPositions[processorNo]++;
                        AddLog(processorNo, LogType.SET_VALUE, command.Variable, value);
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                }

                if (processorPositions[processorNo] == program.Processors[processorNo].CommandCount)
                {
                    runningProcessorsCount--;
                    runningProcessors.Remove(processorNo);
                    //List<int> toAwake = criticalRegionControl.ReleaseAll(processorNo);

                    //processorsToAwake.AddRange(toAwake);


                    AddLog(processorNo, LogType.EXEC_FINISHED);
                }
            }
        }

        public List<LogModel> GetLogs()
        {
            if (!executionFinished)
            {
                throw new Exception("Simulation is not executed!");
            }

            return logs;
        }

        private void AddLog(int processorNo, LogType type)
        {
            logs.Add(new LogModel()
            {
                Processor = processorNo,
                Type = type
            });
        }

        private void AddLog(int processorNo, LogType type, string semaphore)
        {
            logs.Add(new SemaphoreLogModel()
            {
                Processor = processorNo,
                Type = type,
                Semaphore = semaphore
            });
        }

        private void AddLog(int processorNo, LogType type, string variable, int value)
        {
            logs.Add(new ValuedLogModel()
            {
                Processor = processorNo,
                Type = type,
                Value = value,
                Variable = variable
            });
        }

        private int ChooseProcessor()
        {
            if(processorsToAwake.Any())
            {
                int processor = processorsToAwake[0];

                awakeCommand = !awakeCommand;

                if(awakeCommand)
                {
                    processorsToAwake.RemoveAt(0);
                }
                else
                {
                    runningProcessors.Add(processor);
                }

                return processor;
            }

            while (dispatcherPos < dispatcher.Length)
            {
                int processorNo = dispatcher[dispatcherPos];
                dispatcherPos++;

                if (runningProcessors.Contains(processorNo))
                {
                    return processorNo;
                }
            };

            return runningProcessors[randomGenerator.Next(runningProcessors.Count)];
        }

        public void PrintLogs()
        {
            Console.WriteLine("---START---");

            foreach (LogModel log in logs)
            {
                if(log.Type == LogType.GET_VALUE || log.Type == LogType.SET_VALUE || log.Type == LogType.CALC_VALUE)
                {
                    Console.WriteLine(String.Format("Processor: {0}, Type: {1}, Value: {2}", log.Processor, log.Type, (log as ValuedLogModel).Value));
                }
                else
                {
                    Console.WriteLine(String.Format("Processor: {0}, Type: {1}", log.Processor, log.Type));
                }
            }

            Console.WriteLine("---END---");
        }
    }
}
