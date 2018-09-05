using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadingSimulator.Models
{
    public class ExecutableProgramModel
    {
        public List<ProcessorCommandsModel> Processors { get; set; }
        
        public int ProcessorCount
        {
            get
            {
                return Processors != null ? Processors.Count : -1;
            }
        }
        
        public void Add(ProcessorCommandsModel commands)
        {
            if(Processors==null)
            {
                Processors = new List<ProcessorCommandsModel>();
            }

            Processors.Add(commands);
        }
    }
}
