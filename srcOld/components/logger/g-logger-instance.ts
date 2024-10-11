import { GLoggerCallback, GLoggerContextType } from "./g-logger";
import { GLoggerCallbackHolder } from "./g-logger-callback-holder";
import { GLoggerPriority } from "./g-logger-priority";

export abstract class GLoggerInstance {
    protected static localPrint(
        type: GLoggerPriority,
        data: unknown[],
        callbacks: GLoggerCallbackHolder,
        context?: string,
    ): void {
        callbacks.getCallback(type)(data, context);
    }

    protected static getContextString(context?: GLoggerContextType): string {
        if (typeof context === "string") {
            return context;
        }

        if (typeof context?.constructor?.name === "string") {
            return context.constructor.name;
        }

        if (typeof context?.name === "string") {
            return context.name;
        }

        return undefined as any;
    }

    public constructor(
        protected readonly loggerCallbacks: GLoggerCallbackHolder,
        public readonly context?: GLoggerContextType,
    ) {
    }

    public setLogCallback(priority: GLoggerPriority, callback: GLoggerCallback): void {
        this.loggerCallbacks?.setCallback(priority, callback);
    }

    public setLogCallbacks(callbackHolder: GLoggerCallbackHolder): void {
        this.loggerCallbacks?.set(callbackHolder);
    }

    private print(type: GLoggerPriority, context: GLoggerContextType = "", ...data: unknown[]): void {
        const realContext: string = GLoggerInstance.getContextString(context);

        GLoggerInstance.localPrint(type, data, this.loggerCallbacks, realContext);
    }

    public log(...messages: unknown[]): void {
        this.print(GLoggerPriority.LOG, this.context, ...messages);
    }

    public warn(...messages: unknown[]): void {
        this.print(GLoggerPriority.WARN, this.context, ...messages);
    }

    public error(...messages: unknown[]): void {
        this.print(GLoggerPriority.ERROR, this.context, ...messages);
    }
}
