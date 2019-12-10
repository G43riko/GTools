"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var file_types_enum_1 = require("../enums/file-types.enum");
/**
 *  FileManager is class used for open and save files
 */
var FileManager = /** @class */ (function () {
    function FileManager() {
        this.input = document.createElement("input");
        this.input.setAttribute("type", "file");
        this.input.setAttribute("value", "files");
        this.input.setAttribute("class", "hide");
        this.link = document.createElement("a");
        this.link.setAttribute("class", "hide");
        this.link.setAttribute("href", "");
    }

    /**
     * Save text content into file with specific extensions
     *
     * @param name file name
     * @param text file content
     * @param type file {@link FileTypes}. Defaul value is {@link FileTypes.TXT}
     */
    FileManager.prototype.saveFile = function (name, text, type) {
        if (type === void 0) {
            type = file_types_enum_1.FileTypes.TXT;
        }
        this.link.href = URL.createObjectURL(new Blob([text], {type: type}));
        this.link.download = name;
        this.link.click();
    };
    /**
     * Save image into file
     *
     * @param name image name
     * @param image image element or path to image
     */
    FileManager.prototype.saveImage = function (name, image) {
        this.link.href = typeof image === "string" ? image : image.src;
        this.link.download = name;
        this.link.click();
    };
    /**
     * Load image using system file picker
     *
     * @param  func loading callback
     */
    FileManager.prototype.loadImage = function (func) {
        this.input.onchange = function (event) {
            var files = event.target.files;
            if (files.length <= 0) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function () {
                var image = new Image();
                image.src = reader.result;
                func(image, files[0]);
            };
            reader.readAsDataURL(files[0]);
        };
        this.input.click();
    };
    /**
     * Load file using system file picker
     *
     * @param func loading callback
     */
    FileManager.prototype.loadFile = function (func) {
        this.input.onchange = function (e) {
            var reader = new FileReader();
            var files = e.target.files;
            if (files.length > 0) {
                reader.onload = function () {
                    return func(reader.result, files);
                };
                reader.readAsText(files[0]);
            }
        };
        this.input.click();
    };
    /**
     * Load binary file using system file picker
     *
     * @param func loading callback
     */
    FileManager.prototype.loadBinaryFile = function (func) {
        this.input.onchange = function (event) {
            var reader = new FileReader();
            var files = event.target.files;
            if (files.length > 0) {
                reader.onload = function () {
                    return func(reader.result, files[0].name);
                };
                reader.readAsBinaryString(files[0]);
            }
        };
        this.input.click();
    };
    return FileManager;
}());
exports.FileManager = FileManager;
