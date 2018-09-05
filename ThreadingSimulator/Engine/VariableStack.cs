using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThreadingSimulator.Models;

namespace ThreadingSimulator.Engine
{
    class VariableStack
    {
        private Dictionary<string, int> variables;

        public VariableStack()
        {
            variables = new Dictionary<string, int>();
        }

        public void Reset()
        {
            variables.Clear();
        }     

        public void InitVariables(List<InitialValueModel> variableList)
        {
            foreach(InitialValueModel variable in variableList)
            {
                variables.Add(variable.Name, variable.Value);
            }
        }

        public int GetValue(string variable)
        {
            return variables[variable];
        }

        public void SetValue(string variable, int value)
        {
            variables[variable] = value;
        }
    }
}
