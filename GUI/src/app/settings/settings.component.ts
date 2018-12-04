import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ExecutionSettingsModel } from '../Models/ExecutionSettingsModel';
import { ProgramModel } from '../Models/ProgramModel';
import { InitialValueModel } from '../Models/InitialValueModel';
import { ExecutableProgramModel } from '../Models/ExecutableProgramModel';
import { Helper } from '../Helper';
import { ProcessCountModel } from '../Models/ProcessCountModel';
import { ProcessCommandsModel } from '../Models/ProcessCommandsModel';
import { BlockType } from '../Enums/BlockType';
import { BlockModel } from '../Models/BlockModel';
import { SemaphorBlockModel } from '../Models/SemaphorBlockModel';
import { VariableBlockModel } from '../Models/VariableBlockModel';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input("program") Program: ProgramModel;
  @Input("settings") Settings: ExecutionSettingsModel;
  @ViewChild("fileDialog") File: ElementRef;
  public Processes: ProcessCountModel[];
  public CurrentMax: number;
  public ThreadNumbers: number[];
  public Text: string;

  constructor() { }

  ngOnInit() {
    this.Settings.Variables = [];
    this.Settings.Semaphores = [];
    this.Processes = [];
    this.CurrentMax = this.Program.ProcessCount();
    this.InitThreadNumbers();

    for(let process = 0; process<this.Program.ProcessCount(); process++)
    {
      let pcm: ProcessCountModel = new ProcessCountModel();
      pcm.Name = this.Program.Processes[process].Name;
      pcm.Value = 1;

      this.Processes.push(pcm);

      for(let block = 0; block < this.Program.Processes[process].Blocks.length; block++)
      {
        let ivm: InitialValueModel;

        switch(this.Program.Processes[process].Blocks[block].Type)
        {
          case BlockType.SEMAPHOR:
            if(this.Settings.Semaphores.find(x=>x.Name == (<SemaphorBlockModel>this.Program.Processes[process].Blocks[block]).SemaphorName) == null)
            {
              ivm = new InitialValueModel();

              ivm.Value = 1;
              ivm.Name = (<SemaphorBlockModel>this.Program.Processes[process].Blocks[block]).SemaphorName;

              this.Settings.Semaphores.push(ivm);
            }

            break;
          case BlockType.SHARED_VARIABLE:
            if(this.Settings.Variables.find(x=>x.Name == (<VariableBlockModel>this.Program.Processes[process].Blocks[block]).VariableName) == null)
            {
              ivm = new InitialValueModel();

              ivm.Value = 0;
              ivm.Name = (<VariableBlockModel>this.Program.Processes[process].Blocks[block]).VariableName;

              this.Settings.Variables.push(ivm);
            }

            break;
        }
      }
    }
  }

  public removeAt(array: any[], index: number): void
  {
    array.splice(index, 1);
  }

  public insertAt(array: any[], index: number, item: any): void 
  {
    array.splice(index, 0, item);
  }

  public dispacherChanged()
  {
    this.Settings.DispatcherEnabled = !this.Settings.DispatcherEnabled;
     
    let tmp: ExecutionSettingsModel = this.Settings;
    this.Settings = null;
    this.Settings = tmp;
  }

  public threadCountChanged()
  {
    let sum: number = 0;

    this.Processes.forEach(pcm=>sum+=pcm.Value);

    this.CurrentMax = sum;
    this.InitThreadNumbers();
  }

  onDrop(dropResult: any, move: boolean) {

    if(dropResult.droppedElement.className.indexOf("copy") == -1)
    {
      this.removeAt(this.Settings.Dispatcher, dropResult.removedIndex);
    }

    this.insertAt(this.Settings.Dispatcher, dropResult.addedIndex, dropResult.payload);
	}

  public InitThreadNumbers(): void {
    let tmp: number[] = [];

    for(let i=1;i<=this.CurrentMax;i++)
    {
      tmp.push(i);
    }

    this.ThreadNumbers = tmp;
    
    if(!this.Settings.Dispatcher)
    {
      this.Settings.Dispatcher = [];
    }
    
    this.Settings.Dispatcher = this.Settings.Dispatcher.filter(num => num<=this.CurrentMax);
  }

  public getSource(ind: number)
  {
    return this.ThreadNumbers[ind];
  }

  public getTarget(ind: number)
  {
    return this.Settings.Dispatcher[ind];
  }

  private parseScenario(scenario: string)
  {
    if(scenario == undefined)
    {
      return;
    }

    let tmp: number[] = [];

    for(let i=0;i<scenario.length; i++)
    {
      let num: number = +scenario.charAt(i);
      
      if(num == undefined || this.isCharacter(num.toString()))
      {
        alert("Parsing failed. Text should only contain numbers");
        return;
      }
      else if(num<1 || num>this.CurrentMax)
      {
        alert("Numbers must not be less then 0 or greater than current maximum number of processes");
        return;
      }

      tmp.push(num);
    }

    this.Settings.Dispatcher = tmp;
  }

  public isCharacter(c: string): boolean
  {
    return c.toLowerCase() != c.toUpperCase();
  }

  public inputScenario()
  {
    this.parseScenario(this.Text);
  }

  public outputScenario()
  {
    this.Text = "";
    
    this.Settings.Dispatcher.forEach(x=>this.Text+=x);
  }

  public importFromFile()
  {
    this.File.nativeElement.click();  
  }

  public readFromFile()
  {
    if(this.File.nativeElement.files && this.File.nativeElement.files[0])
    {    
      let reader: FileReader = new FileReader();
      reader.onload = () => {  
        this.File.nativeElement.value = "";
        
        let text: string = reader.result.toString();
        this.parseScenario(text);
      };
      reader.readAsText(this.File.nativeElement.files[0]);
    }
  }

  public deleteFromMenu(index: number)
  {
    this.removeAt(this.Settings.Dispatcher, index);
  }
}
