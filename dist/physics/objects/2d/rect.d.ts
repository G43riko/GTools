import { SimpleVector2 } from "../../../math";
import { MinMax2D } from "gtools/types";
import { MassAble2D } from "./object2-d";
import { Ray2D } from "./ray-2d";
import { Sphere } from "./sphere";
/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Box.js
 */
export declare class Rect implements MassAble2D {
    readonly position: SimpleVector2;
    readonly size: SimpleVector2;
    constructor(position: SimpleVector2, size: SimpleVector2);
    get area(): number;
    get momentOfInertia(): number;
    get boundingRadius(): number;
    get circuit(): number;
    toMinMax(): MinMax2D;
    static fromSphere({ radius, center }: Pick<Sphere, "radius" | "center">): Rect;
    static fromRay({ origin, direction, length }: Pick<Ray2D, "origin" | "direction" | "length">, realLength?: number): Rect;
    static fromPoints(points: SimpleVector2[], offsetX?: number, offsetY?: number): Rect;
    static fromMinMax({ min, max }: MinMax2D): Rect;
}
//# sourceMappingURL=rect.d.ts.map