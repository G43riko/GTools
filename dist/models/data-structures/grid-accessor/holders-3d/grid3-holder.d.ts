import { SimpleVector3 } from "gtools/math";
export interface Grid3Block<T> {
    readonly item: T;
    readonly coordinates: SimpleVector3;
}
export interface Grid3Holder<T> {
    get(x: number, y: number, z: number): T;
    set(x: number, y: number, z: number, value: T): void;
    forEach(callback: (block: T, x: number, y: number, z: number) => void): void;
}
//# sourceMappingURL=grid3-holder.d.ts.map