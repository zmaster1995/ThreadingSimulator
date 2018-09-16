using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThreadingSimulator.Enums;
using ThreadingSimulator.Models;

namespace ThreadingSimulator.Converters
{
    public static class BlockToCommandConverter
    {
        public static ExecutableProgramModel Convert(ProgramModel program)
        {
            ExecutableProgramModel retModel = new ExecutableProgramModel();
            retModel.Name = program.Name;

            foreach(ProcessBlocksModel blocks in program.Processes)
            {
                retModel.Add(new ProcessCommandsModel()
                {
                    Name = blocks.Name,
                    Commands = InternalConvert(blocks.Blocks.ToList())
                });
            }

            return retModel;
        }
        
        private static List<CommandModel> InternalConvert(List<BlockModel> blocks)
        {
            List<CommandModel> commands = new List<CommandModel>();

            foreach (BlockModel block in blocks)
            {
                switch (block.Type)
                {
                    case BlockType.LOOP:
                        commands.AddRange(InternalConvert(block as LoopBlockModel));
                        break;
                    case BlockType.SEMAPHOR:
                        commands.Add(InternalConvert(block as SemaphorBlockModel));
                        break;
                    case BlockType.SHARED_VARIABLE:
                        commands.AddRange(InternalConvert(block as VariableBlockModel));
                        break;
                    case BlockType.OTHER:
                        commands.Add(new CommandModel()
                        {
                            Type = CommandType.OTHER
                        });
                        break;
                }
            }

            return commands;
        }

        private static CommandModel InternalConvert(SemaphorBlockModel SemaphorBlock)
        {
            return new CommandModel()
            {
                Variable = SemaphorBlock.SemaphorName,
                Type = SemaphorBlock.SemaphorOperation == SemaphorOperationType.ENTER ?
                CommandType.SEMAPHOR_ENTER : CommandType.SEMAPHOR_EXIT
            };
        }

        private static List<CommandModel> InternalConvert(LoopBlockModel loopBlock)
        {
            List<CommandModel> commands = new List<CommandModel>();

            for (int i=0;i<loopBlock.Iterations;i++)
            {
                commands.AddRange(InternalConvert(loopBlock.Children.ToList()));
            }

            return commands;
        }

        private static List<CommandModel> InternalConvert(VariableBlockModel variableBlock)
        {
            List<CommandModel> commands = new List<CommandModel>();
            
            switch(variableBlock.VariableOperationType)
            {
                case VariableOperationType.GET:
                    commands.Add(new CommandModel()
                    {
                        Variable = variableBlock.VariableName,
                        Type = CommandType.SHARED_VARIABLE_GET
                    });
                    break;
                case VariableOperationType.SET:
                    commands.Add(new CommandModel()
                    {
                        Variable = variableBlock.VariableName,
                        Type = CommandType.SHARED_VARIABLE_SET,
                        Value = variableBlock.Value
                    });
                    break;
                case VariableOperationType.INCREASE:
                case VariableOperationType.DECREASE:
                    commands.Add(new CommandModel()
                    {
                        Variable = variableBlock.VariableName,
                        Type = CommandType.SHARED_VARIABLE_GET
                    });
                    commands.Add(new CommandModel()
                    {
                        Variable = variableBlock.VariableName,
                        Type = variableBlock.VariableOperationType == VariableOperationType.INCREASE ?
                        CommandType.SHARED_VARIABLE_CALC_SUM : CommandType.SHARED_VARIABLE_CALC_DIFF,
                        Value = variableBlock.Value.Value
                    });
                    commands.Add(new CommandModel()
                    {
                        Variable = variableBlock.VariableName,
                        Type = CommandType.SHARED_VARIABLE_SET
                    });
                    break;
            }

            return commands;
        }
    }
}
