"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageAsPromise = exports.createImage = exports.deserializeImage = exports.serializeImage = void 0;
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
function imageAsPromise(src) {
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
exports.imageAsPromise = imageAsPromise;
//# sourceMappingURL=image-utils.js.map