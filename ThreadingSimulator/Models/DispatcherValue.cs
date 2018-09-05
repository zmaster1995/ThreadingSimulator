using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadingSimulator.Models
{
    public delegate void ValueReceived();

    public class DispatcherValue
    {
        private int value = -1;

        public event ValueReceived ValueChanged;
        public int Value
        {
            get
            {
                return value;
            }
            set
            {
                bool raiseEvent = this.value == -1;

                this.value = value;

                if(raiseEvent)
                {
                    ValueChanged?.Invoke();
                }
            }
        }
    }
}
