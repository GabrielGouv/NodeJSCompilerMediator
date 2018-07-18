export class CommandBuilder {

    private variables = new Map<string, string | number | boolean>()

    constructor(private command: string) {

    }

    public putVariable(name: string, value: string | number | boolean | undefined): void {
        value = typeof value !== 'undefined' ? value : ''
        this.variables.set(name, value)  
    }

    public putVariables(variables: Map<string, string | number | boolean>): void {
        this.variables = new Map([...this.variables, ...variables])
    }

    public buildCommand(): string {
        this.configureVariables()
        return this.command
    }

    private configureVariables(): void {
        for (let [name, value] of this.variables.entries()) {
            this.command = this.command.replace(new RegExp(`\\{${name}\\}`, 'g'), value ? value.toString() : '')
        }
    }

}