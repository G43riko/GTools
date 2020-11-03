"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage = exports.deserializeImage = exports.serializeImage = void 0;
var html_utils_1 = require("./html-utils");
function serializeImage(image) {
    var canvas = html_utils_1.CreateElement("canvas", {
        width: image.width,
        height: image.height,
    });
    canvas.getContext("2d").drawImage(image, 0, 0);
    return canvas.toDataURL("image/png");
}
exports.serializeImage = serializeImage;
function deserializeImage(image) {
    return html_utils_1.CreateImage({
        src: image,
    });
}
exports.deserializeImage = deserializeImage;
function createImage(callback, width, height) {
    if (height === void 0) { height = width; }
    var canvas = html_utils_1.CreateElement("canvas", {
        width: width,
        height: height,
    });
    callback(canvas.getContext("2d"));
    return canvas;
}
exports.createImage = createImage;
