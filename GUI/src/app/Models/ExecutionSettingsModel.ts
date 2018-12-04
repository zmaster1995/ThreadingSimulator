import { InitialValueModel } from "./InitialValueModel";

export class ExecutionSettingsModel
{
    private dispatcher: number[] = [];

    public Variables: InitialValueModel[] = [];
    public Semaphores: InitialValueModel[] = [];

    public DispatcherEnabled: boolean = false;

    public get Dispatcher(): number[]
    {
        return this.DispatcherEnabled ? this.dispatcher : [];
    }

    public set Dispatcher(value: number[])
    {
        this.dispatcher = value;
    }
}