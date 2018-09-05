using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Models;

namespace ThreadingSimulator.Styles
{
    class BlockTemplateSelector : DataTemplateSelector
    {
        public DataTemplate SemaphorTemplate
        {
            get
            {
                return ResourceDictionary["SemaphorBlockTemplate"] as DataTemplate;
            }
        }

        public DataTemplate VariableTemplate
        {
            get
            {
                return ResourceDictionary["VariableBlockTemplate"] as DataTemplate;
            }
        }

        public DataTemplate LoopTemplate
        {
            get
            {
                return ResourceDictionary["LoopBlockTemplate"] as DataTemplate;
            }
        }

        public DataTemplate DefaultTemplate
        {
            get
            {
                return ResourceDictionary["BlockTemplate"] as DataTemplate;
            }
        }

        public ResourceDictionary ResourceDictionary { get; set; }

        public BlockTemplateSelector()
        {
        }

        public override DataTemplate SelectTemplate(object item, DependencyObject container)
        {
            if(item != null)
            {
                BlockModel block = item as BlockModel;

                switch(block.Type)
                {
                    case BlockType.LOOP:
                        return LoopTemplate;
                    case BlockType.SEMAPHOR:
                        return SemaphorTemplate;
                    case BlockType.SHARED_VARIABLE:
                        return VariableTemplate;
                    case BlockType.OTHER:
                        return DefaultTemplate;
                }
            }

            return null;
        }
    }
}
