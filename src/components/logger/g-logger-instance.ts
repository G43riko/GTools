import { GLogger, GLoggerCallback, GLoggerContextType } from "./g-logger";
import { GLoggerCallbackHolder } from "./g-logger-callback-holder";
import { GLoggerPriority } from "./g-logger-priority";

export abstract class GLoggerInstance {
    public constructor(public readonly context?: GLoggerContextType,
                       private readonly loggerCallbacks?: GLoggerCallbackHolder) {
    }

    protected static localPrint(type: GLoggerPriority, data: unknown[], callbacks: GLoggerCallbackHolder, context?: string): void {
        callbacks.getCallback(type)(data, context);
    }

    public setLogCallback(priority: GLoggerPriority, callback: GLoggerCallback): void {
        this.loggerCallbacks?.setCallback(priority, callback);
    }
    public setLogCallbacks(callbackHolder: GLoggerCallbackHolder): void {
        this.loggerCallbacks?.set(callbackHolder);
    }

    public log(...messages: unknown[]): void {
        GLogger.print(GLoggerPriority.LOG, this.context, ...messages);
    }

    public warn(...messages: unknown[]): void {
        GLogger.print(GLoggerPriority.WARN, this.context, ...messages);
    }

    public error(...messages: unknown[]): void {
        GLogger.print(GLoggerPriority.ERROR, this.context, ...messages);
    }
}
