import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ExecutableProgramModel } from '../Models/ExecutableProgramModel';
import { BaseLogModel } from '../Models/BaseLogModel';
import { LocalStorageService } from 'ngx-localstorage';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Helper } from '../Helper';
import { PrintedLogModel } from '../Models/PrintedLogModel';
import { ProcessCommandsModel } from '../Models/ProcessCommandsModel';
import { ApiRequestService } from '../api-request.service';
import { ExecutionSettingsModel } from '../Models/ExecutionSettingsModel';
import { LogModel } from '../Models/LogModel';
import { LogType } from '../Enums/LogType';
import { SemaphoreLogModel } from '../Models/SemaphoreLogModel';
import { InitialValueModel } from '../Models/InitialValueModel';
import { VariableLogModel } from '../Models/VariableLogModel';
import { PreviewComponent } from '../preview/preview.component';
import { MatTableDataSource } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import * as scrollIntoView from 'scroll-into-view';

@Component({
  selector: 'simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent {

  public ExecutableProgram: ExecutableProgramModel;
  public Logs: BaseLogModel[];  
  public NewSimulation: boolean;
  public LogOutput: PrintedLogModel[];
  public VariableValues: InitialValueModel[];
  public SemaphoreValues: InitialValueModel[];
  private variables: InitialValueModel[];
  private semaphores: InitialValueModel[];
  public CurrentLog: number;
  public displayedColumns: string[] = ['process', 'description', 'states'];
  private TICK: number = 1500;
  private timerIsRunning: boolean;
  private timer: any;
  private processPositions: number[];
  public IsSuspended: boolean[];
  private previousValues: any;
  public LogData: MatTableDataSource<PrintedLogModel>;

  @ViewChild("preview") preview: PreviewComponent;

  constructor(private localStorage: LocalStorageService, private router: Router, private apiService: ApiRequestService, private spinner: NgxSpinnerService) {
    let data: string = localStorage.get("SIMULATION");

    if(data)
    {
      let dataObj: any = JSON.parse(data);

      this.ExecutableProgram = ExecutableProgramModel.Deserialize(dataObj.Program);
      this.Logs = Helper.DeserializeLogs(dataObj.Logs);
      this.variables = dataObj.Variables;
      this.semaphores = dataObj.Semaphores;
  
      this.processPositions = [];
      this.IsSuspended = [];

      this.LogOutput = [];
      this.previousValues = {};
      
      this.Initialize();
    }
    else
    {
      router.navigate(["/"]);
    }
  }

  public NewSimulationCmd_Execute()
  {
      if(this.timerIsRunning)
      {
        this.PauseAutoDisplayCmd_Execute();
      }

      this.spinner.show();
      this.NewSimulation = true;

      let settingsData: string = this.localStorage.get("SETTINGS_DATA_FOR_REGENERATE");
      
      let settings: ExecutionSettingsModel = JSON.parse(settingsData);

      this.apiService.simulate({ Program: this.ExecutableProgram, Settings: settings}).subscribe(data => {
        this.Logs = Helper.DeserializeLogs(data);

        this.localStorage.set("SIMULATION", JSON.stringify({
          Program: this.ExecutableProgram,
          Logs: this.Logs
        }));

        this.ResetSimulationCmd_Execute();

        this.spinner.hide();
      });
  }

  private download(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  public ExportCmd_Execute()
  {
    let current: Date = new Date(Date.now());

    let date: string = current.getFullYear()+"-"+current.getDate()+"-"+current.getMonth()+"-"+current.getHours()+"-"+current.getMonth()+"-"+current.getSeconds();
    let name: string = "scenario-" + this.ExecutableProgram.Name + "-" + date + ".disp";

    let content: string = "";
    this.Logs.forEach(x=>{
      if(x instanceof LogModel)
      {
        content+= (+(<LogModel>x).Process)+1;
      }
    });

    this.download(name, content);
  }

  public GenerateDeadlockLog()
  {
      let printLog: PrintedLogModel = new PrintedLogModel();
      
      printLog.Description = "Deadlock has been detected";

      printLog.States = this.GetStates();

      this.ShowLog(printLog);
  }

  private ShowLog(printLog: PrintedLogModel)
  {     
    this.LogOutput.push(printLog);
  }

  public GenerateLogOutput(logModel: LogModel)
  {
      let printLog: PrintedLogModel = new PrintedLogModel();

      printLog.Process = ((+logModel.Process)+1).toString();

      if (logModel.Type == LogType.DISPATCHER_SKIP)
      {
          printLog.Description = "----------";
      }
      else if (logModel.Type == LogType.DEADLOCK || logModel.Type == LogType.ALL_SUSPENDED)
      {
          printLog.Description = "Deadlock has been detected";
      }
      else if (logModel.Type == LogType.AWAKE_PROCESS)
      {
          printLog.Description = "Process has been deblocked";
      }
      else if (logModel instanceof SemaphoreLogModel)
      {
          let semLog: SemaphoreLogModel = <SemaphoreLogModel>logModel;

          switch (semLog.Type)
          {
              case LogType.ENTER_REGION:
                  printLog.Description = "###Enter critical region "+semLog.Semaphore+"###"
                  break;
              case LogType.EXIT_REGION:
                  printLog.Description = "###Exit critical region "+semLog.Semaphore+"###"
                  break;
              case LogType.SUSPENDED:
                  printLog.Description = "###Blocked on "+semLog.Semaphore+"###"
                  break;
          }
      }
      else
      {
          printLog.Description = Helper.GetText(logModel.Command);
      }

      printLog.States = this.GetStates();
      this.ShowLog(printLog);
  }

  private GetStates(): string
  {
      let text: string = "";

      if(this.VariableValues.length>0)
      {
          let first: boolean = true;
          text = "Variables: ";

          this.VariableValues.forEach(ivm=>
          {
            if (!first)
            {
                text+="; ";
            }

            text+=ivm.Name+"="+ivm.Value;

            first = false;
          });

          text+=";        ";
      }
      if (this.SemaphoreValues.length>0)
      {
          let first: boolean = true;
          text += "Semaphores: ";

          this.SemaphoreValues.forEach(ivm=>
          {
            if (!first)
            {
                text+="; ";
            }

            text+=ivm.Name+"="+ivm.Value;

            first = false;
          });
      }

      return text;
  }

  private AddLog(log: BaseLogModel)
  {
      if (log.Type == LogType.DEADLOCK || log.Type == LogType.ALL_SUSPENDED)
      {
          this.GenerateDeadlockLog();
      }
      else
      {
          this.GenerateLogOutput(<LogModel>log);
      }

      this.LogData = new MatTableDataSource<PrintedLogModel>(this.LogOutput);
  }

  public PreviousLogCmd_Execute()
  {
      if (this.CurrentLog < this.Logs.length)
      {
          this.UndoCommand(this.Logs[this.CurrentLog]);
      }

      this.CurrentLog--;
  }

  public PreviousLogCmd_CanExecute()
  {
      return !this.timerIsRunning && this.CurrentLog > -1;
  }

  public NextLogCmd_Execute()
  {
      this.CurrentLog++;

      if(this.CurrentLog < this.Logs.length)
      {
          this.ExecuteCommand(this.Logs[this.CurrentLog]);
      }
  }

  public NextLogCmd_CanExecute()
  {
      return !this.timerIsRunning && this.CurrentLog < this.Logs.length - 1;
  }

  public ResetSimulationCmd_Execute()
  {
      this.Initialize();
  }

  public ResetSimulationCmd_CanExecute()
  {
      return !this.timerIsRunning && this.CurrentLog != -1;
  }

  public PauseAutoDisplayCmd_Execute()
  {
      clearInterval(this.timer);
      this.timerIsRunning = false;
  }

  public PauseAutoDisplayCmd_CanExecute()
  {
      return this.timerIsRunning;
  }

  public StartAutoDisplayCmd_Execute()
  {
      this.timerIsRunning = true;
      this.timer = setInterval(this.Timer_Elapsed.bind(this), this.TICK);
  }

  public StartAutoDisplayCmd_CanExecute()
  {
      return !this.timerIsRunning && this.CurrentLog < this.Logs.length - 1;
  }

  private Timer_Elapsed()
  {
      this.CurrentLog++;

      if (this.CurrentLog < this.Logs.length)
      {
          this.ExecuteCommand(this.Logs[this.CurrentLog]);
      }
      else
      {
          clearInterval(this.timer);
          this.timerIsRunning = false;
      }
  }

  private CloneList(listToClone: InitialValueModel[]): InitialValueModel[]
  {
      let list: InitialValueModel[] = [];

      listToClone.forEach(ivm => {
        let tmp: InitialValueModel = new InitialValueModel();

        tmp.Name = ivm.Name;
        tmp.Value = ivm.Value;

        list.push(tmp);
      });     

      return list;
  }

  protected Initialize()
  {
      this.CurrentLog = -1;
      this.VariableValues = this.CloneList(this.variables);
      this.SemaphoreValues = this.CloneList(this.semaphores);

      this.IsSuspended = [];
      this.processPositions = [];

      for (let i = 0; i < this.ExecutableProgram.ProcessCount(); i++) 
      {
          this.IsSuspended.push(false);
          this.processPositions.push(0);
          this.DisplayColor(i, 0);
      }

      this.LogOutput = [];
      this.LogData = new MatTableDataSource<PrintedLogModel>(this.LogOutput);

      this.previousValues = {};

      this.VariableValues.forEach(ivm=>{
        this.previousValues[ivm.Name] = [];
      });
  }

  private DisplayColor(processNo: number, commandNo: number)
  {
      this.ExecutableProgram.Processes[processNo].Commands.forEach(x => x.DisplayColor = false);

      if (commandNo >= 0 && commandNo < this.ExecutableProgram.Processes[processNo].CommandCount())
      {
          this.ExecutableProgram.Processes[processNo].Commands[commandNo].DisplayColor = true;
      }
  }

  private Focus(process: number, undo: boolean, callback: any)
  {
    this.preview.FocusCommand(process, this.processPositions[process], undo, callback);
  }

  public ExecuteCommand(log: BaseLogModel)
  {
      let logModel: LogModel;
      
      if(log instanceof LogModel)
      {
        logModel = <LogModel>log;
      }

      let valuedLog: VariableLogModel;
      let semaphoreLog: SemaphoreLogModel;

      if (logModel != null)
      {
          this.Focus(logModel.Process, false, () => { setTimeout(() => {
            if (log.Type == LogType.SET_VALUE)
            {
                valuedLog = <VariableLogModel>log;
                let variable: InitialValueModel = this.VariableValues.find(x => x.Name == valuedLog.Variable);
      
                this.previousValues[valuedLog.Variable].push(variable.Value);
                variable.Value = valuedLog.Value;
      
                this.AddLog(log);
            }
            else if (log.Type == LogType.ENTER_REGION)
            {
                semaphoreLog = <SemaphoreLogModel>log;
      
                let semaphore: InitialValueModel = this.SemaphoreValues.find(x => x.Name == semaphoreLog.Semaphore);
                semaphore.Value--;
      
                this.AddLog(log);
            }
            else if (log.Type == LogType.EXIT_REGION)
            {
                semaphoreLog = <SemaphoreLogModel>log;
      
                 let semaphore: InitialValueModel = this.SemaphoreValues.find(x => x.Name == semaphoreLog.Semaphore);
                semaphore.Value++;
      
                this.AddLog(log);
            }
            else if (log.Type == LogType.SUSPENDED)
            {
                semaphoreLog = log as SemaphoreLogModel;
      
                this.IsSuspended[semaphoreLog.Process] = true;
                
                this.AddLog(log);
                return;
            }
            else if(log.Type == LogType.AWAKE_PROCESS)
            {
                this.IsSuspended[logModel.Process] = false;
                
                this.AddLog(log);
                return;
            }
            else if(log.Type==LogType.DEADLOCK || log.Type == LogType.ALL_SUSPENDED)
            {
                this.AddLog(log);
                return;
            }
      
            if(log.Type!=LogType.DISPATCHER_SKIP)
            {
                this.processPositions[logModel.Process]++;
            }
      
            this.DisplayColor(logModel.Process, this.processPositions[logModel.Process]);
            this.refresh();
        }, 300)});
      }
  }

  private refresh(): void
  {
      let tmp: boolean[] = this.IsSuspended;
      this.IsSuspended = null;
      this.IsSuspended = tmp;

      let rows: HTMLCollectionOf<Element> = document.getElementsByClassName("row");

      if(rows.length>0)
      {
          scrollIntoView(rows[rows.length-1], { time: 300 });
      }
  }

  public UndoCommand(log: BaseLogModel)
  {
      if(!log)
      {
          return;
      }

      let logModel: LogModel;
      
      if(log instanceof LogModel)
      {
        logModel=<LogModel>log;
      }

      let valuedLog: VariableLogModel;
      let semaphoreLog: SemaphoreLogModel;

      if (logModel != null)
      {
          this.Focus(logModel.Process, true, () => { setTimeout(() => {
            if (log.Type == LogType.SET_VALUE)
            {
                valuedLog = <VariableLogModel>log;
                let variable: InitialValueModel = this.VariableValues.find(x => x.Name == valuedLog.Variable);
                
                variable.Value = this.previousValues[valuedLog.Variable][this.previousValues[valuedLog.Variable].length-1];
                this.previousValues[valuedLog.Variable].pop();
      
                this.LogOutput.pop();
            }
            else if (log.Type == LogType.ENTER_REGION)
            {
                semaphoreLog = <SemaphoreLogModel>log;
      
                let semaphore: InitialValueModel = this.SemaphoreValues.find(x => x.Name == semaphoreLog.Semaphore);
                semaphore.Value++;
      
                this.LogOutput.pop();
            }
            else if(log.Type == LogType.SUSPENDED)
            {
                semaphoreLog = <SemaphoreLogModel>log;
      
                this.IsSuspended[semaphoreLog.Process] = false;
      
                this.LogOutput.pop();
                this.refresh();
      
                return;
            }
            else if(log.Type == LogType.AWAKE_PROCESS)
            {
                this.IsSuspended[logModel.Process] = true;
      
                this.LogOutput.pop();
                this.refresh();
      
                return;
            }
            else if (log.Type == LogType.EXIT_REGION)
            {
                semaphoreLog = <SemaphoreLogModel>log;
      
                let semaphore: InitialValueModel = this.SemaphoreValues.find(x => x.Name == semaphoreLog.Semaphore);
                semaphore.Value--;
      
                this.LogOutput.pop();
            }
            else if (log.Type == LogType.DEADLOCK || log.Type == LogType.ALL_SUSPENDED)
            {
                this.LogOutput.pop();
                this.refresh();
      
                return;
            }
      
            if (log.Type != LogType.DISPATCHER_SKIP)
            {
                this.processPositions[logModel.Process]--;
            }
      
            this.DisplayColor(logModel.Process, this.processPositions[logModel.Process]);
            this.LogData = new MatTableDataSource<PrintedLogModel>(this.LogOutput);
            this.refresh();
          }, 300)});
      }     
  }
}
