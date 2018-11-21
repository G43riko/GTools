import { FileTypes } from "../enums/file-types.enum";

/**
 * @class
 *
 */
export class FileManager {
    private readonly input: HTMLInputElement;
    private readonly link: HTMLAnchorElement;

    /**
     * @constructor
     * @public
     */
    public constructor() {
        this.input = document.createElement("input");
        this.input.setAttribute("type", "file");
        this.input.setAttribute("value", "files");
        this.input.setAttribute("class", "hide");

        this.link = document.createElement("a");
        this.link.setAttribute("class", "hide");
        this.link.setAttribute("href", "");
    }

    /**
     * Save text content into file with specific extensions
     *
     * @param {string} name
     * @param {string} text
     * @param {FileTypes} type
     * @public
     */
    public saveFile(name: string, text: string, type: FileTypes = FileTypes.TXT): void {
        this.link.href     = URL.createObjectURL(new Blob([text], {type}));
        this.link.download = name;
        this.link.click();
    }

    /**
     * Save image into file
     *
     * @param {string} name
     * @param {string|HTMLImageElement} image
     * @public
     */
    public saveImage(name: string, image: string | HTMLImageElement): void {
        this.link.href     = typeof image === "string" ? image : image.src;
        this.link.download = name;
        this.link.click();
    }

    /**
     * Load image using system file picker
     *
     * @param {(result: any, fileName: string) => any} func
     * @public
     */
    public loadImage(func: (result: any, fileName: string) => any): void {
        this.input.onchange = (event: any) => {
            const files              = event.target.files;
            if (files.length <= 0) {
                return;
            }
            const reader: FileReader = new FileReader();
            reader.onload            = () => {
                const image = new Image();
                image.src   = reader.result as string;
                func(image, files[0]);
            };
            reader.readAsDataURL(files[0]);
        };
        this.input.click();
    }

    /**
     * Load file using system file picker
     *
     * @param {(result: any, files: any) => any} func
     * @public
     */
    public loadFile(func: (result: any, files: any) => any): void {
        this.input.onchange = (e: Event) => {
            const reader = new FileReader();
            const files  = (e.target as any).files;
            if (files.length > 0) {
                reader.onload = () => func(reader.result, files);
                reader.readAsText(files[0]);
            }
        };
        this.input.click();
    }

    /**
     * Load binary file using system file picker
     *
     * @param {(result: any, fileName: string) => any)} func
     */
    public loadBinaryFile(func: (result: any, fileName: string) => any): void {
        this.input.onchange = (event: any) => {
            const reader = new FileReader();
            const files  = event.target.files;
            if (files.length > 0) {
                reader.onload = () => func(reader.result, files[0].name);
                reader.readAsBinaryString(files[0]);
            }
        };
        this.input.click();
    }
}
