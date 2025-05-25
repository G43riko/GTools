/**
 * Represents mouse button identifiers.
 *
 * @enum {number}
 */
export const Button = {
    /** Left mouse button */
    LEFT: 0,
    /** Middle mouse button (usually the scroll wheel) */
    MIDDLE: 1,
    /** Right mouse button */
    RIGHT: 2,
    /** Back button (often found on the side of the mouse) */
    BACK: 3,
    /** Forward button (often found on the side of the mouse) */
    FORWARD: 4,
    /** Represents an unknown or unrecognized button */
    UNKNOWN: -1,
    /** Indicates no button was pressed */
    NO_BUTTON: -2,
};
export type Button = (typeof Button)[keyof typeof Button];
