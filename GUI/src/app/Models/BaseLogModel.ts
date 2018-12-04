import { LogType } from "../Enums/LogType";

export class BaseLogModel
{
    public Type: LogType;

    public static Deserialize(obj: any): BaseLogModel
    {
        let trueObj: BaseLogModel = new BaseLogModel();
        trueObj.Type = obj.Type;

        return trueObj;
    }
}