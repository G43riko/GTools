export function isIE() {
    return navigator.userAgent.indexOf("MSIE") >= 0;
}
export function isIE6() {
    return navigator.userAgent.indexOf("MSIE 6") >= 0;
}
export function isIE11() {
    return !!navigator.userAgent.match(/Trident\/7\./);
}
export function isEdge() {
    return !!navigator.userAgent.match(/Edge\//);
}
export function isSafari() {
    return navigator.userAgent.indexOf("AppleWebKit/") >= 0 &&
        navigator.userAgent.indexOf("Chrome/") < 0 &&
        navigator.userAgent.indexOf("Edge/") < 0;
}
export function isIOS() {
    return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
}
export function isChromeApp() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window) === null || _a === void 0 ? void 0 : _a.chrome) === null || _b === void 0 ? void 0 : _b.app) === null || _c === void 0 ? void 0 : _c.runtime;
}
export function isWin() {
    return navigator.appVersion.indexOf("Win") > 0;
}
export function isMac() {
    return navigator.appVersion.indexOf("Mac") > 0;
}
export function isChromeOs() {
    return /\bCrOS\b/.test(navigator.userAgent);
}
export function isTouch() {
    return "ontouchstart" in document.documentElement;
}
export function hasMouse() {
    return "onmousemove" in document.documentElement;
}
//# sourceMappingURL=analytics-utils.js.map