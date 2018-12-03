using Newtonsoft.Json;
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
        private ObservableCollection<int> dispatcher = new ObservableCollection<int>();

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

        [JsonProperty("dispatcher")]
        public ObservableCollection<int> Dispatcher
        {
            get
            {
                return DispatcherEnabled ? dispatcher : new ObservableCollection<int>();
            }
            set
            {
                dispatcher = value;
                OnPropertyChanged();
            }
        }
    }
}
