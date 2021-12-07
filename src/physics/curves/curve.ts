/**
 * TODO:
 *   - add caching to size calculation
 */
export abstract class Curve<T> {
    public get length(): number {
        return this.points.length;
    }

    public constructor(
        public readonly points: readonly T[],
    ) {
    }

    public getPoint(index: number): T {
        return this.points[index];
    }
    // public abstract getSize(): number;
    //
    // public abstract getLerpPointAt(value: number): T;

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
