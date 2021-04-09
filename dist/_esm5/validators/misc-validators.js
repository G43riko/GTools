var validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
var validPhoneNumberRegex = /^([+]|00)?[(]?[0-9]{3,4}[)]?[-\s.]?[0-9]{2,3}[-\s.]?[0-9]{2,6}([-\s.]?[0-9]{3})?$/im;
export function isFunction(arg) {
    return typeof arg === "function";
}
export function isString(arg) {
    return typeof arg === "string";
}
export function isObject(value) {
    var type = typeof value;
    return value !== null && (type === "object" || type === "function");
}
export function isNumber(arg) {
    return typeof arg === "number";
}
export function isBoolean(arg) {
    return typeof arg === "boolean";
}
export function isArray(arg) {
    return Array.isArray(arg);
}
export function isInt(arg) {
    return typeof arg === "number" && arg % 1 === 0;
}
export function isFloat(arg) {
    return typeof arg === "number" && arg % 1 !== 0;
}
export function isUndefined(arg) {
    return typeof arg === "undefined";
}
export function isElement(obj) {
    try {
        return obj instanceof HTMLElement;
    }
    catch (e) {
        return isObject(obj) &&
            obj.nodeType === 1 &&
            isObject(obj.style) &&
            isObject(obj.ownerDocument);
    }
}
export function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }
    if (typeof value === "string") {
        return value.length === 0 || /^[\s\xa0]*$/.test(value);
    }
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    if (isObject(value)) {
        return Object.keys(value).length === 0;
    }
    return false;
}
export function isValidPhoneNumber(num) {
    if (!num) {
        return false;
    }
    return validPhoneNumberRegex.test(num.trim());
}
export function isValidEmail(email) {
    if (!email) {
        return false;
    }
    return validEmailRegex.test(email.trim());
}
//# sourceMappingURL=misc-validators.js.map