import { dateAgo, randomItem, template } from "../../utils";
import { GLoggerFormatter } from "./g-logger";
import { GLoggerPriority } from "./g-logger-priority";

export class ColorGenerator {
    public useDifferentColorsForContexts = true;
    private readonly contextColorMap: { [context: string]: string } = {};

    public getColorForContext(context: string, defaultColor: string): string {
        if (!this.useDifferentColorsForContexts) {
            return defaultColor;
        }

        if (context in this.contextColorMap) {
            return this.contextColorMap[context];
        }

        const createColor = (): string =>
            `#${
                new Array(6).fill("").map(() =>
                    randomItem("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D")
                ).join("")
            }`;

        return this.contextColorMap[context] = createColor();
    }
}

export class SimpleColorFormatter implements GLoggerFormatter {
    private readonly colorGenerator = new ColorGenerator();
    public readonly colorMap = {
        priority: "red",
        context: "blue",
        data: "black",
        default: "black",
    };

    public constructor(private readonly pattern = "[{{priority}}] {{context}}: {{data}}") {
    }

    public format(priority: GLoggerPriority, data: unknown[], context?: string): string {
        const dataPlaceholders = data.map((item) => {
            switch (typeof item) {
                case "object":
                    return "%o";
                case "number":
                    return (item % 1 === 0) ? "%d" : "%f";
                default:
                    return "%s";
            }
        });
        const text = template(this.pattern, {
            priority: "%s",
            context: "%s",
            data: dataPlaceholders.join(" "),
        });

        const logFragments: unknown[] = [text];
        this.pattern.replace(/(priority|context|data)/g, (match) => {
            switch (match) {
                case "priority":
                    logFragments.push(priority);
                    break;
                case "context":
                    logFragments.push(context || "");

                    break;
                case "data":
                    logFragments.push(...data);

                    break;
            }

            return match;
        });

        return logFragments.join(", ");
    }

    public formatColored(priority: GLoggerPriority, data: unknown[], context?: string): unknown[] {
        const dataPlaceholders = data.map((item) => {
            switch (typeof item) {
                case "object":
                    return "%o";
                case "number":
                    return (item % 1 === 0) ? "%d" : "%f";
                default:
                    return "%s";
            }
        });
        const text = template(this.pattern, {
            priority: "%c%s%c",
            context: "%c%s%c",
            data: `%c${dataPlaceholders.join(" ")}%c`,
        });

        const logFragments: unknown[] = [text];
        this.pattern.replace(/(priority|context|data)/g, (match) => {
            switch (match) {
                case "priority":
                    logFragments.push(`color: ${this.colorMap[match]}`);
                    logFragments.push(priority);
                    logFragments.push(`color: ${this.colorMap.default}`);

                    break;
                case "context":
                    logFragments.push(`color: ${this.colorGenerator.getColorForContext(context || "root", "black")}`);
                    logFragments.push(context || "");
                    logFragments.push(`color: ${this.colorMap.default}`);

                    break;
                case "data":
                    logFragments.push(`color: ${this.colorMap[match]}`);
                    logFragments.push(...data);
                    logFragments.push(`color: ${this.colorMap.default}`);

                    break;
            }

            return match;
        });

        return logFragments;
    }
}

export class GLoggerDefaultFormatter implements GLoggerFormatter {
    public showPriority = false;
    public showContext = true;
    public showTime = false;
    public showTimeOffset = false;
    public readonly colors: { [key: string]: string } = {};
    private readonly colorGenerator = new ColorGenerator();
    private lastFormatTime = Date.now();

    public formatColored(priority: GLoggerPriority, data: unknown[], context?: string): unknown[] {
        const result: string[] = [this.getOutputArray(priority, data, context).join(" ")];

        if (this.showPriority) {
            result.push(`color: ${this.colors.priority || "blue"}`);
        }
        if (this.showContext && context) {
            result.push(`color: ${this.colorGenerator.getColorForContext(context, this.colors.context || "red")}`);
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

    private getOutputArray(priority: GLoggerPriority, data: unknown[], context?: string): string[] {
        const partials: string[] = [];

        if (this.showPriority) {
            partials.push(`[${priority}]`);
        }
        if (this.showContext && context) {
            partials.push(`${context}:`);
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
