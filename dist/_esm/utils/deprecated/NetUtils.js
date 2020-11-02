import * as Server from "../net-server-utils";
/**
 * @deprecated use {@link Server} instead
 */
var NetUtils = /** @class */ (function () {
    function NetUtils() {
    }
    NetUtils.downloadFile = function (url, fileName) {
        return Server.serverDownloadFile(url, fileName);
    };
    NetUtils.getPublicIp = function () {
        return Server.getPublicIp();
    };
    NetUtils.getContentFrom = function (url) {
        return Server.getContentFrom(url);
    };
    return NetUtils;
}());
export { NetUtils };
