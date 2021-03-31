import { SimpleVector2 } from "../../../math";
import { MinMax, PosSize } from "gtools/types";
import { MassAble } from "./object-2d";
import { RayCast, RaycastResult } from "./ray";
/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Circle.js
 */
export declare class Sphere implements MassAble {
    readonly radius: number;
    readonly center: SimpleVector2;
    constructor(radius: number, center: SimpleVector2);
    get circuit(): number;
    get momentOfInertia(): number;
    get boundingRadius(): number;
    get area(): number;
    static fromMinMax({ min, max }: MinMax, chooseSize?: "min" | "max"): Sphere;
    static fromPosSize(posSize: PosSize, chooseSize?: "min" | "max"): Sphere;
    toMinMax(): MinMax;
    raycast(result: RaycastResult, ray: RayCast): void;
}
//# sourceMappingURL=sphere.d.ts.map