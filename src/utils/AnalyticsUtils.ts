export class AnalyticsUtils {
    public static isIE(): boolean {
        return navigator.userAgent.indexOf("MSIE") >= 0;
    }

    public static isIE6(): boolean {
        return navigator.userAgent.indexOf("MSIE 6") >= 0;
    }

    public static isIE11(): boolean {
        return !!navigator.userAgent.match(/Trident\/7\./);
    }

    public static isEdge(): boolean {
        return !!navigator.userAgent.match(/Edge\//);
    }

    public static isSafari(): boolean {
        return navigator.userAgent.indexOf("AppleWebKit/") >= 0 &&
            navigator.userAgent.indexOf("Chrome/") < 0 &&
            navigator.userAgent.indexOf("Edge/") < 0;
    }

    public static isIOS(): boolean {
        return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    }

    public static isChromeApp(): boolean {
        return (window as any).chrome && (window as any).chrome.app && (window as any).chrome.app.runtime;
    }

    public static isWin(): boolean {
        return navigator.appVersion.indexOf("Win") > 0;
    }

    public static isMac(): boolean {
        return navigator.appVersion.indexOf("Mac") > 0;
    }

    public static isChromeOs(): boolean {
        return /\bCrOS\b/.test(navigator.userAgent);
    }

    public static isTouch(): boolean {
        return "ontouchstart" in document.documentElement;
    }
}
