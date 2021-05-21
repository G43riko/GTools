import { ReadonlySimpleVector2 } from "../../../math";
import { MinMax2D } from "../../../types";
import { Cylinder } from "../3d/cylinder";
import { Circle } from "./circle";
import { Ray2D, RayCast2D } from "./ray-2d";

export interface Object2D {
    readonly momentOfInertia: number;
    readonly boundingRadius: number;

    rayCast?(ray: Ray2D, result: RayCast2D): void;

    toMinMax(): MinMax2D;
}

export interface MassAble2D extends Object2D {
    readonly area: number;
    readonly circuit: number;
}

export interface CollideAble2D extends Object2D {
    collideWithPoint(point: ReadonlySimpleVector2): boolean;

    collideWithCircle(circle: Circle): boolean;

    collideWithMinMax(minMax: MinMax2D): boolean;

    collideWithCylinder(cylinder: Cylinder): boolean;
}
