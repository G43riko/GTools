import { NullPointerException, WrongParameterException, WrongTypeException } from "gtools/errors";
import { Checkers } from "../dom/deprecated/Checkers";
var useRuntimeCheckers = true;
var Runtime = (function () {
    function Runtime() {
    }
    Runtime.useRuntimeExceptions = function (value) {
        useRuntimeCheckers = value;
    };
    Runtime.notNull = function (obj) {
        if (useRuntimeCheckers && obj === null) {
            throw new NullPointerException();
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
        if (useRuntimeCheckers && !Checkers.isArray(obj)) {
            throw new WrongTypeException("Array");
        }
        return obj;
    };
    Runtime.isString = function (obj) {
        if (useRuntimeCheckers && !Checkers.isString(obj)) {
            throw new WrongTypeException("string");
        }
        return obj;
    };
    Runtime.isNumber = function (obj) {
        if (useRuntimeCheckers && !Checkers.isNumber(obj)) {
            throw new WrongTypeException("number");
        }
        return obj;
    };
    Runtime.isFunction = function (obj) {
        if (useRuntimeCheckers && !Checkers.isFunction(obj)) {
            throw new WrongTypeException("function");
        }
        return obj;
    };
    Runtime.checkFunction = function (func, args, thisArg) {
        if (args === void 0) { args = []; }
        if (thisArg === void 0) { thisArg = this; }
        try {
            func.apply(thisArg, args);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    Runtime.isBoolean = function (obj) {
        if (useRuntimeCheckers && !Checkers.isBoolean(obj)) {
            throw new WrongTypeException("boolean");
        }
        return obj;
    };
    Runtime.min = function (obj, value) {
        if (useRuntimeCheckers && obj <= value) {
            throw new WrongParameterException("Number " + obj + "  must be greater than " + value);
        }
        return obj;
    };
    Runtime.max = function (obj, value) {
        if (useRuntimeCheckers && obj >= value) {
            throw new WrongParameterException("Number " + obj + "  must be lower than " + value);
        }
        return obj;
    };
    return Runtime;
}());
export { Runtime };
//# sourceMappingURL=Runtime.js.map