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
    [XmlInclude(typeof(ProcessBlocksModel))]
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
        public ObservableCollection<ProcessBlocksModel> Processes { get; set; }

        [XmlIgnore]
        [JsonIgnore]
        public int ProcessCount
        {
            get
            {
                return Processes != null ? Processes.Count : 0;
            }
        }

        [XmlIgnore]
        [JsonIgnore]
        public bool IsValid
        {
            get
            {
                if (!String.IsNullOrEmpty(Name) && ProcessCount > 0 
                    && ProcessCount == Processes.Select(x=>x.Name).Distinct().Count())
                {
                    foreach(ProcessBlocksModel process in Processes)
                    {
                        if(!process.IsValid)
                        {
                            return false;
                        }
                    }

                    return true;
                }

                return false;
            }
        }
        
        public void Add(ProcessBlocksModel commands)
        {
            if(Processes==null)
            {
                Processes = new ObservableCollection<ProcessBlocksModel>();

                SubscribeToChanges();
                OnPropertyChanged(nameof(Processes));
                OnPropertyChanged(nameof(ProcessCount));
            }

            Processes.Add(commands);
        }

        private void Processes_CollectionChanged(object sender, NotifyCollectionChangedEventArgs e)
        {
            OnPropertyChanged(nameof(ProcessCount));
        }

        public void SubscribeToChanges()
        {
            if(Processes !=null && !subscribed)
            {
                Processes.CollectionChanged += Processes_CollectionChanged;
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
