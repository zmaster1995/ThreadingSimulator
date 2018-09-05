using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadingSimulator.Enums
{
    public enum CommandType
    {   
        SEMAPHOR_ENTER,
        SEMAPHOR_EXIT,
        SHARED_VARIABLE_GET,
        SHARED_VARIABLE_CALC_SUM,
        SHARED_VARIABLE_CALC_DIFF,
        SHARED_VARIABLE_SET,
        OTHER
    }
}
