export class GMap extends Map {
    get(key, defaultValue) {
        return super.get(key) || defaultValue;
    }
    getOrCreate(key, defaultValue) {
        const result = super.get(key);
        if (result) {
            return result;
        }
        this.set(key, defaultValue);
        return defaultValue;
    }
}
//# sourceMappingURL=g-map.js.map