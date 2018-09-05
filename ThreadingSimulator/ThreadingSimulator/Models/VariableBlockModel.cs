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
    public class VariableBlockModel : BlockModel
    {
        [XmlIgnore]
        [JsonIgnore]
        private VariableOperationType variableOperationType;

        public string VariableName { get; set; }
        public VariableOperationType VariableOperationType
        {
            get
            {
                return variableOperationType;
            }
            set
            {
                variableOperationType = value;
                OnPropertyChanged();

                if(variableOperationType == VariableOperationType.GET)
                {
                    Value = null;
                    OnPropertyChanged(nameof(Value));
                }
            }
        }
        public int? Value { get; set; }

        [XmlIgnore]
        [JsonIgnore]
        public override bool IsValid
        {
            get
            {
                return !String.IsNullOrEmpty(VariableName) && (VariableOperationType == VariableOperationType.GET || Value!=null);
            }
        }

        public VariableBlockModel() : base(BlockType.SHARED_VARIABLE)
        {
            VariableOperationType = VariableOperationType.GET;
        }
    }
}
