import { BlockType } from "../Enums/BlockType";
import { VariableOperationType } from "../Enums/VariableOperationType";
import { isNullOrUndefined } from "util";
import { BlockModel } from "./BlockModel";

export class VariableBlockModel extends BlockModel
{
    public VariableOperationType: VariableOperationType = VariableOperationType.GET;

    public VariableName: string;
    
    public Value: number;

    public IsValid(): boolean
    {
        return !isNullOrUndefined(this.VariableName) && (this.VariableOperationType == VariableOperationType.GET || !isNullOrUndefined(this.Value));
    }
   
    public Clone(): VariableBlockModel
    {
        return VariableBlockModel.Deserialize(this);
    }

    public static Deserialize(obj: any): VariableBlockModel
    {
        let trueObj: VariableBlockModel = new VariableBlockModel();

        trueObj.Type = obj.Type;
        trueObj.Value = obj.Value;
        trueObj.VariableName = obj.VariableName;
        trueObj.VariableOperationType = obj.VariableOperationType;

        return trueObj;
    }

    constructor()
    {
        super(BlockType.SHARED_VARIABLE);
    }
}