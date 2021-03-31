export class Grid2MapHolder {
    constructor(data) {
        this.data = data;
    }
    get(x, y) {
        return this.data[x][y];
    }
    set(x, y, value) {
        this.data[x][y] = value;
    }
    forEach(callback) {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                callback(this.data[i][j], i, j);
            }
        }
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