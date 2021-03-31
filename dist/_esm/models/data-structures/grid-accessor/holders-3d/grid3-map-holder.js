export class Grid3MapHolder {
    constructor(data) {
        this.data = data;
    }
    static initEmpty(x, y, z, defaultValue = null) {
        const result = new Array(x);
        for (let i = 0; i < x; i++) {
            const resA = new Array(y);
            for (let j = 0; j < y; j++) {
                const resB = new Array(z);
                for (let k = 0; k < z; k++) {
                    resB[k] = defaultValue;
                }
                resA[j] = resB;
            }
            result[i] = resA;
        }
        return new Grid3MapHolder(result);
    }
    get(x, y, z) {
        var _a, _b;
        return (_b = (_a = this.data[x]) === null || _a === void 0 ? void 0 : _a[y]) === null || _b === void 0 ? void 0 : _b[z];
    }
    set(x, y, z, value) {
        this.data[x][y][z] = value;
    }
    getBetween(pointA, pointB) {
        const min = {
            x: Math.min(pointA.x, pointB.x),
            y: Math.min(pointA.y, pointB.y),
            z: Math.min(pointA.z, pointB.z),
        };
        const max = {
            x: Math.max(pointA.x, pointB.x),
            y: Math.max(pointA.y, pointB.y),
            z: Math.max(pointA.z, pointB.z),
        };
        return this.getAreaInternally(min, {
            x: max.x - min.x + 1,
            y: max.y - min.y + 1,
            z: max.z - min.z + 1,
        }, "data");
    }
    getArea(position, size) {
        return this.getAreaInternally(position, size, "data");
    }
    setData(data) {
        this.data.splice(0, this.data.length);
        Object.assign(this.data, data);
    }
    getAreaInternally(position, size, select) {
        const result = [];
        if (select === "block") {
            for (let i = 0; i < size.x; i++) {
                for (let j = 0; j < size.y; j++) {
                    for (let k = 0; k < size.z; k++) {
                        const x = i + position.x;
                        const y = j + position.y;
                        const z = k + position.z;
                        result.push({
                            item: this.data[x][y][z],
                            coordinates: { x, y, z },
                        });
                    }
                }
            }
            return result;
        }
        for (let i = 0; i < size.x; i++) {
            for (let j = 0; j < size.y; j++) {
                for (let k = 0; k < size.z; k++) {
                    const x = i + position.x;
                    const y = j + position.y;
                    const z = k + position.z;
                    result.push(this.data[x][y][z]);
                }
            }
        }
        return result;
    }
    forEach(callback) {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                for (let k = 0; k < this.data[i][j].length; k++) {
                    callback(this.data[i][j][k], i, j, k);
                }
            }
        }
    }
    getRandomBlock(filter) {
        while (true) {
            const x = Math.floor(Math.random() * this.data.length);
            const y = Math.floor(Math.random() * this.data[x].length);
            const z = Math.floor(Math.random() * this.data[x][y].length);
            const item = this.data[x][y][z];
            if (filter && !filter(item)) {
                continue;
            }
            return {
                item,
                coordinates: { x, y, z },
            };
        }
    }
}
//# sourceMappingURL=grid3-map-holder.js.map