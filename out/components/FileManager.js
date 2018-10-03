"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_types_enum_1 = require("../enums/file-types.enum");
/**
 * @class
 *
 */
var FileManager = /** @class */ (function () {
    /**
     * @constructor
     * @public
     */
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
     * @param {string} name
     * @param {string} text
     * @param {FileTypes} type
     * @public
     */
    FileManager.prototype.saveFile = function (name, text, type) {
        if (type === void 0) { type = file_types_enum_1.FileTypes.TXT; }
        this.link.href = URL.createObjectURL(new Blob([text], { type: type }));
        this.link.download = name;
        this.link.click();
    };
    /**
     * Save image into file
     *
     * @param {string} name
     * @param {string|HTMLImageElement} image
     * @public
     */
    FileManager.prototype.saveImage = function (name, image) {
        this.link.href = typeof image === "string" ? image : image.src;
        this.link.download = name;
        this.link.click();
    };
    /**
     * Load image using system file picker
     *
     * @param {(result: any, fileName: string) => any} func
     * @public
     */
    FileManager.prototype.loadImage = function (func) {
        this.input.onchange = function (event) {
            var reader = new FileReader();
            var files = event.target.files;
            if (files.length > 0) {
                reader.onload = function () {
                    var image = new Image();
                    image.src = reader.result;
                    func(image, files[0]);
                };
                reader.readAsDataURL(files[0]);
            }
        };
        this.input.click();
    };
    /**
     * Load file using system file picker
     *
     * @param {(result: any, files: any) => any} func
     * @public
     */
    FileManager.prototype.loadFile = function (func) {
        this.input.onchange = function (e) {
            var reader = new FileReader();
            var files = e.target.files;
            if (files.length > 0) {
                reader.onload = function () { return func(reader.result, files); };
                reader.readAsText(files[0]);
            }
        };
        this.input.click();
    };
    /**
     * Load binary file using system file picker
     *
     * @param {(result: any, fileName: string) => any)} func
     */
    FileManager.prototype.loadBinaryFile = function (func) {
        this.input.onchange = function (event) {
            var reader = new FileReader();
            var files = event.target.files;
            if (files.length > 0) {
                reader.onload = function () { return func(reader.result, files[0].name); };
                reader.readAsBinaryString(files[0]);
            }
        };
        this.input.click();
    };
    return FileManager;
}());
exports.FileManager = FileManager;
