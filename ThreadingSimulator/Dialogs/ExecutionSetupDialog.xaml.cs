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
using ThreadingSimulator.ViewModels;

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

        private void MenuItem_Click(object sender, RoutedEventArgs e)
        {
            MenuItem item = sender as MenuItem;
            ContentPresenter cp = (item.Parent as ContextMenu).PlacementTarget as ContentPresenter;

            StackPanel sp = FindParent<StackPanel>(cp);

            int index = sp.Children.IndexOf(cp);

            (DataContext as ExecutionSetupVM).RemoveFromDispatcherCmd_Execute(index);
        }

        private static T FindParent<T>(DependencyObject child) where T : DependencyObject
        {
            DependencyObject parentObject = VisualTreeHelper.GetParent(child);
            
            if (parentObject == null) return null;
            
            T parent = parentObject as T;
            if (parent != null)
                return parent;
            else
                return FindParent<T>(parentObject);
        }
    }
}
