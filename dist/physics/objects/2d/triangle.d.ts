import { SimpleVector2 } from "gtools/math";
import { MinMax } from "gtools/types";
import { MassAble } from "./object-2d";
/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Convex.js
 */
export declare class Triangle implements MassAble {
    private readonly pointA;
    private readonly pointB;
    private readonly pointC;
    constructor(pointA: SimpleVector2, pointB: SimpleVector2, pointC: SimpleVector2);
    get area(): number;
    get boundingRadius(): number;
    get circuit(): number;
    /**
     * http://www.gamedev.net/topic/342822-moment-of-inertia-of-a-polygon-2d/
     */
    get momentOfInertia(): number;
    toMinMax(): MinMax;
}
//# sourceMappingURL=triangle.d.ts.map