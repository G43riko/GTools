import { __extends, __spreadArrays } from "tslib";
var GLoggerInstance = (function () {
    function GLoggerInstance(context) {
        this.context = context;
    }
    GLoggerInstance.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        GLogger.print.apply(GLogger, __spreadArrays(["log", this.context], messages));
    };
    GLoggerInstance.prototype.warn = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        GLogger.print.apply(GLogger, __spreadArrays(["warn", this.context], messages));
    };
    GLoggerInstance.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        GLogger.print.apply(GLogger, __spreadArrays(["error", this.context], messages));
    };
    return GLoggerInstance;
}());
export { GLoggerInstance };
var GLogger = (function (_super) {
    __extends(GLogger, _super);
    function GLogger(context) {
        return _super.call(this, context) || this;
    }
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
    GLogger.print = function (type, context) {
        var _a;
        if (context === void 0) { context = ""; }
        var data = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            data[_i - 2] = arguments[_i];
        }
        var realContext = context && (typeof context === "string" ? context : (_a = context === null || context === void 0 ? void 0 : context.constructor) === null || _a === void 0 ? void 0 : _a.name);
        var result = realContext && realContext.match(GLogger.skipRegexp);
        if (result) {
            return;
        }
        var prefix = realContext ? "[" + realContext + "] " : "";
        console[type].apply(console, __spreadArrays([prefix], data));
    };
    GLogger.log = function (message, context) {
        GLogger.print("log", context, message);
    };
    GLogger.skipContexts = ["renderWorldStatic", "CanvasDirective", "WorldRendererService", "viewport", "WorldInputService"];
    GLogger.skipRegexp = new RegExp("" + GLogger.skipContexts.join("|"), "gi");
    return GLogger;
}(GLoggerInstance));
export { GLogger };
//# sourceMappingURL=g-logger.js.map