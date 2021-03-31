export function getClosestPointOnLine(sx1, sy1, sz1, sx2, sy2, sz2, px, py, pz) {
    var xDelta = sx2 - sx1;
    var yDelta = sy2 - sy1;
    var zDelta = sz2 - sz1;
    var u = ((px - sx1) * xDelta + (py - sy1) * yDelta + (pz - sz1) * zDelta);
    u /= (xDelta * xDelta + yDelta * yDelta + zDelta * zDelta);
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
//# sourceMappingURL=closest-3d.js.map