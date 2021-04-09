import { GLoggerCallback } from "./g-logger";
import { SimpleColorFormatter } from "./g-logger-default-formatter";
import { GLoggerPriority } from "./g-logger-priority";
export declare class GLoggerCallbackHolder {
    private readonly callbacks;
    private constructor();
    copy(): GLoggerCallbackHolder;
    static createConsoleCallbacks(formatter?: SimpleColorFormatter): GLoggerCallbackHolder;
    static createArrayCallbacks(array: unknown[], options?: {
        mapper?: (priority: GLoggerPriority, messages: unknown[], context?: string) => unknown;
    }): GLoggerCallbackHolder;
    setCallback(priority: GLoggerPriority, callback: GLoggerCallback): void;
    set(holder: GLoggerCallbackHolder): void;
    getCallback(priority: GLoggerPriority): GLoggerCallback;
}
//# sourceMappingURL=g-logger-callback-holder.d.ts.map