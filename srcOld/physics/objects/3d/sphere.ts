import { ReadonlySimpleVector3, Vector3 } from "../../../math";
import { MinMax3D } from "../../../types";
import {
    collision3dPointSphere,
    collision3dSphereBoxMinMax,
    collision3dSphereCylinder,
    collision3dSphereSphere,
} from "../../collisions-3d";
import { sphereSphereDistance } from "../../distances-3d";
import { Cylinder } from "./cylinder";
import { CollideAble3D, DistanceAble3D, VolumeAble3D } from "./object-3d";
import { Triangle3D } from "./triangle-3d";

/**
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Sphere.js
 */
export class Sphere
    implements VolumeAble3D, CollideAble3D<"minMax" | "cylinder" | "point" | "sphere">, DistanceAble3D<"sphere"> {
    public readonly collideWith = {
        cylinder: (cylinder: Cylinder): boolean =>
            collision3dSphereCylinder(
                this.center.x,
                this.center.y,
                this.center.z,
                this.radius,
                cylinder.position.x,
                cylinder.position.y,
                cylinder.position.z,
                cylinder.radius,
                cylinder.height,
            ),
        point: (point: ReadonlySimpleVector3): boolean =>
            collision3dPointSphere(
                point.x,
                point.y,
                point.z,
                this.center.x,
                this.center.y,
                this.center.z,
                this.radius,
            ),
        sphere: (sphere: Sphere): boolean =>
            collision3dSphereSphere(
                this.center.x,
                this.center.y,
                this.center.z,
                this.radius,
                sphere.center.x,
                sphere.center.y,
                sphere.center.z,
                sphere.radius,
            ),
        minMax: (minMax: MinMax3D): boolean =>
            collision3dSphereBoxMinMax(
                this.center.x,
                this.center.y,
                this.center.z,
                this.radius,
                minMax.min.x,
                minMax.min.y,
                minMax.min.z,
                minMax.max.x,
                minMax.max.y,
                minMax.max.z,
            ),
    };

    public readonly distanceTo = {
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

    public constructor(
        public readonly center: ReadonlySimpleVector3,
        public readonly radius: number,
    ) {
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

        const minMax = Vector3.createOutlineRange(points);

        const sizeX = minMax.max.x - minMax.min.x;
        const sizeY = minMax.max.y - minMax.min.y;
        const sizeZ = minMax.max.z - minMax.min.z;

        const center = Vector3.sum(minMax.min, minMax.max, new Vector3()).mul(0.5);
        const maxSize = Math.max(sizeX, sizeY, sizeZ);

        return new Sphere(center, maxSize);
    }

    public get volume(): number {
        return 4 / 3 * Math.PI * Math.pow(this.radius, 3);
    }
}
