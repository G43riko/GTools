import { getOrSetProperty } from "../../../../utils/object-utils";
var Grid3ObjectHolder = (function () {
    function Grid3ObjectHolder() {
        this.data = {};
    }
    Grid3ObjectHolder.prototype.get = function (x, y, z) {
        var row = getOrSetProperty(this.data, x, {});
        var column = getOrSetProperty(row, y, {});
        return column[z];
    };
    Grid3ObjectHolder.prototype.set = function (x, y, z, value) {
        var row = getOrSetProperty(this.data, x, {});
        var column = getOrSetProperty(row, y, {});
        column[z] = value;
    };
    Grid3ObjectHolder.prototype.forEach = function (callback) {
        Object.entries(this.data).forEach(function (_a) {
            var x = _a[0], chunkRows = _a[1];
            Object.entries(chunkRows).forEach(function (_a) {
                var y = _a[0], chunk = _a[1];
                Object.entries(chunk).forEach(function (_a) {
                    var z = _a[0], item = _a[1];
                    callback(item, +x, +y, +z);
                });
            });
        });
    };
    return Grid3ObjectHolder;
}());
export { Grid3ObjectHolder };
//# sourceMappingURL=grid3-object-holder.js.map