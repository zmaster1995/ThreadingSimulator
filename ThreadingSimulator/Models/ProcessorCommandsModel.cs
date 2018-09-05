using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadingSimulator.Models
{
    public class ProcessorCommandsModel
    {
        public string Name { get; set; }
        public List<CommandModel> Commands { get; set; }
        
        public int CommandCount
        {
            get
            {
                return Commands != null ? Commands.Count : -1;
            }
        }

        public void Add(CommandModel command)
        {
            if (Commands == null)
            {
                Commands = new List<CommandModel>();
            }

            Commands.Add(command);
        }

        public void AddRange(List<CommandModel> commands)
        {
            foreach(CommandModel command in commands)
            {
                Add(command);
            }
        }
    }
}
