import type { MinMax3D, ReadonlySimpleVector3 } from "@g43/types";
import type { Cylinder } from "./cylinder.ts";
import type { Ellipsoid } from "./ellipsoid.ts";
import type { Line3D } from "./line-3d.ts";
import type { Plane3D } from "./plane-3d.ts";
import type { Ray3D } from "./ray-3d.ts";
import type { Sphere } from "./sphere.ts";
import type { Triangle3D } from "./triangle-3d.ts";

export interface Object3D {
    toMinMax(): MinMax3D;

    equals(object: any): boolean;

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
