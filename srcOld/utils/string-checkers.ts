/*
 * TODO: This is deprecated. Move this to validators
 */

import * as MiscValidators from "../validators/misc-validators";

const timeFormats: { [key: string]: string } = {
    HH: "(2[0-3]|[01]\\d)",
    H: "(2[0-3]|[01]?\\d)",
    mm: "([0-5]\\d)",
    m: "([0-5]?\\d)",
    MM: "(0\\d|1[0-2]|\\d)",
    M: "([1-9]|1[0-2])",
    ss: "([0-5]\\d)", // mm
    s: "([0-5]?\\d)", // ss
    YYYY: "([1-9]\\d{3,3})",
    YY: "(\\d{2,2})",
    DD: "([0-3]\\d)",
};

export function isCamelCase(text: string): boolean {
    return new RegExp("^[A-Z]?[a-z]+([A-Z][a-z]*)*$", "g").test(text);
}

export function isUpperCamelCase(text: string): boolean {
    return new RegExp("^([A-Z][a-z]*)*$", "g").test(text);
}

export function isLowerCamelCase(text: string): boolean {
    return new RegExp("^[a-z]+([A-Z][a-z]*)*$", "g").test(text);
}

export function isLowerSnakeCase(text: string): boolean {
    return new RegExp("^[a-z]*(_[a-z]*)*$", "g").test(text);
}

export function isUpperSnakeCase(text: string): boolean {
    return new RegExp("^[A-Z]*(_[A-Z]*)*$", "g").test(text);
}

export function isSnakeCase(text: string): boolean {
    return new RegExp("^([a-z]*|[A-Z]*)(_[a-zA-Z]*)*$", "g").test(text);
}

export function isTimeFormat(text: string, format: string): boolean {
    for (const key in timeFormats) {
        if (timeFormats.hasOwnProperty(key)) {
            format = format.replace(key, timeFormats[key]);
        }
    }

    return new RegExp(`^${format}$`).test(text);
}

/**
 * @deprecated use {@link MiscValidators.isValidPhoneNumber} instead
 * @param num - num to validate
 */
export function isValidPhoneNumber(num: string): boolean {
    return MiscValidators.isValidPhoneNumber(num);
}

/**
 * @deprecated use {@link MiscValidators.isValidEmail} instead
 * @param email - email to validate
 */
export function isValidEmail(email: string): boolean {
    return MiscValidators.isValidEmail(email);
}
