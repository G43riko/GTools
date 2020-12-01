"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLoggerInstance = void 0;
var g_logger_1 = require("./g-logger");
var g_logger_priority_1 = require("./g-logger-priority");
var GLoggerInstance = (function () {
    function GLoggerInstance(context, loggerCallbacks) {
        this.context = context;
        this.loggerCallbacks = loggerCallbacks;
    }
    GLoggerInstance.localPrint = function (type, data, callbacks, context) {
        callbacks.getCallback(type)(data, context);
    };
    GLoggerInstance.prototype.setLogCallback = function (priority, callback) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.setCallback(priority, callback);
    };
    GLoggerInstance.prototype.setLogCallbacks = function (callbackHolder) {
        var _a;
        (_a = this.loggerCallbacks) === null || _a === void 0 ? void 0 : _a.set(callbackHolder);
    };
    GLoggerInstance.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        g_logger_1.GLogger.print.apply(g_logger_1.GLogger, __spreadArrays([g_logger_priority_1.GLoggerPriority.LOG, this.context], messages));
    };
    GLoggerInstance.prototype.warn = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        g_logger_1.GLogger.print.apply(g_logger_1.GLogger, __spreadArrays([g_logger_priority_1.GLoggerPriority.WARN, this.context], messages));
    };
    GLoggerInstance.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        g_logger_1.GLogger.print.apply(g_logger_1.GLogger, __spreadArrays([g_logger_priority_1.GLoggerPriority.ERROR, this.context], messages));
    };
    return GLoggerInstance;
}());
exports.GLoggerInstance = GLoggerInstance;
//# sourceMappingURL=g-logger-instance.js.map