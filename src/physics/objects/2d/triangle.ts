import { SimpleVector2, Vector2 } from "gtools/math";
import { MinMax2D } from "gtools/types";
import { MassAble2D } from "./object2-d";

/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Convex.js
 */
export class Triangle implements MassAble2D {
    public constructor(
        private readonly pointA: SimpleVector2,
        private readonly pointB: SimpleVector2,
        private readonly pointC: SimpleVector2,
    ) {
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
        return Vector2.createOutlineRange([this.pointA, this.pointB, this.pointC]);
    }
}
