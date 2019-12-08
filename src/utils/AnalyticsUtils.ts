/**
 * This class contains methods to check which platform is using
 */
export class AnalyticsUtils {
    /**
     * Method check if app is running inside Internet explorer
     */
    public static isIE(): boolean {
        return navigator.userAgent.indexOf("MSIE") >= 0;
    }

    /**
     * Method check if app is running inside Internet explorer 6
     */
    public static isIE6(): boolean {
        return navigator.userAgent.indexOf("MSIE 6") >= 0;
    }

    /**
     * Method check if app is running inside Internet explorer 11
     */
    public static isIE11(): boolean {
        return !!navigator.userAgent.match(/Trident\/7\./);
    }

    /**
     * Method check if app is running inside Edge
     */
    public static isEdge(): boolean {
        return !!navigator.userAgent.match(/Edge\//);
    }

    /**
     * Method check if app is running inside Safary
     */
    public static isSafari(): boolean {
        return navigator.userAgent.indexOf("AppleWebKit/") >= 0 &&
            navigator.userAgent.indexOf("Chrome/") < 0 &&
            navigator.userAgent.indexOf("Edge/") < 0;
    }

    /**
     * Method check if app is running inside IOS
     */
    public static isIOS(): boolean {
        return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    }

    /**
     * Method check if app is running inside Chrome
     */
    public static isChromeApp(): boolean {
        return (window as any).chrome && (window as any).chrome.app && (window as any).chrome.app.runtime;
    }

    /**
     * Method check if app is running on Windows
     */
    public static isWin(): boolean {
        return navigator.appVersion.indexOf("Win") > 0;
    }

    /**
     * Method check if app is running on Mac OS
     */
    public static isMac(): boolean {
        return navigator.appVersion.indexOf("Mac") > 0;
    }

    /**
     * Method check if app is running Chrome OS
     */
    public static isChromeOs(): boolean {
        return /\bCrOS\b/.test(navigator.userAgent);
    }

    /**
     * Method check if device support touch events
     */
    public static isTouch(): boolean {
        return "ontouchstart" in document.documentElement;
    }
}
