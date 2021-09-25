import { ReadonlySimpleVector2, Vector2 } from "../../math";
import { Curve2D } from "./curve-2d";

export class LineCurve2d extends Curve2D {
    public getSize(): number {
        if (this.points.length < 2) {
            return 0;
        }
        let sum = 0;
        for (let i = 1; i < this.points.length; i++) {
            sum += Vector2.dist(this.points[i - 1], this.points[i]);
        }

        return sum;
    }

    public getPointAt(value: number): ReadonlySimpleVector2 {
        if (value < 0 || value > 1) {
            throw new Error("Value must be between 1 and 0");
        }
        if (value === 0) {
            return this.points[0];
        }
        if (value === 1) {
            return this.points[this.points.length - 1];
        }

        const curveLength = this.getSize();

        const valueLenght = value * curveLength;

        let prevLength = 0;
        let currLength = 0;
        let i          = 1;
        for (; ;) {
            prevLength = currLength;
            currLength += Vector2.dist(this.points[i - 1], this.points[i]);
            if (currLength === valueLenght) {
                return this.points[i];
            }

            if (currLength > valueLenght) {
                break;
            }
            if (i + 1 === this.points.length) {
                break;
            }
            i++;
        }
        const prevPoint = this.points[i - 1];
        const currPoint = this.points[i];

        const prevRatio = prevLength / curveLength;
        const currRatio = currLength / curveLength;

        const valueNormalized     = value - prevRatio;
        const currRatioNormalized = currRatio - prevRatio;
        const ratio               = valueNormalized / currRatioNormalized;

        return this.lerp(prevPoint, currPoint, ratio);
    }

    public getPointAtArc(value: number): ReadonlySimpleVector2 {
        return this.getPointAt(value);
    }

    public getPointAtLinear(value: number): ReadonlySimpleVector2 {
        if (value < 0 || value > 1) {
            throw new Error("Value must be between 1 and 0");
        }
        if (value === 0) {
            return this.points[0];
        }
        if (value === 1) {
            return this.points[this.points.length - 1];
        }

        const point = (this.points.length - 1) * value;

        const i1 = Math.floor(point);
        const i2 = Math.ceil(point);

        if (i1 === i2) {
            return this.points[point];
        }

        if (i2 >= this.points.length) {
            return this.points[this.points.length - 1];
        }
        const step      = 1 / (this.points.length - 1);
        const realStep  = value - step * i1;
        const realValue = Math.max(0, Math.min(1, realStep * this.points.length));

        const point1 = this.points[i1];
        const point2 = this.points[i2];

        return this.lerp(point1, point2, realValue);
    }

}
