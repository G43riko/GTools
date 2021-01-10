import { SimpleVector2, Vector2 } from "gtools/math";
import { MinMax } from "gtools/types";
import { Object2d } from "./object-2d";

/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Line.js
 */
export class Line implements Object2d{
    public constructor(public readonly pointA: SimpleVector2,
                       public readonly pointB: SimpleVector2) {
    }

    public get length(): number {
        return Vector2.dist(this.pointA, this.pointB);
    }



    public angle(): number {
        return Math.atan2(
            this.pointB.y - this.pointA.y,
            this.pointB.x - this.pointA.x,
        );
    }

    public get boundingRadius(): number{
        return this.length / 2;
    }


    public static fromPoints(aX: number, aY: number, bX: number, bY: number): Line {
        return new Line(
            {
                x: aX,
                y: aY,
            },
            {
                x: bX,
                y: bY,
            },
        );
    }

    public get momentOfInertia(): number {
        return  Math.pow(this.length, 2) / 12;
    }

    public toMinMax(): MinMax {
        return {
            min: Vector2.min(this.pointA, this.pointB),
            max: Vector2.max(this.pointA, this.pointB),
        };
    }
}
