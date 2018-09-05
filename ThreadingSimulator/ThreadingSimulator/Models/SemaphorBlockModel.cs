using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;
using ThreadingSimulator.Enums;

namespace ThreadingSimulator.Models
{
    [XmlInclude(typeof(BlockModel))]
    [XmlInclude(typeof(LoopBlockModel))]
    [XmlInclude(typeof(SemaphorBlockModel))]
    [XmlInclude(typeof(VariableBlockModel))]
    public class SemaphorBlockModel : BlockModel
    {
        public string SemaphorName { get; set; }
        public SemaphorOperationType SemaphorOperation { get; set; }

        [XmlIgnore]
        [JsonIgnore]
        public override bool IsValid
        {
            get
            {
                return !String.IsNullOrEmpty(SemaphorName);
            }
        }

        public SemaphorBlockModel() : base(BlockType.SEMAPHOR)
        {
        }
    }
}
