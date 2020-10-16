"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkers = void 0;
function typeOf(arg) {
    return typeof arg;
}
var Checkers = /** @class */ (function () {
    function Checkers() {
    }
    Checkers.isFunction = function (arg) {
        return typeOf(arg) === "function";
    };
    Checkers.isString = function (arg) {
        return typeOf(arg) === "string";
    };
    Checkers.isObject = function (arg) {
        return typeOf(arg) === "object";
    };
    Checkers.isNumber = function (arg) {
        return typeOf(arg) === "number";
    };
    Checkers.isBoolean = function (arg) {
        return typeOf(arg) === "boolean";
    };
    Checkers.isArray = function (arg) {
        return Array.isArray(arg);
    };
    Checkers.isEmpty = function (arg) {
        return arg &&
            (Object.keys(arg).length === 0 && arg.constructor === Object) ||
            (Array.isArray(arg) && arg.length === 0) ||
            arg === "";
    };
    Checkers.isInt = function (arg) {
        return typeOf(arg) === "number" && arg % 1 === 0;
    };
    Checkers.isFloat = function (arg) {
        return typeOf(arg) === "number" && arg % 1 !== 0;
    };
    Checkers.isUndefined = function (arg) {
        return typeOf(arg) === "undefined";
    };
    Checkers.isElement = function (obj) {
        try {
            return obj instanceof HTMLElement;
        }
        catch (e) {
            return Checkers.isObject(obj) &&
                obj.nodeType === 1 &&
                Checkers.isObject(obj.style) &&
                Checkers.isObject(obj.ownerDocument);
        }
    };
    return Checkers;
}());
exports.Checkers = Checkers;
