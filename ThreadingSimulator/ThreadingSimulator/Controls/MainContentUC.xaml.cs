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
using System.Windows.Navigation;
using System.Windows.Shapes;
using ThreadingSimulator.ViewModels;

namespace ThreadingSimulator.Controls
{
    /// <summary>
    /// Interaction logic for MainContentUC.xaml
    /// </summary>
    public partial class MainContentUC : UserControl
    {
        private MainContentVM viewModel;

        public MainContentUC()
        {
            InitializeComponent();

            viewModel = new MainContentVM();
            DataContext = viewModel;

            Loaded += MainContentUC_Loaded;
        }

        private void MainContentUC_Loaded(object sender, RoutedEventArgs e)
        {
            viewModel.Init();
        }
    }
}
