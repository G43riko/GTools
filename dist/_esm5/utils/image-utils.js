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
//# sourceMappingURL=image-utils.js.map