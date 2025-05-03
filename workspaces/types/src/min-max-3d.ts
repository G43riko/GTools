import type { ReadonlySimpleVector3, SimpleVector3 } from "./simple-vector3.ts";

/**
 * Represents a 3D bounding box using individual min/max coordinates.
 *
 * This interface defines a 3D bounding box using six separate properties for the minimum
 * and maximum coordinates along each axis.
 *
 * @example
 * ```ts
 * const boundingBox: MinMaxFlat3D = {
 *   minX: 0, minY: 0, minZ: 0,
 *   maxX: 10, maxY: 20, maxZ: 30
 * };
 * ```
 */
export interface MinMaxFlat3D {
    /** Minimum X coordinate of the bounding box */
    minX: number;
    /** Minimum Y coordinate of the bounding box */
    minY: number;
    /** Minimum Z coordinate of the bounding box */
    minZ: number;
    /** Maximum X coordinate of the bounding box */
    maxX: number;
    /** Maximum Y coordinate of the bounding box */
    maxY: number;
    /** Maximum Z coordinate of the bounding box */
    maxZ: number;
}

/**
 * A readonly version of MinMaxFlat3D.
 *
 * Use this type when you want to ensure the bounding box cannot be modified.
 */
export type ReadonlyMinMaxFlat3D = Readonly<MinMaxFlat3D>;

/**
 * Represents a 3D bounding box using min/max vectors.
 *
 * This interface defines a 3D bounding box using two vectors: one for the minimum
 * corner and one for the maximum corner.
 *
 * @example
 * ```ts
 * const boundingBox: MinMax3D = {
 *   min: { x: 0, y: 0, z: 0 },
 *   max: { x: 10, y: 20, z: 30 }
 * };
 * ```
 */
export interface MinMax3D {
    /** The minimum corner of the bounding box */
    min: SimpleVector3;
    /** The maximum corner of the bounding box */
    max: SimpleVector3;
}

/**
 * A readonly version of MinMax3D.
 *
 * Use this type when you want to ensure the bounding box cannot be modified.
 *
 * @example
 * ```ts
 * function calculateVolume(box: ReadonlyMinMax3D): number {
 *   const width = box.max.x - box.min.x;
 *   const height = box.max.y - box.min.y;
 *   const depth = box.max.z - box.min.z;
 *   return width * height * depth;
 * }
 * ```
 */
export interface ReadonlyMinMax3D {
    /** The readonly minimum corner of the bounding box */
    readonly min: ReadonlySimpleVector3;
    /** The readonly maximum corner of the bounding box */
    readonly max: ReadonlySimpleVector3;
}
