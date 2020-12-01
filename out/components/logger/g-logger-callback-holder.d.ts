import { GLoggerCallback } from "./g-logger";
import { GLoggerDefaultFormatter } from "./g-logger-default-formatter";
import { GLoggerPriority } from "./g-logger-priority";
export declare class GLoggerCallbackHolder {
    private readonly callbacks;
    private constructor();
    static createConsoleCallbacks(formatter?: GLoggerDefaultFormatter): GLoggerCallbackHolder;
    static createArrayCallbacks(array: unknown[], options?: {
        mapper?: (priority: GLoggerPriority, messages: unknown[], context?: string) => unknown;
    }): GLoggerCallbackHolder;
    setCallback(priority: GLoggerPriority, callback: GLoggerCallback): void;
    set(holder: GLoggerCallbackHolder): void;
    getCallback(priority: GLoggerPriority): GLoggerCallback;
}
