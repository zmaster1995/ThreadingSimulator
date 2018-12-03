using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using ThreadingSimulator.Engine;
using ThreadingSimulator.Models;
using ThreadingSimulatorServer.Models;
using ThreadingSimulatorServer.Other;
using IO = System.IO;

namespace ThreadingSimulatorServer.Controllers
{
    [EnableCors("MyPolicy")]
    public class ApiController : Controller
    {
        private JsonSerializerSettings jsonSettings = new JsonSerializerSettings()
        {
            ContractResolver = new DefaultContractResolver()
        };

        [HttpPost]
        [Route("Execute")]
        public async Task<ActionResult> Execute([FromBody] ExecutionInputModel input)
        {
            ExecutionEngine.Instance.Init(input.Program, input.Settings);
            await ExecutionEngine.Instance.Execute();

            List<BaseLogModel> logs = ExecutionEngine.Instance.GetLogs();

            return Json(logs, jsonSettings);
        }       
    }
}
