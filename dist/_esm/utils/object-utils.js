export function without(obj, items) {
    return getObjectEntries(obj).filter((entry) => !items.includes(entry.key))
        .reduce((prev, entry) => {
        prev[entry.key] = entry.value;
        return prev;
    }, {});
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