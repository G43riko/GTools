export class GMap<T, S extends string | number | Record<string | number, unknown>> extends Map<T, S> {
    public get(key: T, defaultValue?: S): S | undefined {
        return super.get(key) || defaultValue;
    }

    public getOrCreate(key: T, defaultValue: S | (() => S)): S | undefined {
        const result = super.get(key);
        if (result) {
            return result;
        }

        const newValue = typeof defaultValue === "function" ? defaultValue() : defaultValue;
        this.set(key, newValue);

        return newValue;
    }
}
