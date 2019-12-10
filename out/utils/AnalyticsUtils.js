"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
/**
 * This class contains methods to check which platform is using
 */
var AnalyticsUtils = /** @class */ (function () {
    function AnalyticsUtils() {
    }

    /**
     * Method check if app is running inside Internet explorer
     */
    AnalyticsUtils.isIE = function () {
        return navigator.userAgent.indexOf("MSIE") >= 0;
    };
    /**
     * Method check if app is running inside Internet explorer 6
     */
    AnalyticsUtils.isIE6 = function () {
        return navigator.userAgent.indexOf("MSIE 6") >= 0;
    };
    /**
     * Method check if app is running inside Internet explorer 11
     */
    AnalyticsUtils.isIE11 = function () {
        return !!navigator.userAgent.match(/Trident\/7\./);
    };
    /**
     * Method check if app is running inside Edge
     */
    AnalyticsUtils.isEdge = function () {
        return !!navigator.userAgent.match(/Edge\//);
    };
    /**
     * Method check if app is running inside Safary
     */
    AnalyticsUtils.isSafari = function () {
        return navigator.userAgent.indexOf("AppleWebKit/") >= 0 &&
            navigator.userAgent.indexOf("Chrome/") < 0 &&
            navigator.userAgent.indexOf("Edge/") < 0;
    };
    /**
     * Method check if app is running inside IOS
     */
    AnalyticsUtils.isIOS = function () {
        return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    };
    /**
     * Method check if app is running inside Chrome
     */
    AnalyticsUtils.isChromeApp = function () {
        return window.chrome && window.chrome.app && window.chrome.app.runtime;
    };
    /**
     * Method check if app is running on Windows
     */
    AnalyticsUtils.isWin = function () {
        return navigator.appVersion.indexOf("Win") > 0;
    };
    /**
     * Method check if app is running on Mac OS
     */
    AnalyticsUtils.isMac = function () {
        return navigator.appVersion.indexOf("Mac") > 0;
    };
    /**
     * Method check if app is running Chrome OS
     */
    AnalyticsUtils.isChromeOs = function () {
        return /\bCrOS\b/.test(navigator.userAgent);
    };
    /**
     * Method check if device support touch events
     */
    AnalyticsUtils.isTouch = function () {
        return "ontouchstart" in document.documentElement;
    };
    return AnalyticsUtils;
}());
exports.AnalyticsUtils = AnalyticsUtils;
