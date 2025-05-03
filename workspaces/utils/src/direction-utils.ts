import { Direction4, Direction6, Direction7 } from "@g43/enums";
import { SimpleVector, Vector2 } from "@g43/math";
import type { ReadonlySimpleVector2, ReadonlySimpleVector3 } from "@g43/types";

/**
 * Returns the opposite direction for a given Direction6 enumerated value.
 *
 * @param {Direction6} direction - The original direction for which the opposite is to be determined.
 * Can be one of: Direction6.UP, Direction6.DOWN, Direction6.LEFT, Direction6.RIGHT, Direction6.FRONT, Direction6.BACK.
 * @returns {Direction6} The opposite direction corresponding to the given input direction.
 */
export function getOppositeDirection6(direction: Direction6): Direction6 {
    switch (direction) {
        case Direction6.DOWN:
            return Direction6.UP;
        case Direction6.LEFT:
            return Direction6.RIGHT;
        case Direction6.RIGHT:
            return Direction6.LEFT;
        case Direction6.UP:
            return Direction6.DOWN;
        case Direction6.FRONT:
            return Direction6.BACK;
        case Direction6.BACK:
            return Direction6.FRONT;
    }
}

/**
 * Returns the opposite direction of the given cardinal direction.
 *
 * @param {Direction4} direction - The input direction. Must be one of the values in the `Direction4` enum.
 * @returns {Direction4} The opposite direction of the input direction.
 */
export function getOppositeDirection4(direction: Direction4): Direction4 {
    switch (direction) {
        case Direction4.DOWN:
            return Direction4.UP;
        case Direction4.LEFT:
            return Direction4.RIGHT;
        case Direction4.RIGHT:
            return Direction4.LEFT;
        case Direction4.UP:
            return Direction4.DOWN;
    }
}

const vectors4 = [Vector2.LEFT, Vector2.RIGHT, Vector2.UP, Vector2.DOWN];
const directions4 = [Direction4.LEFT, Direction4.RIGHT, Direction4.UP, Direction4.DOWN];

/**
 * Calculates the adjacent position in a 3D space based on a given direction and offset.
 *
 * @param {number} x The x-coordinate of the original position.
 * @param {number} y The y-coordinate of the original position.
 * @param {number} z The z-coordinate of the original position.
 * @param {Direction7} direction The direction in which the adjacent position is calculated. Must be one of the predefined directions in Direction7.
 * @param {number} [offset=1] The distance or offset to move in the specified direction. Defaults to 1.
 * @returns {ReadonlySimpleVector3} The calculated adjacent position as a readonly vector.
 * @throws {Error} If the specified direction is not valid.
 */
export function getAdjacentPositionByData(
    x: number,
    y: number,
    z: number,
    direction: Direction7,
    offset = 1,
): ReadonlySimpleVector3 {
    switch (direction) {
        case Direction7.UP:
            return SimpleVector.create3(x, y + offset, z);
        case Direction7.DOWN:
            return SimpleVector.create3(x, y - offset, z);
        case Direction7.RIGHT:
            return SimpleVector.create3(x + offset, y, z);
        case Direction7.LEFT:
            return SimpleVector.create3(x - offset, y, z);
        case Direction7.FRONT:
            return SimpleVector.create3(x, y, z - offset);
        case Direction7.BACK:
            return SimpleVector.create3(x, y, z + offset);
        /**
         * TODO: add warning or somethings here
         */
        case Direction7.CENTER:
            return SimpleVector.create3(x, y, z);
        default:
            throw new Error(`Invalid direction '${direction}'`);
    }
}

/**
 * Calculates the adjacent position in a specified direction and offset from a given position.
 *
 * @param {ReadonlySimpleVector3} position - The starting position as a readonly vector object.
 * @param {Direction7} direction - The direction to determine the adjacent position.
 * @param {number} [offset=1] - The distance or steps from the starting position in the given direction. Defaults to 1 if not provided.
 * @returns {ReadonlySimpleVector3} The calculated adjacent position.
 */
export function getAdjacentPositionBy(
    position: ReadonlySimpleVector3,
    direction: Direction7,
    offset = 1,
): ReadonlySimpleVector3 {
    return getAdjacentPositionByData(position.x, position.y, position.z, direction, offset);
}

/**
 * Converts a 4-directional input into a 2D vector representation.
 *
 * @param {Direction4} direction - The directional input, which can be one of the four cardinal directions: LEFT, RIGHT, UP, or DOWN.
 * @returns {Vector2} A 2D vector corresponding to the given direction.
 * @throws {Error} If the provided direction is not recognized.
 **/
export function direction4ToVector2(direction: Direction4): Vector2 {
    switch (direction) {
        case Direction4.LEFT:
            return Vector2.LEFT;
        case Direction4.RIGHT:
            return Vector2.RIGHT;
        case Direction4.UP:
            return Vector2.UP;
        case Direction4.DOWN:
            return Vector2.DOWN;
        default:
            throw new Error(`Unknown direction '${direction}'`);
    }
}

/**
 * Converts a 3D vector into a corresponding direction in the Direction7 enum.
 *
 * @param {ReadonlySimpleVector3} vec - A readonly object representing a vector in 3D space with x, y, and z components.
 * @returns {Direction7} A direction from the Direction7 enum corresponding to the input vector.
 */
export function Vector3ToDirection7(vec: ReadonlySimpleVector3): Direction7 {
    if (vec.x === 0 && vec.y === 0 && vec.z === 0) {
        // if (vec.x * vec.y + vec.y * vec.z + vec.x * vec.z !== 0) {
        return Direction7.CENTER;
    }
    if (vec.x === 0) {
        if (vec.z === 0) {
            return vec.y > 0 ? Direction7.UP : Direction7.DOWN;
        }

        return vec.z > 0 ? Direction7.BACK : Direction7.FRONT;
    }

    return vec.x > 0 ? Direction7.RIGHT : Direction7.LEFT;
}

/**
 * Converts a given 2D vector into the closest corresponding direction from a set of predefined directions.
 *
 * { x: 0, y: 1 } => UP;
 * { x: 0, y: -1 } => DOWN;
 * { x: 1, y: 0 } => RIGHT;
 * { x: -1, y: 0 } => LEFT;
 * @param {ReadonlySimpleVector2} vec - A 2D vector that will be converted to the nearest predefined direction.
 * @returns {Direction4} The direction that best matches the given vector based on the dot product.
 */
export function vector2ToDirection4(vec: ReadonlySimpleVector2): Direction4 {
    let max = -Number.MAX_VALUE;
    let maxIndex = -1;
    for (let i = 0; i < vectors4.length; i++) {
        if (vectors4[i].dot(vec) > max) {
            max = vectors4[i].dot(vec);
            maxIndex = i;
        }
    }

    return directions4[maxIndex];
}
