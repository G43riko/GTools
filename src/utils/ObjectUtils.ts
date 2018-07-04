export class ObjectUtils {
    public static without(obj: any, items: string[]): any {
        const result: any = {};
        for (const objKey in obj) {
            if (obj.hasOwnProperty(objKey)) {
                if (items.indexOf(objKey) < 0) {
                    result[objKey] = obj[objKey];
                }
            }
        }
        return result;
    }

    public static byPath(obj: any, path: string, divider = "."): any {
        const splitPath = path.split(divider);

        for (let i = 0 ; i < splitPath.length && obj ; i++) {
            obj = obj[splitPath[i]];
        }

        return obj;
    };
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
            if (object.hasOwnProperty(index)) {
                if (typeof object[index] === "undefined") {
                    return false;
                }
            }
        }
        return true;
    };
}