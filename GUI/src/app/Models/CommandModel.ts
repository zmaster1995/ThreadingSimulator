import { CommandType } from "../Enums/CommandType";

export class CommandModel
{
    public Type: CommandType;
    public Variable: string;
    public Value: number;

    public DisplayColor: boolean;

    
    public Clone(): CommandModel
    {
        return CommandModel.Deserialize(this);
    }

    public static Deserialize(obj: any): CommandModel
    {
        if(obj == null)
        {
            return null;
        }

        let trueObj: CommandModel = new CommandModel();

        trueObj.DisplayColor = obj.DisplayColor;
        trueObj.Type = obj.Type;
        trueObj.Value = obj.Value;
        trueObj.Variable = obj.Variable;

        return trueObj;
    }
}