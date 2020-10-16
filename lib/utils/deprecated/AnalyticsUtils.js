"use strict";
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
exports.AnalyticsUtils = void 0;
var Analytics = __importStar(require("../analytics-utils"));
/**
 * @deprecated use {@link Analytics} instead
 * This class contains methods to check which platform is using
 */
var AnalyticsUtils = /** @class */ (function () {
    function AnalyticsUtils() {
    }
    /**
     * Method check if app is running inside Internet explorer
     */
    AnalyticsUtils.isIE = Analytics.isIE();
    /**
     * Method check if app is running inside Internet explorer 6
     */
    AnalyticsUtils.isIE6 = Analytics.isIE6();
    /**
     * Method check if app is running inside Internet explorer 11
     */
    AnalyticsUtils.isIE11 = Analytics.isIE11();
    /**
     * Method check if app is running inside Edge
     */
    AnalyticsUtils.isEdge = Analytics.isEdge();
    /**
     * Method check if app is running inside Safary
     */
    AnalyticsUtils.isSafari = Analytics.isSafari();
    /**
     * Method check if app is running inside IOS
     */
    AnalyticsUtils.isIOS = Analytics.isIOS();
    /**
     * Method check if app is running inside Chrome
     */
    AnalyticsUtils.isChromeApp = Analytics.isChromeApp();
    /**
     * Method check if app is running on Windows
     */
    AnalyticsUtils.isWin = Analytics.isWin();
    /**
     * Method check if app is running on Mac OS
     */
    AnalyticsUtils.isMac = Analytics.isMac();
    /**
     * Method check if app is running Chrome OS
     */
    AnalyticsUtils.isChromeOs = Analytics.isChromeOs();
    /**
     * Method check if device support touch events
     */
    AnalyticsUtils.isTouch = Analytics.isTouch();
    return AnalyticsUtils;
}());
exports.AnalyticsUtils = AnalyticsUtils;
