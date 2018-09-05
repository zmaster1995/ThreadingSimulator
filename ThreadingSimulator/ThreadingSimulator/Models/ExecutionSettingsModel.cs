using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.Models
{
    public class ExecutionSettingsModel : PropertyChangedImpl
    {
        private bool dispatcherEnabled = false;
        public ObservableCollection<DispatcherValue> dispatcher = new ObservableCollection<DispatcherValue>();

        public List<InitialValueModel> Variables { get; set; } = new List<InitialValueModel>();
        public List<InitialValueModel> Semaphores { get; set; } = new List<InitialValueModel>();

        public bool DispatcherEnabled
        {
            get
            {
                return dispatcherEnabled;
            }
            set
            {
                dispatcherEnabled = value;
                OnPropertyChanged();
                OnPropertyChanged(nameof(Dispatcher));
            }
        }

        public ObservableCollection<DispatcherValue> Dispatcher
        {
            get
            {
                return DispatcherEnabled ? dispatcher : new ObservableCollection<DispatcherValue>();
            }
            set
            {
                dispatcher = value;
                OnPropertyChanged();
            }
        }

        public ExecutionSettingsModel()
        {
            AddNew();
        }

        private void AddNew()
        {
            dispatcher.Add(new DispatcherValue());
            dispatcher.Last().ValueChanged += AddNew;
        }
    }
}
