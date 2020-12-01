export function pointLine2dClosest(sx1, sy1, sx2, sy2, px, py) {
    var xDelta = sx2 - sx1;
    var yDelta = sy2 - sy1;
    var u = ((px - sx1) * xDelta + (py - sy1) * yDelta) / (xDelta * xDelta + yDelta * yDelta);
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
//# sourceMappingURL=closest-2d.js.map