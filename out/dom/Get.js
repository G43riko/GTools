"use strict";
// TODO: need to be checked if app is running in browser
Object.defineProperty(exports, "__esModule", { value: true });
var localContext = typeof document !== "undefined" ? document : null;
var Get = /** @class */ (function () {
    function Get() {
    }
    /**
     *
     * @param {Document} context
     */
    Get.setContext = function (context) {
        localContext = context;
    };
    /**
     *
     * @param {string} className
     * @param {Document} context
     * @returns {HTMLCollectionOf<Element>}
     */
    Get.byClass = function (className, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByClassName(className);
    };
    /**
     *
     * @param {string} link
     * @param {Document} context
     * @returns {NodeListOf}
     */
    Get.byLink = function (link, context) {
        if (context === void 0) { context = localContext; }
        return context.querySelectorAll("a[attr='" + link + "']");
    };
    /**
     *
     * @param {string} id
     * @param {Document} context
     * @returns {HTMLElement | null}
     */
    Get.byId = function (id, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementById(id);
    };
    /**
     *
     * @param {string} name
     * @param {Document} context
     * @returns {NodeListOf<HTMLElement>}
     */
    Get.byName = function (name, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByName(name);
    };
    /**
     *
     * @param {string} tagName
     * @param {Document} context
     * @returns {NodeListOf<Element>}
     */
    Get.byTag = function (tagName, context) {
        if (context === void 0) { context = localContext; }
        return context.getElementsByTagName(tagName);
    };
    return Get;
}());
exports.Get = Get;
