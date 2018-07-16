"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils = /** @class */ (function () {
    function ObjectUtils() {
    }
    ObjectUtils.without = function (obj, items) {
        var result = {};
        for (var objKey in obj) {
            if (obj.hasOwnProperty(objKey)) {
                if (items.indexOf(objKey) < 0) {
                    result[objKey] = obj[objKey];
                }
            }
        }
        return result;
    };
    ObjectUtils.byPath = function (obj, path, divider) {
        if (divider === void 0) { divider = "."; }
        var splitPath = path.split(divider);
        for (var i = 0; i < splitPath.length && obj; i++) {
            obj = obj[splitPath[i]];
        }
        return obj;
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
            if (object.hasOwnProperty(index)) {
                if (typeof object[index] === "object") {
                    return false;
                }
            }
        }
        return true;
    };
    return ObjectUtils;
}());
exports.ObjectUtils = ObjectUtils;
