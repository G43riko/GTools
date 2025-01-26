import { SimpleVector, Vector2 } from "@g43/math";
import type { MinMax2D, ReadonlySimpleVector2 } from "@g43/types";
import type { Object2D } from "./object-2d.ts";

/**
 * https://github.com/schteppe/p2.js/blob/master/src/shapes/Line.js
 */
export class Line2D implements Object2D {
    public readonly points: readonly [pointA: ReadonlySimpleVector2, pointB: ReadonlySimpleVector2];
    public readonly direction: ReadonlySimpleVector2;

    public constructor(
        public readonly pointA: ReadonlySimpleVector2,
        public readonly pointB: ReadonlySimpleVector2,
    ) {
        this.direction = SimpleVector.createReadonly2(
            this.pointB.x - this.pointA.x,
            this.pointB.y - this.pointA.y
        )
        this.points = [
            this.pointA,
            this.pointB,
        ]
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

    public get boundingRadius(): number {
        return this.length / 2;
    }

    public static fromArray(array: [start: ReadonlySimpleVector2, end: ReadonlySimpleVector2]): Line2D {
        return new Line2D(array[0], array[1]);
    }

    public static fromPoints(aX: number, aY: number, bX: number, bY: number): Line2D {
        return new Line2D(
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

    /**
     * Returns the clip point
     * @param sideVector Vector that traces the line
     * @param length Length to clip along side
     */
    public clip(sideVector: ReadonlySimpleVector2, length: number): Line2D | undefined {
        let dir = sideVector;
        dir = Vector2.normalize(dir);

        const near = Vector2.dot(dir, this.pointA) - length;
        const far = Vector2.dot(dir, this.pointB) - length;

        const results = [];
        if (near <= 0) {
            results.push(this.pointA);
        }
        if (far <= 0) {
            results.push(this.pointB);
        }

        if (near * far < 0) {
            const clipTime = near / (near - far);
            results.push(Vector2.sum(this.pointA, this.getDirection().mulNum(clipTime)));
        }
        if (results.length !== 2) {
            return;
        }

        return new Line2D(results[0], results[1]);
    }

    public below(point: ReadonlySimpleVector2): boolean {
        const above2 = (this.pointB.x - this.pointA.x) * (point.y - this.pointA.y) -
            (this.pointB.y - this.pointA.y) * (point.x - this.pointA.x);

        return above2 >= 0;
    }

    public getDirection(result: Vector2 = new Vector2()): Vector2 {
        return Vector2.sub(this.pointB, this.pointA, result);
    }

    public getPoints(): ReadonlySimpleVector2[] {
        return [this.pointA, this.pointB];
    }

    public getNormal(result: Vector2 = new Vector2()): Vector2 {
        return Vector2.normalize(this.getDirection(result).perpendicular(), result);
    }

    public get momentOfInertia(): number {
        return this.length ** 2 / 12;
    }

    public toMinMax(): MinMax2D {
        return {
            min: Vector2.min(this.pointA, this.pointB),
            max: Vector2.max(this.pointA, this.pointB),
        };
    }
}
