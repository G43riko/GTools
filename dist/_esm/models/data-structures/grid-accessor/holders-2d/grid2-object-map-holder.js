export class Grid2ObjectMapHolder {
    constructor() {
        this.chunks = new Map();
    }
    get length() {
        let length = 0;
        this.chunks.forEach((value) => length += value.size);
        return length;
    }
    get(x, y) {
        var _a;
        return (_a = this.chunks.get(x)) === null || _a === void 0 ? void 0 : _a.get(y);
    }
    remove(x, y) {
        var _a, _b;
        return (_b = (_a = this.chunks.get(x)) === null || _a === void 0 ? void 0 : _a.delete(y)) !== null && _b !== void 0 ? _b : false;
    }
    forEach(callback) {
        this.chunks.forEach((row, x) => row.forEach((item, y) => callback(item, x, y)));
        return true;
    }
    set(x, y, value) {
        const row = this.chunks.get(x);
        if (row) {
            row.set(y, value);
        }
        else {
            this.chunks.set(x, new Map([[y, value]]));
        }
    }
    getArea(position, size) {
        return [];
    }
    getAroundData(x, y, size) {
        return [];
    }
    getRandomBlock(filter) {
        return;
    }
}
//# sourceMappingURL=grid2-object-map-holder.js.map