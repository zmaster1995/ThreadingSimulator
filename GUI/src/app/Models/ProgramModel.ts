import { ProcessBlocksModel } from "./ProcessBlocksModel";
import { isNullOrUndefined } from "util";

export class ProgramModel
{
    public Name: string;
    public Processes: ProcessBlocksModel[];

    public ProcessCount(): number
    {
        return this.Processes != null ? this.Processes.length : 0;
    }

    public IsValid(): boolean
    {
        if (!isNullOrUndefined(this.Name) && this.ProcessCount() > 0 
                && this.ProcessCount() == this.Distinct(this.Select(this.Processes, x=>x.Name)).length)
        {
            for(let i=0;i<this.ProcessCount();i++)
            {
                if(!this.Processes[i].IsValid())
                {
                    return false;
                }
            }

            return true;
        }

        return false;
    }
    
    public Add(commands: ProcessBlocksModel)
    {
        if(this.Processes==null)
        {
            this.Processes =  [];
        }

        this.Processes.push(commands);
    }

    public Clone(): ProgramModel
    {
        return ProgramModel.Deserialize(this);
    }

    public static Deserialize(obj: any): ProgramModel
    {
        let trueObj: ProgramModel = new ProgramModel();

        trueObj.Name = obj.Name;

        if(obj.Processes != null)
        {
            trueObj.Processes = [];
    
            obj.Processes.forEach(tmp => {
                trueObj.Processes.push(ProcessBlocksModel.Deserialize(tmp));
            });       
        }

        return trueObj;
    }

    public Select(arr: any[], func): any[]
    {
        let retArr = [];

        for(let obj in arr)
        {
            retArr.push(func(obj));
        }

        return retArr;
    }

    public Distinct(arr: any[]): any[]
    {
        let retArr = [];

        for(let obj in arr)
        {
            if(retArr.indexOf(obj) == -1)
            {
                retArr.push(obj);
            }
        }

        return retArr;
    }
}