import type { SimpleVector2 } from "@g43/types";

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

    toArray(): readonly number[];

    toReadonlyProxy(): Readonly<T>;

    addNums(...values: number[]): this;

    addNum(value: number): this;

    add(value: T): this;

    subNums(...values: number[]): this;

    subNum(value: number): this;

    sub(value: T): this;

    mulNums(...values: number[]): this;

    mulNum(value: number): this;

    mul(value: T): this;

    divNums(...values: number[]): this;

    divNum(value: number): this;

    div(value: T): this;
}
