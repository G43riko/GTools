/// <reference types="node" />
export interface ProcessData {
    memoryUsage: NodeJS.MemoryUsage;
    cpuUsage: NodeJS.CpuUsage;
    upTime: number;
    version: string;
    platform: NodeJS.Platform;
}
export declare function isTest(): boolean;
export declare function isProd(): boolean;
export declare function isDev(): boolean;
export declare function setEnvironment(type: "test" | "production" | "development"): void;
export declare function getProcessData(): ProcessData;
export declare function setDefaultEnvironment(): void;
