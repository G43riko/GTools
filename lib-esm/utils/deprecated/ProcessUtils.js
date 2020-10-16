import * as Process from "../process-utils";
/**
 * @deprecated use {@link Process} instead
 */
var ProcessUtils = /** @class */ (function () {
    function ProcessUtils() {
    }
    ProcessUtils.setEnvironment = function (type) {
        return Process.setEnvironment(type);
    };
    ProcessUtils.getProcessData = function () {
        return Process.getProcessData();
    };
    ProcessUtils.setDefaultEnvironment = function () {
        return Process.setDefaultEnvironment();
    };
    ProcessUtils.isTest = Process.isTest;
    ProcessUtils.isProd = Process.isProd;
    ProcessUtils.isDev = Process.isDev;
    return ProcessUtils;
}());
export { ProcessUtils };
