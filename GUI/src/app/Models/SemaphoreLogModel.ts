import { LogModel } from "./LogModel";
import { CommandModel } from "./CommandModel";

export class SemaphoreLogModel extends LogModel
{
    public Semaphore: string; 

    public static Deserialize(obj: any): SemaphoreLogModel
    {
        let trueObj: SemaphoreLogModel = new SemaphoreLogModel();
        trueObj.Type = obj.Type;
        trueObj.Process = obj.Process;
        trueObj.Command = CommandModel.Deserialize(obj.Command);
        trueObj.Semaphore = obj.Semaphore;

        return trueObj;
    }
}