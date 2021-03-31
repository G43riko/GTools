import { getOrSetProperty } from "../../../../utils/object-utils";
export class Grid3ObjectHolder {
    constructor() {
        this.data = {};
    }
    get(x, y, z) {
        const row = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});
        return column[z];
    }
    set(x, y, z, value) {
        const row = getOrSetProperty(this.data, x, {});
        const column = getOrSetProperty(row, y, {});
        column[z] = value;
    }
    forEach(callback) {
        Object.entries(this.data).forEach(([x, chunkRows]) => {
            Object.entries(chunkRows).forEach(([y, chunk]) => {
                Object.entries(chunk).forEach(([z, item]) => {
                    callback(item, +x, +y, +z);
                });
            });
        });
    }
}
//# sourceMappingURL=grid3-object-holder.js.map