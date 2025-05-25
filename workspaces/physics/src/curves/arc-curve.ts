import type { ReadonlySimpleVector2 } from "@g43/types";

const PI2 = Math.PI * 2;

export class ArcCurve {
    public readonly x: number;
    public readonly y: number;
    public readonly radiusX: number;
    public readonly radiusY: number;
    public readonly startAngle: number;
    public readonly endAngle: number;
    public readonly clockwise: boolean;
    public readonly rotation: number;
    public constructor(
        x = 0,
        y = 0,
        radiusX = 1,
        radiusY = 1,
        startAngle = 0,
        endAngle = PI2,
        clockwise = false,
        rotation = 0,
    ) {
        this.x = x;
        this.y = y;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.clockwise = clockwise;
        this.rotation = rotation;
    }

    public getPoint(t: number): ReadonlySimpleVector2 {
        let deltaAngle = this.endAngle - this.startAngle;
        const samePoints = Math.abs(deltaAngle) < Number.EPSILON;

        // ensures that deltaAngle is 0 .. 2 PI
        while (deltaAngle < 0) {
            deltaAngle += PI2;
        }
        while (deltaAngle > PI2) {
            deltaAngle -= PI2;
        }
        if (deltaAngle < Number.EPSILON) {
            if (samePoints) {
                deltaAngle = 0;
            } else {
                deltaAngle = PI2;
            }
        }

        if (this.clockwise === true && !samePoints) {
            if (deltaAngle === PI2) {
                deltaAngle = -PI2;
            } else {
                deltaAngle -= PI2;
            }
        }

        const angle = this.startAngle + t * deltaAngle;
        let x = this.x + this.radiusX * Math.cos(angle);
        let y = this.y + this.radiusY * Math.sin(angle);

        if (this.rotation !== 0) {
            const cos = Math.cos(this.rotation);
            const sin = Math.sin(this.rotation);

            const tx = x - this.x;
            const ty = y - this.y;

            // Rotate the point about the center of the ellipse.
            x = tx * cos - ty * sin + this.x;
            y = tx * sin + ty * cos + this.y;
        }

        return { x, y };
    }
}
