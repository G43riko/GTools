import * as MiscValidators from "../validators/misc-validators";
var timeFormats = {
    HH: "(2[0-3]|[01]\\d)",
    H: "(2[0-3]|[01]?\\d)",
    mm: "([0-5]\\d)",
    m: "([0-5]?\\d)",
    MM: "(0\\d|1[0-2]|\\d)",
    M: "([1-9]|1[0-2])",
    ss: "([0-5]\\d)",
    s: "([0-5]?\\d)",
    YYYY: "([1-9]\\d{3,3})",
    YY: "(\\d{2,2})",
    DD: "([0-3]\\d)",
};
export function isCamelCase(text) {
    return new RegExp("^[A-Z]?[a-z]+([A-Z][a-z]*)*$", "g").test(text);
}
export function isUpperCamelCase(text) {
    return new RegExp("^([A-Z][a-z]*)*$", "g").test(text);
}
export function isLowerCamelCase(text) {
    return new RegExp("^[a-z]+([A-Z][a-z]*)*$", "g").test(text);
}
export function isLowerSnakeCase(text) {
    return new RegExp("^[a-z]*(_[a-z]*)*$", "g").test(text);
}
export function isUpperSnakeCase(text) {
    return new RegExp("^[A-Z]*(_[A-Z]*)*$", "g").test(text);
}
export function isSnakeCase(text) {
    return new RegExp("^([a-z]*|[A-Z]*)(_[a-zA-Z]*)*$", "g").test(text);
}
export function isTimeFormat(text, format) {
    for (var key in timeFormats) {
        if (timeFormats.hasOwnProperty(key)) {
            format = format.replace(key, timeFormats[key]);
        }
    }
    return new RegExp("^" + format + "$").test(text);
}
export function isValidPhoneNumber(num) {
    return MiscValidators.isValidPhoneNumber(num);
}
export function isValidEmail(email) {
    return MiscValidators.isValidEmail(email);
}
//# sourceMappingURL=string-checkers.js.map