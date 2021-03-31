import { SimpleColorFormatter } from "./g-logger-default-formatter";
import { GLoggerPriority } from "./g-logger-priority";
var GLoggerCallbackHolder = (function () {
    function GLoggerCallbackHolder(callbacks) {
        this.callbacks = callbacks;
    }
    GLoggerCallbackHolder.prototype.copy = function () {
        return new GLoggerCallbackHolder(this.callbacks);
    };
    GLoggerCallbackHolder.createConsoleCallbacks = function (formatter) {
        var _a;
        if (formatter === void 0) { formatter = new SimpleColorFormatter(); }
        return new GLoggerCallbackHolder((_a = {},
            _a[GLoggerPriority.LOG] = function (message, context) { return console.log.apply(console, formatter.formatColored(GLoggerPriority.LOG, message, context)); },
            _a[GLoggerPriority.WARN] = function (message, context) { return console.warn.apply(console, formatter.formatColored(GLoggerPriority.WARN, message, context)); },
            _a[GLoggerPriority.ERROR] = function (message, context) { return console.error.apply(console, formatter.formatColored(GLoggerPriority.ERROR, message, context)); },
            _a[GLoggerPriority.SUCCESS] = function (message, context) { return console.log.apply(console, formatter.formatColored(GLoggerPriority.SUCCESS, message, context)); },
            _a[GLoggerPriority.VERBOSE] = function (message, context) { return console.log.apply(console, formatter.formatColored(GLoggerPriority.VERBOSE, message, context)); },
            _a));
    };
    GLoggerCallbackHolder.createArrayCallbacks = function (array, options) {
        var _a;
        if (options === void 0) { options = {}; }
        var mapper = options.mapper || (function (priority, messages, context) { return [priority, messages, context]; });
        var appendToArray = function (priority, messages, context) {
            array.push(mapper(priority, messages, context));
        };
        return new GLoggerCallbackHolder((_a = {},
            _a[GLoggerPriority.LOG] = function (message, context) { return appendToArray(GLoggerPriority.LOG, message, context); },
            _a[GLoggerPriority.WARN] = function (message, context) { return appendToArray(GLoggerPriority.WARN, message, context); },
            _a[GLoggerPriority.ERROR] = function (message, context) { return appendToArray(GLoggerPriority.ERROR, message, context); },
            _a[GLoggerPriority.SUCCESS] = function (message, context) { return appendToArray(GLoggerPriority.SUCCESS, message, context); },
            _a[GLoggerPriority.VERBOSE] = function (message, context) { return appendToArray(GLoggerPriority.VERBOSE, message, context); },
            _a));
    };
    GLoggerCallbackHolder.prototype.setCallback = function (priority, callback) {
        this.callbacks[priority] = callback;
    };
    GLoggerCallbackHolder.prototype.set = function (holder) {
        var _this = this;
        Object.values(GLoggerPriority).forEach(function (priority) {
            _this.setCallback(priority, holder.getCallback(priority));
        });
    };
    GLoggerCallbackHolder.prototype.getCallback = function (priority) {
        return this.callbacks[priority];
    };
    return GLoggerCallbackHolder;
}());
export { GLoggerCallbackHolder };
//# sourceMappingURL=g-logger-callback-holder.js.map