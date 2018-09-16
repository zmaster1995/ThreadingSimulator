using GongSolutions.Wpf.DragDrop;
using Newtonsoft.Json;
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
using ThreadingSimulator.Converters;
using ThreadingSimulator.Dialogs;
using ThreadingSimulator.Engine;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Models;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.ViewModels
{
    class MainContentVM : BaseViewModel, IDropTarget
    {
        private const string SAVE_PATH = "./data.json";

        private readonly JsonSerializerSettings jsonSettings;
        private ObservableCollection<ProgramModel> programs;
        private ProgramModel program;
        private bool editMode;
        private bool addMode;
        private bool busy;
        private ProgramModel backup;

        public string ModeIndicator
        {
            get
            {
                return EditMode ? "Edit" : "Normal";
            }
        }

        public bool CanRun
        {
            get
            {
                return Program != null && !EditMode;
            }
        }

        public bool CanPreview
        {
            get
            {
                return Program != null;
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

        public bool ProgramSelected
        {
            get
            {
                return Program != null;
            }
        }
        public bool EditMode
        {
            get
            {
                return editMode;
            }
            set
            {
                editMode = value;
                OnPropertyChanged();
                OnPropertyChanged(nameof(CanRun));
                OnPropertyChanged(nameof(ModeIndicator));
            }
        }
        public ProgramModel Program
        {
            get
            {
                return program;
            }
            set
            {
                program = value;

                if(program!=null)
                {
                    program.SubscribeToChanges();
                }

                OnPropertyChanged();
                OnPropertyChanged(nameof(CanRun));
                OnPropertyChanged(nameof(CanPreview));
                OnPropertyChanged(nameof(ProgramSelected));
            }
        }
        public ObservableCollection<ProgramModel> Programs
        {
            get
            {
                return programs;
            }
            set
            {
                programs = value;
                OnPropertyChanged();
            }
        }

        public ICommand AddProcessCmd => new DelegateCommand(AddProcessCmd_Execute, AddProcessCmd_CanExecute);
        public ICommand DeleteProcessCmd => new DelegateCommand(DeleteProcessCmd_Execute);
        public ICommand DeleteBlockCmd => new DelegateCommand(DeleteBlockCmd_Execute);
        public ICommand AddCmd => new DelegateCommand(AddCmd_Execute, AddCmd_CanExecute);
        public ICommand EditCmd => new DelegateCommand(EditCmd_Execute, EditCmd_CanExecute);
        public ICommand SaveCmd => new DelegateCommand(SaveCmd_Execute, SaveCmd_CanExecute);
        public ICommand CancelCmd => new DelegateCommand(CancelCmd_Execute);
        public ICommand DeleteCmd => new DelegateCommand(DeleteCmd_Execute, DeleteCmd_CanExecute);
        public ICommand RunCmd => new DelegateCommand(RunCmd_Execute, RunCmd_CanExecute);
        public ICommand PreviewCmd => new DelegateCommand(PreviewCmd_Execute);

        private bool AddProcessCmd_CanExecute(object o)
        {
            return program != null && program.ProcessCount < 9;
        }

        private async void PreviewCmd_Execute(object o)
        {
            Busy = true;

            PreviewVM preview = new PreviewVM(Program);
            await preview.Init();
            preview.Show();

            Busy = false;
        }
        private void DeleteBlockCmd_Execute(object o)
        {
            object[] parameters = o as object[];

            BlockModel block = parameters[0] as BlockModel;
            ObservableCollection<BlockModel> blocks=null;

            if (parameters[1] is ProcessBlocksModel pbm)
            {
                blocks = pbm.Blocks;
            }
            else if(parameters[1] is LoopBlockModel lbm)
            {
                blocks = lbm.Children;
            }


            blocks.Remove(block);
        }

        private async void RunCmd_Execute(object o)
        {
            Busy = true;

            ExecutionSetupVM setup = new ExecutionSetupVM(Program);
            await setup.Init();
            setup.Show();

            Busy = false;
        }

        private bool RunCmd_CanExecute(object o)
        {
            return !EditMode;
        }

        private void AddProcessCmd_Execute(object o)
        {
            Program.Add(new ProcessBlocksModel());
        }

        private void DeleteProcessCmd_Execute(object o)
        {
            Program.Processes.Remove(o as ProcessBlocksModel);
        }

        private void AddCmd_Execute(object o)
        {
            Program = new ProgramModel();

            addMode = true;
            EditMode = true;
        }

        private void EditCmd_Execute(object o)
        {
            EditMode = true;

            backup = Program.Clone();
        }

        private void SaveCmd_Execute(object o)
        {
            if(addMode)
            {
                Programs.Add(Program);
            }

            try
            {
                Save();
            }
            catch (Exception ex)
            {
                Alert(ex);
            }

            EditMode = false;
            addMode = false;        
        }

        private void CancelCmd_Execute(object o)
        {
            if(addMode)
            {
                Program = null;
            }
            else
            {
                Programs[Programs.IndexOf(Program)] = backup;
                Program = backup;
            }

            EditMode = false;
            addMode = false;
        }

        private void DeleteCmd_Execute(object o)
        {
            try
            {
                Programs.Remove(o as ProgramModel);
                Save();
            }
            catch(Exception ex)
            {
                Alert(ex);
            }
        }

        private bool SaveCmd_CanExecute(object o)
        {
            return  Program != null && Program.IsValid;
        }

        private bool DeleteCmd_CanExecute(object o)
        {
            return !EditMode;
        }

        private bool AddCmd_CanExecute(object o)
        {
            return !EditMode;
        }

        private bool EditCmd_CanExecute(object o)
        {
            return !EditMode && Program != null;
        }

        public MainContentVM()
        {
            jsonSettings = new JsonSerializerSettings()
            {
                TypeNameHandling = TypeNameHandling.Auto
            };
        }

        public void Init()
        {
            if(File.Exists(SAVE_PATH))
            {
                try
                {
                    Programs = JsonConvert.DeserializeObject<ObservableCollection<ProgramModel>>(File.ReadAllText(SAVE_PATH), jsonSettings);
                }
                catch(Exception ex)
                {
                    Alert(ex);
                }
            }
            else
            {
                Programs = new ObservableCollection<ProgramModel>();
            }
        }

        private void Save()
        {
            try
            {
                if(!File.Exists(SAVE_PATH))
                {
                    File.Create(SAVE_PATH).Close();
                }

                File.WriteAllText(SAVE_PATH, JsonConvert.SerializeObject(Programs, Formatting.Indented, jsonSettings));
            }
            catch (Exception ex)
            {
                Alert(ex);
            }
        }

        public void DragOver(IDropInfo dropInfo)
        {
            if(EditMode && (dropInfo.Data is BlockType || dropInfo.Data is BlockModel))
            {
                ListBox listBox = dropInfo.VisualTarget as ListBox;
                BlockModel block = dropInfo.Data as BlockModel;

                LoopBlockModel loopBlock = listBox.DataContext as LoopBlockModel;
                ProcessBlocksModel processBlocks = listBox.DataContext as ProcessBlocksModel;

                if (block != null 
                    && ((loopBlock!=null && loopBlock.Children!=null && loopBlock.Children.Contains(block))
                    || (processBlocks != null && processBlocks.Blocks!=null && processBlocks.Blocks.Contains(block))))
                {
                    dropInfo.Effects = DragDropEffects.Move;
                    dropInfo.DropTargetAdorner = DropTargetAdorners.Insert;
                }
                else
                {
                    dropInfo.Effects = DragDropEffects.Copy;
                    dropInfo.DropTargetAdorner = DropTargetAdorners.Insert;
                }
            }
        }

        public void Drop(IDropInfo dropInfo)
        {
            if(EditMode)
            {
                ListBox listBox = dropInfo.VisualTarget as ListBox;
                BlockModel block = null;
                BlockModel original = dropInfo.Data as BlockModel;

                if (dropInfo.Data is BlockType sourceItem)
                {
                    switch (sourceItem)
                    {
                        case BlockType.LOOP:
                            block = new LoopBlockModel();
                            break;
                        case BlockType.SEMAPHOR:
                            block = new SemaphorBlockModel();
                            break;
                        case BlockType.SHARED_VARIABLE:
                            block = new VariableBlockModel();
                            break;
                        case BlockType.OTHER:
                            block = new BlockModel();
                            break;
                    }
                }
                else if (dropInfo.Data is BlockModel)
                {
                    block = original.Clone();
                }

                if(block != null)
                {
                    if (listBox.DataContext is ProcessBlocksModel processBlocks)
                    {
                        processBlocks.Add(block, dropInfo.InsertIndex);

                        if(original != null && processBlocks.Blocks.Contains(original))
                        {
                            processBlocks.Blocks.Remove(original);
                        }
                    }
                    else if (listBox.DataContext is LoopBlockModel loopBlock)
                    {
                        loopBlock.Add(block, dropInfo.InsertIndex);

                        if (loopBlock.Children.Contains(original))
                        {
                            loopBlock.Children.Remove(original);
                        }
                    }
                }
            }
        }
    }
}
