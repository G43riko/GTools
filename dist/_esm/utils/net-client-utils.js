import { __awaiter } from "tslib";
import { NotBrowserException } from "gtools/errors";
import { CreateElement, CreateImage } from "./html-utils";
export function uploadImage() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((success, reject) => {
            const element = CreateElement("input", {
                type: "file",
                onChange: (event) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        success(CreateImage({
                            src: reader.result,
                        }));
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(event.target.files[0]);
                },
            });
            element.style.display = "none";
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        });
    });
}
export function uploadFile() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((success) => {
            const element = CreateElement("input", {
                type: "file",
                onChange: (event) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        success(reader.result);
                    };
                    reader.readAsText(event.target.files[0]);
                },
            });
            element.style.display = "none";
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        });
    });
}
export function clientDownloadFile(text, name) {
    const element = CreateElement("a", {
        href: "data:text/plain;charset=utf-8," + encodeURIComponent(text),
        download: name,
    });
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
export function includeFile(file) {
    if (typeof document === "undefined") {
        throw new NotBrowserException();
    }
    const script = document.createElement("script");
    if (!script) {
        return;
    }
    script.src = file;
    script.type = "text/javascript";
    script.defer = true;
    document.head.appendChild(script);
}
//# sourceMappingURL=net-client-utils.js.map