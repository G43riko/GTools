import { GLogger } from "./g-logger";
import { GLoggerPriority } from "./g-logger-priority";
export class GLoggerInstance {
    constructor(context, loggerCallbacks) {
        this.context = context;
        this.loggerCallbacks = loggerCallbacks;
    }
    static localPrint(type, data, callbacks, context) {
        callbacks.getCallback(type)(data, context);
    }
    setLogCallback(priority, callback) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.setCallback(priority, callback);
    }
    setLogCallbacks(callbackHolder) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.set(callbackHolder);
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
}
//# sourceMappingURL=g-logger-instance.js.map