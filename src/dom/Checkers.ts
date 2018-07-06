function typeOf(arg: any): string {
    return typeof arg;
}

export class Checkers {
    public static isFunction(arg: any): boolean {
        return typeof arg === "function";
    }

    public static isString(arg: any): boolean {
        return typeof arg === "string";
    }

    public static isObject(arg: any): boolean {
        return typeof arg === "object";
    }

    public static isNumber(arg: any): boolean {
        return typeof arg === "number";
    }

    public static isBoolean(arg: any): boolean {
        return typeof arg === "boolean";
    }

    public static isArray(arg: any): boolean {
        return Array.isArray(arg);
    }

    public static isEmpty(arg: any): boolean {
        return arg === {} || arg === [] || arg === "";
    }

    public static isInt(arg: any): boolean {
        return typeof arg === "number" && arg % 1 === 0;
    }

    public static isFloat(arg: any): boolean {
        return typeof arg === "number" && arg % 1 !== 0;
    }

    public static isUndefined(arg: any): boolean {
        return typeof arg === "undefined";
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
