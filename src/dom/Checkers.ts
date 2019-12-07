function typeOf(arg: any): string {
    return typeof arg;
}

export class Checkers {
    public static isFunction(arg: any): boolean {
        return typeOf(arg) === "function";
    }

    public static isString(arg: any): arg is string {
        return typeOf(arg) === "string";
    }

    public static isObject(arg: any): boolean {
        return typeOf(arg) === "object";
    }

    public static isNumber(arg: any): arg is number {
        return typeOf(arg) === "number";
    }

    public static isBoolean(arg: any): arg is boolean {
        return typeOf(arg) === "boolean";
    }

    public static isArray(arg: any): boolean {
        return Array.isArray(arg);
    }

    public static isEmpty(arg: any): boolean {
        return arg &&
            (Object.keys(arg).length === 0 && arg.constructor === Object) ||
            (Array.isArray(arg) && arg.length === 0) ||
            arg === "";
    }

    public static isInt(arg: any): boolean {
        return typeOf(arg) === "number" && arg % 1 === 0;
    }

    public static isFloat(arg: any): boolean {
        return typeOf(arg) === "number" && arg % 1 !== 0;
    }

    public static isUndefined(arg: any): boolean {
        return typeOf(arg) === "undefined";
    }

    public static isElement(obj: any): boolean {
        try {
            return obj instanceof HTMLElement;
        }
        catch (e) {
            return Checkers.isObject(obj) &&
                obj.nodeType === 1 &&
                Checkers.isObject(obj.style) &&
                Checkers.isObject(obj.ownerDocument);
        }
    }
}
