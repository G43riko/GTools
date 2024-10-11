import { ReadonlySimpleVector3, Vector3 } from "../../../math";
import { Triangle3D } from "./triangle-3d";

/**
 * https://github.com/BennyQBD/3DEngineCpp/blob/master/src/physics/plane.h
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Plane.js
 * https://github.com/G43riko/JavaUtils/blob/master/GLib2/src/main/java/org/physics/shapes/types/threeDimensional/plane/Plane.java
 */
export class Plane3D {
    /**
     * @param normal - The "up" direction from the plane's surface.
     * @param distance - The distance to the plane from the world origin along the normal
     */
    public static fromNormalAndDistance(normal: ReadonlySimpleVector3, distance: number): Plane3D {
        throw new Error("Not implemented");
    }

    public static fromPoints(
        pointA: ReadonlySimpleVector3,
        pointB: ReadonlySimpleVector3,
        pointC: ReadonlySimpleVector3,
    ): Plane3D {
        return new Plane3D(
            Vector3.sub(pointA, pointB).cross(Vector3.sub(pointC, pointB)),
            pointA,
        );
    }

    public static fromTriangle(triangle: Triangle3D): Plane3D {
        return Plane3D.fromPointAndNormal(triangle.getNormal(), triangle.pointA);
    }

    public static fromPointAndNormal(point: ReadonlySimpleVector3, normal: ReadonlySimpleVector3): Plane3D {
        return new Plane3D(normal, point);
    }

    public readonly normal: ReadonlySimpleVector3;

    public readonly d: number;

    public constructor(
        normal: ReadonlySimpleVector3,
        public readonly point: ReadonlySimpleVector3,
    ) {
        this.normal = Vector3.fromVec(normal).normalize();
        this.d = -Vector3.mul(this.normal, this.point, new Vector3()).sum;
    }

    /**
     * Check plane is facing to point
     *
     * @param point - point to check
     */
    public isFacingTo(point: ReadonlySimpleVector3): boolean {
        return Vector3.dot(this.normal, Vector3.sub(point, this.point)) > 0;
    }
}
