/// <reference types="node" />
import { PathLike } from "fs";
export declare function serverDownloadFile(url: string, fileName: string): void;
export declare function getPublicIp(): Promise<string>;
export declare function getContent(uri: PathLike): Promise<string>;
export declare function getContentFromUrl(url: URL): Promise<string>;
export declare function getContentFromFile(path: PathLike, encoding?: "utf8"): Promise<string>;
export declare function getContentFrom(url: string): Promise<string>;
