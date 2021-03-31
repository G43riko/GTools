import { MinMax } from "gtools/types";
import { Ray, RayCast } from "./ray";
export interface Object2d {
    readonly momentOfInertia: number;
    readonly boundingRadius: number;
    rayCast?(ray: Ray, result: RayCast): void;
    toMinMax(): MinMax;
}
export interface MassAble extends Object2d {
    readonly area: number;
    readonly circuit: number;
}
//# sourceMappingURL=object-2d.d.ts.map