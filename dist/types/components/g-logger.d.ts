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
    private static readonly skipContexts;
    private static readonly skipRegexp;
    constructor(context?: string | {
        constructor: {
            name: string;
        };
    });
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
//# sourceMappingURL=g-logger.d.ts.map