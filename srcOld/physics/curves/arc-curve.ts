import { ReadonlySimpleVector2 } from "../../math";

const PI2 = Math.PI * 2;

export class ArcCurve {
    public constructor(
        public readonly x = 0,
        public readonly y = 0,
        public readonly radiusX = 1,
        public readonly radiusY = 1,
        public readonly startAngle = 0,
        public readonly endAngle = PI2,
        public readonly clockwise = false,
        public readonly rotation = 0,
    ) {
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
                deltaAngle = deltaAngle - PI2;
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
