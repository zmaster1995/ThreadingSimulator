using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.Models
{
    public class CommandModel : PropertyChangedImpl
    {
        public CommandType Type { get; set; }
        public string Variable { get; set; }
        public int? Value { get; set; }

        #region Display
        private bool displayColor;

        public bool DisplayColor
        {
            get
            {
                return displayColor;
            }
            set
            {
                displayColor = value;
                OnPropertyChanged();
            }
        }
        #endregion

        public CommandModel Clone()
        {
            return MemberwiseClone() as CommandModel;
        }
    }
}
