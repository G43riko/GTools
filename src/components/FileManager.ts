import { FileTypes } from "../enums/file-types.enum";

export class FileManager {
    private readonly input: HTMLInputElement;
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

    public saveFile(name: string, text: string, type: FileTypes = FileTypes.TXT): void {
        this.link.href     = URL.createObjectURL(new Blob([text], {type}));
        this.link.download = name;
        this.link.click();
    }

    public saveImage(name: string, image: string | HTMLImageElement): void {
        this.link.href     = typeof image === "string" ? image : image.src;
        this.link.download = name;
        this.link.click();
    }

    public loadImage(func: (result: any, fileName: string) => any): void {
        this.input.onchange = (event: any) => {
            const reader: FileReader = new FileReader();
            const files              = event.target.files;
            if (files.length > 0) {
                reader.onload = () => {
                    const image = new Image();
                    image.src   = reader.result as string;
                    func(image, files[0]);
                };
                reader.readAsDataURL(files[0]);
            }
        };
        this.input.click();
    }

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
