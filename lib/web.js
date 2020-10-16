"use strict";
/**************************** WEB ****************************/
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
var StringUtils_1 = require("./utils/StringUtils");
Object.defineProperty(exports, "string", { enumerable: true, get: function () { return StringUtils_1.StringUtils; } });
var TimeUtils_1 = require("./utils/TimeUtils");
Object.defineProperty(exports, "time", { enumerable: true, get: function () { return TimeUtils_1.TimeUtils; } });
var SlovakStemmer_1 = require("./misc/SlovakStemmer");
Object.defineProperty(exports, "stemmer", { enumerable: true, get: function () { return SlovakStemmer_1.SlovakStemmer; } });
// DOM
var Checkers_1 = require("./dom/Checkers");
Object.defineProperty(exports, "check", { enumerable: true, get: function () { return Checkers_1.Checkers; } });
var CanvasManager_1 = require("./dom/CanvasManager");
Object.defineProperty(exports, "canvas", { enumerable: true, get: function () { return CanvasManager_1.CanvasManager; } });
var Get_1 = require("./dom/Get");
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return Get_1.Get; } });
