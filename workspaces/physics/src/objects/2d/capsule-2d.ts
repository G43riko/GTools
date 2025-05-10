import { Vector2 } from "@g43/math";
import type { MinMax2D, SimpleVector2 } from "@g43/types";
import type { MassAble2D } from "./object-2d.ts";

/**
 * Represents a 2D capsule shape, which is a rectangle with semicircles at both ends.
 * @see https://github.com/schteppe/p2.js/blob/master/src/shapes/Capsule.js
 */
export class Capsule2D implements MassAble2D {
    /**
     * Creates a new Capsule2D instance
     * @param start The starting point of the capsule's central line segment
     * @param end The ending point of the capsule's central line segment
     * @param radius The radius of the capsule's semicircles
     */
    public constructor(
        private readonly start: SimpleVector2,
        private readonly end: SimpleVector2,
        private readonly radius: number,
    ) {
    }

    /**
     * Gets the length of the capsule's central line segment
     */
    public get length(): number {
        return Vector2.dist(this.start, this.end);
    }
    /**
     * Gets the radius of the smallest circle that completely contains the capsule
     */
    public get boundingRadius(): number {
        return this.radius + this.length / 2;
    }

    /**
     * Gets the total area of the capsule (rectangle area + two semicircles)
     */
    public get area(): number {
        return Math.PI * this.radius * this.radius + this.radius * 2 * this.length;
    }

    /**
     * Gets the perimeter length of the capsule
     */
    public get circuit(): number {
        return 2 * Math.PI * this.radius + 2 * Vector2.dist(this.start, this.end);
    }

    /**
     * Converts the capsule to its axis-aligned bounding box
     * @returns The minimum and maximum coordinates of the bounding box
     */
    public toMinMax(): MinMax2D {
        throw new Error("Not implemented");
    }

    /**
     * Gets the moment of inertia of the capsule around its center of mass
     */
    public get momentOfInertia(): number {
        // http://www.efunda.com/math/areas/rectangle.cfm
        const boxI = (w: number, h: number): number => w * h * (w ** 2 + h ** 2) / 12;

        const semiA = (r: number): number => Math.PI * r ** 2 / 2;

        // http://www.efunda.com/math/areas/CircleHalf.cfm
        const semiI = (r: number): number => ((Math.PI / 4) - (8 / (9 * Math.PI))) * r ** 4;

        const semiC = (r: number): number => (4 * r) / (3 * Math.PI);

        // https://en.wikipedia.org/wiki/Second_moment_of_area#Parallel_axis_theorem
        const capsuleA = (l: number, r: number): number => l * 2 * r + Math.PI * r ** 2;

        const capsuleI = (l: number, r: number): number => {
            const d = l / 2 + semiC(r);

            return boxI(l, 2 * r) + 2 * (semiI(r) + semiA(r) * d ** 2);
        };

        const length = this.length;
        const area = capsuleA(length, this.radius);

        return (area > 0) ? capsuleI(length, this.radius) / area : 0;
    }
}
