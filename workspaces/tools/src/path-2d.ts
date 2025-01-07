import type { ReadonlySimpleVector2 } from "@g43/types";

export class Path2D<T extends ReadonlySimpleVector2> {
    public constructor(protected readonly points: readonly T[]) {
        if (points.length < 2) {
            throw new Error("Cannot create path with less than 2 points");
        }
    }

    public getFirstN(count: number): readonly ReadonlySimpleVector2[] {
        return this.points.slice(0, count);
    }

    public getLastN(count: number): readonly ReadonlySimpleVector2[] {
        return this.points.slice(this.points.length - count, this.points.length);
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
