export class DispatcherValue
{
    public ValueChanged: any;
    private value: number = -1;

    public get Value(): number
    {
        return this.value;
    }

    public set Value(val: number)
    {
        let raiseEvent: boolean = this.value == -1;

        this.value = val;

        if(raiseEvent)
        {
            this.ValueChanged();
        }
    }
}