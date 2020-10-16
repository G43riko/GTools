import * as Objects from "../object-utils";

/**
 * @deprecated use {@link Objects} instead
 */
export class ObjectUtils {
    public static without(obj: any, items: string[]): any {
        return Objects.without(obj, items);
    }

    public static getNestedProperty(object: any, propertyPath: string, separator = "."): any {
        return Objects.getNestedProperty(object, propertyPath, separator);
    }

    public static size(object: any): number {
        return Objects.size(object);
    }

    public static isPlain(object: any): boolean {
        return Objects.isPlain(object);
    }

    public static makeFlat(list: any[], propertyPath: string, separator = "."): any {
        return Objects.makeFlat(list, propertyPath, separator);
    }
}
