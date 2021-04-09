"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid3HashHolder = void 0;
var math_utils_1 = require("../../../../utils/math-utils");
var Grid3HashHolder = (function () {
    function Grid3HashHolder(cacheForIteration) {
        if (cacheForIteration === void 0) { cacheForIteration = false; }
        this.cacheForIteration = cacheForIteration;
        this.data = {};
        this.values = [];
    }
    Grid3HashHolder.prototype.get = function (x, y, z) {
        var _a;
        return (_a = this.data[math_utils_1.hash3Numbers(x, y, z)]) === null || _a === void 0 ? void 0 : _a.value;
    };
    Grid3HashHolder.prototype.set = function (x, y, z, value) {
        this.data[math_utils_1.hash3Numbers(x, y, z)] = { value: value, x: x, y: y, z: z };
        if (this.cacheForIteration) {
            this.values = Object.values(this.data);
        }
    };
    Grid3HashHolder.prototype.delete = function (x, y, z) {
        delete this.data[math_utils_1.hash3Numbers(x, y, z)];
        if (this.cacheForIteration) {
            this.values = Object.values(this.values);
        }
    };
    Grid3HashHolder.prototype.forEach = function (callback) {
        if (this.cacheForIteration) {
            this.values.forEach(function (item) { return callback(item.value, item.x, item.y, item.z); });
        }
        else {
            Object.values(this.data).forEach(function (item) { return (callback(item.value, item.x, item.y, item.z)); });
        }
    };
    return Grid3HashHolder;
}());
exports.Grid3HashHolder = Grid3HashHolder;
//# sourceMappingURL=grid3-hash-holder.js.map