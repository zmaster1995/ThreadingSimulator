using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThreadingSimulator.Enums;

namespace ThreadingSimulator.Models
{
    public class LogModel
    {
        public int Processor { get; set; }
        public LogType Type { get; set; }
    }
}
