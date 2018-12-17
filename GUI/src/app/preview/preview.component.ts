import { Component, OnInit, Input } from '@angular/core';
import { ProcessCommandsModel } from '../Models/ProcessCommandsModel';
import { Helper } from '../Helper';
import { CommandModel } from '../Models/CommandModel';
import * as scrollIntoView from 'scroll-into-view';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {

  @Input("processes") Processes: ProcessCommandsModel[];
  @Input("simulation") isSimulation: boolean = false;
  @Input("processStatus") processStatus: boolean[];

  constructor() { }

  public getText(command: CommandModel): string
  {
    return Helper.GetText(command);
  }

  public FocusCommand(processNo: number, commandNo: number, undo: boolean, callback: any)
  {

    let commands: NodeListOf<Element> | HTMLCollectionOf<Element> = document.getElementsByClassName("process")[processNo].getElementsByClassName("command");
    
    if(commands.length>commandNo)
    {
      scrollIntoView(commands[commandNo], { time: 600 }, callback);
    }
    else if(undo && commands.length==commandNo)
    {
      callback();
    }
  }
}
