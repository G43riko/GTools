/**
 * Method check if app is running inside Internet explorer
 */
export function isIE() {
    return navigator.userAgent.indexOf("MSIE") >= 0;
}
/**
 * Method check if app is running inside Internet explorer 6
 */
export function isIE6() {
    return navigator.userAgent.indexOf("MSIE 6") >= 0;
}
/**
 * Method check if app is running inside Internet explorer 11
 */
export function isIE11() {
    return !!navigator.userAgent.match(/Trident\/7\./);
}
/**
 * Method check if app is running inside Edge
 */
export function isEdge() {
    return !!navigator.userAgent.match(/Edge\//);
}
/**
 * Method check if app is running inside Safary
 */
export function isSafari() {
    return navigator.userAgent.indexOf("AppleWebKit/") >= 0 &&
        navigator.userAgent.indexOf("Chrome/") < 0 &&
        navigator.userAgent.indexOf("Edge/") < 0;
}
/**
 * Method check if app is running inside IOS
 */
export function isIOS() {
    return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
}
/**
 * Method check if app is running inside Chrome
 */
export function isChromeApp() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window) === null || _a === void 0 ? void 0 : _a.chrome) === null || _b === void 0 ? void 0 : _b.app) === null || _c === void 0 ? void 0 : _c.runtime;
}
/**
 * Method check if app is running onMessage Windows
 */
export function isWin() {
    return navigator.appVersion.indexOf("Win") > 0;
}
/**
 * Method check if app is running onMessage Mac OS
 */
export function isMac() {
    return navigator.appVersion.indexOf("Mac") > 0;
}
/**
 * Method check if app is running Chrome OS
 */
export function isChromeOs() {
    return /\bCrOS\b/.test(navigator.userAgent);
}
/**
 * Method check if device support touch events
 */
export function isTouch() {
    return "ontouchstart" in document.documentElement;
}
/**
 * Method check if device support mouse events
 */
export function hasMouse() {
    return "onmousemove" in document.documentElement;
}
