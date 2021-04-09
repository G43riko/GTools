"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAsNumber = exports.getAsString = void 0;
var getAsString = function (key) {
    if (typeof key !== "string") {
        throw new Error("Variable with value " + key + " is not a string");
    }
    return key;
};
exports.getAsString = getAsString;
var getAsNumber = function (key) {
    if (typeof key !== "number") {
        throw new Error("Variable with value " + key + " is not a number");
    }
    return key;
};
exports.getAsNumber = getAsNumber;
//# sourceMappingURL=runtime-validators.js.map