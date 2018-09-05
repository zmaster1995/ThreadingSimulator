using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.Models
{
    class ThreadCountModel : PropertyChangedImpl
    {
        private int value;

        public string Name { get; set; }

        public int Value
        {
            get
            {
                return this.value;
            }
            set
            {
                this.value = value;
                OnPropertyChanged();
            }
        }
    }
}
