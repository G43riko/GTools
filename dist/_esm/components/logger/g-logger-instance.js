import { GLoggerPriority } from "./g-logger-priority";
export class GLoggerInstance {
    constructor(loggerCallbacks, context) {
        this.loggerCallbacks = loggerCallbacks;
        this.context = context;
    }
    static localPrint(type, data, callbacks, context) {
        callbacks.getCallback(type)(data, context);
    }
    static getContextString(context) {
        var _a;
        if (typeof context === "string") {
            return context;
        }
        if (typeof ((_a = context === null || context === void 0 ? void 0 : context.constructor) === null || _a === void 0 ? void 0 : _a.name) === "string") {
            return context.constructor.name;
        }
        if (typeof (context === null || context === void 0 ? void 0 : context.name) === "string") {
            return context.name;
        }
        return undefined;
    }
    setLogCallback(priority, callback) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.setCallback(priority, callback);
    }
    setLogCallbacks(callbackHolder) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.set(callbackHolder);
    }
    print(type, context = "", ...data) {
        const realContext = GLoggerInstance.getContextString(context);
        GLoggerInstance.localPrint(type, data, this.loggerCallbacks, realContext);
    }
    log(...messages) {
        this.print(GLoggerPriority.LOG, this.context, ...messages);
    }
    warn(...messages) {
        this.print(GLoggerPriority.WARN, this.context, ...messages);
    }
    error(...messages) {
        this.print(GLoggerPriority.ERROR, this.context, ...messages);
    }
}
//# sourceMappingURL=g-logger-instance.js.map