using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadingSimulator.Models
{
    class VariableLogModel : LogModel
    {
        public string Variable { get; set; }
        public int Value { get; set; }
    }
}
