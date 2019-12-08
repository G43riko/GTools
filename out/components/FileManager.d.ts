import { FileTypes } from "../enums/file-types.enum";

/**
 *  FileManager is class used for open and save files
 */
export declare class FileManager {
    /**
     * private input used for opening system window for upload files
     */
    private readonly input;
    /**
     * private input used for opening system window for download files
     */
    private readonly link;
    constructor();
    /**
     * Save text content into file with specific extensions
     *
     * @param name file name
     * @param text file content
     * @param type file {@link FileTypes}. Defaul value is {@link FileTypes.TXT}
     */
    saveFile(name: string, text: string, type?: FileTypes): void;

    /**
     * Save image into file
     *
     * @param name image name
     * @param image image element or path to image
     */
    saveImage(name: string, image: string | HTMLImageElement): void;

    /**
     * Load image using system file picker
     *
     * @param  func loading callback
     */
    loadImage(func: (result: any, fileName: string) => any): void;

    /**
     * Load file using system file picker
     *
     * @param func loading callback
     */
    loadFile(func: (result: any, files: any) => any): void;

    /**
     * Load binary file using system file picker
     *
     * @param func loading callback
     */
    loadBinaryFile(func: (result: any, fileName: string) => any): void;
}
