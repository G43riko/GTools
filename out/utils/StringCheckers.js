"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeFormats = {
    HH: "(2[0-3]|[01]\\d)",
    H: "(2[0-3]|[01]?\\d)",
    mm: "([0-5]\\d|60)",
    m: "([0-5]?\\d)",
    MM: "([0-5]\\d|60)",
    M: "(0\\d|1[0-2]|\\d)",
    ss: "([0-5]\\d|60)",
    s: "([0-5]?\\d)",
    YYYY: "([1-9]\\d{3,3})",
    YY: "(\\d{2,2})",
    DD: "([0-3]\\d)",
};
var StringCheckers = /** @class */ (function () {
    function StringCheckers() {
    }
    StringCheckers.isCamelCase = function (text) {
        return new RegExp("^[A-Z]?[a-z]+([A-Z][a-z]*)*$", "g").test(text);
    };
    StringCheckers.isUpperCamelCase = function (text) {
        return new RegExp("^([A-Z][a-z]*)*$", "g").test(text);
    };
    StringCheckers.isLowerCamelCase = function (text) {
        return new RegExp("^[a-z]+([A-Z][a-z]*)*$", "g").test(text);
    };
    StringCheckers.isLowerSnakeCase = function (text) {
        return new RegExp("^[a-z]*(_[a-z]*)*$", "g").test(text);
    };
    StringCheckers.isUpperSnakeCase = function (text) {
        return new RegExp("^[A-Z]*(_[A-Z]*)*$", "g").test(text);
    };
    StringCheckers.isSnakeCase = function (text) {
        return new RegExp("^([a-z]*|[A-Z]*)(_[a-zA-Z]*)*$", "g").test(text);
    };
    StringCheckers.isTimeFormat = function (text, format) {
        for (var key in timeFormats) {
            if (timeFormats.hasOwnProperty(key)) {
                format = format.replace(key, timeFormats[key]);
            }
        }
        return new RegExp("^" + format + "$").test(text);
    };
    StringCheckers.isHHmm = function (text, divider) {
        if (divider === void 0) { divider = ":"; }
        return StringCheckers.isTimeFormat(text, "HH" + divider + "mm");
    };
    StringCheckers.isHHmmss = function (text, divider) {
        if (divider === void 0) { divider = ":"; }
        return StringCheckers.isTimeFormat(text, "HH" + divider + "mm" + divider + "ss");
    };
    return StringCheckers;
}());
exports.StringCheckers = StringCheckers;
