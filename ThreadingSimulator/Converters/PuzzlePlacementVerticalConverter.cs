using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;

namespace ThreadingSimulator.Converters
{
    class PuzzlePlacementVerticalConverter : IMultiValueConverter
    {
        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            double circleOffset = 100;
            double lineOffset = 249;
            
            double innerHeight = double.Parse(values[0].ToString());
            double offset = values.Length == 2 ? circleOffset : lineOffset;

            double ret = -(innerHeight*1.65 + offset);
            
            return ret;

        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            return null;
        }
    }
}
