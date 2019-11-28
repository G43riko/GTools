"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnalyticsUtils = /** @class */ (function () {
    function AnalyticsUtils() {
    }
    AnalyticsUtils.isIE = function () {
        return navigator.userAgent.indexOf("MSIE") >= 0;
    };
    AnalyticsUtils.isIE6 = function () {
        return navigator.userAgent.indexOf("MSIE 6") >= 0;
    };
    AnalyticsUtils.isIE11 = function () {
        return !!navigator.userAgent.match(/Trident\/7\./);
    };
    AnalyticsUtils.isEdge = function () {
        return !!navigator.userAgent.match(/Edge\//);
    };
    AnalyticsUtils.isSafari = function () {
        return navigator.userAgent.indexOf("AppleWebKit/") >= 0 &&
            navigator.userAgent.indexOf("Chrome/") < 0 &&
            navigator.userAgent.indexOf("Edge/") < 0;
    };
    AnalyticsUtils.isIOS = function () {
        return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    };
    AnalyticsUtils.isChromeApp = function () {
        return window.chrome && window.chrome.app && window.chrome.app.runtime;
    };
    AnalyticsUtils.isWin = function () {
        return navigator.appVersion.indexOf("Win") > 0;
    };
    AnalyticsUtils.isMac = function () {
        return navigator.appVersion.indexOf("Mac") > 0;
    };
    AnalyticsUtils.isChromeOs = function () {
        return /\bCrOS\b/.test(navigator.userAgent);
    };
    AnalyticsUtils.isTouch = function () {
        return "ontouchstart" in document.documentElement;
    };
    return AnalyticsUtils;
}());
exports.AnalyticsUtils = AnalyticsUtils;
