import { getOrSetProperty } from "../../../../utils/object-utils";
export class Grid2ObjectHolder {
    constructor() {
        this.data = {};
        this._length = 0;
    }
    get(x, y) {
        const row = getOrSetProperty(this.data, x, {});
        return row[y];
    }
    remove(x, y) {
        const row = getOrSetProperty(this.data, x, {});
        if (row[y]) {
            this._length--;
        }
        delete row[y];
    }
    forEach(callback) {
        Object.entries(this.data).forEach(([x, chunkRows]) => {
            Object.entries(chunkRows).forEach(([y, chunk]) => {
                callback(chunk, +x, +y);
            });
        });
    }
    set(x, y, value) {
        const row = getOrSetProperty(this.data, x, {});
        if (!row[y]) {
            this._length++;
        }
        row[y] = value;
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
//# sourceMappingURL=grid2-object-holder.js.map