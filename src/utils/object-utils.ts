import { ObjectEntry } from "../types";

export function without<T extends Record<string, unknown>>(obj: T, items: (keyof T)[]): Omit<T, any> {
    return getObjectEntries(obj).filter((entry) => !items.includes(entry.key))
                                .reduce((prev, entry) => {
                                    prev[entry.key] = entry.value;

                                    return prev;
                                }, {} as T);
}

export function deepEqual<T>(objA: T, objB: T): boolean {
    if (typeof objA !== typeof objB) {
        return false;
    }

    if (typeof objA === "object") {
        if (!objA || !objB) {
            return objA === objB;
        }
        if ((objA as any)?.constructor?.name !== (objB as any)?.constructor?.name) {
            return false;
        }

        const keys = Object.keys(objA) as (keyof T)[];

        if (keys.length !== Object.keys(objB).length) {
            return false;
        }

        for (const key of keys) {
            if (!deepEqual(objA[key], objB[key])) {
                return false;
            }
        }

        return true;
    }

    if (typeof (objA as any) === "number" && typeof objB === "number") {
        if (isNaN(+objA) && isNaN(+objB)) {
            return true;
        }
    }

    return objA === objB;
}

export function deepCopy<T>(source: T): T {
    if (typeof source === "object") {
        if (Array.isArray(source)) {
            // tslint:disable-next-line:no-map-without-usage
            return source.map((e) => deepCopy(e)) as any;
        }
        if ((source as any)?.constructor?.name !== "Object") {
            throw new Error("This method cannot copy class instances");
        }

        const result: Partial<T> = {};

        Object.entries(source).forEach(([key, value]) => {
            (result as any)[key] = deepCopy(value);
        });

        return result as T;
    }

    if (typeof source === "function") {
        throw new Error("This method cannot copy functions");
    }

    return source;
}

export function getOrSetProperty<S, T extends keyof S>(obj: S, index: T, value: S[T]): S[T] {
    const result = obj[index];
    if (result) {
        return result;
    }
    obj[index] = value;

    return value;
}

export function getObjectEntries<T extends Record<string, unknown>>(obj: T): ObjectEntry<T>[] {
    const result: ObjectEntry<T>[] = [];
    for (const objKey in obj) {
        if (!obj.hasOwnProperty(objKey)) {
            continue;
        }
        result.push({
            key  : objKey,
            value: obj[objKey],
        });
    }

    return result;
}

export function getNestedProperty(object: any, propertyPath: string | string[], separator = "."): any {
    if (typeof propertyPath === "string") {
        return getNestedProperty(object, propertyPath.split(separator));
    }

    return propertyPath.reduce((currentNestedPropertyValue, propertyName) => currentNestedPropertyValue ? currentNestedPropertyValue[propertyName] : undefined, object);
}

export function setNestedProperty<T>(item: any, key: string | string[], value: T): void {
    if (typeof key === "string") {
        return setNestedProperty(item, key.split("."), value);
    }
    let obj = item;
    for (let i = 0; i < key.length - 1; i++) {
        obj = obj[key[i]];
    }
    obj[key[key.length - 1]] = value;
}

export function createMergedObject<T>(source: T, ...updates: Partial<T>[]): T {
    return Object.assign({}, source, ...updates);
}

export function roughSizeOfObject<T>(object: T): number {
    const objectList       = [];
    const stack: unknown[] = [object];
    let bytes              = 0;
    while (stack.length) {
        const value: any = stack.pop();
        if (typeof value === "boolean") {
            bytes += 4;
        } else if (typeof value === "string") {
            bytes += value.length << 1;
        } else if (typeof value === "number") {
            bytes += 8;
        } else if (typeof value === "object" && objectList.indexOf(value) === -1) {
            objectList.push(value);
            for (const key in value) {
                if (value.hasOwnProperty(key)) {
                    stack.push(value[key]);
                }
            }
        }
    }

    return bytes;
}

/**
 * Freeze object recursively
 * @param o - object to be freeze
 */
export function deepFreeze<T>(o: T): T {
    Object.freeze(o);

    const oIsFunction = typeof o === "function";
    const hasOwnProp  = Object.prototype.hasOwnProperty;

    let item: unknown = null;
    Object.getOwnPropertyNames(o).forEach((prop: any) => {
        item = (o as any)[prop];
        if (hasOwnProp.call(o, prop) &&
            (oIsFunction ? prop !== "caller" && prop !== "callee" && prop !== "arguments" : true) &&
            item !== null && (typeof item === "object" || typeof item === "function")
            && !Object.isFrozen(item)
        ) {
            deepFreeze(item);
        }
    });

    return o;
}

/**
 * @deprecated use {@link Object.keys(object).length}
 */
export function size<T extends (Record<string, unknown> | unknown[])>(object: T): number {
    let result = 0;
    for (const i in object) {
        if (object.hasOwnProperty(i)) {
            result++;
        }
    }

    return result;
}

export function isPlain<T extends Record<string, unknown>>(object: T): boolean {
    for (const index in object) {
        if (object.hasOwnProperty(index) && typeof object[index] === "object") {
            return false;
        }
    }

    return true;
}

export function toBoolean<T>(value: T): boolean {
    return value !== null && `${value}` !== "false";
}

export function isNotInstance<T extends Record<string, unknown>>(value: T): boolean {
    return toBoolean(value) && value.constructor.name === "Object";
}

/**
 *
 * @param list - data-structures to flat
 * @param propertyPath - path to property
 * @param separator - separator in propertyPath
 * @param skipUndefined - true if undefined should be skipped
 *
 * @example
 * ```
 * const items = [
 *    {
 *        person: {
 *            name: "Gabriel"
 *        }
 *    },
 *    {
 *        person: {
 *            name: "Ella"
 *        }
 *    },
 *    {
 *        person: {
 *            name: "Gabriel"
 *        }
 *    },
 *    {
 *        person: {
 *            name: "Joe"
 *        }
 *    }
 * ]
 *
 * console.log(makeFlat(items), "person.name");
 * // ["Gabriel", "Ella", "Gabriel", "Joe"]
 * console.log(makeFlat(items), "person_name", "_");
 * // ["Gabriel", "Ella", "Gabriel", "Joe"]
 * console.log(makeFlat(items), "person.name", ".", true);
 * // ["Gabriel", "Ella", "Joe"]
 * ```
 */
export function makeFlat<T>(list: T[], propertyPath: string, separator = ".", skipUndefined = false): T[] {
    const propertyList = propertyPath.indexOf(separator) >= 0 ? propertyPath.split(separator) : [propertyPath];

    return list.reduce((acc, curr) => {
        const value = propertyList.reduce((propVal: any, propertyName) => propVal ? propVal[propertyName] : undefined, curr);
        if (typeof value === "undefined" && skipUndefined) {
            return acc;
        }
        acc.push(value);

        return acc;
    }, [] as T[]);
}
