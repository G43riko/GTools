import * as Analytics from "../analytics-utils";
var AnalyticsUtils = (function () {
    function AnalyticsUtils() {
    }
    AnalyticsUtils.isIE = Analytics.isIE();
    AnalyticsUtils.isIE6 = Analytics.isIE6();
    AnalyticsUtils.isIE11 = Analytics.isIE11();
    AnalyticsUtils.isEdge = Analytics.isEdge();
    AnalyticsUtils.isSafari = Analytics.isSafari();
    AnalyticsUtils.isIOS = Analytics.isIOS();
    AnalyticsUtils.isChromeApp = Analytics.isChromeApp();
    AnalyticsUtils.isWin = Analytics.isWin();
    AnalyticsUtils.isMac = Analytics.isMac();
    AnalyticsUtils.isChromeOs = Analytics.isChromeOs();
    AnalyticsUtils.isTouch = Analytics.isTouch();
    return AnalyticsUtils;
}());
export { AnalyticsUtils };
//# sourceMappingURL=AnalyticsUtils.js.map