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
        public string Name { get; set; }
        public List<ProcessCommandsModel> Processes { get; set; }
        
        public int ProcessCount
        {
            get
            {
                return Processes != null ? Processes.Count : -1;
            }
        }
        
        public void Add(ProcessCommandsModel commands)
        {
            if(Processes==null)
            {
                Processes = new List<ProcessCommandsModel>();
            }

            Processes.Add(commands);
        }
    }
}
