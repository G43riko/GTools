import { MinMax2D } from "gtools/types";
import { Ray2D, RayCast } from "./ray-2d";

export interface Object2D {
    readonly momentOfInertia: number;
    readonly boundingRadius: number;
    rayCast?(ray: Ray2D, result: RayCast): void;
    toMinMax(): MinMax2D;
}

export interface MassAble2D extends Object2D {
    readonly area: number;
    readonly circuit: number;
}
