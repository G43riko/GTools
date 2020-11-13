import * as Server from "../net-server-utils";
var NetUtils = (function () {
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
//# sourceMappingURL=NetUtils.js.map