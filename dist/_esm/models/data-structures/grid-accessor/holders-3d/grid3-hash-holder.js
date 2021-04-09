import { hash3Numbers } from "../../../../utils/math-utils";
export class Grid3HashHolder {
    constructor(cacheForIteration = false) {
        this.cacheForIteration = cacheForIteration;
        this.data = {};
        this.values = [];
    }
    get(x, y, z) {
        var _a;
        return (_a = this.data[hash3Numbers(x, y, z)]) === null || _a === void 0 ? void 0 : _a.value;
    }
    set(x, y, z, value) {
        this.data[hash3Numbers(x, y, z)] = { value, x, y, z };
        if (this.cacheForIteration) {
            this.values = Object.values(this.data);
        }
    }
    delete(x, y, z) {
        delete this.data[hash3Numbers(x, y, z)];
        if (this.cacheForIteration) {
            this.values = Object.values(this.values);
        }
    }
    forEach(callback) {
        if (this.cacheForIteration) {
            this.values.forEach((item) => callback(item.value, item.x, item.y, item.z));
        }
        else {
            Object.values(this.data).forEach((item) => (callback(item.value, item.x, item.y, item.z)));
        }
    }
}
//# sourceMappingURL=grid3-hash-holder.js.map