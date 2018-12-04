import { BlockModel } from "./BlockModel";
import { BlockType } from "../Enums/BlockType";
import { Helper } from "../Helper";

export class LoopBlockModel extends BlockModel
{
    public Children: BlockModel[];

    public Iterations: number = 1;

    public IsValid(): boolean
    {
        if(this.Iterations>0 && this.Children!=null && this.Children.length>0)
            {
                for(let i=0;i<this.Children.length; i++)
                {
                    if(!this.Children[i].IsValid())
                    {
                        return false;
                    } 
                }

                return true;
            }

        return false;
    }
   
    public Clone(): LoopBlockModel
    {
        return LoopBlockModel.Deserialize(this);
    }

    public static Deserialize(obj: any): LoopBlockModel
    {
        let trueObj: LoopBlockModel = new LoopBlockModel();

        trueObj.Type = obj.Type;
        trueObj.Iterations = obj.Iterations;

        if(obj.Children!=null)
        {
            trueObj.Children = [];

            obj.Children.forEach(tmp => {
                trueObj.Children.push(Helper.DeserializeSpecific(tmp));
            });
        }

        return trueObj;
    }

    constructor()
    {
        super(BlockType.LOOP);
    }

    public Add(block: BlockModel, position: number)
    {
        if(this.Children == null)
        {
            this.Children = [];
        }
        
        this.Children = this.InsertArrayAt(this.Children, position, block);
    }

    private InsertArrayAt(array: any[], index: number, arrayToInsert: any): any[] {
        Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
        return array;
    }
}