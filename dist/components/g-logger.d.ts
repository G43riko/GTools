export declare type GLoggerContextType = string | {
    constructor: {
        name: string;
    };
};
export declare type GLoggerCallback = (message: unknown[], context?: string) => void;
export declare enum GLoggerPriority {
    LOG = "LOG",
    WARN = "WARN",
    ERROR = "ERROR",
    VERBOSE = "VERBOSE",
    SUCCESS = "SUCCESS"
}
export interface GLoggerFormatter {
    format(priority: GLoggerPriority, data: unknown[], context?: string): string;
}
export declare class GLoggerDefaultFormatter implements GLoggerFormatter {
    private lastFormatTime;
    showPriority: boolean;
    showContext: boolean;
    showTime: boolean;
    showTimeOffset: boolean;
    useDifferentColorsForContexts: boolean;
    private readonly contextColorMap;
    readonly colors: {
        [key: string]: string;
    };
    private getColorForContext;
    formatColored(priority: GLoggerPriority, data: unknown[], context?: string): string[];
    format(priority: GLoggerPriority, data: unknown[], context?: string): string;
    private getOutputArray;
}
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
declare abstract class GLoggerInstance {
    readonly context?: string | {
        constructor: {
            name: string;
        };
    } | undefined;
    private readonly loggerCallbacks?;
    constructor(context?: string | {
        constructor: {
            name: string;
        };
    } | undefined, loggerCallbacks?: GLoggerCallbackHolder | undefined);
    setLogCallback(priority: GLoggerPriority, callback: GLoggerCallback): void;
    log(...messages: unknown[]): void;
    warn(...messages: unknown[]): void;
    error(...messages: unknown[]): void;
    protected static localPrint(type: GLoggerPriority, data: unknown[], callbacks: GLoggerCallbackHolder, context?: string): void;
}
export declare class GLogger extends GLoggerInstance {
    private static readonly staticCallbacks;
    private static getContextString;
    static getLine(steps?: number): string;
    static setCallbacks(callbackHolder: GLoggerCallbackHolder): void;
    private static readonly skipContexts;
    private static readonly skipRegexp;
    static createClassLogger(context: {
        constructor: {
            name: string;
        };
    }, parent?: GLogger): GLogger;
    static createArrayLogger(array: unknown[], context?: GLoggerContextType, mapper?: (priority: GLoggerPriority, messages: unknown[], context?: string) => unknown): GLogger;
    extends(subContext: string): GLogger;
    static print(type: GLoggerPriority, context?: GLoggerContextType, ...data: unknown[]): void;
    static log(message: string | string[], context?: GLoggerContextType): void;
    static error(message: string | string[], context?: GLoggerContextType): void;
    static warn(message: string | string[], context?: GLoggerContextType): void;
}
export {};
//# sourceMappingURL=g-logger.d.ts.map