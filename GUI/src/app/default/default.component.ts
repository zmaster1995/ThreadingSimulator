import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ProgramModel } from '../Models/ProgramModel';
import { BlockModel } from '../Models/BlockModel';
import { SemaphorBlockModel } from '../Models/SemaphorBlockModel';
import { VariableBlockModel } from '../Models/VariableBlockModel';
import { LoopBlockModel } from '../Models/LoopBlockModel';
import { MatDialog } from '@angular/material';
import { ProcessBlocksModel } from '../Models/ProcessBlocksModel';
import { SemaphorOperationType } from '../Enums/SemaphorOperationType';
import { VariableOperationType } from '../Enums/VariableOperationType';
import { Helper } from '../Helper';
import { ExecutableProgramModel } from '../Models/ExecutableProgramModel';
import { PreviewDialogComponent } from '../preview-dialog/preview-dialog.component';
import * as autoScroll from 'dom-autoscroller';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-localstorage';

@Component({
  selector: 'default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements AfterViewInit {

  public Programs: ProgramModel[] = [];
  public SelectedProgram: ProgramModel;
  public EditMode: boolean = false;
  public AddMode: boolean = false;

  @ViewChild("toScroll") toScroll: ElementRef;
  @ViewChild("fileDialog") File: ElementRef;

  public BlockInstances: BlockModel[] = [
    new SemaphorBlockModel(),
    new VariableBlockModel(),
    new BlockModel(),
    new LoopBlockModel()
  ]
  
  private backup: ProgramModel;

  constructor(public dialog: MatDialog, private localStorage: LocalStorageService, private router: Router)
  {
    let json: string = this.localStorage.get("PREVIOUS_PROGRAMS");

    if(json)
    {
      this.Programs = Helper.DeserializePrograms(JSON.parse(json));
    }
  }

  ngAfterViewInit() {
    autoScroll([
      this.toScroll.nativeElement
    ], {
      margin: 50,
      maxSpeed: 20,
      autoScroll: function() {
        return this.down;
      }
    });
  }

  public listClick(event: any, newValue: ProgramModel) 
  {
    this.SelectedProgram = newValue;
  }

  public isNotEditMode(): boolean
  {
    return !this.EditMode;
  }

  public isEditEnabled(): boolean
  {
    return !this.EditMode && this.SelectedProgram != null;
  }

  public isEditMode(): boolean
  {
    return this.EditMode;
  }

  public dropped(event: any, process: ProcessBlocksModel)
  {
    if(!process.Blocks)
    {
      process.Blocks = [Helper.DeserializeSpecific(event.value)];
    }
    else
    {
      let ind: number = process.Blocks.indexOf(event.value);
      process.Blocks[ind] = Helper.DeserializeSpecific(event.value);
    }
  }

  public delete(program: ProgramModel)
  {
    this.removeAt(this.Programs, this.Programs.indexOf(program));
  }

  public deleteProcess(process: ProcessBlocksModel,)
  {
    this.removeAt(this.SelectedProgram.Processes, this.SelectedProgram.Processes.indexOf(process));
  }

  public removeAt(array: any[], index: number): void
  {
    array.splice(index, 1);
  }

  public edit()
  {
    this.EditMode = true;
    this.backup = this.SelectedProgram;
    this.SelectedProgram = this.backup.Clone();
  }

  public addNew()
  {
    this.EditMode = true;
    this.AddMode = true;
    this.SelectedProgram = new ProgramModel();
  }

  public cancel()
  {
    if(this.AddMode)
    {
      this.SelectedProgram = null;
    }
    else
    {
      this.SelectedProgram = this.backup;
    }

    this.EditMode = false;
    this.AddMode = false;
  }

  public save()
  {
    if(this.AddMode)
    {
      this.Programs.push(this.SelectedProgram);
    }
    else
    {
      let ind: number = this.Programs.indexOf(this.backup);
      this.Programs[ind] = this.SelectedProgram;
    }
    
    this.EditMode = false;
    this.AddMode = false;
  }

  public isValid(): boolean
  {
    return this.SelectedProgram.IsValid();
  }

  public addNewProcess()
  {
    if(this.SelectedProgram.Processes == null)
    {
      this.SelectedProgram.Processes = [];
    }

    this.SelectedProgram.Processes.push(new ProcessBlocksModel());
  }

  public preview()
  {
    let executableProgram: ExecutableProgramModel = Helper.Convert(this.SelectedProgram);

    this.dialog.open(PreviewDialogComponent, {
      width: (Math.min(executableProgram.ProcessCount() * 250, 1000) + 50) + 'px',
      data: executableProgram
    });
  }

  public run()
  {
    this.localStorage.set("SETTINGS", JSON.stringify(this.SelectedProgram));
    this.localStorage.set("PREVIOUS_PROGRAMS", JSON.stringify(this.Programs));
    this.router.navigate(['/settings']);
  }

  public Import()
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
        this.Programs = Helper.DeserializePrograms(JSON.parse(text));
        this.SelectedProgram = null;
      };

      reader.readAsText(this.File.nativeElement.files[0]);
    }
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

  public Export()
  {
    let current: Date = new Date(Date.now());

    let date: string = current.getFullYear()+"-"+current.getDate()+"-"+current.getMonth()+"-"+current.getHours()+"-"+current.getMonth()+"-"+current.getSeconds();
    let name: string = "programs" + date + ".json";

    this.download(name, JSON.stringify(this.Programs));
  }
}
