import { hash3Numbers } from "../../../../utils/math-utils";
var Grid3HashHolder = (function () {
    function Grid3HashHolder() {
        this.values = {};
    }
    Grid3HashHolder.prototype.get = function (x, y, z) {
        var _a;
        return (_a = this.values[hash3Numbers(x, y, z)]) === null || _a === void 0 ? void 0 : _a.value;
    };
    Grid3HashHolder.prototype.set = function (x, y, z, value) {
        this.values[hash3Numbers(x, y, z)] = { value: value, x: x, y: y, z: z };
    };
    Grid3HashHolder.prototype.forEach = function (callback) {
        Object.values(this.values).forEach(function (item) { return (callback(item.value, item.x, item.y, item.z)); });
    };
    return Grid3HashHolder;
}());
export { Grid3HashHolder };
//# sourceMappingURL=grid3-hash-holder.js.map