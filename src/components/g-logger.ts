export class GLoggerInstance {
    protected constructor(private readonly context?: string | { constructor: { name: string } }) {
    }

    public log(...messages: any[]): void {
        GLogger.print("log", this.context, ...messages);
    }

    public warn(...messages: any[]): void {
        GLogger.print("warn", this.context, ...messages);
    }

    public error(...messages: any[]): void {
        GLogger.print("error", this.context, ...messages);
    }
}

export class GLogger extends GLoggerInstance {
    public static getLine(steps = 2): string {
        const error = new Error();
        if (error.stack) {
            const results = error.stack.split("\n")[steps].trim().match(/\(.*\)/);
            if (results && results[0]) {
                return "at " + results[0];
            }
        }

        return "";
    }

    private static readonly skipContexts = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
    private static readonly skipRegexp   = new RegExp(`${GLogger.skipContexts.join("|")}`, "gi");

    public constructor(context?: string | { constructor: { name: string } }) {
        super(context);
    }

    public static print(type: "log" | "warn" | "error", context: string | { constructor: { name: string } } = "", ...data: any[]): void {
        const realContext = context && (typeof context === "string" ? context : context?.constructor?.name);
        const result      = realContext && realContext.match(GLogger.skipRegexp);
        if (result) {
            return;
        }
        const prefix = realContext ? `[${realContext}] ` : "";
        console[type](prefix, ...data);
    }

    public static log(message: string | string[], context?: string | { constructor: { name: string } }): void {
        GLogger.print("log", context, message);
    }
}
