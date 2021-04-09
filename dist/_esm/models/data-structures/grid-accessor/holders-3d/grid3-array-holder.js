export function getIndex(x, y, z, width, height = width) {
    return x + (z * width) + (y * width * height);
}
export function getCoordinates(index, width, height = width) {
    return {
        x: index % width,
        y: Math.floor(index / (width * height)),
        z: (index / width) % width,
    };
}
export class Grid3ArrayHolder {
    constructor(size, data) {
        this.size = size;
        this.data = data;
    }
    getIndex(x, y, z) {
        return getIndex(x, y, z, this.size.x);
    }
    getCoordinates(index) {
        return getCoordinates(index, this.size.x);
    }
    static initEmpty(x, y, z, defaultValue = null) {
        const size = x * y * z;
        const result = new Array(size);
        for (let i = 0; i < size; i++) {
            result[i] = defaultValue;
        }
        return new Grid3ArrayHolder({ x, y, z }, result);
    }
    get(x, y, z) {
        return this.data[this.getIndex(x, y, z)];
    }
    set(x, y, z, value) {
        this.data[this.getIndex(x, y, z)] = value;
    }
    forEach(callback) {
        for (let i = 0; i < this.data.length; i++) {
            const coordinates = this.getCoordinates(i);
            if (callback(this.data[i], coordinates.x, coordinates.y, coordinates.z) === false) {
                return;
            }
        }
    }
}
//# sourceMappingURL=grid3-array-holder.js.map