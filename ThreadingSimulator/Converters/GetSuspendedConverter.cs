using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using System.Windows.Data;

namespace ThreadingSimulator.Converters
{
    class GetSuspendedConverter : IMultiValueConverter
    {
        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            bool[] suspended = (bool[])values[0];

            ItemsControl itemsControl = values[1] as ItemsControl;
            ItemsControl item = values[2] as ItemsControl;

            int index = itemsControl.Items.IndexOf(item.DataContext);

            return suspended[index];
        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            return null;
        }
    }
}
