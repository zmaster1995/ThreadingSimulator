using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThreadingSimulator.Enums;

namespace ThreadingSimulator.Models
{
    public class ValuedLogModel : ProcessorLogModel
    {
        public int Value { get; set; }
        public string Variable { get; set; }
    }
}
