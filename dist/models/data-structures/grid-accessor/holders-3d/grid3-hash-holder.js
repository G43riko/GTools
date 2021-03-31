"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid3HashHolder = void 0;
var math_utils_1 = require("../../../../utils/math-utils");
var Grid3HashHolder = (function () {
    function Grid3HashHolder() {
        this.values = {};
    }
    Grid3HashHolder.prototype.get = function (x, y, z) {
        var _a;
        return (_a = this.values[math_utils_1.hash3Numbers(x, y, z)]) === null || _a === void 0 ? void 0 : _a.value;
    };
    Grid3HashHolder.prototype.set = function (x, y, z, value) {
        this.values[math_utils_1.hash3Numbers(x, y, z)] = { value: value, x: x, y: y, z: z };
    };
    Grid3HashHolder.prototype.forEach = function (callback) {
        Object.values(this.values).forEach(function (item) { return (callback(item.value, item.x, item.y, item.z)); });
    };
    return Grid3HashHolder;
}());
exports.Grid3HashHolder = Grid3HashHolder;
//# sourceMappingURL=grid3-hash-holder.js.map