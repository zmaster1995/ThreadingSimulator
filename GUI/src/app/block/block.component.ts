import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlockModel } from '../Models/BlockModel';
import { SemaphorOperationType } from '../Enums/SemaphorOperationType';
import { VariableOperationType } from '../Enums/VariableOperationType';
import { Helper } from '../Helper';

@Component({
  selector: 'block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Input("val") Block: any;
  @Input("index") Index: number;
  @Input("length") Length: number;
  @Input("array") Array: any[];
  @Input("edit") EditMode: boolean;
  @Output("arrayChange") arrayChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  public SemaphoreOperations: any[] = [
    {
      Val: SemaphorOperationType.ENTER,
      Name: "Enter"
    },
    {
      Val: SemaphorOperationType.EXIT,
      Name: "Exit"
    }
  ];

  public variableOperations: any[] = [
    {
      Val: VariableOperationType.GET,
      Name: "Get"
    },
    {
      Val: VariableOperationType.SET,
      Name: "Set"
    },
    {
      Val: VariableOperationType.INCREASE,
      Name: "Increase"
    },
    {
      Val: VariableOperationType.DECREASE,
      Name: "Decrease"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  public dropped(event: any)
  {
    if(!this.Block.Children)
    {
      this.Block.Children = [Helper.DeserializeSpecific(event.value)];
    }
    else
    {
      let ind: number = this.Block.Children.indexOf(event.value);
      this.Block.Children[ind] = Helper.DeserializeSpecific(event.value);
    }
  }

  public deleteThis()
  {
    let arr: BlockModel[] = [];

    for(let i=0;i<this.Array.length;i++)
    {
      if(this.Array[i] != this.Block)
      {
        arr.push(this.Array[i]);
      }
    }

    this.arrayChange.emit(arr);
  }

}
