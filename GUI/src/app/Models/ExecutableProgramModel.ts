import { ProcessCommandsModel } from "./ProcessCommandsModel";

export class ExecutableProgramModel
{
    public Name: string;
    public Processes: ProcessCommandsModel[];
    
    public ProcessCount(): number
    {
        return this.Processes != null ? this.Processes.length : -1;
    }
    
    public Add(commands: ProcessCommandsModel)
    {
        if(this.Processes==null)
        {
            this.Processes = [];
        }

        this.Processes.push(commands);
    }

    public static Deserialize(obj: any): ExecutableProgramModel
    {
        let trueObj: ExecutableProgramModel = new ExecutableProgramModel();

        trueObj.Name = obj.Name;
        
        if(obj.Processes)
        {
            trueObj.Processes = [];

            obj.Processes.forEach(element => {
                trueObj.Processes.push(ProcessCommandsModel.Deserialize(element));
            });
        }

        return trueObj;
    }
}