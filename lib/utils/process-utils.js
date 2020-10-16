"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultEnvironment = exports.getProcessData = exports.setEnvironment = exports.isDev = exports.isProd = exports.isTest = void 0;
function isTest() {
    return process.env.NODE_ENV === "test";
}
exports.isTest = isTest;
function isProd() {
    return process.env.NODE_ENV === "production";
}
exports.isProd = isProd;
function isDev() {
    return process.env.NODE_ENV === "development" || !process.env.NODE_ENV;
}
exports.isDev = isDev;
function setEnvironment(type) {
    process.env.NODE_ENV = type;
}
exports.setEnvironment = setEnvironment;
function getProcessData() {
    return {
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage(),
        upTime: process.uptime(),
        version: process.version,
        platform: process.platform,
    };
}
exports.getProcessData = getProcessData;
function setDefaultEnvironment() {
    if (!process.env.NODE_ENV) {
        setEnvironment("development");
    }
}
exports.setDefaultEnvironment = setDefaultEnvironment;
