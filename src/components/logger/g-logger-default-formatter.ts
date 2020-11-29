import { dateAgo, randomItem } from "../../utils";
import { GLoggerFormatter } from "./g-logger";
import { GLoggerPriority } from "./g-logger-priority";

export class GLoggerDefaultFormatter implements GLoggerFormatter {
    public showPriority                                             = false;
    public showContext                                              = true;
    public showTime                                                 = false;
    public showTimeOffset                                           = false;
    public useDifferentColorsForContexts                            = true;
    public readonly colors: { [key: string]: string }               = {};
    private lastFormatTime                                          = Date.now();
    private readonly contextColorMap: { [context: string]: string } = {};

    public formatColored(priority: GLoggerPriority, data: unknown[], context?: string): string[] {
        const result: string[] = [this.getOutputArray(priority, data, context).join(" ")];

        if (this.showPriority) {
            result.push(`color: ${this.colors.priority || "blue"}`);
        }
        if (this.showContext && context) {
            result.push(`color: ${this.getColorForContext(context, this.colors.context || "red")}`);
        }

        if (this.showTime) {
            result.push(`color: ${this.colors.time || "green"}`);
        }
        if (this.showTimeOffset) {
            result.push(`color: ${this.colors.timeOffset || "green"}`);
        }

        result.push(`color: ${this.colors.textColor || "black"}`);

        return result;
    }

    public format(priority: GLoggerPriority, data: unknown[], context?: string): string {
        return this.getOutputArray(priority, data, context).join(" ");
    }

    private getColorForContext(context: string, defaultColor: string): string {
        if (!this.useDifferentColorsForContexts) {
            return defaultColor;
        }

        if (context in this.contextColorMap) {
            return this.contextColorMap[context];
        }

        const createColor = (): string =>
            `#${new Array(6).fill("").map(() => randomItem("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D")).join("")}`
        ;

        return this.contextColorMap[context] = createColor();
    }

    private getOutputArray(priority: GLoggerPriority, data: unknown[], context?: string): string[] {
        const partials: string[] = [];

        if (this.showPriority) {
            partials.push(`[${priority}]`);
        }
        if (this.showContext && context) {
            partials.push(context + ":");
        }

        if (this.showTime) {
            partials.push(`[${new Date().toISOString()}]`);
        }

        if (this.showTimeOffset) {
            const now = Date.now();
            partials.push(`${dateAgo(now - this.lastFormatTime)}`);
            this.lastFormatTime = now;
        }
        partials.push(...data.map(String));

        return partials;
    }
}
