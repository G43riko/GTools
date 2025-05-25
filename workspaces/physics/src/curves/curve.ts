/**
 * TODO:
 * - add caching to size calculation
 */
export abstract class Curve<T> {
    public readonly points: readonly T[];
    public readonly length: number;

    public constructor(
        points: readonly T[],
    ) {
        this.points = points;
        this.length = points.length;
    }

    public getPoint(index: number): T {
        return this.points[index];
    }

    // public abstract getSize(): number;
    //
    // public abstract getLerpPointAt(value: number): A;

    public abstract getPointAt(t: number): T;

    public getPointAtArc(value: number): T {
        return this.getPointAt(value);
    }

    public getPoints(divisions = 5): readonly T[] {
        const result = new Array<T>(divisions);

        for (let i = 0; i <= divisions; i++) {
            result[i] = this.getPointAtArc(i / divisions);
        }

        return result;
    }
}
