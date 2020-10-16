import * as Analytics from "../analytics-utils";

/**
 * @deprecated use {@link Analytics} instead
 * This class contains methods to check which platform is using
 */
export class AnalyticsUtils {
    /**
     * Method check if app is running inside Internet explorer
     */
    public static isIE = Analytics.isIE();

    /**
     * Method check if app is running inside Internet explorer 6
     */
    public static isIE6 = Analytics.isIE6();

    /**
     * Method check if app is running inside Internet explorer 11
     */
    public static isIE11 = Analytics.isIE11();

    /**
     * Method check if app is running inside Edge
     */
    public static isEdge = Analytics.isEdge();

    /**
     * Method check if app is running inside Safary
     */
    public static isSafari = Analytics.isSafari();

    /**
     * Method check if app is running inside IOS
     */
    public static isIOS = Analytics.isIOS();

    /**
     * Method check if app is running inside Chrome
     */
    public static isChromeApp = Analytics.isChromeApp();

    /**
     * Method check if app is running on Windows
     */
    public static isWin = Analytics.isWin();

    /**
     * Method check if app is running on Mac OS
     */
    public static isMac = Analytics.isMac();

    /**
     * Method check if app is running Chrome OS
     */
    public static isChromeOs = Analytics.isChromeOs();

    /**
     * Method check if device support touch events
     */
    public static isTouch = Analytics.isTouch();
}
