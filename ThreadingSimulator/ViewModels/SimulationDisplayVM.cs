using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Timers;
using System.Windows;
using System.Windows.Forms;
using System.Windows.Input;
using System.Windows.Threading;
using ThreadingSimulator.Converters;
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
        private List<BaseLogModel> logs;
        private bool timerIsRunning;
        private int currentLog;
        private System.Timers.Timer timer;
        private Dictionary<string, List<int>> previousValues;
        private int[] processPositions;
        private ObservableCollection<PrintedLogModel> logOutput;
        private bool[] isSuspended;
        
        public Action Close;
        public bool NewSimulation { get; set; }

        public bool[] IsSuspended
        {
            get
            {
                return isSuspended;
            }
            set
            {
                isSuspended = value;
                OnPropertyChanged();
            }
        }
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

        public ObservableCollection<PrintedLogModel> LogOutput
        {
            get
            {
                return logOutput;
            }
            set
            {
                logOutput = value;
                OnPropertyChanged();
            }
        }

        public ICommand StartAutoDisplayCmd => new DelegateCommand(StartAutoDisplayCmd_Execute, StartAutoDisplayCmd_CanExecute);
        public ICommand PauseAutoDisplayCmd => new DelegateCommand(PauseAutoDisplayCmd_Execute, PauseAutoDisplayCmd_CanExecute);
        public ICommand ResetSimulationCmd => new DelegateCommand(ResetSimulationCmd_Execute, ResetSimulationCmd_CanExecute);
        public ICommand NextLogCmd => new DelegateCommand(NextLogCmd_Execute, NextLogCmd_CanExecute);
        public ICommand PreviousLogCmd => new DelegateCommand(PreviousLogCmd_Execute, PreviousLogCmd_CanExecute);
        public ICommand ExportCmd => new DelegateCommand(ExportCmd_Execute);
        public ICommand NewSimulationCmd => new DelegateCommand(NewSimulationCmd_Execute);

        private void NewSimulationCmd_Execute(object o)
        {
            NewSimulation = true;
            Close?.Invoke();
        }

        private void ExportCmd_Execute(object o)
        {
            FolderBrowserDialog fbd = new FolderBrowserDialog();
            

            if(fbd.ShowDialog() == DialogResult.OK)
            {
                using (StreamWriter sw = new StreamWriter(File.Create(Path.Combine(fbd.SelectedPath, String.Format("export-{0}-{1}.disp",program.Name, DateTime.Now.ToString("yyyy-dd-M--HH-mm-ss"))))))
                {
                    sw.Write(String.Join("", logs.Where(x => x is LogModel).Select(x => (x as LogModel).Process + 1)));
                }
            }
        }

        public void GenerateDeadlockLog()
        {
            PrintedLogModel printLog = new PrintedLogModel();
            
            printLog.Description = "Deadlock has been detected";

            printLog.States = GetStates();

            LogOutput.Add(printLog);
        }

        public void GenerateLogOutput(LogModel logModel)
        {
            PrintedLogModel printLog = new PrintedLogModel
            {
                Process = (logModel.Process + 1).ToString()
            };

            if (logModel.Type == LogType.DISPATCHER_SKIP)
            {
                printLog.Description = "----------";
            }
            else if(logModel.Type == LogType.DEADLOCK || logModel.Type==LogType.ALL_SUSPENDED)
            {
                printLog.Description = "Deadlock has been detected";
            }
            else if(logModel is SemaphoreLogModel)
            {
                SemaphoreLogModel semLog = logModel as SemaphoreLogModel;


                switch (semLog.Type)
                {
                    case LogType.ENTER_REGION:
                        printLog.Description = String.Format("###Enter critical region {0}###", semLog.Semaphore);
                        break;
                    case LogType.EXIT_REGION:
                        printLog.Description = String.Format("###Exit critical region {0}###", semLog.Semaphore);
                        break;
                    case LogType.SUSPENDED:
                        printLog.Description = String.Format("###Blocked on {0}###", semLog.Semaphore);
                        break;
                }
            }
            else
            {
                printLog.Description = CommandTextConverter.GetText(logModel.Command);
            }

            printLog.States = GetStates();

            LogOutput.Add(printLog);
        }

        private string GetStates()
        {
            StringBuilder sb = new StringBuilder();

            if(variables.Any())
            {
                bool first = true;
                sb.Append("Variables: ");

                foreach (InitialValueModel ivm in variables)
                {
                    if (!first)
                    {
                        sb.Append("; ");
                    }

                    sb.Append(String.Format("{0}={1}", ivm.Name, ivm.Value));

                    first = false;
                }

                sb.Append(";\t\t");
            }
            if (semaphores.Any())
            {
                bool first = true;
                sb.Append("Semaphores: ");

                foreach (InitialValueModel ivm in semaphores)
                {
                    if (!first)
                    {
                        sb.Append("; ");
                    }

                    sb.Append(String.Format("{0}={1}", ivm.Name, ivm.Value));

                    first = false;
                }
            }

            return sb.ToString();
        }

        public void ExecuteCommand(BaseLogModel log)
        {
            LogModel logModel = log as LogModel;
            VariableLogModel valuedLog;
            SemaphoreLogModel semaphoreLog;

            if(log.Type == LogType.DEADLOCK || log.Type == LogType.ALL_SUSPENDED)
            {
                GenerateDeadlockLog();
            }
            else if (log.Type != LogType.EXEC_FINISHED)
            {
                GenerateLogOutput(logModel);
            }

            if (log.Type == LogType.SET_VALUE)
            {
                valuedLog = log as VariableLogModel;
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

                if (IsSuspended[semaphoreLog.Process])
                {
                    IsSuspended[semaphoreLog.Process] = false;
                    IsSuspended = IsSuspended.ToArray();

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
            else if (log.Type == LogType.SUSPENDED)
            {
                semaphoreLog = log as SemaphoreLogModel;

                IsSuspended[semaphoreLog.Process] = true;
                IsSuspended = IsSuspended.ToArray();
            }
            else if(log.Type==LogType.DEADLOCK)
            {
                return;
            }

            if(log.Type!=LogType.ALL_SUSPENDED)
            {   
                processPositions[logModel.Process]++;
                DisplayColor(logModel.Process, processPositions[logModel.Process]);
            }
        }

        private LogType? GetPreviousCommand(int process)
        {
            for (int i = CurrentLog - 1; i >= 0; i--) 
            {
                if(logs[i] is LogModel && (logs[i] as LogModel).Process == process)
                {
                    return logs[i].Type;
                }
            }

            return null;
        }

        public void UndoCommand(BaseLogModel log)
        {
            LogModel logModel = log as LogModel;
            VariableLogModel valuedLog;
            SemaphoreLogModel semaphoreLog;

            if (log.Type != LogType.EXEC_FINISHED)
            {
                LogOutput.Remove(LogOutput.Last());
            }

            if (log.Type == LogType.SET_VALUE)
            {
                valuedLog = log as VariableLogModel;
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

                if(GetPreviousCommand(semaphoreLog.Process) == LogType.SUSPENDED)
                {
                    IsSuspended[semaphoreLog.Process] = true;
                    IsSuspended = IsSuspended.ToArray();

                    return;
                }

                SemaphoreValues = SemaphoreValues.ToList();
            }
            else if(log.Type == LogType.SUSPENDED)
            {
                semaphoreLog = log as SemaphoreLogModel;

                IsSuspended[semaphoreLog.Process] = false;
                IsSuspended = IsSuspended.ToArray();
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

            if (log.Type != LogType.ALL_SUSPENDED)
            {
                processPositions[logModel.Process]--;

                DisplayColor(logModel.Process, processPositions[logModel.Process]);
            }
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

        public SimulationDisplayVM(ExecutableProgramModel program, List<BaseLogModel> logs, List<InitialValueModel> variables, List<InitialValueModel> semaphores)
        {
            Program = program;

            this.logs = logs;
            this.variables = variables;
            this.semaphores = semaphores;

            processPositions = new int[program.ProcessCount];
            IsSuspended = new bool[program.ProcessCount];

            LogOutput = new ObservableCollection<PrintedLogModel>();
            previousValues = new Dictionary<string, List<int>>();

            timer = new System.Timers.Timer
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

            for (int i = processPositions.Length - 1; i >= 0; i--) 
            {
                Program.Processes[i].Commands.First().DisplayColor = true;
                IsSuspended[i] = false;
                processPositions[i] = 0;
                DisplayColor(i, 0);
            }

            IsSuspended = IsSuspended.ToArray();
            LogOutput = new ObservableCollection<PrintedLogModel>();

            previousValues.Clear();
            foreach (InitialValueModel ivm in VariableValues)
            {
                previousValues.Add(ivm.Name, new List<int>());
            }
        }

        private void DisplayColor(int processNo, int commandNo)
        {
            Program.Processes[processNo].Commands.ForEach(x => x.DisplayColor = false);

            if (commandNo >= 0 && commandNo < Program.Processes[processNo].CommandCount)
            {
                Program.Processes[processNo].Commands[commandNo].DisplayColor = true;
            }
        }

        protected override Window MakeDialog()
        {
            return new SimulationDisplayDialog();
        }
    }
}
