using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThreadingSimulator.Enums;

namespace ThreadingSimulator.Models
{
    public class LogModel : BaseLogModel
    {
        public int Process { get; set; }
        public CommandModel Command { get; set; }
        
        public bool ShouldDisplay
        {
            get
            {
                return Command != null;
            }
        }
    }
}
