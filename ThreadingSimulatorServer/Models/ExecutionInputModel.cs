using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThreadingSimulator.Models;

namespace ThreadingSimulatorServer.Models
{
    public class ExecutionInputModel
    {
        public ExecutableProgramModel Program { get; set; }
        public ExecutionSettingsModel Settings { get; set; }
    }
}
