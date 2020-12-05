import { GLoggerCallback, GLoggerContextType } from "./g-logger";
import { GLoggerCallbackHolder } from "./g-logger-callback-holder";
import { GLoggerPriority } from "./g-logger-priority";
export declare abstract class GLoggerInstance {
    protected readonly loggerCallbacks: GLoggerCallbackHolder;
    readonly context?: string | {
        constructor?: {
            name: string;
        } | undefined;
        name?: string | undefined;
    } | undefined;
    protected static localPrint(type: GLoggerPriority, data: unknown[], callbacks: GLoggerCallbackHolder, context?: string): void;
    protected static getContextString(context?: GLoggerContextType): string;
    constructor(loggerCallbacks: GLoggerCallbackHolder, context?: string | {
        constructor?: {
            name: string;
        } | undefined;
        name?: string | undefined;
    } | undefined);
    setLogCallback(priority: GLoggerPriority, callback: GLoggerCallback): void;
    setLogCallbacks(callbackHolder: GLoggerCallbackHolder): void;
    private print;
    log(...messages: unknown[]): void;
    warn(...messages: unknown[]): void;
    error(...messages: unknown[]): void;
}
//# sourceMappingURL=g-logger-instance.d.ts.map