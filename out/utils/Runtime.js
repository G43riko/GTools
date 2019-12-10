"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var Checkers_1 = require("../dom/Checkers");
var NullPointerException_1 = require("../errors/NullPointerException");
var WrongParameterException_1 = require("../errors/WrongParameterException");
var WrongTypeException_1 = require("../errors/WrongTypeException");
var useRuntimeCheckers = true;
var Runtime = /** @class */ (function () {
    function Runtime() {
    }

    Runtime.useRuntimeExceptions = function (value) {
        useRuntimeCheckers = value;
    };
    Runtime.notNull = function (obj) {
        if (useRuntimeCheckers && obj === null) {
            throw new NullPointerException_1.NullPointerException();
        }
        return obj;
    };
    Runtime.exists = function (obj) {
        if (useRuntimeCheckers && (typeof obj !== "boolean" && !obj)) {
            throw new Error("Variable ");
        }
        return obj;
    };
    Runtime.isArray = function (obj) {
        if (useRuntimeCheckers && !Checkers_1.Checkers.isArray(obj)) {
            throw new WrongTypeException_1.WrongTypeException("Array");
        }
        return obj;
    };
    Runtime.isString = function (obj) {
        if (useRuntimeCheckers && !Checkers_1.Checkers.isString(obj)) {
            throw new WrongTypeException_1.WrongTypeException("string");
        }
        return obj;
    };
    Runtime.isNumber = function (obj) {
        if (useRuntimeCheckers && !Checkers_1.Checkers.isNumber(obj)) {
            throw new WrongTypeException_1.WrongTypeException("number");
        }
        return obj;
    };
    Runtime.isFunction = function (obj) {
        if (useRuntimeCheckers && !Checkers_1.Checkers.isFunction(obj)) {
            throw new WrongTypeException_1.WrongTypeException("function");
        }
        return obj;
    };
    // tslint:disable-next-line
    Runtime.checkFunction = function (func, args, thisArg) {
        if (args === void 0) {
            args = [];
        }
        if (thisArg === void 0) {
            thisArg = this;
        }
        try {
            func.apply(thisArg, args);
            return true;
        } catch (e) {
            return false;
        }
    };
    Runtime.isBoolean = function (obj) {
        if (useRuntimeCheckers && !Checkers_1.Checkers.isBoolean(obj)) {
            throw new WrongTypeException_1.WrongTypeException("boolean");
        }
        return obj;
    };
    Runtime.min = function (obj, value) {
        if (useRuntimeCheckers && obj <= value) {
            throw new WrongParameterException_1.WrongParameterException("Number " + obj + "  must be greater than " + value);
        }
        return obj;
    };
    Runtime.max = function (obj, value) {
        if (useRuntimeCheckers && obj >= value) {
            throw new WrongParameterException_1.WrongParameterException("Number " + obj + "  must be lower than " + value);
        }
        return obj;
    };
    return Runtime;
}());
exports.Runtime = Runtime;
