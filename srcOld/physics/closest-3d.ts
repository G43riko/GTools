import { SimpleVector3 } from "../math";

export function getClosestPointOnLine(
    sx1: number,
    sy1: number,
    sz1: number,
    sx2: number,
    sy2: number,
    sz2: number,
    px: number,
    py: number,
    pz: number,
): SimpleVector3 {
    const xDelta = sx2 - sx1;
    const yDelta = sy2 - sy1;
    const zDelta = sz2 - sz1;

    let u = (px - sx1) * xDelta + (py - sy1) * yDelta + (pz - sz1) * zDelta;
    u /= xDelta * xDelta + yDelta * yDelta + zDelta * zDelta;

    if (u < 0) {
        return {
            x: sx1,
            y: sy1,
            z: sz1,
        };
    }
    if (u > 1) {
        return {
            x: sx2,
            y: sy2,
            z: sz2,
        };
    }

    return {
        x: sx1 + u * xDelta,
        y: sy1 + u * yDelta,
        z: sz1 + u * zDelta,
    };
}
