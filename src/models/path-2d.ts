import { SimpleVector2 } from "gtools/math";

export class Path2D<T extends SimpleVector2> {
    public constructor(protected readonly points: readonly T[]) {
        if (points.length < 2) {
            throw new Error("Cannot create path with less than 2 points");
        }
    }

    public get length(): number {
        return this.points.length;
    }

    public get first(): T {
        return this.points[0];
    }

    public get last(): T {
        return this.points[this.points.length - 1];
    }

    public getPoint(index: number): T {
        return this.points[index];
    }
}
