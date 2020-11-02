import * as MiscValidators from "../../validators/misc-validators";

/**
 * @deprecated use {@link MiscValidators} instead
 * TODO: move this to validators
 */
export class Checkers {
    public static isFunction = MiscValidators.isFunction;

    public static isString = MiscValidators.isString;

    public static isObject = MiscValidators.isObject;

    public static isNumber = MiscValidators.isNumber;

    public static isBoolean = MiscValidators.isBoolean;

    public static isArray = MiscValidators.isArray;

    public static isEmpty = MiscValidators.isEmpty;

    public static isInt = MiscValidators.isInt;

    public static isFloat = MiscValidators.isFloat;

    public static isUndefined = MiscValidators.isUndefined;

    public static isElement = MiscValidators.isElement;
}
