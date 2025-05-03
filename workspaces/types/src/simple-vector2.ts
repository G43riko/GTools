/**
 * Represents a simple 2D vector with x and y coordinates.
 *
 * This interface provides a basic structure for representing points or vectors in 2D space.
 *
 * @example
 * ```ts
 * const point: SimpleVector2 = { x: 10, y: 20 };
 * ```
 */
export interface SimpleVector2 {
    /** The x-coordinate of the vector */
    x: number;
    /** The y-coordinate of the vector */
    y: number;
}

/**
 * A readonly version of SimpleVector2.
 *
 * Use this type when you want to ensure the vector cannot be modified.
 *
 * @example
 * ```ts
 * function calculateDistance(point: ReadonlySimpleVector2): number {
 *   return Math.sqrt(point.x * point.x + point.y * point.y);
 * }
 * ```
 */
export type ReadonlySimpleVector2 = Readonly<SimpleVector2>;
