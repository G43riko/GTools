"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLoggerCallbackHolder = void 0;
var g_logger_default_formatter_1 = require("./g-logger-default-formatter");
var g_logger_priority_1 = require("./g-logger-priority");
var GLoggerCallbackHolder = (function () {
    function GLoggerCallbackHolder(callbacks) {
        this.callbacks = callbacks;
    }
    GLoggerCallbackHolder.prototype.copy = function () {
        return new GLoggerCallbackHolder(this.callbacks);
    };
    GLoggerCallbackHolder.createConsoleCallbacks = function (formatter) {
        var _a;
        if (formatter === void 0) { formatter = new g_logger_default_formatter_1.SimpleColorFormatter(); }
        return new GLoggerCallbackHolder((_a = {},
            _a[g_logger_priority_1.GLoggerPriority.LOG] = function (message, context) { return console.log.apply(console, formatter.formatColored(g_logger_priority_1.GLoggerPriority.LOG, message, context)); },
            _a[g_logger_priority_1.GLoggerPriority.WARN] = function (message, context) { return console.warn.apply(console, formatter.formatColored(g_logger_priority_1.GLoggerPriority.WARN, message, context)); },
            _a[g_logger_priority_1.GLoggerPriority.ERROR] = function (message, context) { return console.error.apply(console, formatter.formatColored(g_logger_priority_1.GLoggerPriority.ERROR, message, context)); },
            _a[g_logger_priority_1.GLoggerPriority.SUCCESS] = function (message, context) { return console.log.apply(console, formatter.formatColored(g_logger_priority_1.GLoggerPriority.SUCCESS, message, context)); },
            _a[g_logger_priority_1.GLoggerPriority.VERBOSE] = function (message, context) { return console.log.apply(console, formatter.formatColored(g_logger_priority_1.GLoggerPriority.VERBOSE, message, context)); },
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
            _a[g_logger_priority_1.GLoggerPriority.LOG] = function (message, context) { return appendToArray(g_logger_priority_1.GLoggerPriority.LOG, message, context); },
            _a[g_logger_priority_1.GLoggerPriority.WARN] = function (message, context) { return appendToArray(g_logger_priority_1.GLoggerPriority.WARN, message, context); },
            _a[g_logger_priority_1.GLoggerPriority.ERROR] = function (message, context) { return appendToArray(g_logger_priority_1.GLoggerPriority.ERROR, message, context); },
            _a[g_logger_priority_1.GLoggerPriority.SUCCESS] = function (message, context) { return appendToArray(g_logger_priority_1.GLoggerPriority.SUCCESS, message, context); },
            _a[g_logger_priority_1.GLoggerPriority.VERBOSE] = function (message, context) { return appendToArray(g_logger_priority_1.GLoggerPriority.VERBOSE, message, context); },
            _a));
    };
    GLoggerCallbackHolder.prototype.setCallback = function (priority, callback) {
        this.callbacks[priority] = callback;
    };
    GLoggerCallbackHolder.prototype.set = function (holder) {
        var _this = this;
        Object.values(g_logger_priority_1.GLoggerPriority).forEach(function (priority) {
            _this.setCallback(priority, holder.getCallback(priority));
        });
    };
    GLoggerCallbackHolder.prototype.getCallback = function (priority) {
        return this.callbacks[priority];
    };
    return GLoggerCallbackHolder;
}());
exports.GLoggerCallbackHolder = GLoggerCallbackHolder;
//# sourceMappingURL=g-logger-callback-holder.js.map