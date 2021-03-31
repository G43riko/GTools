import { __extends, __spreadArrays } from "tslib";
import { GLoggerCallbackHolder } from "./g-logger-callback-holder";
import { GLoggerInstance } from "./g-logger-instance";
import { GLoggerPriority } from "./g-logger-priority";
var GLogger = (function (_super) {
    __extends(GLogger, _super);
    function GLogger(context, callbacks) {
        if (callbacks === void 0) { callbacks = GLogger.staticCallbacks.copy(); }
        return _super.call(this, callbacks, context) || this;
    }
    GLogger.setCallbacks = function (callbackHolder) {
        GLogger.staticCallbacks.set(callbackHolder);
    };
    GLogger.getLine = function (steps) {
        if (steps === void 0) { steps = 2; }
        var error = new Error();
        if (error.stack) {
            var results = error.stack.split("\n")[steps].trim().match(/\(.*\)/);
            if (results && results[0]) {
                return "at " + results[0];
            }
        }
        return "";
    };
    GLogger.createClassLogger = function (context, parent) {
        var _a, _b;
        if (parent) {
            return parent.extends((context === null || context === void 0 ? void 0 : context.name) || ((_a = context === null || context === void 0 ? void 0 : context.constructor) === null || _a === void 0 ? void 0 : _a.name));
        }
        return new GLogger((_b = context === null || context === void 0 ? void 0 : context.constructor) === null || _b === void 0 ? void 0 : _b.name);
    };
    GLogger.createArrayLogger = function (array, context, mapper) {
        return new GLogger(context, GLoggerCallbackHolder.createArrayCallbacks(array, { mapper: mapper }));
    };
    GLogger.print = function (type, context) {
        if (context === void 0) { context = ""; }
        var data = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            data[_i - 2] = arguments[_i];
        }
        var realContext = GLogger.getContextString(context);
        var result = realContext && realContext.match(GLogger.skipRegexp);
        if (result) {
            return;
        }
        GLoggerInstance.localPrint(type, data, GLogger.staticCallbacks, realContext);
    };
    GLogger.log = function (message, context) {
        GLogger.print.apply(GLogger, __spreadArrays([GLoggerPriority.LOG, context], (Array.isArray(message) ? message : [message])));
    };
    GLogger.error = function (message, context) {
        GLogger.print.apply(GLogger, __spreadArrays([GLoggerPriority.ERROR, context], (Array.isArray(message) ? message : [message])));
    };
    GLogger.warn = function (message, context) {
        GLogger.print.apply(GLogger, __spreadArrays([GLoggerPriority.WARN, context], (Array.isArray(message) ? message : [message])));
    };
    GLogger.prototype.extends = function (subContext) {
        var currentContext = GLogger.getContextString(this.context);
        var subContextNameContext = GLogger.getContextString(subContext);
        return new GLogger(currentContext ? currentContext + ":" + subContextNameContext : subContextNameContext, this.loggerCallbacks.copy());
    };
    GLogger.skipContexts = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
    GLogger.skipRegexp = new RegExp("" + GLogger.skipContexts.join("|"), "gi");
    GLogger.staticCallbacks = GLoggerCallbackHolder.createConsoleCallbacks();
    return GLogger;
}(GLoggerInstance));
export { GLogger };
//# sourceMappingURL=g-logger.js.map