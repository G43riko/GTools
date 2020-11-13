/// <reference types="node" />
import { PathLike } from "fs";
export declare function serverDownloadFile(url: string, fileName: string): void;
export declare function getPublicIp(): Promise<string>;
export declare function getContent(uri: PathLike): Promise<string>;
export declare function getContentFromUrl(url: URL): Promise<string>;
export declare function getContentFromFile(path: PathLike, encoding?: "utf8"): Promise<string>;
/**
 * @deprecated use {@link getContentFromUrl} instead
 * @param url - resource url
 */
export declare function getContentFrom(url: string): Promise<string>;
//# sourceMappingURL=net-server-utils.d.ts.map