import { hash3Numbers } from "../../../../utils/math-utils";
export class Grid3HashHolder {
    constructor() {
        this.values = {};
    }
    get(x, y, z) {
        var _a;
        return (_a = this.values[hash3Numbers(x, y, z)]) === null || _a === void 0 ? void 0 : _a.value;
    }
    set(x, y, z, value) {
        this.values[hash3Numbers(x, y, z)] = { value, x, y, z };
    }
    forEach(callback) {
        Object.values(this.values).forEach((item) => (callback(item.value, item.x, item.y, item.z)));
    }
}
//# sourceMappingURL=grid3-hash-holder.js.map