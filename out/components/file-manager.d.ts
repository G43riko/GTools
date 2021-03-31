import { FileTypes } from "../enums";
export declare class FileManager {
    private readonly input;
    private readonly link;
    constructor();
    saveFile(name: string, text: string, type?: FileTypes): void;
    saveImage(name: string, image: string | HTMLImageElement): void;
    loadImage(func: (result: HTMLImageElement, fileName: File) => void): void;
    loadFile(func: (result: string, file: File) => void, encoding?: string): void;
    loadFiles(func: (files: FileList | null) => void): void;
    loadBinaryFile(func: (result: ArrayBuffer | string | null, fileName: string) => void): void;
}
