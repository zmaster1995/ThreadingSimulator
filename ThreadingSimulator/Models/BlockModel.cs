using Newtonsoft.Json;
using System.IO;
using System.Xml;
using System.Xml.Serialization;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Other;

namespace ThreadingSimulator.Models
{
    [XmlInclude(typeof(BlockModel))]
    [XmlInclude(typeof(LoopBlockModel))]
    [XmlInclude(typeof(SemaphorBlockModel))]
    [XmlInclude(typeof(VariableBlockModel))]
    public class BlockModel : PropertyChangedImpl
    {
        public BlockType Type { get; }

        #region Display
        private int zIndex;
        public int ZIndex
        {
            get
            {
                return zIndex;
            }
            set
            {
                zIndex = value;
                OnPropertyChanged();
            }
        }
        #endregion

        [XmlIgnore]
        [JsonIgnore]
        public virtual bool IsValid
        {
            get
            {
                return true;
            }
        }

        public BlockModel()
        {
            Type = BlockType.OTHER;
        }

        public BlockModel(BlockType type)
        {
            Type = type;
        }

        public BlockModel Clone()
        {
            XmlSerializer xmlSerializer = new XmlSerializer(GetType());

            using (MemoryStream ms = new MemoryStream())
            {
                xmlSerializer.Serialize(ms, this);

                ms.Position = 0;

                return (BlockModel) xmlSerializer.Deserialize(ms);
            }
        }
    }
}
