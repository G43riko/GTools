import * as Checkers from "../string-checkers";
/**
 * @deprecated use {@link Checkers} instead
 */
var StringCheckers = /** @class */ (function () {
    function StringCheckers() {
    }
    StringCheckers.isCamelCase = Checkers.isCamelCase;
    StringCheckers.isUpperCamelCase = Checkers.isUpperCamelCase;
    StringCheckers.isLowerCamelCase = Checkers.isLowerCamelCase;
    StringCheckers.isLowerSnakeCase = Checkers.isLowerSnakeCase;
    StringCheckers.isUpperSnakeCase = Checkers.isUpperSnakeCase;
    StringCheckers.isSnakeCase = Checkers.isSnakeCase;
    StringCheckers.isTimeFormat = Checkers.isTimeFormat;
    return StringCheckers;
}());
export { StringCheckers };
