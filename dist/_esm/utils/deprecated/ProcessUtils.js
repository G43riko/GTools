import * as Process from "../process-utils";
export class ProcessUtils {
    static setEnvironment(type) {
        return Process.setEnvironment(type);
    }
    static getProcessData() {
        return Process.getProcessData();
    }
    static setDefaultEnvironment() {
        return Process.setDefaultEnvironment();
    }
}
ProcessUtils.isTest = Process.isTest;
ProcessUtils.isProd = Process.isProd;
ProcessUtils.isDev = Process.isDev;
//# sourceMappingURL=ProcessUtils.js.map