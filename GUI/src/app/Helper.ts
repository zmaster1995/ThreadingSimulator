import { BlockModel } from "./Models/BlockModel";
import { BlockType } from "./Enums/BlockType";
import { SemaphorBlockModel } from "./Models/SemaphorBlockModel";
import { VariableBlockModel } from "./Models/VariableBlockModel";
import { LoopBlockModel } from "./Models/LoopBlockModel";
import { ProgramModel } from "./Models/ProgramModel";
import { ExecutableProgramModel } from "./Models/ExecutableProgramModel";
import { ProcessBlocksModel } from "./Models/ProcessBlocksModel";
import { ProcessCommandsModel } from "./Models/ProcessCommandsModel";
import { CommandModel } from "./Models/CommandModel";
import { CommandType } from "./Enums/CommandType";
import { SemaphorOperationType } from "./Enums/SemaphorOperationType";
import { VariableOperationType } from "./Enums/VariableOperationType";
import { BaseLogModel } from "./Models/BaseLogModel";
import { LogType } from "./Enums/LogType";
import { LogModel } from "./Models/LogModel";
import { SemaphoreLogModel } from "./Models/SemaphoreLogModel";
import { VariableLogModel } from "./Models/VariableLogModel";

export class Helper
{
    public static DeserializeSpecific(obj: any): BlockModel
    {
        switch(obj.Type)
        {
            case BlockType.OTHER:
                return BlockModel.Deserialize(obj);
            case BlockType.SEMAPHOR:
                return SemaphorBlockModel.Deserialize(obj);
            case BlockType.SHARED_VARIABLE:
                return VariableBlockModel.Deserialize(obj);
            case BlockType.LOOP:
                return LoopBlockModel.Deserialize(obj);
        }
    }

    private static MergeArrays(target: CommandModel[], from: CommandModel[]): void
    {
        from.forEach(el=>{target.push(el)});
    }

    public static Convert(program: ProgramModel): ExecutableProgramModel
    {
        let retModel: ExecutableProgramModel = new ExecutableProgramModel();
        retModel.Name = program.Name;

        program.Processes.forEach(process => {
            let pcm: ProcessCommandsModel = new ProcessCommandsModel();
            pcm.Name = process.Name;
            pcm.Commands = Helper.InternalConvert(process.Blocks)

            retModel.Add(pcm);
        });

        return retModel;
    }
    
    private static InternalConvert(blocks: BlockModel[]): CommandModel[]
    {
        let commands: CommandModel[] = [];

        blocks.forEach(block=>{
            switch (block.Type)
            {
                case BlockType.LOOP:
                    Helper.MergeArrays(commands, Helper.InternalConvertLoop(<LoopBlockModel>block));
                    break;
                case BlockType.SEMAPHOR:
                    commands.push(Helper.InternalConvertSemaphore(<SemaphorBlockModel>block));
                    break;
                case BlockType.SHARED_VARIABLE:
                    Helper.MergeArrays(commands, Helper.InternalConvertVariable(<VariableBlockModel>block));
                    break;
                case BlockType.OTHER:
                    let cmd: CommandModel = new CommandModel();
                    cmd.Type = CommandType.OTHER;

                    commands.push(cmd);
                    break;
            }
        })

        return commands;
    }

    private static InternalConvertSemaphore(SemaphorBlock: SemaphorBlockModel): CommandModel
    {
        let cmd: CommandModel = new CommandModel();

        cmd.Variable = SemaphorBlock.SemaphorName;
        cmd.Type = SemaphorBlock.SemaphorOperation == SemaphorOperationType.ENTER ? CommandType.SEMAPHOR_ENTER : CommandType.SEMAPHOR_EXIT;

        return cmd;
    }

    private static InternalConvertLoop(loopBlock: LoopBlockModel): CommandModel[]
    {
        let commands: CommandModel[] = [];

        for (let i=0;i<loopBlock.Iterations;i++)
        {
            Helper.MergeArrays(commands, Helper.InternalConvert(loopBlock.Children));
        }

        return commands;
    }

