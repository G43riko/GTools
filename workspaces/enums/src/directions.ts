/**
 * Same as {@link Direction6} bud with extra 'CENTER' value
 */
export enum Direction7 {
    UP = "UP",
    LEFT = "LEFT",
    CENTER = "CENTER",
    DOWN = "DOWN",
    RIGHT = "RIGHT",
    FRONT = "FRONT",
    BACK = "BACK",
}

export const Direction7Bit: Readonly<Record<Direction7, number>> = Object.freeze({
    [Direction7.UP]: 0b1000000,
    [Direction7.LEFT]: 0b0100000,
    [Direction7.CENTER]: 0b0010000,
    [Direction7.DOWN]: 0b0001000,
    [Direction7.RIGHT]: 0b0000100,
    [Direction7.FRONT]: 0b0000010,
    [Direction7.BACK]: 0b0000001,
});

/**
 * Same as {@link Direction4} bud with extra 'FRONT' and 'BACK' values
 */
export enum Direction6 {
    UP = "UP",
    LEFT = "LEFT",
    DOWN = "DOWN",
    RIGHT = "RIGHT",
    FRONT = "FRONT",
    BACK = "BACK",
}

export enum Direction4 {
    UP = "UP",
    LEFT = "LEFT",
    DOWN = "DOWN",
    RIGHT = "RIGHT",
}

/**
 * Contains UP, LEFT, DOWN, RIGHT, FRONT, BACK, CENTER
 */
export const Directions7: readonly Direction7[] = Object.values(Direction7);
/**
 * Contains UP, LEFT, DOWN, RIGHT, FRONT, BACK
 */
export const Directions6: readonly Direction6[] = Object.values(Direction6);
/**
 * Contains UP, LEFT, DOWN, RIGHT
 */
export const Directions4: readonly Direction4[] = Object.values(Direction4);
