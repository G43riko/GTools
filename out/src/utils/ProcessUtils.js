"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessUtils = /** @class */ (function () {
    function ProcessUtils() {
    }
    ProcessUtils.isTest = function () {
        return process.env.NODE_ENV === "test";
    };
    ProcessUtils.isProd = function () {
        return process.env.NODE_ENV === "production";
    };
    ProcessUtils.isDev = function () {
        return process.env.NODE_ENV === "development" || !process.env.NODE_ENV;
    };
    ProcessUtils.setEnvironment = function (type) {
        process.env.NODE_ENV = type;
    };
    ProcessUtils.getProcessData = function () {
        return {
            memoryUsage: process.memoryUsage(),
            cpuUsage: process.cpuUsage(),
            upTime: process.uptime(),
            version: process.version,
            platform: process.platform,
        };
    };
    ProcessUtils.setDefaultEnvironment = function () {
        if (!process.env.NODE_ENV) {
            ProcessUtils.setEnvironment("development");
        }
    };
    return ProcessUtils;
}());
exports.ProcessUtils = ProcessUtils;
