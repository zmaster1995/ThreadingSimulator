using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Timers;
using System.Windows;
using System.Windows.Input;

namespace ThreadingSimulator.Other
{
    class DelegateCommand : ICommand
    {
        public delegate void ICommandOnExecute(object parameter);
        public delegate bool ICommandOnCanExecute(object parameter);

        private ICommandOnExecute execute;
        private ICommandOnCanExecute canExecute;

        public DelegateCommand(ICommandOnExecute onExecuteMethod, ICommandOnCanExecute onCanExecuteMethod)
        {
            if(onExecuteMethod == null)
            {
                throw new ArgumentNullException("Parameter onExecuteMethod must be provided!");
            }            

            execute = onExecuteMethod;
            canExecute = onCanExecuteMethod;
        }

        public DelegateCommand(ICommandOnExecute onExecuteMethod) : this(onExecuteMethod, null)
        {
        }

        #region ICommand Members

        public event EventHandler CanExecuteChanged
        {
            add { CommandManager.RequerySuggested += value; }
            remove { CommandManager.RequerySuggested -= value; }
        }

        public bool CanExecute(object parameter)
        {
            return canExecute?.Invoke(parameter)??true;
        }

        public void Execute(object parameter)
        {
            execute.Invoke(parameter);
        }

        #endregion
    }
}
