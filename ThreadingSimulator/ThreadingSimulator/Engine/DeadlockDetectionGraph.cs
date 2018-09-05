using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThreadingSimulator.Engine
{
    class DeadlockDetectionGraph
    {
        private Dictionary<string, List<string>> graphInternal;
        Dictionary<string, bool> visited;
        Dictionary<string, bool> recStack;

        public DeadlockDetectionGraph(List<string> nodes)
        {
            visited = new Dictionary<string, bool>();
            recStack = new Dictionary<string, bool>();
            graphInternal = new Dictionary<string, List<string>>();

            FillNodes(nodes);
        }

        private void FillNodes(List<string> nodes)
        {
            foreach (string name in nodes)
            {
                visited.Add(name, false);
                recStack.Add(name, false);
                graphInternal.Add(name, new List<string>());
            }
        }

        public bool IsCyclic(string name)
        {
            if (recStack[name])
            {
                return true;
            }

            if (visited[name])
            {
                return false;
            }

            visited[name] = true;
            recStack[name] = true;
            
            List<string> children = graphInternal[name];

            foreach (string childName in children)
            {
                if (IsCyclic(childName))
                {
                    return true;
                }
            }

            recStack[name] = false;

            return false;
        }

        public void AddEdge(string source, string dest)
        {
            graphInternal[source].Add(dest);
        }
    }
}
