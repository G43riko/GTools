import { Vector2 } from "@g43/math";
import type { MinMax2D, SimpleVector2 } from "@g43/types";
import type { Circle } from "./circle.ts";
import type { MassAble2D } from "./object-2d.ts";

/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Convex.js
 */
export class Triangle2D implements MassAble2D {
    public constructor(
        private readonly pointA: SimpleVector2,
        private readonly pointB: SimpleVector2,
        private readonly pointC: SimpleVector2,
    ) {
    }

    /**
     * https://en.wikipedia.org/wiki/Circumscribed_circle
     */
    public getCircumscribedCircle(): Circle {
        throw new Error("Not implemented");
    }

    public get area(): number {
        return (
            ((this.pointB.x - this.pointA.x) * (this.pointC.y - this.pointA.y)) -
            ((this.pointC.x - this.pointA.x) * (this.pointB.y - this.pointA.y))
        ) * 0.5;
    }

    public get boundingRadius(): number {
        return Math.max(
            Vector2.dist(this.pointA, this.pointB),
            Vector2.dist(this.pointB, this.pointC),
            Vector2.dist(this.pointA, this.pointC),
        ) / 2;
    }

    public get circuit(): number {
        return Vector2.dist(this.pointA, this.pointB) +
            Vector2.dist(this.pointB, this.pointC) +
            Vector2.dist(this.pointA, this.pointC);
    }

    /**
     * http://www.gamedev.net/topic/342822-moment-of-inertia-of-a-polygon-2d/
     */
    public get momentOfInertia(): number {
        throw new Error("Not implemented");
    }

    public toMinMax(): MinMax2D {
        return Vector2.createOutlineMinMax([this.pointA, this.pointB, this.pointC]);
    }
}
