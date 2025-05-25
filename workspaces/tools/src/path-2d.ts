import type { ReadonlySimpleVector2 } from "@g43/types";

/**
 * A class representing a 2D path made up of points (vectors).
 *
 * This class provides methods to access parts of the path or specific points.
 * A path must contain at least 2 points.
 *
 * @template T - The type of points in the path, must extend ReadonlySimpleVector2
 */
export class Path2D<T extends ReadonlySimpleVector2 = ReadonlySimpleVector2> {
    protected readonly points: readonly T[];
    /**
     * Creates a new Path2D instance.
     *
     * @param points - An array of points that make up the path
     * @throws {Error} If the points array contains fewer than 2 points
     */
    public constructor(points: readonly T[]) {
        if (points.length < 2) {
            throw new Error("Cannot create path with less than 2 points");
        }
        this.points = points;
    }

    /**
     * Gets the first N points from the path.
     *
     * @param count - The number of points to retrieve
     * @returns An array containing the first N points
     */
    public getFirstN(count: number): T[] {
        return this.points.slice(0, count);
    }

    /**
     * Gets all points starting from the specified index.
     *
     * @param index - The starting index
     * @returns An array containing all points from the specified index to the end
     */
    public getFrom(index: number): T[] {
        return this.points.slice(index);
    }

    /**
     * Gets the last N points from the path.
     *
     * @param count - The number of points to retrieve
     * @returns An array containing the last N points
     */
    public getLastN(count: number): T[] {
        return this.points.slice(this.points.length - count, this.points.length);
    }

    /**
     * Gets the total number of points in the path.
     *
     * @returns The number of points
     */
    public get length(): number {
        return this.points.length;
    }

    /**
     * Gets the first point in the path.
     *
     * @returns The first point
     */
    public get first(): T {
        return this.points[0];
    }

    /**
     * Gets the last point in the path.
     *
     * @returns The last point
     */
    public get last(): T {
        return this.points[this.points.length - 1];
    }

    /**
     * Gets a specific point from the path by index.
     *
     * @param index - The index of the point to retrieve
     * @returns The point at the specified index
     */
    public getPoint(index: number): T {
        return this.points[index];
    }
}
