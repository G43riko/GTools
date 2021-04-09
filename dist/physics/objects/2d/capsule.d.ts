import { SimpleVector2 } from "gtools/math";
import { MinMax2D } from "gtools/types";
import { MassAble2D } from "./object2-d";
/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Capsule.js
 */
export declare class Capsule implements MassAble2D {
    private readonly start;
    private readonly end;
    private readonly radius;
    constructor(start: SimpleVector2, end: SimpleVector2, radius: number);
    get boundingRadius(): number;
    get area(): number;
    get circuit(): number;
    toMinMax(): MinMax2D;
    get momentOfInertia(): number;
    get length(): number;
}
//# sourceMappingURL=capsule.d.ts.map