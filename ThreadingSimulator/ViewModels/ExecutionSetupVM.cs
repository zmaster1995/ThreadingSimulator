using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using System.Xml.Serialization;
using ThreadingSimulator.Converters;
using ThreadingSimulator.Dialogs;
using ThreadingSimulator.Engine;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Models;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.ViewModels
{
    class ExecutionSetupVM : DialogViewModel
    {
        private ProgramModel program;
        private ExecutableProgramModel executableProgram;
        private ExecutionSettingsModel settings;
        private List<ThreadCountModel> threads;
        private int[] availableThreads;
        private bool busy = false;

        public int[] AvailableThreads
        {
            get
            {
                return availableThreads;
            }
            set
            {
                availableThreads = value;
                OnPropertyChanged();
            }
        }
        public List<ThreadCountModel> Threads
        {
            get
            {
                return threads;
            }
            set
            {
                threads = value;
                OnPropertyChanged();
            }
        }
        public ExecutableProgramModel ExecutableProgram
        {
            get
            {
                return executableProgram;
            }
            set
            {
                executableProgram = value;
                OnPropertyChanged();
            }
        }

        public ExecutionSettingsModel Settings
        {
            get
            {
                return settings;
            }
            set
            {
                settings = value;
                OnPropertyChanged();
            }
        }

        public bool Busy
        {
            get
            {
                return busy;
            }
            set
            {
                busy = value;
                OnPropertyChanged();
            }
        }

        public ICommand StartSimulationCmd => new DelegateCommand(StartSimulationCmd_Execute);

        public ExecutionSetupVM(ProgramModel program)
        {
            this.program = program;
        }

        private async void StartSimulationCmd_Execute(object o)
        {
            try
            {
                Busy = true;

                ExecutableProgramModel program = DuplicateThreads();

                ExecutionEngine.Instance.Init(program, settings);
                await ExecutionEngine.Instance.Execute();

                ExecutionEngine.Instance.PrintLogs();

                List<LogModel> logs = ExecutionEngine.Instance.GetLogs();

                SimulationDisplayVM simulationDisplay = new SimulationDisplayVM(program, logs, Settings.Variables, Settings.Semaphores);
                await simulationDisplay.Init();
                simulationDisplay.Show();
            }
            catch(Exception ex)
            {
                Alert(ex);
            }
            finally
            {
                Busy = false;
            }
        }

        private ExecutableProgramModel DuplicateThreads()
        {
            ExecutableProgramModel program = new ExecutableProgramModel();

            foreach(ThreadCountModel tcm in Threads)
            {
                ProcessorCommandsModel pcm = ExecutableProgram.Processors.Where(x => x.Name == tcm.Name).First();

                for(int i=0;i<tcm.Value;i++)
                {
                    ProcessorCommandsModel commands = Duplicate(pcm);

                    if (tcm.Value>1)
                    {
                        commands.Name += " - " + i;
                    }

                    program.Add(commands);
                }
            }

            return program;
        }

        private ProcessorCommandsModel Duplicate(ProcessorCommandsModel commands)
        {
            ProcessorCommandsModel pcm = new ProcessorCommandsModel()
            {
                Name = commands.Name
            };

            foreach(CommandModel command in commands.Commands)
            {
                pcm.Add(command.Clone());
            }

            return pcm;
        }
            
        protected override void Initialize()
        {
            ExecutableProgram = BlockToCommandConverter.Convert(program);

            GenerateInitialSettings();
            GenerateAvailableThreads();
        }

        private void GenerateAvailableThreads()
        {
            int max = Threads.Sum(x => x.Value);

            AvailableThreads = Enumerable.Range(1, max).ToArray();
            
            for(int i=0;i<Settings.Dispatcher.Count;i++)
            {
                if(Settings.Dispatcher[i].Value>max && Settings.Dispatcher[i].Value != -1)
                {
                    Settings.Dispatcher.RemoveAt(i);
                    i--;
                }
            }
        }

        protected override Window MakeDialog()
        {
            return new ExecutionSetupDialog();
        }

        private void GenerateInitialSettings()
        {
            List<ThreadCountModel> threads = new List<ThreadCountModel>();
            ExecutionSettingsModel settings = new ExecutionSettingsModel();

            foreach (ProcessorCommandsModel processor in ExecutableProgram.Processors)
            {
                threads.Add(new ThreadCountModel()
                {
                    Name = processor.Name,
                    Value = 1
                });
                threads.Last().PropertyChanged += ExecutionSetupVM_PropertyChanged;

                foreach (CommandModel command in processor.Commands)
                {
                    if(command.Type == CommandType.SEMAPHOR_ENTER || 
                       command.Type == CommandType.SEMAPHOR_EXIT)
                    {
                        if(!settings.Semaphores.Where(x=>x.Name == command.Variable).Any())
                        {
                            settings.Semaphores.Add(new InitialValueModel()
                            {
                                Name = command.Variable,
                                Value = 1
                            });
                        }
                    }
                    else if(command.Type == CommandType.SHARED_VARIABLE_SET ||
                           command.Type == CommandType.SHARED_VARIABLE_GET ||
                           command.Type == CommandType.SHARED_VARIABLE_CALC_SUM ||
                           command.Type == CommandType.SHARED_VARIABLE_CALC_DIFF)
                    {
                        if (!settings.Variables.Where(x => x.Name == command.Variable).Any())
                        {
                            settings.Variables.Add(new InitialValueModel()
                            {
                                Name = command.Variable,
                                Value = 0
                            });
                        }
                    }
                }
            }

            Threads = threads;
            Settings = settings;
        }

        private void ExecutionSetupVM_PropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
        {
            if(e.PropertyName == "Value")
            {
                GenerateAvailableThreads();
            }
        }
    }
}
