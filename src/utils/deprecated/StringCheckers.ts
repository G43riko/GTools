import * as Checkers from "../string-checkers";

/**
 * @deprecated use {@link Checkers} instead
 */
export class StringCheckers {
    public static isCamelCase = Checkers.isCamelCase;

    public static isUpperCamelCase = Checkers.isUpperCamelCase;

    public static isLowerCamelCase = Checkers.isLowerCamelCase;

    public static isLowerSnakeCase = Checkers.isLowerSnakeCase;

    public static isUpperSnakeCase = Checkers.isUpperSnakeCase;

    public static isSnakeCase = Checkers.isSnakeCase;

    public static isTimeFormat = Checkers.isTimeFormat;
}
