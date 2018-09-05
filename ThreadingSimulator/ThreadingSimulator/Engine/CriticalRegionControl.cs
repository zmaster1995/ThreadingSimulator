using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Models;

namespace ThreadingSimulator.Engine
{
    class CriticalRegionControl
    {
        private Dictionary<string, int> semaphorValues;
        private Dictionary<int, List<string>> lockedResources;
        private Dictionary<string, List<int>> suspended;

        public CriticalRegionControl()
        {
            semaphorValues = new Dictionary<string, int>();
            lockedResources = new Dictionary<int, List<string>>();
            suspended = new Dictionary<string, List<int>>();
        }

        public void Reset()
        {
            semaphorValues.Clear();
            lockedResources.Clear();
            suspended.Clear();
        }
        
        private string GetProcessorUniqueName(int processor, Dictionary<int, string> processorNames)
        {
            if(!processorNames.ContainsKey(processor))
            {
                processorNames.Add(processor, String.Format("{0}:{1}", Guid.NewGuid().ToString(), processor));
            }

            return processorNames[processor];
        }

        private List<string> GetAllGraphNodes(Dictionary<int, string> processorNames)
        {
            string processorName;
            List<string> nodes = new List<string>();

            foreach(KeyValuePair<int, List<string>> pair in lockedResources)
            {
                nodes.Add(GetProcessorUniqueName(pair.Key, processorNames));
                
                foreach(string resource in pair.Value)
                {
                    if(!nodes.Contains(resource))
                    {
                        nodes.Add(resource);
                    }
                }
            }

            foreach(KeyValuePair<string, List<int>> pair in suspended)
            {
                if(!nodes.Contains(pair.Key))
                {
                    nodes.Add(pair.Key);
                }

                foreach(int processor in pair.Value)
                {
                    processorName = GetProcessorUniqueName(processor, processorNames);
                    
                    if(!nodes.Contains(processorName))
                    {
                        nodes.Add(processorName);
                    }
                }
            }

            return nodes;
        }

        private bool IsDeadlock(int processorNo)
        {
            Dictionary<int, string> processorNames = new Dictionary<int, string>();

            List<string> nodes = GetAllGraphNodes(processorNames);

            DeadlockDetectionGraph graph = new DeadlockDetectionGraph(nodes);

            foreach (KeyValuePair<int, List<string>> pair in lockedResources)
            {
                foreach(string res in pair.Value)
                {
                    graph.AddEdge(GetProcessorUniqueName(pair.Key, processorNames), res);
                }
            }

            foreach(KeyValuePair<string, List<int>> pair in suspended)
            {
                foreach(int processor in pair.Value)
                {
                    graph.AddEdge(pair.Key, GetProcessorUniqueName(processor, processorNames));
                }
            }

            return graph.IsCyclic(GetProcessorUniqueName(processorNo, processorNames));
        }

        public ResourceLockType Lock(string name, int processorNo)
        {
            if (semaphorValues[name] > 0)
            {
                semaphorValues[name]--;

                if (!lockedResources.ContainsKey(processorNo))
                {
                    lockedResources.Add(processorNo, new List<string>());
                }

                lockedResources[processorNo].Add(name);

                return ResourceLockType.AVAILABLE;
            }

            suspended[name].Add(processorNo);

            if (IsDeadlock(processorNo))
            {
                return ResourceLockType.DEADLOCK;
            }

            return ResourceLockType.LOCKED;
        }

        public ResourceUnlockAvailabilityType Unlock(string name, int processorNo, ref int awake)
        {
            if(lockedResources.ContainsKey(processorNo) && lockedResources[processorNo].Contains(name))
            {
                lockedResources[processorNo].Remove(name);
            }

            semaphorValues[name]++;

            if (suspended.ContainsKey(name) && suspended[name].Any())
            {
                awake = GetSuspended(name);
                return ResourceUnlockAvailabilityType.OK_AWAKE_OTHER;
            }

            return ResourceUnlockAvailabilityType.OK;
        }

        private int GetSuspended(string name)
        {
            int processorNo = suspended[name][0];
            suspended[name].RemoveAt(0);

            return processorNo;
        }

        /*public List<int> ReleaseAll(int processorNo)
        {
            List<int> toAwake = new List<int>();

            if(lockedResources.ContainsKey(processorNo))
            {
                foreach (string resource in lockedResources[processorNo])
                {
                    semaphorValues[resource]++;

                    if(suspended[resource].Any())
                    {
                        toAwake.Add(GetSuspended(resource));
                    }
                }

                lockedResources.Remove(processorNo);
            }

            return toAwake;
        }*/

        public void InitSemaphores(List<InitialValueModel> semaphoreList)
        {
            foreach (InitialValueModel semaphor in semaphoreList)
            {
                semaphorValues.Add(semaphor.Name, semaphor.Value);
                suspended.Add(semaphor.Name, new List<int>());
            }
        }
    }
}
