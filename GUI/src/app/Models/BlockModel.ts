import { BlockType } from "../Enums/BlockType";
import { isNullOrUndefined } from "util";

export class BlockModel
{
    public Type: BlockType  

    public IsValid(): boolean
    {
        return true;
    }

    constructor(type?: BlockType)
    {
        this.Type = isNullOrUndefined(type) ? BlockType.OTHER : type;
    }
   
    public Clone(): BlockModel
    {
        return BlockModel.Deserialize(this);
    }

    public static Deserialize(obj: any): BlockModel
    {
        let trueObj: BlockModel = new BlockModel();

        trueObj.Type = obj.Type;

        return trueObj;
    }
}