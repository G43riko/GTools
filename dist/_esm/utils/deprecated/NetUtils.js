import * as Server from "../net-server-utils";
export class NetUtils {
    static downloadFile(url, fileName) {
        return Server.serverDownloadFile(url, fileName);
    }
    static getPublicIp() {
        return Server.getPublicIp();
    }
    static getContentFrom(url) {
        return Server.getContentFrom(url);
    }
}
//# sourceMappingURL=NetUtils.js.map