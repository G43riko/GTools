import { SimpleVector2 } from "gtools/math";
export declare class Path<T extends SimpleVector2> {
    protected readonly points: readonly T[];
    constructor(points: readonly T[]);
    get length(): number;
    get first(): T;
    get last(): T;
    getPoint(index: number): T;
}
