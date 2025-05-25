/**
 * @enum {string} Origin
 * Represents the origin points commonly used for alignment or positioning.
 *
 * The values correspond to abbreviations for different directions:
 * - `T` for Top
 * - `B` for Bottom
 * - `L` for Left
 * - `R` for Right
 * - `TR` for Top-Right
 * - `TL` for Top-Left
 * - `BR` for Bottom-Right
 * - `BL` for Bottom-Left
 * - `CENTER` for the Center
 */
export const Origin = {
    /** Top-Right origin point */
    TR: "TR",

    /** Center origin point */
    CENTER: "CENTER",

    /** Top-Left origin point */
    TL: "TL",

    /** Bottom-Right origin point */
    BR: "BR",

    /** Bottom-Left origin point */
    BL: "BL",

    /** Top origin point */
    T: "T",

    /** Left origin point */
    L: "L",

    /** Right origin point */
    R: "R",

    /** Bottom origin point */
    B: "B",
};

export type Origin = (typeof Origin)[keyof typeof Origin];
