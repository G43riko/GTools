"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NullPointerException_1 = require("../errors/NullPointerException");
function typeOf(arg) {
    return typeof arg;
}
var Checkers = /** @class */ (function () {
    function Checkers() {
    }
    Checkers.isFunction = function (arg) {
        return typeof arg === "function";
    };
    Checkers.isString = function (arg) {
        return typeof arg === "string";
    };
    Checkers.isObject = function (arg) {
        return typeof arg === "object";
    };
    Checkers.isNumber = function (arg) {
        return typeof arg === "number";
    };
    Checkers.isBoolean = function (arg) {
        return typeof arg === "boolean";
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
        return typeof arg === "number" && arg % 1 === 0;
    };
    Checkers.isFloat = function (arg) {
        return typeof arg === "number" && arg % 1 !== 0;
    };
    Checkers.isUndefined = function (arg) {
        return typeof arg === "undefined";
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
    Checkers.notNull = function (obj) {
        if (obj === null) {
            throw new NullPointerException_1.NullPointerException();
        }
        return obj;
    };
    Checkers.exists = function (obj) {
        if (!!obj) {
            throw new Error("Variable ");
        }
        return obj;
    };
    return Checkers;
}());
exports.Checkers = Checkers;
