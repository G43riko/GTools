import * as Objects from "../object-utils";
/**
 * @deprecated use {@link Objects} instead
 */
var ObjectUtils = /** @class */ (function () {
    function ObjectUtils() {
    }
    ObjectUtils.without = function (obj, items) {
        return Objects.without(obj, items);
    };
    ObjectUtils.getNestedProperty = function (object, propertyPath, separator) {
        if (separator === void 0) { separator = "."; }
        return Objects.getNestedProperty(object, propertyPath, separator);
    };
    ObjectUtils.size = function (object) {
        return Objects.size(object);
    };
    ObjectUtils.isPlain = function (object) {
        return Objects.isPlain(object);
    };
    ObjectUtils.makeFlat = function (list, propertyPath, separator) {
        if (separator === void 0) { separator = "."; }
        return Objects.makeFlat(list, propertyPath, separator);
    };
    return ObjectUtils;
}());
export { ObjectUtils };
