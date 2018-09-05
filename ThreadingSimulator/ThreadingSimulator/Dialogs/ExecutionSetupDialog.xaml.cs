using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace ThreadingSimulator.Dialogs
{
    /// <summary>
    /// Interaction logic for ExecutionSetupDialog.xaml
    /// </summary>
    public partial class ExecutionSetupDialog : Window
    {
        public ExecutionSetupDialog()
        {
            InitializeComponent();
        }

        private void ItemsControl_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            Scroll.ScrollToRightEnd();
        }
    }
}
