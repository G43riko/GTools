"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var ObjectUtils = /** @class */ (function () {
    function ObjectUtils() {
    }

    ObjectUtils.without = function (obj, items) {
        var result = {};
        for (var objKey in obj) {
            if (obj.hasOwnProperty(objKey) && items.indexOf(objKey) < 0) {
                result[objKey] = obj[objKey];
            }
        }
        return result;
    };
    ObjectUtils.getNestedProperty = function (object, propertyPath, separator) {
        if (separator === void 0) {
            separator = ".";
        }
        var propertyList = propertyPath.split(separator);
        return propertyList.reduce(function (currentNestedPropertyValue, propertyName) {
            return currentNestedPropertyValue ? currentNestedPropertyValue[propertyName] : undefined;
        }, object);
    };
    ObjectUtils.size = function (object) {
        var result = 0;
        for (var i in object) {
            if (object.hasOwnProperty(i)) {
                result++;
            }
        }
        return result;
    };
    ObjectUtils.isPlain = function (object) {
        for (var index in object) {
            if (object.hasOwnProperty(index) && typeof object[index] === "object") {
                return false;
            }
        }
        return true;
    };
    ObjectUtils.makeFlat = function (list, propertyPath, separator) {
        if (separator === void 0) {
            separator = ".";
        }
        var propertyList = propertyPath.indexOf(separator) >= 0 ? propertyPath.split(separator) : [propertyPath];
        var unknown = Symbol("unknown");
        return list.reduce(function (acc, curr) {
            var value = propertyList.reduce(function (propVal, propertyName) {
                return propVal ? propVal[propertyName] : unknown;
            }, curr);
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
    };
    return ObjectUtils;
}());
exports.ObjectUtils = ObjectUtils;
