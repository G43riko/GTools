import * as Objects from "../object-utils";
export class ObjectUtils {
    static without(obj, items) {
        return Objects.without(obj, items);
    }
    static getNestedProperty(object, propertyPath, separator = ".") {
        return Objects.getNestedProperty(object, propertyPath, separator);
    }
    static size(object) {
        return Objects.size(object);
    }
    static isPlain(object) {
        return Objects.isPlain(object);
    }
    static makeFlat(list, propertyPath, separator = ".") {
        return Objects.makeFlat(list, propertyPath, separator);
    }
}
//# sourceMappingURL=ObjectUtils.js.map