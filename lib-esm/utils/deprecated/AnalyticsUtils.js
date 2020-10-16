import * as Analytics from "../analytics-utils";
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
export { AnalyticsUtils };
