using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Timers;
using System.Windows;
using System.Windows.Input;
using ThreadingSimulator.Dialogs;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Models;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.ViewModels
{
    class SimulationDisplayVM : DialogViewModel
    {
        private const int TICK = 1500;
        private List<InitialValueModel> variables;
        private List<InitialValueModel> semaphores;
        private List<InitialValueModel> variableValues;
        private List<InitialValueModel> semaphoreValue;
        private ExecutableProgramModel program;
        private List<LogModel> logs;
        private bool timerIsRunning;
        private int currentLog;
        private Timer timer;
        private Dictionary<string, List<int>> previousValues;
        private int[] processorPositions;
        private bool[] wasSuspended;

        public Action Redraw;

        public ExecutableProgramModel Program
        {
            get
            {
                return program;
            }
            set
            {
                program = value;
                OnPropertyChanged();
            }
        }
        public List<InitialValueModel> VariableValues
        {
            get
            {
                return variableValues;
            }
            set
            {
                variableValues = value;
                OnPropertyChanged();
            }
        }
        public List<InitialValueModel> SemaphoreValues
        {
            get
            {
                return semaphoreValue;
            }
            set
            {
                semaphoreValue = value;
                OnPropertyChanged();
            }
        }

        public int CurrentLog
        {
            get
            {
                return currentLog;
            }
            set
            {
                currentLog = value;
                OnPropertyChanged();
                OnPropertyChanged(nameof(LogOutput));
            }
        }

        public string LogOutput
        {
            get
            {
                StringBuilder sb = new StringBuilder();

                for (int i = 0; i < Math.Min(CurrentLog + 1, logs.Count); i++) 
                {
                    if(i!=0)
                    {
                        sb.AppendLine();
                    }

                    sb.AppendLine(GenerateLogOutputText(logs[i]));
                }

                if(CurrentLog == logs.Count)
                {
                    sb.AppendLine();
                    sb.AppendLine("---Simulation finished---");
                }
                
                return sb.ToString();
            }
        }

        public ICommand StartAutoDisplayCmd => new DelegateCommand(StartAutoDisplayCmd_Execute, StartAutoDisplayCmd_CanExecute);
        public ICommand PauseAutoDisplayCmd => new DelegateCommand(PauseAutoDisplayCmd_Execute, PauseAutoDisplayCmd_CanExecute);
        public ICommand ResetSimulationCmd => new DelegateCommand(ResetSimulationCmd_Execute, ResetSimulationCmd_CanExecute);
        public ICommand NextLogCmd => new DelegateCommand(NextLogCmd_Execute, NextLogCmd_CanExecute);
        public ICommand PreviousLogCmd => new DelegateCommand(PreviousLogCmd_Execute, PreviousLogCmd_CanExecute);

        public string GenerateLogOutputText(LogModel log)
        {
            StringBuilder sb;
            ValuedLogModel valuedLog;
            SemaphoreLogModel semaphoreLog;

            switch (log.Type)
            {
                case LogType.MOVE:
                    return String.Format("Processor {0} executed command and moved", log.Processor + 1);
                case LogType.ENTER_REGION:
                    semaphoreLog = log as SemaphoreLogModel;
                    sb = new StringBuilder();

                    sb.AppendLine(String.Format("Processor {0} executed command and moved", log.Processor + 1));
                    sb.Append(String.Format("###Procesor {0} entered critical region {1}###", semaphoreLog.Processor + 1, semaphoreLog.Semaphore));

                    return sb.ToString();
                case LogType.EXIT_REGION:
                    semaphoreLog = log as SemaphoreLogModel;
                    sb = new StringBuilder();

                    sb.AppendLine(String.Format("Processor {0} executed command and moved", log.Processor + 1));
                    sb.Append(String.Format("###Procesor {0} exited critical region {1}###", semaphoreLog.Processor + 1, semaphoreLog.Semaphore));

                    return sb.ToString();
                case LogType.GET_VALUE:
                    valuedLog = log as ValuedLogModel;
                    sb = new StringBuilder();

                    sb.AppendLine(String.Format("Processor {0} executed command and moved", log.Processor + 1));
                    sb.Append(String.Format("~~~Value of variable {0} which processor {1} posses is {2}~~~", valuedLog.Variable, valuedLog.Processor + 1, valuedLog.Value));

                    return sb.ToString();
                case LogType.SET_VALUE:
                    valuedLog = log as ValuedLogModel;
                    sb = new StringBuilder();

                    sb.AppendLine(String.Format("Processor {0} executed command and moved", log.Processor + 1));
                    sb.Append(String.Format("~~~Processor {0} set variable {1} value to {2}~~~", valuedLog.Processor + 1, valuedLog.Variable, valuedLog.Value));

                    return sb.ToString();
                case LogType.CALC_VALUE:
                    valuedLog = log as ValuedLogModel;
                    sb = new StringBuilder();

                    sb.AppendLine(String.Format("Processor {0} executed command and moved", log.Processor + 1));
                    sb.Append(String.Format("~~~Processor {0} calculated new value of variable {1} to {2}~~~", valuedLog.Processor + 1, valuedLog.Variable, valuedLog.Value));

                    return sb.ToString();
                case LogType.SUSPENDED:
                    semaphoreLog = log as SemaphoreLogModel;
                    return String.Format("Processor {0} has been suspended because resource {1} was locked", log.Processor + 1, semaphoreLog.Semaphore);
                case LogType.DEADLOCK:
                    return String.Format("Processor {0} has been suspended and deadlock was detected", log.Processor + 1);
                case LogType.EXEC_FINISHED:
                    return String.Format("***Processor {0} finished its execution***", log.Processor + 1);
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }

        public void ExecuteCommand(LogModel log)
        {
            ValuedLogModel valuedLog;
            SemaphoreLogModel semaphoreLog;

            if (log.Type == LogType.SET_VALUE)
            {
                valuedLog = log as ValuedLogModel;
                InitialValueModel variable = VariableValues.First(x => x.Name == valuedLog.Variable);

                previousValues[valuedLog.Variable].Add(variable.Value);
                variable.Value = valuedLog.Value;

                VariableValues = VariableValues.ToList();
            }
            else if (log.Type == LogType.ENTER_REGION)
            {
                semaphoreLog = log as SemaphoreLogModel;

                InitialValueModel semaphore = SemaphoreValues.First(x => x.Name == semaphoreLog.Semaphore);
                semaphore.Value--;

                SemaphoreValues = SemaphoreValues.ToList();

                if(wasSuspended[log.Processor])
                {
                    wasSuspended[log.Processor] = false;

                    return;
                }
            }
            else if (log.Type == LogType.EXIT_REGION)
            {
                semaphoreLog = log as SemaphoreLogModel;

                InitialValueModel semaphore = SemaphoreValues.First(x => x.Name == semaphoreLog.Semaphore);
                semaphore.Value++;

                SemaphoreValues = SemaphoreValues.ToList();
            }
            else if(log.Type == LogType.SUSPENDED)
            {
                wasSuspended[log.Processor] = true;
            }
            else if(log.Type==LogType.DEADLOCK)
            {
                return;
            }

            processorPositions[log.Processor]++;
            DisplayColor(log.Processor, processorPositions[log.Processor]);
        }

        public void UndoCommand(LogModel log)
        {
            ValuedLogModel valuedLog;
            SemaphoreLogModel semaphoreLog;

            if (log.Type == LogType.SET_VALUE)
            {
                valuedLog = log as ValuedLogModel;
                InitialValueModel variable = VariableValues.First(x => x.Name == valuedLog.Variable);
                
                variable.Value = previousValues[valuedLog.Variable].Last();
                previousValues[valuedLog.Variable].RemoveAt(previousValues[valuedLog.Variable].Count - 1);
                
                VariableValues = VariableValues.ToList();
            }
            else if (log.Type == LogType.ENTER_REGION)
            {
                semaphoreLog = log as SemaphoreLogModel;

                InitialValueModel semaphore = SemaphoreValues.First(x => x.Name == semaphoreLog.Semaphore);
                semaphore.Value++;

                SemaphoreValues = SemaphoreValues.ToList();
            }
            else if (log.Type == LogType.EXIT_REGION)
            {
                semaphoreLog = log as SemaphoreLogModel;

                InitialValueModel semaphore = SemaphoreValues.First(x => x.Name == semaphoreLog.Semaphore);
                semaphore.Value--;
               
                SemaphoreValues = SemaphoreValues.ToList();
            }
            else if (log.Type == LogType.DEADLOCK)
            {
                return;
            }

            processorPositions[log.Processor]--;
            DisplayColor(log.Processor, processorPositions[log.Processor]);
        }

        public void PreviousLogCmd_Execute(object o)
        {
            if (CurrentLog < logs.Count)
            {
                UndoCommand(logs[CurrentLog]);
            }

            CurrentLog--;
        }

        public bool PreviousLogCmd_CanExecute(object o)
        {
            return !timerIsRunning && CurrentLog > -1;
        }

        public void NextLogCmd_Execute(object o)
        {
            CurrentLog++;

            if(CurrentLog < logs.Count)
            {
                ExecuteCommand(logs[CurrentLog]);
            }
        }

        public bool NextLogCmd_CanExecute(object o)
        {
            return !timerIsRunning && CurrentLog < logs.Count - 1;
        }

        public void ResetSimulationCmd_Execute(object o)
        {
            Initialize();
        }

        public bool ResetSimulationCmd_CanExecute(object o)
        {
            return !timerIsRunning && currentLog != -1;
        }

        public void PauseAutoDisplayCmd_Execute(object o)
        {
            timer.Stop();
            timerIsRunning = false;
        }

        public bool PauseAutoDisplayCmd_CanExecute(object o)
        {
            return timerIsRunning;
        }

        public void StartAutoDisplayCmd_Execute(object o)
        {
            timerIsRunning = true;
            timer.Start();
        }

        public bool StartAutoDisplayCmd_CanExecute(object o)
        {
            return !timerIsRunning && CurrentLog < logs.Count - 1;
        }

        public SimulationDisplayVM(ExecutableProgramModel program, List<LogModel> logs, List<InitialValueModel> variables, List<InitialValueModel> semaphores)
        {
            Program = program;

            this.logs = logs;
            this.variables = variables;
            this.semaphores = semaphores;

            processorPositions = new int[program.ProcessorCount];
            wasSuspended = new bool[program.ProcessorCount];

            previousValues = new Dictionary<string, List<int>>();

            timer = new Timer
            {
                Interval = TICK,
                AutoReset = true
            };
            timer.Elapsed += Timer_Elapsed;
        }

        private void Timer_Elapsed(object sender, ElapsedEventArgs e)
        {
            CurrentLog++;

            if (CurrentLog < logs.Count)
            {
                ExecuteCommand(logs[CurrentLog]);
            }
            else
            {
                timer.Stop();
                timerIsRunning = false;
            }
        }

        private List<InitialValueModel> CloneList(List<InitialValueModel> listToClone)
        {
            List<InitialValueModel> list = new List<InitialValueModel>();

            foreach (InitialValueModel ivm in listToClone)
            {
                list.Add(new InitialValueModel()
                {
                    Name = ivm.Name,
                    Value = ivm.Value
                });
            }

            return list;
        }

        protected override void Initialize()
        {
            CurrentLog = -1;
            VariableValues = CloneList(variables);
            SemaphoreValues = CloneList(semaphores);

            for (int i = processorPositions.Length - 1; i >= 0; i--) 
            {
                Program.Processors[i].Commands.First().DisplayColor = true;
                wasSuspended[i] = false;
                processorPositions[i] = 0;
                DisplayColor(i, 0);
            }

            previousValues.Clear();
            foreach (InitialValueModel ivm in VariableValues)
            {
                previousValues.Add(ivm.Name, new List<int>());
            }

            Redraw?.Invoke();
        }

        private void DisplayColor(int processorNo, int commandNo)
        {
            Program.Processors[processorNo].Commands.ForEach(x => x.DisplayColor = false);

            if (commandNo >= 0 && commandNo < Program.Processors[processorNo].CommandCount)
            {
                Program.Processors[processorNo].Commands[commandNo].DisplayColor = true;
            }
        }

        protected override Window MakeDialog()
        {
            return new SimulationDisplayDialog();
        }
    }
}
