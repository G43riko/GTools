import * as Process from "../process-utils";
/**
 * @deprecated use {@link Process} instead
 */
export declare class ProcessUtils {
    static isTest: typeof Process.isTest;
    static isProd: typeof Process.isProd;
    static isDev: typeof Process.isDev;
    static setEnvironment(type: "test" | "production" | "development"): void;
    static getProcessData(): Process.ProcessData;
    static setDefaultEnvironment(): void;
}
//# sourceMappingURL=ProcessUtils.d.ts.map