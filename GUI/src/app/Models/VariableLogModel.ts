import { LogModel } from "./LogModel";
import { CommandModel } from "./CommandModel";

export class VariableLogModel extends LogModel
{
    public Variable: string;
    public Value: number;

    public static Deserialize(obj: any): VariableLogModel
    {
        let trueObj: VariableLogModel = new VariableLogModel();
        trueObj.Type = obj.Type;
        trueObj.Process = obj.Process;
        trueObj.Command = CommandModel.Deserialize(obj.Command);
        trueObj.Value = obj.Value;
        trueObj.Variable = obj.Variable;

        return trueObj;
    }
}