export function getIndex(x, y, z, width, height) {
    if (height === void 0) { height = width; }
    return x + (z * width) + (y * width * height);
}
export function getCoordinates(index, width, height) {
    if (height === void 0) { height = width; }
    return {
        x: index % width,
        y: Math.floor(index / (width * height)),
        z: (index / width) % width,
    };
}
var Grid3ArrayHolder = (function () {
    function Grid3ArrayHolder(size, data) {
        this.size = size;
        this.data = data;
    }
    Grid3ArrayHolder.prototype.getIndex = function (x, y, z) {
        return getIndex(x, y, z, this.size.x);
    };
    Grid3ArrayHolder.prototype.getCoordinates = function (index) {
        return getCoordinates(index, this.size.x);
    };
    Grid3ArrayHolder.initEmpty = function (x, y, z, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var size = x * y * z;
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
            result[i] = defaultValue;
        }
        return new Grid3ArrayHolder({ x: x, y: y, z: z }, result);
    };
    Grid3ArrayHolder.prototype.get = function (x, y, z) {
        return this.data[this.getIndex(x, y, z)];
    };
    Grid3ArrayHolder.prototype.set = function (x, y, z, value) {
        this.data[this.getIndex(x, y, z)] = value;
    };
    Grid3ArrayHolder.prototype.forEach = function (callback) {
        for (var i = 0; i < this.data.length; i++) {
            var coordinates = this.getCoordinates(i);
            if (callback(this.data[i], coordinates.x, coordinates.y, coordinates.z) === false) {
                return;
            }
        }
    };
    return Grid3ArrayHolder;
}());
export { Grid3ArrayHolder };
//# sourceMappingURL=grid3-array-holder.js.map