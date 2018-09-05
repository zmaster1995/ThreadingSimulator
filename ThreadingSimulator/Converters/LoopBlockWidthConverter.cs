using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Media;

namespace ThreadingSimulator.Converters
{
    class LoopBlockWidthConverter : IMultiValueConverter
    {
        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            double width = 0;
            ListBox listBox = values[0] as ListBox;
            if (listBox != null)
            {
                List<Border> children = GetChildOfType<Border>(listBox).Where(x=>x.Tag!=null && (bool)x.Tag).ToList();

                if(children.Any())
                {
                    width = children.Max(x => x.ActualWidth) + 35;
                }
            }

            return Math.Max(width, 180);
        }

        private List<T> GetChildOfType<T>(DependencyObject depObj) where T : DependencyObject
        {
            List<T> retList = new List<T>();

            for (int i = 0; i < VisualTreeHelper.GetChildrenCount(depObj); i++)
            {
                DependencyObject child = VisualTreeHelper.GetChild(depObj, i);

                if(child is T)
                {
                    retList.Add(child as T);
                }

                retList.AddRange(GetChildOfType<T>(child));
            }

            return retList;
        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            return null;
        }
    }
}
