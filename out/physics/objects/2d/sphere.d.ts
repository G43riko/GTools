import { SimpleVector2 } from "gtools/math";
import { MinMax, PosSize } from "gtools/types";
export declare class Sphere {
    readonly radius: number;
    readonly center: SimpleVector2;
    constructor(radius: number, center: SimpleVector2);
    get circuit(): number;
    get area(): number;
    static fromMinMax({ min, max }: MinMax, chooseSize?: "min" | "max"): Sphere;
    static fromPosSize(posSize: PosSize, chooseSize?: "min" | "max"): Sphere;
}
