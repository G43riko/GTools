import { GLoggerCallbackHolder } from "./g-logger-callback-holder";
import { GLoggerInstance } from "./g-logger-instance";
import { GLoggerPriority } from "./g-logger-priority";
export class GLogger extends GLoggerInstance {
    constructor(context, callbacks = GLogger.staticCallbacks.copy()) {
        super(callbacks, context);
    }
    static setCallbacks(callbackHolder) {
        GLogger.staticCallbacks.set(callbackHolder);
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
    static createClassLogger(context, parent) {
        var _a, _b;
        if (parent) {
            return parent.extends((context === null || context === void 0 ? void 0 : context.name) || ((_a = context === null || context === void 0 ? void 0 : context.constructor) === null || _a === void 0 ? void 0 : _a.name));
        }
        return new GLogger((_b = context === null || context === void 0 ? void 0 : context.constructor) === null || _b === void 0 ? void 0 : _b.name);
    }
    static createArrayLogger(array, context, mapper) {
        return new GLogger(context, GLoggerCallbackHolder.createArrayCallbacks(array, { mapper }));
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
    extends(subContext) {
        const currentContext = GLogger.getContextString(this.context);
        const subContextNameContext = GLogger.getContextString(subContext);
        return new GLogger(currentContext ? `${currentContext}:${subContextNameContext}` : subContextNameContext, this.loggerCallbacks.copy());
    }
}
GLogger.skipContexts = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
GLogger.skipRegexp = new RegExp(`${GLogger.skipContexts.join("|")}`, "gi");
GLogger.staticCallbacks = GLoggerCallbackHolder.createConsoleCallbacks();
//# sourceMappingURL=g-logger.js.map