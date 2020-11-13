"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasMouse = exports.isTouch = exports.isChromeOs = exports.isMac = exports.isWin = exports.isChromeApp = exports.isIOS = exports.isSafari = exports.isEdge = exports.isIE11 = exports.isIE6 = exports.isIE = void 0;
function isIE() {
    return navigator.userAgent.indexOf("MSIE") >= 0;
}
exports.isIE = isIE;
function isIE6() {
    return navigator.userAgent.indexOf("MSIE 6") >= 0;
}
exports.isIE6 = isIE6;
function isIE11() {
    return !!navigator.userAgent.match(/Trident\/7\./);
}
exports.isIE11 = isIE11;
function isEdge() {
    return !!navigator.userAgent.match(/Edge\//);
}
exports.isEdge = isEdge;
function isSafari() {
    return navigator.userAgent.indexOf("AppleWebKit/") >= 0 &&
        navigator.userAgent.indexOf("Chrome/") < 0 &&
        navigator.userAgent.indexOf("Edge/") < 0;
}
exports.isSafari = isSafari;
function isIOS() {
    return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
}
exports.isIOS = isIOS;
function isChromeApp() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window) === null || _a === void 0 ? void 0 : _a.chrome) === null || _b === void 0 ? void 0 : _b.app) === null || _c === void 0 ? void 0 : _c.runtime;
}
exports.isChromeApp = isChromeApp;
function isWin() {
    return navigator.appVersion.indexOf("Win") > 0;
}
exports.isWin = isWin;
function isMac() {
    return navigator.appVersion.indexOf("Mac") > 0;
}
exports.isMac = isMac;
function isChromeOs() {
    return /\bCrOS\b/.test(navigator.userAgent);
}
exports.isChromeOs = isChromeOs;
function isTouch() {
    return "ontouchstart" in document.documentElement;
}
exports.isTouch = isTouch;
function hasMouse() {
    return "onmousemove" in document.documentElement;
}
exports.hasMouse = hasMouse;
//# sourceMappingURL=analytics-utils.js.map