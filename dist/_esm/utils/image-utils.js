import { CreateElement, CreateImage } from "./html-utils";
export function serializeImage(image) {
    const canvas = CreateElement("canvas", {
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
export function createImage(callback, width, height = width) {
    const canvas = CreateElement("canvas", {
        width,
        height,
    });
    callback(canvas.getContext("2d"));
    return canvas;
}
export function imageAsPromise(src) {
    return new Promise((success, reject) => {
        const image = document.createElement("img");
        const callback = (e) => {
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