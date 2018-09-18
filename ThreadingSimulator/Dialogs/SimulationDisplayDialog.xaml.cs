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
    /// Interaction logic for SimulationDisplayDialog.xaml
    /// </summary>
    public partial class SimulationDisplayDialog : Window
    {
        private bool internalTransition;

        public SimulationDisplayDialog()
        {
            InitializeComponent();

            Closing += SimulationDisplayDialog_Closing;
            DataContextChanged += SimulationDisplayDialog_DataContextChanged;
        }

        private void SimulationDisplayDialog_DataContextChanged(object sender, DependencyPropertyChangedEventArgs e)
        {
            (DataContext as SimulationDisplayVM).Close += Close;
            (DataContext as SimulationDisplayVM).Focus += Focus;
        }

        private void Focus(int processNo)
        {
            App.Current.Dispatcher.Invoke((ItemsControl.ItemContainerGenerator.ContainerFromIndex(processNo) as ContentPresenter).BringIntoView);
        }

        private void SimulationDisplayDialog_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            DialogResult = (DataContext as SimulationDisplayVM).NewSimulation;
        }

        private void LogConsole_ScrollChanged(object sender, ScrollChangedEventArgs e)
        {
            internalTransition = true;

            LogConsole.SelectedIndex = LogConsole.Items.Count - 1;
            LogConsole.ScrollIntoView(LogConsole.SelectedItem);
            LogConsole.SelectedIndex = -1;

            internalTransition = false;
        }

        private void LogConsole_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if(!internalTransition)
            {
                LogConsole.SelectedIndex = -1;
            }
        }
    }
}
