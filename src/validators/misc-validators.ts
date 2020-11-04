const validEmailRegex       = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const validPhoneNumberRegex = /^([+]|00)?[(]?[0-9]{3,4}[)]?[-\s.]?[0-9]{2,3}[-\s.]?[0-9]{2,6}([-\s.]?[0-9]{3})?$/im;

function typeOf(arg: unknown): string {
    return typeof arg;
}

export function isFunction(arg: any): boolean {
    return typeOf(arg) === "function";
}

export function isString(arg: any): arg is string {
    return typeOf(arg) === "string";
}

export function isObject(arg: any): boolean {
    return typeOf(arg) === "object";
}

export function isNumber(arg: any): arg is number {
    return typeOf(arg) === "number";
}

export function isBoolean(arg: any): arg is boolean {
    return typeOf(arg) === "boolean";
}

export function isArray(arg: any): boolean {
    return Array.isArray(arg);
}

export function isInt(arg: any): boolean {
    return typeOf(arg) === "number" && arg % 1 === 0;
}

export function isFloat(arg: any): boolean {
    return typeOf(arg) === "number" && arg % 1 !== 0;
}

export function isUndefined(arg?: any): boolean {
    return typeOf(arg) === "undefined";
}

export function isElement(obj: any): boolean {
    try {
        return obj instanceof HTMLElement;
    } catch (e) {
        return isObject(obj) &&
            obj.nodeType === 1 &&
            isObject(obj.style) &&
            isObject(obj.ownerDocument);
    }
}

export function isEmpty(value: any): boolean {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === "string") {
        return value.length === 0 || /^[\s\xa0]*$/.test(value);
    }
    if (Array.isArray(value)) {
        return value.length === 0;
    }

    if (value.constructor === Object) {
        return Object.keys(value).length === 0;
    }

    return false;
}

export function isValidPhoneNumber(num: string): boolean {
    if (!num) {
        return false;
    }

    return validPhoneNumberRegex.test(num.trim());
}

export function isValidEmail(email: string): boolean {
    if (!email) {
        return false;
    }

    return validEmailRegex.test(email.trim());
}
