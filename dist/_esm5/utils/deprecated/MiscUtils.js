import { __spreadArrays } from "tslib";
import * as Misc from "../misc-utils";
import * as NetClient from "../net-client-utils";
import * as Objects from "../object-utils";
import * as Reflection from "../reflection-utils";
var MiscUtils = (function () {
    function MiscUtils() {
    }
    MiscUtils.createClass = function (name, args) {
        return Reflection.createClass(name, args);
    };
    MiscUtils.parseCookies = function (cookies) {
        return Misc.parseCookies(cookies);
    };
    MiscUtils.isIn = function (obj) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        return Misc.isIn.apply(Misc, __spreadArrays([obj], data));
    };
    MiscUtils.parseJSONWithComments = function (content) {
        return Misc.parseJSONWithComments(content);
    };
    MiscUtils.setCookie = function (name, value, days) {
        return Misc.setCookie(name, value, days);
    };
    MiscUtils.getCookie = function (cname, source) {
        if (source === void 0) { source = typeof document !== "undefined" ? document.cookie : ""; }
        return Misc.getCookie(cname, source);
    };
    MiscUtils.parseParams = function (query, separator, delimiter) {
        if (query === void 0) { query = typeof window !== "undefined" ? window.location.search.substring(1) : ""; }
        if (separator === void 0) { separator = "&"; }
        if (delimiter === void 0) { delimiter = "="; }
        return Misc.parseParams(query, separator, delimiter);
    };
    MiscUtils.roughSizeOfObject = function (object) {
        return Objects.roughSizeOfObject(object);
    };
    MiscUtils.objectToQueryParams = function (obj) {
        return Misc.objectToQueryParams(obj);
    };
    MiscUtils.includeFile = function (file) {
        return NetClient.includeFile(file);
    };
    MiscUtils.serialize = function (obj) {
        return Misc.serialize(obj);
    };
    MiscUtils.parse = function (obj) {
        return Misc.parse(obj);
    };
    MiscUtils.prototype.map = function (source, data) {
        return Misc.map(source, data);
    };
    return MiscUtils;
}());
export { MiscUtils };
//# sourceMappingURL=MiscUtils.js.map