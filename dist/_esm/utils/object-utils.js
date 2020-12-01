export function without(obj, items) {
    return getObjectEntries(obj).filter((entry) => !items.includes(entry.key))
        .reduce((prev, entry) => {
        prev[entry.key] = entry.value;
        return prev;
    }, {});
}
export function deepEqual(objA, objB) {
    var _a, _b, _c, _d;
    if (typeof objA !== typeof objB) {
        return false;
    }
    if (typeof objA === "object") {
        if (!objA || !objB) {
            return objA === objB;
        }
        if (((_b = (_a = objA) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) !== ((_d = (_c = objB) === null || _c === void 0 ? void 0 : _c.constructor) === null || _d === void 0 ? void 0 : _d.name)) {
            return false;
        }
        const keys = Object.keys(objA);
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
    if (typeof objA === "number" && typeof objB === "number") {
        if (isNaN(+objA) && isNaN(+objB)) {
            return true;
        }
    }
    return objA === objB;
}
export function deepCopy(source) {
    var _a, _b;
    if (typeof source === "object") {
        if (Array.isArray(source)) {
            return source.map((e) => deepCopy(e));
        }
        if (((_b = (_a = source) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) !== "Object") {
            throw new Error("This method cannot copy class instances");
        }
        const result = {};
        Object.entries(source).forEach(([key, value]) => {
            result[key] = deepCopy(value);
        });
        return result;
    }
    if (typeof source === "function") {
        throw new Error("This method cannot copy functions");
    }
    return source;
}
export function getObjectEntries(obj) {
    const result = [];
    for (const objKey in obj) {
        if (!obj.hasOwnProperty(objKey)) {
            continue;
        }
        result.push({
            key: objKey,
            value: obj[objKey],
        });
    }
    return result;
}
export function getNestedProperty(object, propertyPath, separator = ".") {
    const propertyList = propertyPath.split(separator);
    return propertyList.reduce((currentNestedPropertyValue, propertyName) => currentNestedPropertyValue ? currentNestedPropertyValue[propertyName] : undefined, object);
}
export function setNestedProperty(key, item, value) {
    let obj = item;
    const splitKey = key.split(".");
    for (let i = 0; i < splitKey.length - 1; i++) {
        obj = obj[splitKey[i]];
    }
    obj[splitKey[splitKey.length - 1]] = value;
}
export function roughSizeOfObject(object) {
    const objectList = [];
    const stack = [object];
    let bytes = 0;
    while (stack.length) {
        const value = stack.pop();
        if (typeof value === "boolean") {
            bytes += 4;
        }
        else if (typeof value === "string") {
            bytes += value.length << 1;
        }
        else if (typeof value === "number") {
            bytes += 8;
        }
        else if (typeof value === "object" && objectList.indexOf(value) === -1) {
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
export function size(object) {
    let result = 0;
    for (const i in object) {
        if (object.hasOwnProperty(i)) {
            result++;
        }
    }
    return result;
}
export function isPlain(object) {
    for (const index in object) {
        if (object.hasOwnProperty(index) && typeof object[index] === "object") {
            return false;
        }
    }
    return true;
}
export function makeFlat(list, propertyPath, separator = ".", skipUndefined = false) {
    const propertyList = propertyPath.indexOf(separator) >= 0 ? propertyPath.split(separator) : [propertyPath];
    return list.reduce((acc, curr) => {
        const value = propertyList.reduce((propVal, propertyName) => propVal ? propVal[propertyName] : undefined, curr);
        if (typeof value === "undefined" && skipUndefined) {
            return acc;
        }
        acc.push(value);
        return acc;
    }, []);
}
//# sourceMappingURL=object-utils.js.map