import { BlockModel } from "./BlockModel";
import { isNullOrUndefined } from "util";
import { Helper } from "../Helper";

export class ProcessBlocksModel
{
    public Name: string;
    public Blocks: BlockModel[];

    public IsValid(): boolean
    {
        if(!isNullOrUndefined(this.Name) && this.Blocks != null && this.Blocks.length>0)
        {
            for(let i=0;i<this.Blocks.length; i++)
            {
                if(!this.Blocks[i].IsValid())
                {
                    return false;
                }
            }

            return true;
        }

        return false;
    }

    public Add(command: BlockModel, position: number)
    {
        if (this.Blocks == null)
        {
            this.Blocks = [];
        }

        this.Blocks = this.InsertArrayAt(this.Blocks, position, command);
    }

    public AddRange(commands: BlockModel[])
    {
        commands.forEach(command => this.Blocks.push(command));
    }

    private InsertArrayAt(array: any[], index: number, arrayToInsert: any): any[] {
        Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
        return array;
    }

    
    public Clone(): ProcessBlocksModel
    {
        return ProcessBlocksModel.Deserialize(JSON.parse(JSON.stringify(this)));
    }

    public static Deserialize(obj: any): ProcessBlocksModel
    {
        let trueObj: ProcessBlocksModel = new ProcessBlocksModel();
        trueObj.Name = obj.Name;

        if(obj.Blocks != null)
        {
            trueObj.Blocks = [];
  
            obj.Blocks.forEach(tmp => {
                trueObj.Blocks.push(Helper.DeserializeSpecific(tmp));
            });     
        }

        return trueObj;
    }
}