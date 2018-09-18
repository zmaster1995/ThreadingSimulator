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
        
        private string GetProcessUniqueName(int process, Dictionary<int, string> processNames)
        {
            if(!processNames.ContainsKey(process))
            {
                processNames.Add(process, String.Format("{0}:{1}", Guid.NewGuid().ToString(), process));
            }

            return processNames[process];
        }

        private List<string> GetAllGraphNodes(Dictionary<int, string> processNames)
        {
            string processName;
            List<string> nodes = new List<string>();

            foreach(KeyValuePair<int, List<string>> pair in lockedResources)
            {
                nodes.Add(GetProcessUniqueName(pair.Key, processNames));
                
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

                foreach(int process in pair.Value)
                {
                    processName = GetProcessUniqueName(process, processNames);
                    
                    if(!nodes.Contains(processName))
                    {
                        nodes.Add(processName);
                    }
                }
            }

            return nodes;
        }

        private bool IsDeadlock(int processNo)
        {
            Dictionary<int, string> processNames = new Dictionary<int, string>();

            List<string> nodes = GetAllGraphNodes(processNames);

            DeadlockDetectionGraph graph = new DeadlockDetectionGraph(nodes);

            foreach (KeyValuePair<int, List<string>> pair in lockedResources)
            {
                foreach(string res in pair.Value)
                {
                    graph.AddEdge(GetProcessUniqueName(pair.Key, processNames), res);
                }
            }

            foreach(KeyValuePair<string, List<int>> pair in suspended)
            {
                foreach(int process in pair.Value)
                {
                    graph.AddEdge(pair.Key, GetProcessUniqueName(process, processNames));
                }
            }

            return graph.IsCyclic(GetProcessUniqueName(processNo, processNames));
        }

        public ResourceLockType Lock(string name, int processNo)
        {
            if (semaphorValues[name] > 0)
            {
                semaphorValues[name]--;

                if (!lockedResources.ContainsKey(processNo))
                {
                    lockedResources.Add(processNo, new List<string>());
                }

                lockedResources[processNo].Add(name);

                return ResourceLockType.AVAILABLE;
            }

            suspended[name].Add(processNo);

            if (IsDeadlock(processNo))
            {
                return ResourceLockType.DEADLOCK;
            }

            return ResourceLockType.LOCKED;
        }

        public ResourceUnlockType Unlock(string name, int processNo, ref int awake)
        {
            if(lockedResources.ContainsKey(processNo) && lockedResources[processNo].Contains(name))
            {
                lockedResources[processNo].Remove(name);
            }

            semaphorValues[name]++;

            if (suspended.ContainsKey(name) && suspended[name].Any())
            {
                awake = GetSuspended(name);
                return ResourceUnlockType.OK_AWAKE_OTHER;
            }

            return ResourceUnlockType.OK;
        }

        private int GetSuspended(string name)
        {
            int processNo = suspended[name][0];
            suspended[name].RemoveAt(0);

            return processNo;
        }

        /*public List<int> ReleaseAll(int processNo)
        {
            List<int> toAwake = new List<int>();

            if(lockedResources.ContainsKey(processNo))
            {
                foreach (string resource in lockedResources[processNo])
                {
                    semaphorValues[resource]++;

                    if(suspended[resource].Any())
                    {
                        toAwake.Add(GetSuspended(resource));
                    }
                }

                lockedResources.Remove(processNo);
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
