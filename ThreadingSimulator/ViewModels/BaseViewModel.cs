using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.ViewModels
{
    public class BaseViewModel : PropertyChangedImpl
    {
        protected void Alert(Exception ex)
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine(ex.Message);
            sb.Append("Inner exception: ");
            sb.AppendLine(ex.InnerException?.ToString() ?? "NULL");
            sb.AppendLine();

            sb.Append(ex.StackTrace);

            MessageBox.Show(sb.ToString());
        }

        protected void Alert(string text)
        {
            MessageBox.Show(text);
        }
    }
}
