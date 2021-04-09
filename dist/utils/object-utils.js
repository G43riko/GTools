"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFlat = exports.isNotInstance = exports.toBoolean = exports.isPlain = exports.size = exports.deepFreeze = exports.roughSizeOfObject = exports.createMergedObject = exports.setNestedProperty = exports.getNestedProperty = exports.getObjectEntries = exports.getOrSetProperty = exports.deepCopy = exports.deepEqual = exports.without = void 0;
function without(obj, items) {
    return getObjectEntries(obj).filter(function (entry) { return !items.includes(entry.key); })
        .reduce(function (prev, entry) {
        prev[entry.key] = entry.value;
        return prev;
    }, {});
}
exports.without = without;
function deepEqual(objA, objB) {
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
        var keys = Object.keys(objA);
        if (keys.length !== Object.keys(objB).length) {
            return false;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
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
exports.deepEqual = deepEqual;
function deepCopy(source) {
    var _a, _b;
    if (typeof source === "object") {
        if (Array.isArray(source)) {
            return source.map(function (e) { return deepCopy(e); });
        }
        if (((_b = (_a = source) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) !== "Object") {
            throw new Error("This method cannot copy class instances");
        }
        var result_1 = {};
        Object.entries(source).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            result_1[key] = deepCopy(value);
        });
        return result_1;
    }
    if (typeof source === "function") {
        throw new Error("This method cannot copy functions");
    }
    return source;
}
exports.deepCopy = deepCopy;
function getOrSetProperty(obj, index, value) {
    var result = obj[index];
    if (result) {
        return result;
    }
    obj[index] = value;
    return value;
}
exports.getOrSetProperty = getOrSetProperty;
function getObjectEntries(obj) {
    var result = [];
    for (var objKey in obj) {
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
exports.getObjectEntries = getObjectEntries;
function getNestedProperty(object, propertyPath, separator) {
    if (separator === void 0) { separator = "."; }
    if (typeof propertyPath === "string") {
        return getNestedProperty(object, propertyPath.split(separator));
    }
    return propertyPath.reduce(function (currentNestedPropertyValue, propertyName) { return currentNestedPropertyValue ? currentNestedPropertyValue[propertyName] : undefined; }, object);
}
exports.getNestedProperty = getNestedProperty;
function setNestedProperty(item, key, value) {
    if (typeof key === "string") {
        return setNestedProperty(item, key.split("."), value);
    }
    var obj = item;
    for (var i = 0; i < key.length - 1; i++) {
        obj = obj[key[i]];
    }
    obj[key[key.length - 1]] = value;
}
exports.setNestedProperty = setNestedProperty;
function createMergedObject(source) {
    var updates = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        updates[_i - 1] = arguments[_i];
    }
    return Object.assign.apply(Object, __spreadArrays([{}, source], updates));
}
exports.createMergedObject = createMergedObject;
function roughSizeOfObject(object) {
    var objectList = [];
    var stack = [object];
    var bytes = 0;
    while (stack.length) {
        var value = stack.pop();
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
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    stack.push(value[key]);
                }
            }
        }
    }
    return bytes;
}
exports.roughSizeOfObject = roughSizeOfObject;
function deepFreeze(o) {
    Object.freeze(o);
    var oIsFunction = typeof o === "function";
    var hasOwnProp = Object.prototype.hasOwnProperty;
    var item = null;
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        item = o[prop];
        if (hasOwnProp.call(o, prop) &&
            (oIsFunction ? prop !== "caller" && prop !== "callee" && prop !== "arguments" : true) &&
            item !== null && (typeof item === "object" || typeof item === "function")
            && !Object.isFrozen(item)) {
            deepFreeze(item);
        }
    });
    return o;
}
exports.deepFreeze = deepFreeze;
function size(object) {
    var result = 0;
    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            result++;
        }
    }
    return result;
}
exports.size = size;
function isPlain(object) {
    for (var index in object) {
        if (object.hasOwnProperty(index) && typeof object[index] === "object") {
            return false;
        }
    }
    return true;
}
exports.isPlain = isPlain;
function toBoolean(value) {
    return value !== null && "" + value !== "false";
}
exports.toBoolean = toBoolean;
function isNotInstance(value) {
    return toBoolean(value) && value.constructor.name === "Object";
}
exports.isNotInstance = isNotInstance;
function makeFlat(list, propertyPath, separator, skipUndefined) {
    if (separator === void 0) { separator = "."; }
    if (skipUndefined === void 0) { skipUndefined = false; }
    var propertyList = propertyPath.indexOf(separator) >= 0 ? propertyPath.split(separator) : [propertyPath];
    return list.reduce(function (acc, curr) {
        var value = propertyList.reduce(function (propVal, propertyName) { return propVal ? propVal[propertyName] : undefined; }, curr);
        if (typeof value === "undefined" && skipUndefined) {
            return acc;
        }
        acc.push(value);
        return acc;
    }, []);
}
exports.makeFlat = makeFlat;
//# sourceMappingURL=object-utils.js.map