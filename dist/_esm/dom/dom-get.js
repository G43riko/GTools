// TODO: need to be checked if app is running in browser
var localContext = typeof document !== "undefined" ? document : null;
var DomGet = /** @class */ (function () {
    function DomGet() {
    }
    /**
     *
     * @param context document context
     */
    DomGet.setContext = function (context) {
        localContext = context;
    };
    /**
     *
     * @param className name of class
     * @param context searched context
     * @returns collection of found elements
     */
    DomGet.byClass = function (className, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByClassName(className);
    };
    /**
     *
     * @param link name of link
     * @param context searched context
     * @returns nodeList of found elements
     */
    DomGet.byLink = function (link, context) {
        if (context === void 0) { context = localContext; }
        return context.querySelectorAll("a[attr=\"" + link + "\"]");
    };
    /**
     *
     * @param id searched ID
     * @param context searched context
     * @returns found element or null
     */
    DomGet.byId = function (id, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementById(id);
    };
    /**
     *
     * @param name elements name
     * @param context searched context
     * @returns nodeList of found elements
     */
    DomGet.byName = function (name, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByName(name);
    };
    /**
     *
     * @param tagName elements tagName
     * @param context searched context
     * @returns nodeList of found elements
     */
    DomGet.byTag = function (tagName, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByTagName(tagName);
    };
    return DomGet;
}());
export { DomGet };
