import { Vector3 } from "@g43/math";
import type { MinMax3D, ReadonlySimpleVector3 } from "@g43/types";
import { CollisionTable3d } from "../../collision-table-3d.ts";
import { pointSphereDistance, sphereSphereDistance } from "../../distances-3d.ts";
import { IntersectionTable3d } from "../../intersection-table-3d.ts";
import type { Cylinder } from "./cylinder.ts";
import type { Line3D } from "./line-3d.ts";
import type { CollideAble3D, DistanceAble3D, VolumeAble3D } from "./object-3d.ts";
import type { Triangle3D } from "./triangle-3d.ts";

/**
 * @see https://github.com/mrdoob/three.js/blob/dev/src/math/Sphere.js
 */
export class Sphere
    implements VolumeAble3D, CollideAble3D<"minMax" | "cylinder" | "point" | "sphere">, DistanceAble3D<"sphere"> {
    public readonly center: ReadonlySimpleVector3;
    public readonly radius: number;
    public readonly collideWith = {
        cylinder: (cylinder: Cylinder): boolean => CollisionTable3d.sphereCylinder(this, cylinder),
        point: (point: ReadonlySimpleVector3): boolean => CollisionTable3d.spherePoint(this, point),
        sphere: (sphere: Sphere): boolean => CollisionTable3d.sphereSphere(this, sphere),
        minMax: (minMax: MinMax3D): boolean => CollisionTable3d.sphereMinMax(this, minMax),
    };

    public readonly intersectionWith = {
        line: (line: Line3D): ReadonlySimpleVector3 | undefined => IntersectionTable3d.sphereLine(this, line),
    };

    public readonly distanceTo = {
        point: (point: ReadonlySimpleVector3): number =>
            pointSphereDistance(
                point.x,
                point.y,
                point.z,
                this.center.x,
                this.center.y,
                this.center.z,
                this.radius,
            ),
        sphere: (sphere: Sphere): number =>
            sphereSphereDistance(
                this.center.x,
                this.center.y,
                this.center.z,
                this.radius,
                sphere.center.x,
                sphere.center.y,
                sphere.center.z,
                sphere.radius,
            ),
    };

    public static fromTriangle(triangle: Triangle3D): Sphere {
        return Sphere.fromPoints([triangle.pointA, triangle.pointB, triangle.pointC]);
    }

    public static fromLine(start: ReadonlySimpleVector3, end: ReadonlySimpleVector3): Sphere {
        const radius = Vector3.dist(start, end) / 2;
        const center = {
            x: (start.x + end.x) / 2,
            y: (start.y + end.y) / 2,
            z: (start.z + end.z) / 2,
        };

        return new Sphere(center, radius);
    }

    public static fromPoints(points: ReadonlySimpleVector3[], optionalCenter?: ReadonlySimpleVector3): Sphere {
        if (points.length < 2) {
            throw new Error("Sphere can be created from at least 2 points");
        }
        if (optionalCenter) {
            let maxRadius = 0;

            points.forEach((point) => {
                const distance = Vector3.dist(optionalCenter, point);
                maxRadius = Math.max(maxRadius, distance);
            });

            return new Sphere(optionalCenter, maxRadius);
        }

        const minMax = Vector3.createOutlineMinMax(points);

        const sizeX = minMax.max.x - minMax.min.x;
        const sizeY = minMax.max.y - minMax.min.y;
        const sizeZ = minMax.max.z - minMax.min.z;

        const center = Vector3.sum(minMax.min, minMax.max, new Vector3()).mulNum(0.5);
        const maxSize = Math.max(sizeX, sizeY, sizeZ);

        return new Sphere(center, maxSize);
    }

    public constructor(
        center: ReadonlySimpleVector3,
        radius: number,
    ) {
        this.center = center;
        this.radius = radius;
    }

    public equals(sphere: any): boolean {
        if (!sphere) {
            return false;
        }

        if (!(sphere instanceof Sphere)) {
            return false;
        }

        return this.radius === sphere.radius && Vector3.equals(this.center, sphere.center);
    }

    public getCenter(): ReadonlySimpleVector3 {
        return this.center;
    }

    public toMinMax(): MinMax3D {
        return {
            min: {
                x: this.center.x - this.radius,
                y: this.center.y - this.radius,
                z: this.center.z - this.radius,
            },
            max: {
                x: this.center.x + this.radius,
                y: this.center.y + this.radius,
                z: this.center.z + this.radius,
            },
        };
    }

    public static getVolume(radius: number): number {
        return 4 / 3 * Math.PI * radius ** 3;
    }

    public get volume(): number {
        return Sphere.getVolume(this.radius);
    }
}
