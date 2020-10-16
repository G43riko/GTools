export declare class NetUtils {
    static downloadFile(url: string, fileName: string): void;
    static getPublicIp(): Promise<string>;
    static getContentFrom(url: string): Promise<string>;
}
