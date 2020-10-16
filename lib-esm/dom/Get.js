// TODO: need to be checked if app is running in browser
var localContext = typeof document !== "undefined" ? document : null;
var Get = /** @class */ (function () {
    function Get() {
    }
    /**
     *
     * @param context document context
     */
    Get.setContext = function (context) {
        localContext = context;
    };
    /**
     *
     * @param className name of class
     * @param context searched context
     * @returns collection of found elements
     */
    Get.byClass = function (className, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByClassName(className);
    };
    /**
     *
     * @param link name of link
     * @param context searched context
     * @returns nodeList of found elements
     */
    Get.byLink = function (link, context) {
        if (context === void 0) { context = localContext; }
        return context.querySelectorAll("a[attr=\"" + link + "\"]");
    };
    /**
     *
     * @param id searched ID
     * @param context searched context
     * @returns found element or null
     */
    Get.byId = function (id, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementById(id);
    };
    /**
     *
     * @param name elements name
     * @param context searched context
     * @returns nodeList of found elements
     */
    Get.byName = function (name, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByName(name);
    };
    /**
     *
     * @param tagName elements tagName
     * @param context searched context
     * @returns nodeList of found elements
     */
    Get.byTag = function (tagName, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByTagName(tagName);
    };
    return Get;
}());
export { Get };
