import { GLoggerFormatter } from "./g-logger";
import { GLoggerPriority } from "./g-logger-priority";
export declare class ColorGenerator {
    useDifferentColorsForContexts: boolean;
    private readonly contextColorMap;
    getColorForContext(context: string, defaultColor: string): string;
}
export declare class SimpleColorFormatter implements GLoggerFormatter {
    private readonly pattern;
    private readonly colorGenerator;
    readonly colorMap: {
        priority: string;
        context: string;
        data: string;
        default: string;
    };
    constructor(pattern?: string);
    format(priority: GLoggerPriority, data: unknown[], context?: string): string;
    formatColored(priority: GLoggerPriority, data: unknown[], context?: string): unknown[];
}
export declare class GLoggerDefaultFormatter implements GLoggerFormatter {
    showPriority: boolean;
    showContext: boolean;
    showTime: boolean;
    showTimeOffset: boolean;
    readonly colors: {
        [key: string]: string;
    };
    private readonly colorGenerator;
    private lastFormatTime;
    formatColored(priority: GLoggerPriority, data: unknown[], context?: string): unknown[];
    format(priority: GLoggerPriority, data: unknown[], context?: string): string;
    private getOutputArray;
}
//# sourceMappingURL=g-logger-default-formatter.d.ts.map