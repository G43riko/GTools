import { Vector2 } from "@g43/math";
import type { MinMax2D, SimpleVector2 } from "@g43/types";
import type { Circle } from "./circle.ts";
import type { MassAble2D } from "./object-2d.ts";

/**
 * Represents a 2D triangle shape defined by three vertices in a 2D space.
 * This class provides various geometric calculations for triangles including area, perimeter, and moment of inertia.
 * Implementation is based on p2.js physics engine's convex shape handling.
 * @see https://github.com/schteppe/p2.js/blob/master/src/shapes/Convex.js
 */
export class Triangle2D implements MassAble2D {
    /** The first vertex of the triangle */
    private readonly pointA: SimpleVector2;
    /** The second vertex of the triangle */
    private readonly pointB: SimpleVector2;
    /** The third vertex of the triangle */
    private readonly pointC: SimpleVector2;
    /**
     * Creates a new Triangle2D instance
     * @param pointA The first vertex of the triangle
     * @param pointB The second vertex of the triangle
     * @param pointC The third vertex of the triangle
     */
    public constructor(
        /** The first vertex of the triangle */
        pointA: SimpleVector2,
        /** The second vertex of the triangle */
        pointB: SimpleVector2,
        /** The third vertex of the triangle */
        pointC: SimpleVector2,
    ) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    /**
     * Calculates and returns the circumscribed circle of the triangle.
     * The circumscribed circle is the unique circle that passes through all three vertices of the triangle.
     * @returns A Circle instance representing the circumscribed circle
     * @see https://en.wikipedia.org/wiki/Circumscribed_circle
     */
    public getCircumscribedCircle(): Circle {
        throw new Error("Not implemented");
    }

    /**
     * Gets the area of the triangle calculated using the cross product method.
     * The area is computed as half of the magnitude of the cross product of two edge vectors.
     * @returns The area of the triangle in square units
     */
    public get area(): number {
        return (
            ((this.pointB.x - this.pointA.x) * (this.pointC.y - this.pointA.y)) -
            ((this.pointC.x - this.pointA.x) * (this.pointB.y - this.pointA.y))
        ) * 0.5;
    }

    /**
     * Gets the radius of the smallest circle that completely contains the triangle.
     * Calculated as half of the longest distance between any two vertices.
     * @returns The bounding radius in units
     */
    public get boundingRadius(): number {
        return Math.max(
            Vector2.dist(this.pointA, this.pointB),
            Vector2.dist(this.pointB, this.pointC),
            Vector2.dist(this.pointA, this.pointC),
        ) / 2;
    }

    /**
     * Gets the perimeter length of the triangle.
     * Calculated as the sum of the lengths of all three sides.
     * @returns The perimeter length in units
     */
    public get circuit(): number {
        return Vector2.dist(this.pointA, this.pointB) +
            Vector2.dist(this.pointB, this.pointC) +
            Vector2.dist(this.pointA, this.pointC);
    }

    /**
     * Gets the moment of inertia of the triangle around its center of mass.
     * This property describes the triangle's resistance to angular acceleration.
     * @returns The moment of inertia value
     * @see http://www.gamedev.net/topic/342822-moment-of-inertia-of-a-polygon-2d/
     */
    public get momentOfInertia(): number {
        throw new Error("Not implemented");
    }

    /**
     * Converts the triangle to its axis-aligned bounding box
     * @returns The minimum and maximum coordinates of the bounding box
     */
    public toMinMax(): MinMax2D {
        return Vector2.createOutlineMinMax([this.pointA, this.pointB, this.pointC]);
    }
}
