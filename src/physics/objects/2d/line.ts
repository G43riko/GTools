import { SimpleVector2, Vector2 } from "gtools/math";

export class Line {
    public constructor(public readonly pointA: SimpleVector2,
                       public readonly pointB: SimpleVector2) {
    }

    public get length(): number {
        return Vector2.dist(this.pointA, this.pointB);
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
}
