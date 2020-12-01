import { GLoggerFormatter } from "./g-logger";
import { GLoggerPriority } from "./g-logger-priority";
export declare class GLoggerDefaultFormatter implements GLoggerFormatter {
    showPriority: boolean;
    showContext: boolean;
    showTime: boolean;
    showTimeOffset: boolean;
    useDifferentColorsForContexts: boolean;
    readonly colors: {
        [key: string]: string;
    };
    private lastFormatTime;
    private readonly contextColorMap;
    formatColored(priority: GLoggerPriority, data: unknown[], context?: string): string[];
    format(priority: GLoggerPriority, data: unknown[], context?: string): string;
    private getColorForContext;
    private getOutputArray;
}
//# sourceMappingURL=g-logger-default-formatter.d.ts.map