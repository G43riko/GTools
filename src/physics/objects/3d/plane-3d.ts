import { ReadonlySimpleVector3 } from "../../../math";

/**
 * https://github.com/BennyQBD/3DEngineCpp/blob/master/src/physics/plane.h
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Plane.js
 */
export class Plane3D {
    /**
     *
     * @param normal - The "up" direction from the plane's surface.
     * @param distance - The distance to the plane from the world origin along the normal
     */
    public static fromNormalAndDistance(normal: ReadonlySimpleVector3, distance: number): Plane3D {
        return new Plane3D();
    }

    public static fromPoints(pointA: ReadonlySimpleVector3, pointB: ReadonlySimpleVector3, pointC: ReadonlySimpleVector3): Plane3D {
        return new Plane3D();
    }

    public static fromPointAndNormal(point: ReadonlySimpleVector3, normal: ReadonlySimpleVector3): Plane3D {
        return new Plane3D();
    }

    /**
     * Check plane is facing to point
     *
     * @param point - point to check
     */
    public static isFacingTo(point: ReadonlySimpleVector3): boolean {
        throw new Error("Not implemented");
    }
}
