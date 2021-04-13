import { MinMax2D, PosSize2d } from "../../types";

export function convertMinMaxToPosSize({min, max}: MinMax2D): PosSize2d {
    return {
        position: {
            x: min.x,
            y: min.y,
        },
        size: {
            x: max.x - min.x,
            y: max.y - min.y,
        },
    };
}
export function convertPosSizeToMinMax({position, size}: PosSize2d): MinMax2D {
    return {
        min: {
            x: position.x,
            y: position.y,
        },
        max: {
            x: position.x + size.x,
            y: position.y + size.y,
        },
    };
}
