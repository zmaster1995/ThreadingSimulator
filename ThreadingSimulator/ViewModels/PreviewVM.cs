using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using ThreadingSimulator.Converters;
using ThreadingSimulator.Dialogs;
using ThreadingSimulator.Models;

namespace ThreadingSimulator.ViewModels
{
    class PreviewVM : DialogViewModel
    {
        private ProgramModel program;
        private ExecutableProgramModel executableProgram;

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

        public PreviewVM(ProgramModel program)
        {
            this.program = program;
        }

        protected override void Initialize()
        {
            ExecutableProgram = BlockToCommandConverter.Convert(program);
        }

        protected override Window MakeDialog()
        {
            return new PreviewDialog();
        }
    }
}
