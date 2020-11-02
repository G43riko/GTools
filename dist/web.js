"use strict";
/**************************** WEB ****************************/
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
exports.get = exports.canvas = exports.check = exports.stemmer = exports.time = exports.string = exports.object = exports.misc = exports.dom = exports.math = exports.arrays = void 0;
// UTILS
var ArrayUtils_1 = require("./utils/deprecated/ArrayUtils");
Object.defineProperty(exports, "arrays", { enumerable: true, get: function () { return ArrayUtils_1.ArrayUtils; } });
var MathUtils_1 = require("./utils/deprecated/MathUtils");
Object.defineProperty(exports, "math", { enumerable: true, get: function () { return MathUtils_1.MathUtils; } });
var DomUtils_1 = require("./utils/DomUtils");
Object.defineProperty(exports, "dom", { enumerable: true, get: function () { return DomUtils_1.DomUtils; } });
var MiscUtils_1 = require("./utils/deprecated/MiscUtils");
Object.defineProperty(exports, "misc", { enumerable: true, get: function () { return MiscUtils_1.MiscUtils; } });
var ObjectUtils_1 = require("./utils/deprecated/ObjectUtils");
Object.defineProperty(exports, "object", { enumerable: true, get: function () { return ObjectUtils_1.ObjectUtils; } });
var StringUtils_1 = require("./utils/deprecated/StringUtils");
Object.defineProperty(exports, "string", { enumerable: true, get: function () { return StringUtils_1.StringUtils; } });
exports.time = __importStar(require("./utils/time-utils"));
var SlovakStemmer_1 = require("./misc/SlovakStemmer");
Object.defineProperty(exports, "stemmer", { enumerable: true, get: function () { return SlovakStemmer_1.SlovakStemmer; } });
// DOM
var Checkers_1 = require("./dom/deprecated/Checkers");
Object.defineProperty(exports, "check", { enumerable: true, get: function () { return Checkers_1.Checkers; } });
var canvas_manager_1 = require("./dom/canvas-manager");
Object.defineProperty(exports, "canvas", { enumerable: true, get: function () { return canvas_manager_1.CanvasManager; } });
var dom_get_1 = require("./dom/dom-get");
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return dom_get_1.DomGet; } });
