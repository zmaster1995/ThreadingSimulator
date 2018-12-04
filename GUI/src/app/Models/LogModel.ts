import { BaseLogModel } from "./BaseLogModel";
import { CommandModel } from "./CommandModel";

export class LogModel extends BaseLogModel
{
    public Process: number;
    public Command: CommandModel;
    
    public ShouldDisplay(): boolean
    {
        return this.Command != null;
    }

    public static Deserialize(obj: any): LogModel
    {
        let trueObj: LogModel = new LogModel();
        trueObj.Type = obj.Type;
        trueObj.Process = obj.Process;
        trueObj.Command = CommandModel.Deserialize(obj.Command);

        return trueObj;
    }
}