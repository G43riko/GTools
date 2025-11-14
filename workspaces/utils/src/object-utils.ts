export function getOrSetProperty<S, T extends keyof S>(obj: S, index: T, value: S[T]): S[T] {
    const result = obj[index];
    if (result) {
        return result;
    }
    obj[index] = value;

    return value;
}

export function getNestedPropertyArray(object: any, propertyPath: string | string[], separator = "."): any {
   if (typeof propertyPath === "string") {
        return getNestedPropertyArray(object, propertyPath.split(separator), separator);
    }

    const [head, ...rest] = propertyPath;

    if (head === "*") {
        if (!Array.isArray(object)) {
            return undefined
        };

        // Flatten results from all items under this wildcard
        const results = object
            .map((item) => getNestedPropertyArray(item, rest, separator))
            .flat();

        return results;
    }

    if (object == null) {
        return undefined
    };

    // Continue normally
    const next = object[head];
    return rest.length
        ? getNestedPropertyArray(next, rest, separator)
        : next;
}
export function getNestedProperty(object: any, propertyPath: string | string[], separator = "."): any {
    if (typeof propertyPath === "string") {
        return getNestedProperty(object, propertyPath.split(separator));
    }

    return propertyPath.reduce(
        (
            currentNestedPropertyValue,
            propertyName,
        ) => (currentNestedPropertyValue ? currentNestedPropertyValue[propertyName] : undefined),
        object,
    );
}

export function setNestedProperty<T, A extends keyof T, B extends keyof T[A]>(
    item: T,
    key: [A, B],
    value: T[A][B],
): boolean;
export function setNestedProperty<T, A extends keyof T, B extends keyof T[A]>(
    item: T,
    key: `${string & A}.${string & B}`,
    value: T[A][B],
): boolean;
export function setNestedProperty<T>(item: any, key: string | string[], value: T): boolean {
    if (typeof key === "string") {
        return setNestedProperty(item, key.split(".") as [string, string], value);
    }
    let obj = item as { [k in string]: unknown };
    for (let i = 0; i < key.length - 1; i++) {
        if (typeof obj[key[i]] === "undefined") {
            obj[key[i]] = {};
        }
        obj = obj[key[i]] as { [k in string]: unknown };
    }
    obj[key[key.length - 1]] = value;

    return true;
}

export function isPlain<T extends Record<string, unknown>>(object: T): boolean {
    for (const index in object) {
        if (Object.hasOwn(object, index) && typeof object[index] === "object") {
            return false;
        }
    }

    return true;
}

/**
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
        const value = propertyList.reduce(
            (propVal: any, propertyName) => (propVal ? propVal[propertyName] : undefined),
            curr,
        );
        if (typeof value === "undefined" && skipUndefined) {
            return acc;
        }
        acc.push(value);

        return acc;
    }, [] as T[]);
}
