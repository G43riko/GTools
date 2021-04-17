import { ReadonlySimpleVector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import { Cylinder } from "./cylinder";
import { Sphere } from "./sphere";

export interface Object3D {
    toMinMax(): MinMax3D;
}

export interface CollideAble3D extends Object3D {
    collideWithPoint(point: ReadonlySimpleVector3): boolean;

    collideWithSphere(sphere: Sphere): boolean;

    collideWithMinMax(minMax: MinMax3D): boolean;

    collideWithCylinder(cylinder: Cylinder): boolean;
}

export interface VolumeAble3D extends Object3D {
    readonly volume: number;
}
