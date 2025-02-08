import { SimpleVector, Vector2 } from "@g43/math";
import type { ReadonlySimpleVector2, ReadonlySimpleVector3 } from "@g43/types";
import { Direction4, Direction6, Direction7 } from "@g43/enums";

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
 * { x: 0, y: 1 } => UP;
 * { x: 0, y: -1 } => DOWN;
 * { x: 1, y: 0 } => RIGHT;
 * { x: -1, y: 0 } => LEFT;
 * @param vec
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

export function getAdjacentPositionBy(
    position: ReadonlySimpleVector3,
    direction: Direction7,
    offset = 1,
): ReadonlySimpleVector3 {
    return getAdjacentPositionByData(position.x, position.y, position.z, direction, offset);
}

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

export function Vector3ToDirection7(vec: ReadonlySimpleVector3): Direction7 {
    if (vec.x * vec.y + vec.y * vec.z + vec.x * vec.z !== 0) {
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
