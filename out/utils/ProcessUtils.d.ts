/// <reference types="node" />
export interface ProcessData {
    memoryUsage: NodeJS.MemoryUsage;
    cpuUsage: NodeJS.CpuUsage;
    upTime: number;
    version: string;
    platform: NodeJS.Platform;
}

export declare class ProcessUtils {
    static isTest(): boolean;

    static isProd(): boolean;

    static isDev(): boolean;

    static setEnvironment(type: "test" | "production" | "development"): void;

    static getProcessData(): ProcessData;

    static setDefaultEnvironment(): void;
}
