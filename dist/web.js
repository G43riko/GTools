"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.canvas = exports.stemmer = exports.time = exports.string = exports.object = exports.misc = exports.dom = exports.math = exports.arrays = void 0;
exports.arrays = __importStar(require("./utils/array-utils"));
exports.math = __importStar(require("./utils/math-utils"));
exports.dom = __importStar(require("./utils/DomUtils"));
exports.misc = __importStar(require("./utils/misc-utils"));
exports.object = __importStar(require("./utils/object-utils"));
exports.string = __importStar(require("./utils/string-utils"));
exports.time = __importStar(require("./utils/time-utils"));
var slovak_stemmer_1 = require("./misc/slovak-stemmer");
Object.defineProperty(exports, "stemmer", { enumerable: true, get: function () { return slovak_stemmer_1.SlovakStemmer; } });
var canvas_manager_1 = require("./dom/canvas-manager");
Object.defineProperty(exports, "canvas", { enumerable: true, get: function () { return canvas_manager_1.CanvasManager; } });
var dom_get_1 = require("./dom/dom-get");
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return dom_get_1.DomGet; } });
//# sourceMappingURL=web.js.map