using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadingSimulator.Enums
{
    public enum LogType
    {
        SUSPENDED,
        MOVE,
        DEADLOCK,
        GET_VALUE,
        SET_VALUE,
        CALC_VALUE,
        ENTER_REGION,
        EXIT_REGION,
        ALL_SUSPENDED,
        DISPATCHER_SKIP,
        AWAKE_PROCESS
    }
}
