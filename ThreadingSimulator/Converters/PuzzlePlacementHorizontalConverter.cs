using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;

namespace ThreadingSimulator.Converters
{
    class PuzzlePlacementHorizontalConverter : IMultiValueConverter
    {
        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            double circleOffset = -34;
            double lineOffset = 47;
            
            double width = double.Parse(values[0].ToString());
            double offset = values.Length == 2 ? circleOffset : lineOffset;
            
            double ret = width * 0.8 + offset;
            return ret;

        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            return null;
        }
    }
}
