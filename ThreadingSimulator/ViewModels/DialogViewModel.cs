using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace ThreadingSimulator.ViewModels
{
    public abstract class DialogViewModel : BaseViewModel
    {
        private Window window;
        private bool initialized = false;

        protected abstract void Initialize();
        protected abstract Window MakeDialog();

        public bool Show()
        {
            if(initialized)
            {
                bool? res = window.ShowDialog();

                return res != null && res.Value;
            }
            else
            {
                throw new Exception(String.Format("Dialog {0} is not initialized!", GetType()));
            }
        } 

        public Task Init()
        {
            window = MakeDialog();

            window.ResizeMode = ResizeMode.CanMinimize;
            window.Owner = Application.Current.MainWindow;
            window.DataContext = this;
            window.WindowStartupLocation = WindowStartupLocation.CenterOwner;
            window.ShowInTaskbar = false;

            initialized = true;
            return Task.Factory.StartNew(() => Initialize());
        }
    }
}
