/**
 * Enum representing seven directions in 3D space.
 *
 * This enum extends the six directions (up, down, left, right, front, back)
 * with an additional CENTER value, which is useful for representing a neutral or no-movement state.
 *
 * @example
 * ```ts
 * // Set an object's direction based on input
 * function setDirection(input: UserInput): Direction7 {
 *   if (input.isIdle()) {
 *     return Direction7.CENTER;
 *   } else if (input.isMovingUp()) {
 *     return Direction7.UP;
 *   }
 *   // Handle other directions...
 * }
 * ```
 */
export const Direction7 = {
    UP: "UP",
    LEFT: "LEFT",
    CENTER: "CENTER",
    DOWN: "DOWN",
    RIGHT: "RIGHT",
    FRONT: "FRONT",
    BACK: "BACK",
};
export type Direction7 = (typeof Direction7)[keyof typeof Direction7];

/**
 * A mapping of Direction7 values to bit flags.
 *
 * This constant provides a bit representation for each direction in the Direction7 enum,
 * which is useful for efficiently storing and combining multiple directions.
 *
 * @example
 * ```ts
 * // Check if a direction is included in a combined direction
 * const combinedDirections = Direction7Bit[Direction7.UP] | Direction7Bit[Direction7.RIGHT];
 *
 * // Check if UP is included
 * const hasUpDirection = (combinedDirections & Direction7Bit[Direction7.UP]) !== 0;
 * ```
 */
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
 * Enum representing six directions in 3D space.
 *
 * This enum extends the four cardinal directions (up, down, left, right)
 * with two additional directions (front, back) for 3D navigation.
 *
 * @example
 * ```ts
 * // Move an object in 3D space
 * function moveObject(direction: Direction6, distance: number) {
 *   switch (direction) {
 *     case Direction6.UP:
 *       object.y += distance;
 *       break;
 *     case Direction6.FRONT:
 *       object.z += distance;
 *       break;
 *     // Handle other directions...
 *   }
 * }
 * ```
 */
export const Direction6 = {
    UP: "UP",
    LEFT: "LEFT",
    DOWN: "DOWN",
    RIGHT: "RIGHT",
    FRONT: "FRONT",
    BACK: "BACK",
};

export type Direction6 = (typeof Direction6)[keyof typeof Direction6];
/**
 * Enum representing the four cardinal directions.
 *
 * This enum provides constants for up, down, left, and right directions,
 * which are commonly used for navigation and movement in 2D space.
 *
 * @example
 * ```ts
 * // Move a character based on direction
 * function moveCharacter(direction: Direction4, distance: number) {
 *   switch (direction) {
 *     case Direction4.UP:
 *       character.y -= distance;
 *       break;
 *     case Direction4.DOWN:
 *       character.y += distance;
 *       break;
 *     // Handle other directions...
 *   }
 * }
 * ```
 */
export const Direction4 = {
    UP: "UP",
    LEFT: "LEFT",
    DOWN: "DOWN",
    RIGHT: "RIGHT",
};
export type Direction4 = (typeof Direction4)[keyof typeof Direction4];

/**
 * Contains UP, LEFT, DOWN, RIGHT, FRONT, BACK, CENTER
 */
export const Directions7: readonly Direction7[] = Object.freeze(Object.values(Direction7));
/**
 * Contains UP, LEFT, DOWN, RIGHT, FRONT, BACK
 */
export const Directions6: readonly Direction6[] = Object.freeze(Object.values(Direction6));
/**
 * Contains UP, LEFT, DOWN, RIGHT
 */
export const Directions4: readonly Direction4[] = Object.freeze(Object.values(Direction4));
