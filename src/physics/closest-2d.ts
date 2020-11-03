export function pointLine2dClosest(
    sx1: number,
    sy1: number,
    sx2: number,
    sy2: number,
    px: number,
    py: number,
): { x: number, y: number } {
    const xDelta = sx2 - sx1;
    const yDelta = sy2 - sy1;

    const u = ((px - sx1) * xDelta + (py - sy1) * yDelta) / (xDelta * xDelta + yDelta * yDelta);

    if (u < 0) {
        return {
            x: sx1,
            y: sy1,
        };
    }

    if (u > 1) {
        return {
            x: sx2,
            y: sy2,
        };
    }

    return {
        x: sx1 + u * xDelta,
        y: sy1 + u * yDelta,
    };
}

