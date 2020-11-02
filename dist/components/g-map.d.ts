export declare class GMap<T, S> extends Map<T, S> {
    get(key: T, defaultValue?: S): S | undefined;
    getOrCreate(key: T, defaultValue: S): S | undefined;
}
