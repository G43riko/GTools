import { FileTypes } from "gtools/enums";

/**
 *  FileManager is class used for open and save files
 */
export class FileManager {
    /**
     * private input used for opening system window for upload files
     */
    private readonly input: HTMLInputElement;
    /**
     * private input used for opening system window for download files
     */
    private readonly link: HTMLAnchorElement;

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
     * @param name file name
     * @param text file content
     * @param type file {@link FileTypes}. Defaul value is {@link FileTypes.TXT}
     */
    public saveFile(name: string, text: string, type: FileTypes = FileTypes.TXT): void {
        this.link.href     = URL.createObjectURL(new Blob([text], {type}));
        this.link.download = name;
        this.link.click();
    }

    /**
     * Save image into file
     *
     * @param name image name
     * @param image image element or path to image
     */
    public saveImage(name: string, image: string | HTMLImageElement): void {
        this.link.href     = typeof image === "string" ? image : image.src;
        this.link.download = name;
        this.link.click();
    }

    /**
     * Load image using system file picker
     *
     * @param  func loading callback
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
     * @param func loading callback
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
     * @param func loading callback
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
