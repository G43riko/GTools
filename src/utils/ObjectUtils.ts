export class ObjectUtils {
    public static without(obj: any, items: string[]): any {
        const result: any = {};
        for (const objKey in obj) {
            if (obj.hasOwnProperty(objKey) && items.indexOf(objKey) < 0) {
                result[objKey] = obj[objKey];
            }
        }

        return result;
    }

    public static getNestedProperty(object: any, propertyPath: string, separator = "."): any {
        const propertyList = propertyPath.split(separator);

        return propertyList.reduce((currentNestedPropertyValue, propertyName) => {
            return currentNestedPropertyValue ? currentNestedPropertyValue[propertyName] : undefined;
        }, object);
    }

    public static size(object: any): number {
        let result = 0;
        for (const i in object) {
            if (object.hasOwnProperty(i)) {
                result++;
            }
        }

        return result;
    }

    public static isPlain(object: any): boolean {
        for (const index in object) {
            if (object.hasOwnProperty(index) && typeof object[index] === "object") {
                return false;
            }
        }

        return true;
    }

    public static makeFlat(list: any[], propertyPath: string, separator = "."): any {
        const propertyList = propertyPath.indexOf(separator) >= 0 ? propertyPath.split(separator) : [propertyPath];
        const unknown      = Symbol("unknown");

        return list.reduce((acc, curr) => {
            const value = propertyList.reduce((propVal, propertyName) => propVal ? propVal[propertyName] : unknown, curr);
            if (value === unknown) {
                return acc;
            }
            if (acc[value]) {
                acc[value].push(curr);
            } else {
                acc[value] = [curr];
            }

            return acc;
        }, {});
    }
}