    private static InternalConvertVariable(variableBlock: VariableBlockModel): CommandModel[]
    {
        let commands: CommandModel[] = [];
        let cmd: CommandModel;
        
        switch(variableBlock.VariableOperationType)
        {
            case VariableOperationType.GET:
                cmd = new CommandModel();
             
                cmd.Variable = variableBlock.VariableName;
                cmd.Type = CommandType.SHARED_VARIABLE_GET;

                commands.push(cmd);
                break;
            case VariableOperationType.SET:
                cmd = new CommandModel();
            
                cmd.Variable = variableBlock.VariableName;
                cmd.Type = CommandType.SHARED_VARIABLE_SET;
                cmd.Value = variableBlock.Value;

                commands.push(cmd);
                break;
            case VariableOperationType.INCREASE:
            case VariableOperationType.DECREASE:
                cmd = new CommandModel();
                
                cmd.Variable = variableBlock.VariableName;
                cmd.Type = CommandType.SHARED_VARIABLE_GET;

                commands.push(cmd);

                
                cmd = new CommandModel();
                
                
                cmd.Variable = variableBlock.VariableName;
                cmd.Type = variableBlock.VariableOperationType == VariableOperationType.INCREASE ? CommandType.SHARED_VARIABLE_CALC_SUM : CommandType.SHARED_VARIABLE_CALC_DIFF,
                cmd.Value = variableBlock.Value;

                commands.push(cmd);

                
                cmd = new CommandModel();
                
                cmd.Variable = variableBlock.VariableName;
                cmd.Type = CommandType.SHARED_VARIABLE_SET;

                commands.push(cmd);
                break;
        }

        return commands;
    }

    public static GetText(command: CommandModel): string
    {
        switch (command.Type)
        {
            case CommandType.SEMAPHOR_ENTER:
                return "Enter critical region - " + command.Variable;
            case CommandType.SEMAPHOR_EXIT:
            return "Exit critical region - " + command.Variable;
            case CommandType.SHARED_VARIABLE_GET:
            return "Get value of variable - " + command.Variable;
            case CommandType.SHARED_VARIABLE_SET:
            return "Set value of variable - " + command.Variable;
            case CommandType.SHARED_VARIABLE_CALC_SUM:
            return "Increase value of " + command.Variable + " by " + command.Value;
            case CommandType.SHARED_VARIABLE_CALC_DIFF:
            return "Decrease value of " + command.Variable + " by " + command.Value;
            default:
                return "Block of commands";
        }
    }

    public static DeserializeLogs(jsonObj: any): BaseLogModel[]
    {
        let logs: BaseLogModel[] = [];
        jsonObj.forEach(element => {
            logs.push(this.DeserializeLog(element));
        });
        return logs;
    }

    private static DeserializeLog(obj: any): BaseLogModel
    {
        switch(obj.Type)
        {
            case LogType.ALL_SUSPENDED:
            case LogType.DEADLOCK:
                return BaseLogModel.Deserialize(obj);
            case LogType.AWAKE_PROCESS:
            case LogType.DISPATCHER_SKIP:
            case LogType.MOVE:
                return LogModel.Deserialize(obj);
            case LogType.ENTER_REGION:
            case LogType.EXIT_REGION:
            case LogType.SUSPENDED:
                return SemaphoreLogModel.Deserialize(obj);
            case LogType.CALC_VALUE:
            case LogType.GET_VALUE:
            case LogType.SET_VALUE:
                return VariableLogModel.Deserialize(obj);
        }
    }

    public static DeserializePrograms(obj: any): ProgramModel[]
    {
        let tmp: ProgramModel[] = [];

        obj.forEach(element => {
            tmp.push(ProgramModel.Deserialize(element));
        });

        return tmp;
    }
}