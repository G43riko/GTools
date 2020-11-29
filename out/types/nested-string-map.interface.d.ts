export interface NestedStringMap<T = string> {
    [key: string]: T | NestedStringMap<T>;
}
