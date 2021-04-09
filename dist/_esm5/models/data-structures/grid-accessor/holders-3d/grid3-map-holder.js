var Grid3MapHolder = (function () {
    function Grid3MapHolder(data) {
        this.data = data;
    }
    Grid3MapHolder.initEmpty = function (x, y, z, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var result = new Array(x);
        for (var i = 0; i < x; i++) {
            var resA = new Array(y);
            for (var j = 0; j < y; j++) {
                var resB = new Array(z);
                for (var k = 0; k < z; k++) {
                    resB[k] = defaultValue;
                }
                resA[j] = resB;
            }
            result[i] = resA;
        }
        return new Grid3MapHolder(result);
    };
    Grid3MapHolder.prototype.get = function (x, y, z) {
        var _a, _b;
        return (_b = (_a = this.data[x]) === null || _a === void 0 ? void 0 : _a[y]) === null || _b === void 0 ? void 0 : _b[z];
    };
    Grid3MapHolder.prototype.set = function (x, y, z, value) {
        this.data[x][y][z] = value;
    };
    Grid3MapHolder.prototype.getBetween = function (pointA, pointB) {
        var min = {
            x: Math.min(pointA.x, pointB.x),
            y: Math.min(pointA.y, pointB.y),
            z: Math.min(pointA.z, pointB.z),
        };
        var max = {
            x: Math.max(pointA.x, pointB.x),
            y: Math.max(pointA.y, pointB.y),
            z: Math.max(pointA.z, pointB.z),
        };
        return this.getAreaInternally(min, {
            x: max.x - min.x + 1,
            y: max.y - min.y + 1,
            z: max.z - min.z + 1,
        }, "data");
    };
    Grid3MapHolder.prototype.getArea = function (position, size) {
        return this.getAreaInternally(position, size, "data");
    };
    Grid3MapHolder.prototype.setData = function (data) {
        this.data.splice(0, this.data.length);
        Object.assign(this.data, data);
    };
    Grid3MapHolder.prototype.getAreaInternally = function (position, size, select) {
        var result = [];
        if (select === "block") {
            for (var i = 0; i < size.x; i++) {
                for (var j = 0; j < size.y; j++) {
                    for (var k = 0; k < size.z; k++) {
                        var x = i + position.x;
                        var y = j + position.y;
                        var z = k + position.z;
                        result.push({
                            item: this.data[x][y][z],
                            coordinates: { x: x, y: y, z: z },
                        });
                    }
                }
            }
            return result;
        }
        for (var i = 0; i < size.x; i++) {
            for (var j = 0; j < size.y; j++) {
                for (var k = 0; k < size.z; k++) {
                    var x = i + position.x;
                    var y = j + position.y;
                    var z = k + position.z;
                    result.push(this.data[x][y][z]);
                }
            }
        }
        return result;
    };
    Grid3MapHolder.prototype.forEach = function (callback) {
        for (var i = 0; i < this.data.length; i++) {
            for (var j = 0; j < this.data[i].length; j++) {
                for (var k = 0; k < this.data[i][j].length; k++) {
                    callback(this.data[i][j][k], i, j, k);
                }
            }
        }
    };
    Grid3MapHolder.prototype.getRandomBlock = function (filter) {
        while (true) {
            var x = Math.floor(Math.random() * this.data.length);
            var y = Math.floor(Math.random() * this.data[x].length);
            var z = Math.floor(Math.random() * this.data[x][y].length);
            var item = this.data[x][y][z];
            if (filter && !filter(item)) {
                continue;
            }
            return {
                item: item,
                coordinates: { x: x, y: y, z: z },
            };
        }
    };
    return Grid3MapHolder;
}());
export { Grid3MapHolder };
//# sourceMappingURL=grid3-map-holder.js.map