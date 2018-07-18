"use strict";
/**
 * @typedef  {(Object)} any
 */
Object.defineProperty(exports, "__esModule", { value: true });
var MiscUtils = /** @class */ (function () {
    function MiscUtils() {
    }
    /**
     * Create class by name and list of parameters
     *
     * @param name - class name
     * @param {any[]} args - constructor parameter
     * @returns {any} - created object
     */
    MiscUtils.createClass = function (name, args) {
        var temp = Object.create(name.prototype);
        name.apply(temp, args);
        return temp;
    };
    MiscUtils.parseCookies = function (cookies) {
        var list = {};
        var data = cookies ? cookies.toString()
            .split(";") : [];
        data.forEach(function (cookie) {
            var parts = cookie.split("=");
            var shiftPart = parts.shift();
            if (shiftPart) {
                list[shiftPart.trim()] = decodeURI(parts.join("="));
            }
        });
        return list;
    };
    MiscUtils.isIn = function (obj) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        if (Array.isArray(data[0])) {
            if (data[0].indexOf(obj) >= 0) {
                return true;
            }
        }
        else {
            if (data.indexOf(obj) >= 0) {
                return true;
            }
        }
        return false;
    };
    // TODO: should append cookies or add option to appending instead of replace cookies
    // TODO: expires must be only in the end of cookies
    MiscUtils.setCookie = function (name, value, days) {
        var d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        var finalCookies = name + "=" + value + ";expires=" + d.toUTCString();
        if (typeof document !== "undefined") {
            document.cookie = finalCookies;
        }
        return name + "=" + value;
    };
    MiscUtils.getCookie = function (cname, source) {
        if (source === void 0) { source = typeof document !== "undefined" ? document.cookie : ""; }
        var name = cname + "=";
        var ca = source.split(";");
        for (var _i = 0, ca_1 = ca; _i < ca_1.length; _i++) {
            var c = ca_1[_i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    MiscUtils.parseParams = function (query, separator, delimiter) {
        if (query === void 0) { query = typeof window !== "undefined" ? window.location.search.substring(1) : ""; }
        if (separator === void 0) { separator = "&"; }
        if (delimiter === void 0) { delimiter = "="; }
        var queryString = {};
        var vars = query.split(separator);
        for (var _i = 0, vars_1 = vars; _i < vars_1.length; _i++) {
            var key = vars_1[_i];
            var pair = key.split(delimiter);
            if (typeof queryString[pair[0]] === "undefined") {
                queryString[pair[0]] = decodeURIComponent(pair[1]);
            }
            else if (typeof queryString[pair[0]] === "string") {
                queryString[pair[0]] = [queryString[pair[0]], decodeURIComponent(pair[1])];
            }
            else {
                queryString[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return queryString;
    };
    MiscUtils.roughSizeOfObject = function (object) {
        var objectList = [];
        var stack = [object];
        var bytes = 0;
        while (stack.length) {
            var value = stack.pop();
            if (typeof value === "boolean") {
                bytes += 4;
            }
            else if (typeof value === "string") {
                bytes += value.length << 1;
            }
            else if (typeof value === "number") {
                bytes += 8;
            }
            else if (typeof value === "object" && objectList.indexOf(value) === -1) {
                objectList.push(value);
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        stack.push(value[key]);
                    }
                }
            }
        }
        return bytes;
    };
    MiscUtils.objectToQueryParams = function (obj) {
        // TODO: add url prefix
        var result = "";
        for (var objKey in obj) {
            if (obj.hasOwnProperty(objKey)) {
                result += (result.length > 0 ? "&" : "?") + objKey + "=" + obj[objKey];
            }
        }
        return result;
    };
    MiscUtils.includeFile = function (file) {
        var script = document.createElement("script");
        script.src = file;
        script.type = "text/javascript";
        script.defer = true;
        document.head.appendChild(script);
    };
    return MiscUtils;
}());
exports.MiscUtils = MiscUtils;