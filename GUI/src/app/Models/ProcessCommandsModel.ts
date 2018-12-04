import { CommandModel } from "./CommandModel";

export class ProcessCommandsModel
{
    public Name: string;
    public Commands: CommandModel[];
    
    public CommandCount(): number
    {
        return this.Commands != null ? this.Commands.length : -1;
    }

    public Add(command: CommandModel)
    {
        if (this.Commands == null)
        {
            this.Commands = [];
        }

        this.Commands.push(command);
    }

    public AddRange(commands: CommandModel[])
    {
        commands.forEach(command => this.Commands.push(command));
    }

    public static Deserialize(obj: any): ProcessCommandsModel
    {
        let trueObj: ProcessCommandsModel = new ProcessCommandsModel();

        trueObj.Name = obj.Name;
        
        if(obj.Commands)
        {
            trueObj.Commands = [];

            obj.Commands.forEach(element => {
                trueObj.Commands.push(CommandModel.Deserialize(element));
            });
        }

        return trueObj;
    }
}