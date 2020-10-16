export interface ProcessData {
    memoryUsage: NodeJS.MemoryUsage;
    cpuUsage: NodeJS.CpuUsage;
    upTime: number;
    version: string;
    platform: NodeJS.Platform;
}

export function isTest(): boolean {
    return process.env.NODE_ENV === "test";
}

export function isProd(): boolean {
    return process.env.NODE_ENV === "production";
}

export function isDev(): boolean {
    return process.env.NODE_ENV === "development" || !process.env.NODE_ENV;
}

export function setEnvironment(type: "test" | "production" | "development"): void {
    process.env.NODE_ENV = type;
}

export function getProcessData(): ProcessData {
    return {
        memoryUsage: process.memoryUsage(),
        cpuUsage   : process.cpuUsage(),
        upTime     : process.uptime(),
        version    : process.version,
        platform   : process.platform,
    };
}

export function setDefaultEnvironment(): void {
    if (!process.env.NODE_ENV) {
        setEnvironment("development");
    }
}
