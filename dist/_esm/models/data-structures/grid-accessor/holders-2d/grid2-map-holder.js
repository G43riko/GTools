export class Grid2MapHolder {
    constructor(data) {
        this.data = data;
        this.length = this.data.length * this.data[0].length;
    }
    static initEmpty(x, y, defaultValue = null) {
        const result = new Array(x);
        for (let i = 0; i < x; i++) {
            result[i] = new Array(y);
            for (let j = 0; j < y; j++) {
                result[i][j] = defaultValue;
            }
        }
        return new Grid2MapHolder(result);
    }
    static initWithProvider(x, y, provider) {
        const result = new Array(x);
        for (let i = 0; i < x; i++) {
            result[i] = new Array(y);
            for (let j = 0; j < y; j++) {
                result[i][j] = provider(x, y);
            }
        }
        return new Grid2MapHolder(result);
    }
    get(x, y) {
        return this.data[x][y];
    }
    set(x, y, value) {
        this.data[x][y] = value;
    }
    delete(x, y) {
        this.data[x][y] = undefined;
    }
    forEach(callback) {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                callback(this.data[i][j], i, j);
            }
        }
        return true;
    }
    getArea(position, size) {
        throw new Error("Not implemented");
    }
    getAroundData(x, y, size) {
        throw new Error("Not implemented");
    }
    getRandomBlock(filter) {
        throw new Error("Not implemented");
    }
}
//# sourceMappingURL=grid2-map-holder.js.map