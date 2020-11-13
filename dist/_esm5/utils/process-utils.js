export function isTest() {
    return process.env.NODE_ENV === "test";
}
export function isProd() {
    return process.env.NODE_ENV === "production";
}
export function isDev() {
    return process.env.NODE_ENV === "development" || !process.env.NODE_ENV;
}
export function setEnvironment(type) {
}
export function getProcessData() {
    return {
        memoryUsage: process.memoryUsage(),
        cpuUsage: process.cpuUsage(),
        upTime: process.uptime(),
        version: process.version,
        platform: process.platform,
    };
}
export function setDefaultEnvironment() {
    if (!process.env.NODE_ENV) {
        setEnvironment("development");
    }
}
//# sourceMappingURL=process-utils.js.map