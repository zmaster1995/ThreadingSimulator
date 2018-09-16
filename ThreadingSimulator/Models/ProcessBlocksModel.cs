using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.Models
{
    public class ProcessBlocksModel : PropertyChangedImpl
    {
        public string Name { get; set; }
        public ObservableCollection<BlockModel> Blocks { get; set; }

        [XmlIgnore]
        [JsonIgnore]
        public bool IsValid
        {
            get
            {
                if(!String.IsNullOrEmpty(Name) && Blocks != null && Blocks.Count>0)
                {
                    foreach(BlockModel block in Blocks)
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

        public void Add(BlockModel command, int position = 0)
        {
            if (Blocks == null)
            {
                Blocks = new ObservableCollection<BlockModel>();

                OnPropertyChanged(nameof(Blocks));
            }

            Blocks.Insert(position, command);

            RecalculateZIndex();
        }

        private void RecalculateZIndex()
        {
            int zIndex = 1000;

            foreach(BlockModel bm in Blocks)
            {
                bm.ZIndex = zIndex--;

                if(bm is LoopBlockModel)
                {
                    (bm as LoopBlockModel).RecalculateZIndex();
                }
            }
        }

        public void AddRange(List<BlockModel> commands)
        {
            foreach(BlockModel command in commands)
            {
                Add(command);
            }
        }
    }
}
