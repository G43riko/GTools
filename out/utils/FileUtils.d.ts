/// <reference types="node" />
export declare class FileUtils {
    static scanDirRecursive(dir: string): Promise<string[]>;
    static loadFileJSON(url: string, callback: (err: NodeJS.ErrnoException, data: any) => any): void;
    static loadFile(url: string, callback: (err: NodeJS.ErrnoException, data: string) => any, encoding?: string): void;
    static saveJsonFile(data: any, fileName: string): Promise<string>;
    static saveFile(data: string, fileName: string): Promise<string>;
    static removeFile(fileName: string): Promise<string>;
    static checkExtension(name: string, extension: string): string;
}
