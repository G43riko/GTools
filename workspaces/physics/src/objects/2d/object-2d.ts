import type { MinMax2D, ReadonlySimpleVector2 } from "@g43/types";
import type { Cylinder } from "../3d/cylinder.ts";
import type { Circle } from "./circle.ts";
import type { Ray2D, RayCast2D } from "./ray-2d.ts";

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
