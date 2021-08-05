export interface ObjectChange<T, S extends keyof T = any> {
    key: S;
    old: T[S];
    new: T[S];
}
