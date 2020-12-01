import { dateAgo, randomItem } from "../../utils";
export class GLoggerDefaultFormatter {
    constructor() {
        this.showPriority = false;
        this.showContext = true;
        this.showTime = false;
        this.showTimeOffset = false;
        this.useDifferentColorsForContexts = true;
        this.colors = {};
        this.lastFormatTime = Date.now();
        this.contextColorMap = {};
    }
    formatColored(priority, data, context) {
        const result = [this.getOutputArray(priority, data, context).join(" ")];
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
    format(priority, data, context) {
        return this.getOutputArray(priority, data, context).join(" ");
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