import { FileTypes } from "../enums/file-types.enum";
export declare class FileManager {
    private input;
    private link;
    constructor();
    saveFile(name: string, text: string, type?: FileTypes): void;
    saveImage(name: string, image: string | HTMLImageElement): void;
    loadImage(func: (result: any, fileName: string) => any): void;
    loadFile(func: (result: any, files: any) => any): void;
    loadBinaryFile(func: (result: any, fileName: string) => any): void;
}
