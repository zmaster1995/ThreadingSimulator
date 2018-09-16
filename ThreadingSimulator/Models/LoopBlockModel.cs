using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using ThreadingSimulator.Enums;

namespace ThreadingSimulator.Models
{
    public class LoopBlockModel : BlockModel
    {
        private ObservableCollection<BlockModel> children;

        public int Iterations { get; set; } = 1;
        public ObservableCollection<BlockModel> Children
        {
            get
            {
                return children;
            }
            set
            {
                if(children==null)
                {
                    foreach(BlockModel bm in value)
                    {
                        Subscribe(bm);
                    }
                }

                children = value;
                OnPropertyChanged();
            }
        }

        [XmlIgnore]
        [JsonIgnore]
        public override bool IsValid
        {
            get
            {
                if(Iterations>0 && Children!=null && Children.Count>0)
                {
                    foreach(BlockModel block in Children)
                    {
                        if(!block.IsValid)
                        {
                            return false;
                        }
                    }

                    return true;
                }

                return false;
            }
        }

        public LoopBlockModel() : base(BlockType.LOOP)
        {
        }

        public void Add(BlockModel block, int position = 0)
        {
            if(Children == null)
            {
                Children = new ObservableCollection<BlockModel>();
            }

            Subscribe(block);
            
            Children.Insert(position, block);

            RecalculateZIndex();
        }

        public void RecalculateZIndex()
        {
            int zIndex = ZIndex-1;

            if(Children != null)
            {
                foreach (BlockModel bm in Children)
                {
                    bm.ZIndex = zIndex--;

                    if (bm is LoopBlockModel)
                    {
                        (bm as LoopBlockModel).RecalculateZIndex();
                    }
                }
            }
        }

        private void Subscribe(BlockModel bm)
        {
            if(bm is VariableBlockModel)
            {
                bm.PropertyChanged += Bm_PropertyChanged;
            }
        }

        private void Bm_PropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
        {
            if(e.PropertyName == "VariableOperationType")
            {
                Children = new ObservableCollection<BlockModel>(Children);
            }
        }
    }
}
