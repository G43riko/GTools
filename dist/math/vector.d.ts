import { SimpleVector2 } from "./simple-vector2";
export interface Vector<T extends SimpleVector2, S extends T> {
    readonly length: number;
    readonly avg: number;
    readonly min: number;
    readonly max: number;
    readonly sum: number;
    clone(): S;
    getAbs(): S;
    invert(): this;
    getInverted(): S;
    normalize(): this;
    getNormalized(): S;
    set(vec: T): this;
    setData(...data: number[]): this;
    isZero(): boolean;
    angle(v: T): number;
    equals(v: T): boolean;
    dot(v: T): number;
    dist(v: T): number;
    toArray(): number[];
    add(value: T | number): this;
    sub(value: T | number): this;
    mul(value: T | number): this;
    div(value: T | number): this;
}
//# sourceMappingURL=vector.d.ts.map