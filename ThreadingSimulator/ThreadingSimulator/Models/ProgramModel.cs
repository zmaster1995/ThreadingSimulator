using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.Models
{
    [XmlInclude(typeof(ProcessorBlocksModel))]
    [XmlInclude(typeof(BlockModel))]
    [XmlInclude(typeof(LoopBlockModel))]
    [XmlInclude(typeof(SemaphorBlockModel))]
    [XmlInclude(typeof(VariableBlockModel))]
    public class ProgramModel : PropertyChangedImpl
    {
        [XmlIgnore]
        [JsonIgnore]
        private bool subscribed = false;

        public string Name { get; set; }
        public ObservableCollection<ProcessorBlocksModel> Processors { get; set; }

        [XmlIgnore]
        [JsonIgnore]
        public int ProcessorCount
        {
            get
            {
                return Processors != null ? Processors.Count : 0;
            }
        }

        [XmlIgnore]
        [JsonIgnore]
        public bool IsValid
        {
            get
            {
                if (!String.IsNullOrEmpty(Name) && ProcessorCount > 0 
                    && ProcessorCount == Processors.Select(x=>x.Name).Distinct().Count())
                {
                    foreach(ProcessorBlocksModel processor in Processors)
                    {
                        if(!processor.IsValid)
                        {
                            return false;
                        }
                    }

                    return true;
                }

                return false;
            }
        }
        
        public void Add(ProcessorBlocksModel commands)
        {
            if(Processors==null)
            {
                Processors = new ObservableCollection<ProcessorBlocksModel>();

                SubscribeToChanges();
                OnPropertyChanged(nameof(Processors));
                OnPropertyChanged(nameof(ProcessorCount));
            }

            Processors.Add(commands);
        }

        private void Processors_CollectionChanged(object sender, NotifyCollectionChangedEventArgs e)
        {
            OnPropertyChanged(nameof(ProcessorCount));
        }

        public void SubscribeToChanges()
        {
            if(Processors !=null && !subscribed)
            {
                Processors.CollectionChanged += Processors_CollectionChanged;
                subscribed = true;
            }
        }

        public ProgramModel Clone()
        {
            XmlSerializer xmlSerializer = new XmlSerializer(GetType());

            using (MemoryStream ms = new MemoryStream())
            {
                xmlSerializer.Serialize(ms, this);

                ms.Position = 0;

                ProgramModel returnModel = (ProgramModel)xmlSerializer.Deserialize(ms);
                returnModel.SubscribeToChanges();

                return returnModel;
            }
        }
    }
}
