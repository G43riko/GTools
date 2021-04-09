import { SimpleVector2 } from "gtools/math";
import { MinMax2D } from "gtools/types";
import { Object2D } from "./object2-d";
/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Line.js
 */
export declare class Line implements Object2D {
    readonly pointA: SimpleVector2;
    readonly pointB: SimpleVector2;
    constructor(pointA: SimpleVector2, pointB: SimpleVector2);
    get length(): number;
    angle(): number;
    get boundingRadius(): number;
    static fromPoints(aX: number, aY: number, bX: number, bY: number): Line;
    get momentOfInertia(): number;
    toMinMax(): MinMax2D;
}
//# sourceMappingURL=line.d.ts.map