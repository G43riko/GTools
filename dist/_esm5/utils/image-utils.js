import { CreateElement, CreateImage } from "./html-utils";
export function serializeImage(image) {
    var canvas = CreateElement("canvas", {
        width: image.width,
        height: image.height,
    });
    canvas.getContext("2d").drawImage(image, 0, 0);
    return canvas.toDataURL("image/png");
}
export function deserializeImage(image) {
    return CreateImage({
        src: image,
    });
}
export function createImage(callback, width, height) {
    if (height === void 0) { height = width; }
    var canvas = CreateElement("canvas", {
        width: width,
        height: height,
    });
    callback(canvas.getContext("2d"));
    return canvas;
}
export function imageAsPromise(src) {
    return new Promise(function (success, reject) {
        var image = document.createElement("img");
        var callback = function (e) {
            image.dataset.hasError = e ? "true" : "false";
            if (e.type === "error") {
                reject(e);
                return console.error("Error during loading image ", src);
            }
            image.removeEventListener("load", callback);
            image.removeEventListener("error", callback);
            success(image);
        };
        image.addEventListener("load", callback);
        image.addEventListener("error", callback);
        image.src = src;
    });
}
//# sourceMappingURL=image-utils.js.map