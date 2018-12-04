import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ExecutionSettingsModel } from '../Models/ExecutionSettingsModel';
import { ExecutableProgramModel } from '../Models/ExecutableProgramModel';
import { BaseLogModel } from '../Models/BaseLogModel';
import { SettingsComponent } from '../settings/settings.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PreviewDialogComponent } from '../preview-dialog/preview-dialog.component';
import { ProgramModel } from '../Models/ProgramModel';
import { Helper } from '../Helper';
import { ProcessCommandsModel } from '../Models/ProcessCommandsModel';
import { ApiRequestService } from '../api-request.service';
import { LocalStorageService } from 'ngx-localstorage';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-execution-settings',
  templateUrl: './execution-settings.component.html',
  styleUrls: ['./execution-settings.component.css']
})
export class ExecutionSettingsComponent {

  public Icon: boolean = true;
  public Settings: ExecutionSettingsModel = new ExecutionSettingsModel();
  public ExecutableProgram: ExecutableProgramModel;
  public SimulationExecProgram: ExecutableProgramModel;
  public Logs: BaseLogModel[];
  public Program: ProgramModel;

  @ViewChild("settings") SettingsRef: SettingsComponent;

  constructor(private apiService: ApiRequestService, private localStorage: LocalStorageService, private router: Router, private spinner: NgxSpinnerService) { 
    
    let data: string = localStorage.get("SETTINGS");

    if(data)
    {
      this.Program = ProgramModel.Deserialize(JSON.parse(data));
      this.ExecutableProgram = Helper.Convert(this.Program);

      data = localStorage.get("SETTINGS_DATA");
      localStorage.remove("SETTINGS_DATA");

      if(data)
      {
        this.Settings = JSON.parse(data);
        localStorage.set("SETTINGS_DATA_FOR_REGENERATE", data);
      }
    }
    else
    {
      this.router.navigate(['/']);
    }
  } 
  
  toggle()
  {
    this.Icon = !this.Icon;
  }

  private DuplicateProcesses(): ExecutableProgramModel
  {
      let program: ExecutableProgramModel = new ExecutableProgramModel();
      program.Name = this.ExecutableProgram.Name;

      this.SettingsRef.Processes.forEach(pcm=>{
        let cmdModel: ProcessCommandsModel = this.ExecutableProgram.Processes.find(x => x.Name == pcm.Name);

        for(let i=0; i<pcm.Value; i++)
        {
            let commands: ProcessCommandsModel = this.Duplicate(cmdModel);

            if (pcm.Value>1)
            {
              commands.Name += " - " + i;
            }

            program.Add(commands);
        }
      });

      return program;
  } 

  private Duplicate(commands: ProcessCommandsModel): ProcessCommandsModel
  {
      let pcm: ProcessCommandsModel = new ProcessCommandsModel()
      pcm.Name = commands.Name;

      commands.Commands.forEach(command=>{
        pcm.Add(command.Clone());
      });

      return pcm;
  }

  public run()
  {
    this.spinner.show();
    this.SimulationExecProgram = this.DuplicateProcesses();
    
    this.apiService.simulate({ Program: this.SimulationExecProgram, Settings: this.Settings}).subscribe(data => {
      this.Logs = Helper.DeserializeLogs(data);
  
      this.localStorage.set("SIMULATION", JSON.stringify({
        Program: this.SimulationExecProgram,
        Logs: this.Logs,
        Variables: this.Settings.Variables,
        Semaphores: this.Settings.Semaphores
      }));

      this.localStorage.set("SETTINGS_DATA", JSON.stringify(this.Settings));
      this.spinner.hide();
      
      this.router.navigate(["/simulation"]);
    }); 
  }
}
