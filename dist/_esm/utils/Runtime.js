import { NullPointerException, WrongParameterException, WrongTypeException } from "gtools/errors";
import { Checkers } from "../dom/deprecated/Checkers";
let useRuntimeCheckers = true;
export class Runtime {
    static useRuntimeExceptions(value) {
        useRuntimeCheckers = value;
    }
    static notNull(obj) {
        if (useRuntimeCheckers && obj === null) {
            throw new NullPointerException();
        }
        return obj;
    }
    static exists(obj) {
        if (useRuntimeCheckers && (typeof obj !== "boolean" && !obj)) {
            throw new Error("Variable ");
        }
        return obj;
    }
    static isArray(obj) {
        if (useRuntimeCheckers && !Checkers.isArray(obj)) {
            throw new WrongTypeException("Array");
        }
        return obj;
    }
    static isString(obj) {
        if (useRuntimeCheckers && !Checkers.isString(obj)) {
            throw new WrongTypeException("string");
        }
        return obj;
    }
    static isNumber(obj) {
        if (useRuntimeCheckers && !Checkers.isNumber(obj)) {
            throw new WrongTypeException("number");
        }
        return obj;
    }
    static isFunction(obj) {
        if (useRuntimeCheckers && !Checkers.isFunction(obj)) {
            throw new WrongTypeException("function");
        }
        return obj;
    }
    static checkFunction(func, args = [], thisArg = this) {
        try {
            func.apply(thisArg, args);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    static isBoolean(obj) {
        if (useRuntimeCheckers && !Checkers.isBoolean(obj)) {
            throw new WrongTypeException("boolean");
        }
        return obj;
    }
    static min(obj, value) {
        if (useRuntimeCheckers && obj <= value) {
            throw new WrongParameterException(`Number ${obj}  must be greater than ${value}`);
        }
        return obj;
    }
    static max(obj, value) {
        if (useRuntimeCheckers && obj >= value) {
            throw new WrongParameterException(`Number ${obj}  must be lower than ${value}`);
        }
        return obj;
    }
}
//# sourceMappingURL=Runtime.js.map