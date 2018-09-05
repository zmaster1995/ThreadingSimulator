using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;

namespace ThreadingSimulator.Converters
{
    class BorderStyleConverter : IMultiValueConverter
    {
        private readonly int radius = 10;

        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            try
            {
                if (values != null)
                {
                    ItemsControl itemsControl = values[0] as ItemsControl;
                    Border item = values[1] as Border;
                    int count = (int)values[2];

                    if (itemsControl.Items[0] == item.DataContext
                        && itemsControl.Items[count - 1] == item.DataContext)
                    {
                        return new CornerRadius(radius);
                    }
                    else if (itemsControl.Items[0] == item.DataContext)
                    {
                        return new CornerRadius(radius, radius, radius, 0);
                    }
                    else if (itemsControl.Items[count - 1] == item.DataContext)
                    {
                        return new CornerRadius(0, radius, radius, radius);
                    }
                    else
                    {
                        return new CornerRadius(0, radius, radius, 0);
                    }
                }
            }
            catch (Exception) { }

            return null;
        }
        
        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            return null;
        }
    }
}
