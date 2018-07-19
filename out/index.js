"use strict";
// NODE
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./utils/ArrayUtils"));
// export * from "./utils/DomUtils";
__export(require("./utils/FileUtils"));
__export(require("./utils/MathUtils"));
__export(require("./utils/MiscUtils"));
__export(require("./utils/ObjectUtils"));
__export(require("./utils/StringUtils"));
__export(require("./utils/TimeUtils"));
// export * from "./utils/ProcessUtils";
var SlovakStemmer_1 = require("./utils/SlovakStemmer");
exports.SlovakStemmer = SlovakStemmer_1.SlovakStemmer;
// WEB
var ArrayUtils_1 = require("./utils/ArrayUtils");
exports.arrays = ArrayUtils_1.ArrayUtils;
var FileUtils_1 = require("./utils/FileUtils");
exports.file = FileUtils_1.FileUtils;
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
var SlovakStemmer_2 = require("./utils/SlovakStemmer");
exports.stemmer = SlovakStemmer_2.SlovakStemmer;
var Checkers_1 = require("./dom/Checkers");
exports.check = Checkers_1.Checkers;
var CanvasManager_1 = require("./dom/CanvasManager");
exports.canvas = CanvasManager_1.CanvasManager;
var Get_1 = require("./dom/Get");
exports.get = Get_1.Get;
var gender_model_1 = require("./models/gender.model");
exports.Gender = gender_model_1.Gender;
var encodings_enum_1 = require("./enums/encodings.enum");
exports.Encodings = encodings_enum_1.Encodings;
var http_status_codes_enum_1 = require("./enums/http-status-codes.enum");
exports.HttpStatusCodes = http_status_codes_enum_1.HttpStatusCodes;
var keys_enum_1 = require("./enums/keys.enum");
exports.Keys = keys_enum_1.Keys;
/*
export * from "./dom/Checkers";
export * from "./dom/CanvasManager";
export * from "./dom/Get";
*/
