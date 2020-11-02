export declare class GLoggerInstance {
    private readonly context?;
    protected constructor(context?: string | {
        constructor: {
            name: string;
        };
    } | undefined);
    log(...messages: any[]): void;
    warn(...messages: any[]): void;
    error(...messages: any[]): void;
}
export declare class GLogger extends GLoggerInstance {
    static getLine(steps?: number): string;
    constructor(context?: string | {
        constructor: {
            name: string;
        };
    });
    private static readonly skipContexts;
    private static readonly skipRegexp;
    static print(type: "log" | "warn" | "error", context?: string | {
        constructor: {
            name: string;
        };
    }, ...data: any[]): void;
    static log(message: string | string[], context?: string | {
        constructor: {
            name: string;
        };
    }): void;
}
