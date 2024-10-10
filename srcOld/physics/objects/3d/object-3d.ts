import { ReadonlySimpleVector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import { Cylinder } from "./cylinder";
import { Ellipsoid } from "./ellipsoid";
import { Line3D } from "./line-3d";
import { Plane3D } from "./plane-3d";
import { Ray3D } from "./ray-3d";
import { Sphere } from "./sphere";
import { Triangle3D } from "./triangle-3d";

export interface Object3D {
    toMinMax(): MinMax3D;

    equals(line: any): boolean;

    getCenter(): ReadonlySimpleVector3;
}

export interface GPhysics<T> {
    cylinder(cylinder: Cylinder): T;

    ellipsoid(ellipsoid: Ellipsoid): T;

    triangle(triangle: Triangle3D): T;

    line(line: Line3D): T;

    plane(plane: Plane3D): T;

    ray(ray: Ray3D): T;

    point(point: ReadonlySimpleVector3): T;

    box(box: ReadonlySimpleVector3): T;

    sphere(sphere: Sphere): T;

    minMax(minMax: MinMax3D): T;
}

export interface CollideAble3D<T extends keyof GPhysics<boolean>> extends Object3D {
    readonly collideWith: Pick<GPhysics<boolean>, T>;
}

export interface DistanceAble3D<T extends keyof GPhysics<number>> extends Object3D {
    readonly distanceTo: Pick<GPhysics<number>, T>;
}

export interface IntersectAble3D<T extends keyof GPhysics<ReadonlySimpleVector3>> extends Object3D {
    readonly intersectionWith: Pick<GPhysics<ReadonlySimpleVector3>, T>;
}

export interface VolumeAble3D extends Object3D {
    readonly volume: number;
}
