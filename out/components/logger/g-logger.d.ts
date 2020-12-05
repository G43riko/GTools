import { GLoggerCallbackHolder } from "./g-logger-callback-holder";
import { GLoggerInstance } from "./g-logger-instance";
import { GLoggerPriority } from "./g-logger-priority";
export declare type GLoggerContextType = string | {
    constructor?: {
        name: string;
    };
    name?: string;
};
export declare type GLoggerCallback = (message: unknown[], context?: string) => void;
export interface GLoggerFormatter {
    format(priority: GLoggerPriority, data: unknown[], context?: string): string;
}
export declare class GLogger extends GLoggerInstance {
    private static readonly skipContexts;
    private static readonly skipRegexp;
    private static readonly staticCallbacks;
    static setCallbacks(callbackHolder: GLoggerCallbackHolder): void;
    static getLine(steps?: number): string;
    static createClassLogger(context: any, parent?: GLogger): GLogger;
    static createArrayLogger(array: unknown[], context?: GLoggerContextType, mapper?: (priority: GLoggerPriority, messages: unknown[], context?: string) => unknown): GLogger;
    static print(type: GLoggerPriority, context?: GLoggerContextType, ...data: unknown[]): void;
    static log(message: string | string[], context?: GLoggerContextType): void;
    static error(message: string | string[], context?: GLoggerContextType): void;
    static warn(message: string | string[], context?: GLoggerContextType): void;
    constructor(context?: GLoggerContextType, callbacks?: GLoggerCallbackHolder);
    extends(subContext: any): GLogger;
}
