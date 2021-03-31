import { hash2Numbers } from "../../../../utils/math-utils";
export class Grid2HashHolder {
    constructor() {
        this.data = {};
    }
    get(x, y) {
        return this.data[hash2Numbers(x, y)].value;
    }
    set(x, y, value) {
        this.data[hash2Numbers(x, y)] = { x, y, value };
    }
    forEach(callback) {
        Object.values(this.data).forEach((item) => (callback(item.value, item.x, item.y)));
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
//# sourceMappingURL=grid2-hash-holder.js.map