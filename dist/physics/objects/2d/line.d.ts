import { SimpleVector2 } from "gtools/math";
import { MinMax } from "gtools/types";
import { Object2d } from "./object-2d";
/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Line.js
 */
export declare class Line implements Object2d {
    readonly pointA: SimpleVector2;
    readonly pointB: SimpleVector2;
    constructor(pointA: SimpleVector2, pointB: SimpleVector2);
    get length(): number;
    angle(): number;
    get boundingRadius(): number;
    static fromPoints(aX: number, aY: number, bX: number, bY: number): Line;
    get momentOfInertia(): number;
    toMinMax(): MinMax;
}
//# sourceMappingURL=line.d.ts.map