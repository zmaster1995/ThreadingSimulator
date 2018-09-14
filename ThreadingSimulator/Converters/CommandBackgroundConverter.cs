using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Data;
using System.Windows.Media;
using ThreadingSimulator.Enums;

namespace ThreadingSimulator.Converters
{
    class CommandBackgroundConverter : IMultiValueConverter
    {
        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            CommandType type = (CommandType)values[0];
            ResourceDictionary resources = values[1] as ResourceDictionary;
            bool active = (bool)values[2];
            bool simulation = values[3] != DependencyProperty.UnsetValue ? (bool)values[3] : false;

            if (!active && simulation)
            {
                return new SolidColorBrush(Colors.Black)
                {
                    Opacity = 0.2
                };
            }

            switch (type)
            {
                case CommandType.OTHER:
                    return resources["BlockColor"];
                case CommandType.SEMAPHOR_ENTER:
                case CommandType.SEMAPHOR_EXIT:
                    return resources["SemaphorBlockColor"];
                default:
                    return resources["VariableBlockColor"];
            }
        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            return null;
        }
    }
}
