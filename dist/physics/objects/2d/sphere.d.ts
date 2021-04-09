import { SimpleVector2 } from "../../../math";
import { MinMax2D, PosSize2d } from "gtools/types";
import { MassAble2D } from "./object2-d";
import { RayCast, RaycastResult } from "./ray-2d";
/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Circle.js
 */
export declare class Sphere implements MassAble2D {
    readonly radius: number;
    readonly center: SimpleVector2;
    constructor(radius: number, center: SimpleVector2);
    get circuit(): number;
    get momentOfInertia(): number;
    get boundingRadius(): number;
    get area(): number;
    static fromMinMax({ min, max }: MinMax2D, chooseSize?: "min" | "max"): Sphere;
    static fromPosSize(posSize: PosSize2d, chooseSize?: "min" | "max"): Sphere;
    toMinMax(): MinMax2D;
    raycast(result: RaycastResult, ray: RayCast): void;
}
//# sourceMappingURL=sphere.d.ts.map