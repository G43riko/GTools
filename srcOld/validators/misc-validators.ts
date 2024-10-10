const validEmailRegex       = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const validPhoneNumberRegex = /^([+]|00)?[(]?[0-9]{3,4}[)]?[-\s.]?[0-9]{2,3}[-\s.]?[0-9]{2,6}([-\s.]?[0-9]{3})?$/im;

export function isFunction(arg: unknown): boolean {
    return typeof arg === "function";
}

export function isString(arg: unknown): arg is string {
    return typeof arg === "string";
}

export function isObject<T = unknown>(value: unknown): value is T {
    const type = typeof value;

    return value !== null && (type === "object" || type === "function");
}

export function isNumber(arg: unknown): arg is number {
    return typeof arg === "number";
}

export function isBoolean(arg: unknown): arg is boolean {
    return typeof arg === "boolean";
}

export function isArray<T>(arg: unknown): arg is T[] {
    return Array.isArray(arg);
}

export function isInt(arg: unknown): arg is number {
    return typeof arg === "number" && arg % 1 === 0;
}

export function isFloat(arg: unknown): arg is number {
    return typeof arg === "number" && arg % 1 !== 0;
}

export function isUndefined(arg?: unknown): boolean {
    return typeof arg === "undefined";
}

export function isElement(obj: unknown): boolean {
    try {
        return obj instanceof HTMLElement;
    } catch (e) {
        return isObject<HTMLElement>(obj) &&
            obj.nodeType === 1 &&
            isObject(obj.style) &&
            isObject(obj.ownerDocument);
    }
}

export function isEmpty(value: unknown): boolean {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === "string") {
        return value.length === 0 || /^[\s\xa0]*$/.test(value);
    }
    if (Array.isArray(value)) {
        return value.length === 0;
    }

    if (isObject<Record<string, unknown>>(value)) {
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
