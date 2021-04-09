import { hash2Numbers } from "../../../../utils/math-utils";
export class Grid2HashHolder {
    constructor() {
        this.data = {};
    }
    get length() {
        return Object.keys(this.data).length;
    }
    get(x, y) {
        var _a;
        return (_a = this.data[hash2Numbers(x, y)]) === null || _a === void 0 ? void 0 : _a.value;
    }
    set(x, y, value) {
        this.data[hash2Numbers(x, y)] = { x, y, value };
    }
    forEach(callback) {
        Object.values(this.data).forEach((item) => (callback(item.value, item.x, item.y)));
        return true;
    }
    getArea(position, size) {
        throw new Error("Not implemented");
    }
    delete(x, y) {
        delete this.data[hash2Numbers(x, y)];
    }
    getAroundData(x, y, size) {
        throw new Error("Not implemented");
    }
    getRandomBlock(filter) {
        throw new Error("Not implemented");
    }
}
//# sourceMappingURL=grid2-hash-holder.js.map