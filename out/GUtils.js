"use strict";
/**************************** NODE ****************************/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// UTILS
__export(require("./utils/ArrayUtils"));
__export(require("./utils/MathUtils"));
__export(require("./utils/MiscUtils"));
__export(require("./utils/ObjectUtils"));
__export(require("./utils/StringUtils"));
__export(require("./utils/TimeUtils"));
__export(require("./utils/SlovakStemmer"));
/**************************** WEB ****************************/
// UTILS
var ArrayUtils_1 = require("./utils/ArrayUtils");
exports.arrays = ArrayUtils_1.ArrayUtils;
var MathUtils_1 = require("./utils/MathUtils");
exports.math = MathUtils_1.MathUtils;
var DomUtils_1 = require("./utils/DomUtils");
exports.dom = DomUtils_1.DomUtils;
var MiscUtils_1 = require("./utils/MiscUtils");
exports.misc = MiscUtils_1.MiscUtils;
var ObjectUtils_1 = require("./utils/ObjectUtils");
exports.object = ObjectUtils_1.ObjectUtils;
var StringUtils_1 = require("./utils/StringUtils");
exports.string = StringUtils_1.StringUtils;
var TimeUtils_1 = require("./utils/TimeUtils");
exports.time = TimeUtils_1.TimeUtils;
var SlovakStemmer_1 = require("./utils/SlovakStemmer");
exports.stemmer = SlovakStemmer_1.SlovakStemmer;
// DOM
var Checkers_1 = require("./dom/Checkers");
exports.check = Checkers_1.Checkers;
var CanvasManager_1 = require("./dom/CanvasManager");
exports.canvas = CanvasManager_1.CanvasManager;
var Get_1 = require("./dom/Get");
exports.get = Get_1.Get;
/**************************** BOTH ****************************/
// UTILS
__export(require("./utils/StringCheckers"));
// MODELS
var gender_model_1 = require("./models/gender.model");
exports.Gender = gender_model_1.Gender;
// ENUMS
__export(require("./enums/encodings.enum"));
__export(require("./enums/file-types.enum"));
__export(require("./enums/http-status-codes.enum"));
__export(require("./enums/keys.enum"));
// COMPONENTS
__export(require("./components/KeyValueCounter"));
__export(require("./components/FileManager"));
__export(require("./components/Paginator"));
// MATHS
__export(require("./math/Vector2f"));
// CONFIG
var gtools_config_1 = require("./config/gtools-config");
exports.initConfig = gtools_config_1.initConfig;
