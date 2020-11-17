import { randomItem } from "../utils/random-utils";
import { dateAgo } from "../utils/time-utils";
export var GLoggerPriority;
(function (GLoggerPriority) {
    GLoggerPriority["LOG"] = "LOG";
    GLoggerPriority["WARN"] = "WARN";
    GLoggerPriority["ERROR"] = "ERROR";
    GLoggerPriority["VERBOSE"] = "VERBOSE";
    GLoggerPriority["SUCCESS"] = "SUCCESS";
})(GLoggerPriority || (GLoggerPriority = {}));
export class GLoggerDefaultFormatter {
    constructor() {
        this.lastFormatTime = Date.now();
        this.showPriority = true;
        this.showContext = true;
        this.showTime = false;
        this.showTimeOffset = false;
        this.useDifferentColorsForContexts = false;
        this.contextColorMap = {};
        this.colors = {};
    }
    getColorForContext(context, defaultColor) {
        if (!this.useDifferentColorsForContexts) {
            return defaultColor;
        }
        if (context in this.contextColorMap) {
            return this.contextColorMap[context];
        }
        const createColor = () => `#${new Array(6).map(() => randomItem("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D")).join("")}`;
        return this.contextColorMap[context] = createColor();
    }
    formatColored(priority, data, context) {
        const result = [this.format(priority, data, context)];
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
export class GLoggerCallbackHolder {
    constructor(callbacks) {
        this.callbacks = callbacks;
    }
    static createConsoleCallbacks(formatter = new GLoggerDefaultFormatter()) {
        return new GLoggerCallbackHolder({
            [GLoggerPriority.LOG]: (message, context) => console.log(formatter.formatColored(GLoggerPriority.LOG, message, context)),
            [GLoggerPriority.WARN]: (message, context) => console.warn(formatter.formatColored(GLoggerPriority.WARN, message, context)),
            [GLoggerPriority.ERROR]: (message, context) => console.error(formatter.formatColored(GLoggerPriority.ERROR, message, context)),
            [GLoggerPriority.SUCCESS]: (message, context) => console.log(formatter.formatColored(GLoggerPriority.SUCCESS, message, context)),
            [GLoggerPriority.VERBOSE]: (message, context) => console.log(formatter.formatColored(GLoggerPriority.VERBOSE, message, context)),
        });
    }
    static createArrayCallbacks(array, options = {}) {
        const mapper = options.mapper || ((priority, messages, context) => [priority, messages, context]);
        const appendToArray = (priority, messages, context) => {
            array.push(mapper(priority, messages, context));
        };
        return new GLoggerCallbackHolder({
            [GLoggerPriority.LOG]: (message, context) => appendToArray(GLoggerPriority.LOG, message, context),
            [GLoggerPriority.WARN]: (message, context) => appendToArray(GLoggerPriority.WARN, message, context),
            [GLoggerPriority.ERROR]: (message, context) => appendToArray(GLoggerPriority.ERROR, message, context),
            [GLoggerPriority.SUCCESS]: (message, context) => appendToArray(GLoggerPriority.SUCCESS, message, context),
            [GLoggerPriority.VERBOSE]: (message, context) => appendToArray(GLoggerPriority.VERBOSE, message, context),
        });
    }
    setCallback(priority, callback) {
        this.callbacks[priority] = callback;
    }
    set(holder) {
        Object.values(GLoggerPriority).forEach((priority) => {
            this.setCallback(priority, holder.getCallback(priority));
        });
    }
    getCallback(priority) {
        return this.callbacks[priority];
    }
}
class GLoggerInstance {
    constructor(context, loggerCallbacks) {
        this.context = context;
        this.loggerCallbacks = loggerCallbacks;
    }
    setLogCallback(priority, callback) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.setCallback(priority, callback);
    }
    log(...messages) {
        GLogger.print(GLoggerPriority.LOG, this.context, ...messages);
    }
    warn(...messages) {
        GLogger.print(GLoggerPriority.WARN, this.context, ...messages);
    }
    error(...messages) {
        GLogger.print(GLoggerPriority.ERROR, this.context, ...messages);
    }
    static localPrint(type, data, callbacks, context) {
        callbacks.getCallback(type)(data, context);
    }
}
export class GLogger extends GLoggerInstance {
    static getContextString(context) {
        var _a;
        return context ? (typeof context === "string" ? context : (_a = context === null || context === void 0 ? void 0 : context.constructor) === null || _a === void 0 ? void 0 : _a.name) : "";
    }
    static getLine(steps = 2) {
        const error = new Error();
        if (error.stack) {
            const results = error.stack.split("\n")[steps].trim().match(/\(.*\)/);
            if (results && results[0]) {
                return "at " + results[0];
            }
        }
        return "";
    }
    static setCallbacks(callbackHolder) {
        GLogger.staticCallbacks.set(callbackHolder);
    }
    static createClassLogger(context, parent) {
        var _a, _b;
        if (parent) {
            return parent.extends((_a = context === null || context === void 0 ? void 0 : context.constructor) === null || _a === void 0 ? void 0 : _a.name);
        }
        return new GLogger((_b = context === null || context === void 0 ? void 0 : context.constructor) === null || _b === void 0 ? void 0 : _b.name);
    }
    static createArrayLogger(array, context, mapper) {
        return new GLogger(context, GLoggerCallbackHolder.createArrayCallbacks(array, { mapper }));
    }
    extends(subContext) {
        const currentContext = GLogger.getContextString(this.context);
        return new GLogger(currentContext ? `${currentContext}:${subContext}` : subContext);
    }
    static print(type, context = "", ...data) {
        const realContext = GLogger.getContextString(context);
        const result = realContext && realContext.match(GLogger.skipRegexp);
        if (result) {
            return;
        }
        GLoggerInstance.localPrint(type, data, GLogger.staticCallbacks, realContext);
    }
    static log(message, context) {
        GLogger.print(GLoggerPriority.LOG, context, ...(Array.isArray(message) ? message : [message]));
    }
    static error(message, context) {
        GLogger.print(GLoggerPriority.ERROR, context, ...(Array.isArray(message) ? message : [message]));
    }
    static warn(message, context) {
        GLogger.print(GLoggerPriority.WARN, context, ...(Array.isArray(message) ? message : [message]));
    }
}
GLogger.staticCallbacks = GLoggerCallbackHolder.createConsoleCallbacks();
GLogger.skipContexts = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
GLogger.skipRegexp = new RegExp(`${GLogger.skipContexts.join("|")}`, "gi");
//# sourceMappingURL=g-logger.js.map