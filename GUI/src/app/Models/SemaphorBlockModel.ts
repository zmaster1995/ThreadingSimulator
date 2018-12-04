import { BlockModel } from "./BlockModel";
import { SemaphorOperationType } from "../Enums/SemaphorOperationType";
import { isNullOrUndefined } from "util";
import { BlockType } from "../Enums/BlockType";

export class SemaphorBlockModel extends BlockModel
{
    public SemaphorName: string;
    public SemaphorOperation: SemaphorOperationType = SemaphorOperationType.ENTER;

    public IsValid(): boolean
    {
        return !isNullOrUndefined(this.SemaphorName);
    }
   
    public Clone(): SemaphorBlockModel
    {
        return SemaphorBlockModel.Deserialize(this);
    }

    public static Deserialize(obj: any): SemaphorBlockModel
    {
        let trueObj: SemaphorBlockModel = new SemaphorBlockModel();

        trueObj.Type = obj.Type;
        trueObj.SemaphorName = obj.SemaphorName;
        trueObj.SemaphorOperation = obj.SemaphorOperation;

        return trueObj;
    }
	
    constructor()
    {
        super(BlockType.SEMAPHOR);
    }
}