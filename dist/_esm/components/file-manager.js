import { FileTypes } from "../enums";
export class FileManager {
    constructor() {
        this.input = document.createElement("input");
        this.input.setAttribute("type", "file");
        this.input.setAttribute("value", "files");
        this.input.setAttribute("class", "hide");
        this.link = document.createElement("a");
        this.link.setAttribute("class", "hide");
        this.link.setAttribute("href", "");
    }
    saveFile(name, text, type = FileTypes.TXT) {
        this.link.href = URL.createObjectURL(new Blob([text], { type }));
        this.link.download = name;
        this.link.click();
    }
    saveImage(name, image) {
        this.link.href = typeof image === "string" ? image : image.src;
        this.link.download = name;
        this.link.click();
    }
    loadImage(func) {
        this.input.multiple = false;
        this.input.accept = "image/*";
        this.input.onchange = (event) => {
            const files = event.target.files;
            if (files.length <= 0) {
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                const image = new Image();
                image.src = reader.result;
                func(image, files[0]);
            };
            reader.readAsDataURL(files[0]);
        };
        this.input.click();
    }
    loadFile(func, encoding) {
        this.input.multiple = false;
        this.input.onchange = (e) => {
            const reader = new FileReader();
            const files = e.target.files;
            if (files && files.length > 0) {
                reader.onload = () => func(String(reader.result), files[0]);
                reader.readAsText(files[0], encoding);
            }
        };
        this.input.click();
    }
    loadFiles(func) {
        this.input.multiple = true;
        this.input.onchange = (e) => func(e.target.files);
        this.input.click();
    }
    loadBinaryFile(func) {
        this.input.onchange = (event) => {
            const reader = new FileReader();
            const files = event.target.files;
            if (files && files.length > 0) {
                reader.onload = () => func(reader.result, files[0].name);
                reader.readAsBinaryString(files[0]);
            }
        };
        this.input.click();
    }
}
//# sourceMappingURL=file-manager.js.map