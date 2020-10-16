import * as Process from "../process-utils";

/**
 * @deprecated use {@link Process} instead
 */
export class ProcessUtils {
    public static isTest = Process.isTest;

    public static isProd = Process.isProd;

    public static isDev = Process.isDev;

    public static setEnvironment(type: "test" | "production" | "development"): void {
        return Process.setEnvironment(type);
    }

    public static getProcessData(): Process.ProcessData {
        return Process.getProcessData();
    }

    public static setDefaultEnvironment(): void {
        return Process.setDefaultEnvironment();
    }
}
