import { ReadonlySimpleVector3 } from "../math";

export enum Direction7 {
    UP     = "UP",
    LEFT   = "LEFT",
    CENTER = "CENTER",
    DOWN   = "DOWN",
    RIGHT  = "RIGHT",
    FRONT  = "FRONT",
    BACK   = "BACK",
}

export enum Direction6 {
    UP    = "UP",
    LEFT  = "LEFT",
    DOWN  = "DOWN",
    RIGHT = "RIGHT",
    FRONT = "FRONT",
    BACK  = "BACK",
}

// tslint:disable:variable-name
export const Directions7 = Object.values(Direction7);
export const Directions6 = Object.values(Direction6);

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
