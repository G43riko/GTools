export interface ProcessData {
    memoryUsage: NodeJS.MemoryUsage;
    cpuUsage: NodeJS.CpuUsage;
    upTime: number;
    version: string;
    platform: NodeJS.Platform;
}

export class ProcessUtils {
    public static isTest(): boolean {
        return process.env.NODE_ENV === "test";
    }

    public static isProd(): boolean {
        return process.env.NODE_ENV === "production";
    }

    public static isDev(): boolean {
        return process.env.NODE_ENV === "development" || !process.env.NODE_ENV;
    }

    public static setEnvironment(type: "test" | "production" | "development"): void {
        process.env.NODE_ENV = type;
    }

    public static getProcessData(): ProcessData {
        return {
            memoryUsage: process.memoryUsage(),
            cpuUsage: process.cpuUsage(),
            upTime: process.uptime(),
            version: process.version,
            platform: process.platform,
        };
    }

    public static setDefaultEnvironment(): void {
        if (!process.env.NODE_ENV) {
            ProcessUtils.setEnvironment("development");
        }
    }
}