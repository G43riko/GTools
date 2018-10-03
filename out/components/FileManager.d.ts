import { FileTypes } from "../enums/file-types.enum";
/**
 * @class
 *
 */
export declare class FileManager {
    private readonly input;
    private readonly link;
    /**
     * @constructor
     * @public
     */
    constructor();
    /**
     * Save text content into file with specific extensions
     *
     * @param {string} name
     * @param {string} text
     * @param {FileTypes} type
     * @public
     */
    saveFile(name: string, text: string, type?: FileTypes): void;
    /**
     * Save image into file
     *
     * @param {string} name
     * @param {string|HTMLImageElement} image
     * @public
     */
    saveImage(name: string, image: string | HTMLImageElement): void;
    /**
     * Load image using system file picker
     *
     * @param {(result: any, fileName: string) => any} func
     * @public
     */
    loadImage(func: (result: any, fileName: string) => any): void;
    /**
     * Load file using system file picker
     *
     * @param {(result: any, files: any) => any} func
     * @public
     */
    loadFile(func: (result: any, files: any) => any): void;
    /**
     * Load binary file using system file picker
     *
     * @param {(result: any, fileName: string) => any)} func
     */
    loadBinaryFile(func: (result: any, fileName: string) => any): void;
}
