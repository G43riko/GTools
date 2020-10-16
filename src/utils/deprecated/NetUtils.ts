import * as Server from "../net-server-utils";

/**
 * @deprecated use {@link Server} instead
 */
export class NetUtils {
    public static downloadFile(url: string, fileName: string): void {
        return Server.serverDownloadFile(url, fileName);
    }

    public static getPublicIp(): Promise<string> {
        return Server.getPublicIp();
    }

    public static getContentFrom(url: string): Promise<string> {
        return Server.getContentFrom(url);
    }
}
