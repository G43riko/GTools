import { GLoggerCallback } from "./g-logger";
import { GLoggerCallbackHolder } from "./g-logger-callback-holder";
import { GLoggerPriority } from "./g-logger-priority";
export declare abstract class GLoggerInstance {
    readonly context?: string | {
        constructor?: {
            name: string;
        } | undefined;
        name?: string | undefined;
    } | undefined;
    private readonly loggerCallbacks?;
    constructor(context?: string | {
        constructor?: {
            name: string;
        } | undefined;
        name?: string | undefined;
    } | undefined, loggerCallbacks?: GLoggerCallbackHolder | undefined);
    protected static localPrint(type: GLoggerPriority, data: unknown[], callbacks: GLoggerCallbackHolder, context?: string): void;
    setLogCallback(priority: GLoggerPriority, callback: GLoggerCallback): void;
    setLogCallbacks(callbackHolder: GLoggerCallbackHolder): void;
    log(...messages: unknown[]): void;
    warn(...messages: unknown[]): void;
    error(...messages: unknown[]): void;
}
