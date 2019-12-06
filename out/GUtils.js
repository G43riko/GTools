"use strict";
/**************************** NODE ****************************/
/*
// UTILS

export * from "./utils/ArrayUtils";
export * from "./utils/MathUtils";
export * from "./utils/MiscUtils";
export * from "./utils/ObjectUtils";
export * from "./utils/StringUtils";
export * from "./utils/TimeUtils";

export * from "./utils/SlovakStemmer";
*/
/**************************** WEB ****************************/

/*
// UTILS

export { ArrayUtils as arrays } from "./utils/ArrayUtils";
export { MathUtils as math } from "./utils/MathUtils";
export { DomUtils as dom } from "./utils/DomUtils";
export { MiscUtils as misc } from "./utils/MiscUtils";
export { ObjectUtils as object } from "./utils/ObjectUtils";
export { StringUtils as string } from "./utils/StringUtils";
export { TimeUtils as time } from "./utils/TimeUtils";

export { SlovakStemmer as stemmer } from "./utils/SlovakStemmer";

// DOM

export { Checkers as check } from "./dom/Checkers";
export { CanvasManager as canvas } from "./dom/CanvasManager";
export { Get as get } from "./dom/Get";
*/
/**************************** BOTH ****************************/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {value: true});
__export(require("./GUtils.node"));
__export(require("./GUtils.web"));
__export(require("./GUtils.common"));
