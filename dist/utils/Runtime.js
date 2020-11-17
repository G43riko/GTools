"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runtime = void 0;
var errors_1 = require("gtools/errors");
var Checkers = __importStar(require("../validators/misc-validators"));
var useRuntimeCheckers = true;
var Runtime = (function () {
    function Runtime() {
    }
    Runtime.useRuntimeExceptions = function (value) {
        useRuntimeCheckers = value;
    };
    Runtime.notNull = function (obj) {
        if (useRuntimeCheckers && obj === null) {
            throw new errors_1.NullPointerException();
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
            throw new errors_1.WrongTypeException("Array");
        }
        return obj;
    };
    Runtime.isString = function (obj) {
        if (useRuntimeCheckers && !Checkers.isString(obj)) {
            throw new errors_1.WrongTypeException("string");
        }
        return obj;
    };
    Runtime.isNumber = function (obj) {
        if (useRuntimeCheckers && !Checkers.isNumber(obj)) {
            throw new errors_1.WrongTypeException("number");
        }
        return obj;
    };
    Runtime.isFunction = function (obj) {
        if (useRuntimeCheckers && !Checkers.isFunction(obj)) {
            throw new errors_1.WrongTypeException("function");
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
            throw new errors_1.WrongTypeException("boolean");
        }
        return obj;
    };
    Runtime.min = function (obj, value) {
        if (useRuntimeCheckers && obj <= value) {
            throw new errors_1.WrongParameterException("Number " + obj + "  must be greater than " + value);
        }
        return obj;
    };
    Runtime.max = function (obj, value) {
        if (useRuntimeCheckers && obj >= value) {
            throw new errors_1.WrongParameterException("Number " + obj + "  must be lower than " + value);
        }
        return obj;
    };
    return Runtime;
}());
exports.Runtime = Runtime;
//# sourceMappingURL=Runtime.js.map