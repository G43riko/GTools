import { MinMax2D, PosSize2D, ReadonlyMinMax2D, ReadonlyPosSize2D } from "../../types";

export function convertMinMaxToPosSize2D({ min, max }: ReadonlyMinMax2D): PosSize2D {
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

export function convertPosSizeToMinMax2D({ position, size }: ReadonlyPosSize2D): MinMax2D {
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
