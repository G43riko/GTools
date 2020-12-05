import { dateAgo, randomItem, template } from "../../utils";
export class ColorGenerator {
    constructor() {
        this.useDifferentColorsForContexts = true;
        this.contextColorMap = {};
    }
    getColorForContext(context, defaultColor) {
        if (!this.useDifferentColorsForContexts) {
            return defaultColor;
        }
        if (context in this.contextColorMap) {
            return this.contextColorMap[context];
        }
        const createColor = () => `#${new Array(6).fill("").map(() => randomItem("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D")).join("")}`;
        return this.contextColorMap[context] = createColor();
    }
}
export class SimpleColorFormatter {
    constructor(pattern = "[{{priority}}] {{context}}: {{data}}") {
        this.pattern = pattern;
        this.colorGenerator = new ColorGenerator();
        this.colorMap = {
            priority: "red",
            context: "blue",
            data: "black",
            default: "black",
        };
    }
    format(priority, data, context) {
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
        const logFragments = [text];
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
    formatColored(priority, data, context) {
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
        const logFragments = [text];
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
export class GLoggerDefaultFormatter {
    constructor() {
        this.showPriority = false;
        this.showContext = true;
        this.showTime = false;
        this.showTimeOffset = false;
        this.colors = {};
        this.colorGenerator = new ColorGenerator();
        this.lastFormatTime = Date.now();
    }
    formatColored(priority, data, context) {
        const result = [this.getOutputArray(priority, data, context).join(" ")];
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
    format(priority, data, context) {
        return this.getOutputArray(priority, data, context).join(" ");
    }
    getOutputArray(priority, data, context) {
        const partials = [];
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
//# sourceMappingURL=g-logger-default-formatter.js.map