"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.parse = exports.serialize = exports.objectToQueryParams = exports.parseParams = exports.getCookie = exports.setCookie = exports.parseJSONWithComments = exports.isIn = exports.parseCookies = void 0;
function parseCookies(cookies) {
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
}
exports.parseCookies = parseCookies;
function isIn(obj) {
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        data[_i - 1] = arguments[_i];
    }
    if (Array.isArray(data[0])) {
        if (data[0].indexOf(obj) >= 0) {
            return true;
        }
    }
    else if (data.indexOf(obj) >= 0) {
        return true;
    }
    return false;
}
exports.isIn = isIn;
function parseJSONWithComments(content) {
    return JSON.parse(content.replace(/\/\/.*\n/g, ""));
}
exports.parseJSONWithComments = parseJSONWithComments;
function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    var finalCookies = name + "=" + value + ";expires=" + d.toUTCString();
    if (typeof document !== "undefined") {
        document.cookie = finalCookies;
    }
    return name + "=" + value;
}
exports.setCookie = setCookie;
function getCookie(cname, source) {
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
}
exports.getCookie = getCookie;
function parseParams(query, separator, delimiter) {
    if (query === void 0) { query = typeof window !== "undefined" ? window.location.search.substring(1) : ""; }
    if (separator === void 0) { separator = "&"; }
    if (delimiter === void 0) { delimiter = "="; }
    var queryString = {};
    var vars = query.split(separator);
    for (var _i = 0, vars_1 = vars; _i < vars_1.length; _i++) {
        var pair = vars_1[_i];
        var _a = pair.split(delimiter), key = _a[0], value = _a[1];
        if (typeof queryString[key] === "undefined") {
            queryString[key] = decodeURIComponent(value);
        }
        else if (typeof queryString[key] === "string") {
            queryString[key] = [queryString[key], decodeURIComponent(value)];
        }
        else {
            queryString[key].push(decodeURIComponent(value));
        }
    }
    return queryString;
}
exports.parseParams = parseParams;
function objectToQueryParams(obj) {
    var result = "";
    for (var objKey in obj) {
        if (obj.hasOwnProperty(objKey)) {
            result += "" + (result.length > 0 ? "&" : "?") + objKey + "=" + obj[objKey];
        }
    }
    return result;
}
exports.objectToQueryParams = objectToQueryParams;
function serialize(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === "function") {
            obj[key] = obj[key].toString();
        }
    }
    return JSON.stringify(obj);
}
exports.serialize = serialize;
function parse(obj) {
    var result = JSON.parse(obj);
    for (var i in result) {
        if (!result.hasOwnProperty(i) ||
            typeof result[i] !== "string" || !(result[i].indexOf("function (") === 0 ||
            result[i].match(/^\([_a-zA-Z0-9]+( *, *[_a-zA-Z0-9]+)*\) *=>/))) {
            continue;
        }
        try {
            eval("result[i] = " + result[i]);
        }
        catch (e) {
            result[i] = e;
        }
    }
    return result;
}
exports.parse = parse;
function map(source, data) {
    var destination = {};
    data.forEach(function (item) {
        if (item.mapFunction) {
            if (item.attrD) {
                destination[item.attrD] = item.mapFunction(source[item.attrS]);
            }
            else {
                destination[item.attrS] = item.mapFunction(source[item.attrS]);
            }
            return;
        }
        if (item.attrD) {
            destination[item.attrD] = source[item.attrS];
        }
        else {
            destination[item.attrS] = source[item.attrS];
        }
    });
    return destination;
}
exports.map = map;
//# sourceMappingURL=misc-utils.js.map