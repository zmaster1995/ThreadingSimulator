using GongSolutions.Wpf.DragDrop;
using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Xml.Serialization;
using ThreadingSimulator.Converters;
using ThreadingSimulator.Dialogs;
using ThreadingSimulator.Engine;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Models;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.ViewModels
{
    class ExecutionSetupVM : DialogViewModel, IDropTarget
    {
        private ProgramModel program;
        private ExecutableProgramModel executableProgram;
        private ExecutionSettingsModel settings;
        private List<ProcessCountModel> processes;
        private int[] availableProcesses;
        private bool busy = false;
        private string importDispatcherText;

        public int ProcessCount
        {
            get
            {
                return processes.Sum(x => x.Value);
            }
        }
        public string ImportDispatcherText
        {
            get
            {
                return importDispatcherText;
            }
            set
            {
                importDispatcherText = value;
                OnPropertyChanged();
            }
        }

        public int[] AvailableProcesses
        {
            get
            {
                return availableProcesses;
            }
            set
            {
                availableProcesses = value;
                OnPropertyChanged();
            }
        }
        public List<ProcessCountModel> Processes
        {
            get
            {
                return processes;
            }
            set
            {
                processes = value;
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
        public ICommand ImportCmd => new DelegateCommand(ImportCmd_Execute);
        public ICommand ImportDispatcher => new DelegateCommand(ImportDispatcherCmd_Execute);
        public ICommand ExportDispatcher => new DelegateCommand(ExportDispatcherCmd_Execute, ExportDispatcherCmd_CanExecute);
        
        public ExecutionSetupVM(ProgramModel program)
        {
            this.program = program;
        }

        public void RemoveFromDispatcherCmd_Execute(int index)
        {
            Settings.Dispatcher.RemoveAt(index);
        }

        private bool ExportDispatcherCmd_CanExecute(object o)
        {
            return settings?.Dispatcher != null && settings.Dispatcher.Any();
        }

        private void ImportCmd_Execute(object o)
        {
            OpenFileDialog ofd = new OpenFileDialog();

            ofd.Filter = "Dispatcher controller (.DISP)|*.DISP";

            bool? res = ofd.ShowDialog();

            if (res != null && res.Value)
            {
                using (StreamReader sr = new StreamReader(File.OpenRead(ofd.FileName)))
                {
                    string dispatcherValueText = sr.ReadToEnd();
                    Import(dispatcherValueText);
                }
            }
        }

        private void Import(string text)
        {
            try
            {
                int[] dispatcherValues = text.Length == 0 ? new int[0] : text.Trim().ToArray().Select(x => Int32.Parse(x.ToString())).ToArray();

                if (ValidateValues(dispatcherValues))
                {
                    settings.Dispatcher = new ObservableCollection<int>(dispatcherValues);
                }
                else
                {
                    Alert("Some values are less or equal to 0 or greather then number of processes");
                }
            }
            catch(Exception)
            {
                Alert("Parsing failed. Text should only contain numbers");
            }
        }

        private void ImportDispatcherCmd_Execute(object o)
        {
            Import(ImportDispatcherText);
        }

        private void ExportDispatcherCmd_Execute(object o)
        {
            ImportDispatcherText = String.Join("", settings.Dispatcher);
        }

        private bool ValidateValues(int[] values)
        {
            foreach(int val in values)
            {
                if(val> ProcessCount || val<1)
                {
                    return false;
                }
            }

            return true;
        }

        private async void StartSimulationCmd_Execute(object o)
        {
            try
            {
                Busy = true;
                SimulationDisplayVM simulationDisplay = null;

                do
                {
                    ExecutableProgramModel program = DuplicateProcesses();

                    ExecutionEngine.Instance.Init(program, settings);
                    await ExecutionEngine.Instance.Execute();

                    List<BaseLogModel> logs = ExecutionEngine.Instance.GetLogs();

                    simulationDisplay = new SimulationDisplayVM(program, logs, Settings.Variables, Settings.Semaphores);
                    await simulationDisplay.Init();
                }
                while (simulationDisplay.Show());
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

        private ExecutableProgramModel DuplicateProcesses()
        {
            ExecutableProgramModel program = new ExecutableProgramModel();
            program.Name = ExecutableProgram.Name;

            foreach(ProcessCountModel tcm in Processes)
            {
                ProcessCommandsModel pcm = ExecutableProgram.Processes.Where(x => x.Name == tcm.Name).First();

                for(int i=0;i<tcm.Value;i++)
                {
                    ProcessCommandsModel commands = Duplicate(pcm);

                    if (tcm.Value>1)
                    {
                        commands.Name += " - " + i;
                    }

                    program.Add(commands);
                }
            }

            return program;
        }

        private ProcessCommandsModel Duplicate(ProcessCommandsModel commands)
        {
            ProcessCommandsModel pcm = new ProcessCommandsModel()
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
            GenerateAvailableProcesses();
        }

        private void GenerateAvailableProcesses()
        {
            int max = Processes.Sum(x => x.Value);

            AvailableProcesses = Enumerable.Range(1, max).ToArray();
            
            for(int i=0;i<Settings.Dispatcher.Count;i++)
            {
                if(Settings.Dispatcher[i]>max && Settings.Dispatcher[i] != -1)
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
            List<ProcessCountModel> processes = new List<ProcessCountModel>();
            ExecutionSettingsModel settings = new ExecutionSettingsModel();

            foreach (ProcessCommandsModel process in ExecutableProgram.Processes)
            {
                processes.Add(new ProcessCountModel()
                {
                    Name = process.Name,
                    Value = 1
                });
                processes.Last().PropertyChanged += ExecutionSetupVM_PropertyChanged;

                foreach (CommandModel command in process.Commands)
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

            Processes = processes;
            Settings = settings;
        }

        private void ExecutionSetupVM_PropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
        {
            if(e.PropertyName == "Value")
            {
                OnPropertyChanged(nameof(ProcessCount));
                GenerateAvailableProcesses();
            }
        }

        public void DragOver(IDropInfo dropInfo)
        {
            ContentPresenter cp = dropInfo.DragInfo.VisualSourceItem as ContentPresenter;

            if(cp!=null)
            {
                if (cp.Tag is bool && (bool)cp.Tag)
                {
                    dropInfo.Effects = DragDropEffects.Copy;
                }
                else
                {
                    dropInfo.Effects = DragDropEffects.Move;
                }

                dropInfo.DropTargetAdorner = DropTargetAdorners.Insert;
            }
        }

        public void Drop(IDropInfo dropInfo)
        {
            ContentPresenter cp = dropInfo.DragInfo.VisualSourceItem as ContentPresenter;
            
            if(cp!=null)
            {
                int val = (int)dropInfo.Data;

                if (cp.Tag is bool && (bool)cp.Tag)
                {
                    settings.Dispatcher.Insert(dropInfo.InsertIndex, val);
                }
                else
                {
                    settings.Dispatcher.Insert(dropInfo.InsertIndex, val);

                    StackPanel sp = FindParent<StackPanel>(cp);

                    int index = sp.Children.IndexOf(cp);

                    settings.Dispatcher.RemoveAt(index);
                }
            }
        }

        private static T FindParent<T>(DependencyObject child) where T : DependencyObject
        {
            DependencyObject parentObject = VisualTreeHelper.GetParent(child);

            if (parentObject == null) return null;

            T parent = parentObject as T;
            if (parent != null)
                return parent;
            else
                return FindParent<T>(parentObject);
        }
    }
}
