export class Grid2StringHolder {
    constructor() {
        this.data = {};
    }
    get length() {
        return Object.keys(this.data).length;
    }
    get(x, y) {
        return this.data[`${x}_${y}`].value;
    }
    set(x, y, value) {
        this.data[`${x}_${y}`] = { x, y, value };
    }
    forEach(callback) {
        Object.values(this.data).forEach((item) => (callback(item.value, item.x, item.y)));
        return true;
    }
    getArea(position, size) {
        throw new Error("Not implemented");
    }
    delete(x, y) {
        delete this.data[`${x}_${y}`];
    }
    getAroundData(x, y, size) {
        throw new Error("Not implemented");
    }
    getRandomBlock(filter) {
        throw new Error("Not implemented");
    }
}
//# sourceMappingURL=grid2-string-holder.js.map