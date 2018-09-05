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
    class DraggableBlockTemplateSelector : DataTemplateSelector
    {
        public DataTemplate SemaphorTemplate
        {
            get
            {
                return ResourceDictionary["DraggableSemaphorBlockTemplate"] as DataTemplate;
            }
        }

        public DataTemplate VariableTemplate
        {
            get
            {
                return ResourceDictionary["DraggableVariableBlockTemplate"] as DataTemplate;
            }
        }

        public DataTemplate LoopTemplate
        {
            get
            {
                return ResourceDictionary["DraggableLoopBlockTemplate"] as DataTemplate;
            }
        }

        public DataTemplate DefaultTemplate
        {
            get
            {
                return ResourceDictionary["DraggableBlockTemplate"] as DataTemplate;
            }
        }

        public ResourceDictionary ResourceDictionary { get; set; }

        public DraggableBlockTemplateSelector()
        {
        }

        public override DataTemplate SelectTemplate(object item, DependencyObject container)
        {
            if(item != null)
            {
                BlockType type = (BlockType)item;

                switch(type)
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
