import { FileTypes } from "gtools/enums";
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
    loadFile(func) {
        this.input.onchange = (e) => {
            const reader = new FileReader();
            const files = e.target.files;
            if (files.length > 0) {
                reader.onload = () => func(reader.result, files);
                reader.readAsText(files[0]);
            }
        };
        this.input.click();
    }
    loadBinaryFile(func) {
        this.input.onchange = (event) => {
            const reader = new FileReader();
            const files = event.target.files;
            if (files.length > 0) {
                reader.onload = () => func(reader.result, files[0].name);
                reader.readAsBinaryString(files[0]);
            }
        };
        this.input.click();
    }
}
//# sourceMappingURL=file-manager.js.map