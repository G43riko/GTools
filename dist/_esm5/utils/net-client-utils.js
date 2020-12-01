import { __awaiter, __generator } from "tslib";
import { NotBrowserException } from "gtools/errors";
import { CreateElement, CreateImage } from "./html-utils";
export function uploadImage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (success, reject) {
                    var element = CreateElement("input", {
                        type: "file",
                        onChange: function (event) {
                            var reader = new FileReader();
                            reader.onload = function () {
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
                })];
        });
    });
}
export function uploadFile() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (success) {
                    var element = CreateElement("input", {
                        type: "file",
                        onChange: function (event) {
                            var reader = new FileReader();
                            reader.onload = function () {
                                success(reader.result);
                            };
                            reader.readAsText(event.target.files[0]);
                        },
                    });
                    element.style.display = "none";
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                })];
        });
    });
}
export function clientDownloadFile(text, name) {
    var element = CreateElement("a", {
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
    var script = document.createElement("script");
    if (!script) {
        return;
    }
    script.src = file;
    script.type = "text/javascript";
    script.defer = true;
    document.head.appendChild(script);
}
//# sourceMappingURL=net-client-utils.js.map