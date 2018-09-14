using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Models;

namespace ThreadingSimulator.Converters
{
    class CommandDisplayTextConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            CommandModel command = value as CommandModel;

            switch (command.Type)
            {
                case CommandType.SEMAPHOR_ENTER:
                    return String.Format("Enter critical region - {0}", command.Variable);
                case CommandType.SEMAPHOR_EXIT:
                    return String.Format("Exit critical region - {0}", command.Variable);
                case CommandType.SHARED_VARIABLE_GET:
                    return String.Format("Get value of variable {0}", command.Variable);
                case CommandType.SHARED_VARIABLE_SET:
                    return String.Format("Set value of variable {0}", command.Variable);
                case CommandType.SHARED_VARIABLE_CALC_SUM:
                    return String.Format("Increase value of {0} by {1}", command.Variable, command.Value);
                case CommandType.SHARED_VARIABLE_CALC_DIFF:
                    return String.Format("Decrease value of {0} by {1}", command.Variable, command.Value);
                default:
                    return "Block of commands";
            }
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return null;
        }
    }
}
