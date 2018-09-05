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
        EXEC_FINISHED,
        ENTER_REGION,
        EXIT_REGION
    }
}
