export function distance2dPointPoint(ax, ay, bx, by) {
    return Math.sqrt(distance2dPointPointSqr(ax, ay, bx, by));
}
export function distance2dPointPointSqr(ax, ay, bx, by) {
    const distX = ax - bx;
    const distY = ay - by;
    return distX * distX + distY * distY;
}
export function distance2dCircleCircle(ax, ay, ar, bx, by, br) {
    return Math.max(distance2dPointPoint(ax, ay, bx, by) - br - ar, 0);
}
export function distance2dCircleCircleSqr(ax, ay, ar, bx, by, br) {
    return Math.max(distance2dPointPointSqr(ax, ay, bx, by) - br - ar);
}
export function distance2dPointCircle(ax, ay, bx, by, br) {
    return Math.max(distance2dPointPoint(ax, ay, bx, by) - br, 0);
}
export function distance2dPointCircleSqr(ax, ay, bx, by, br) {
    return Math.max(distance2dPointPointSqr(ax, ay, bx, by) - br, 0);
}
export function distance2dPointLine(aX, aY, bX, bY, pX, pY) {
    return Math.sqrt(distance2dPointLineSqr(aX, aY, bX, bY, pX, pY));
}
export function distance2dPointLineSqr(aX, aY, bX, bY, pX, pY) {
    const A = pX - aX;
    const B = pY - aY;
    const C = bX - aX;
    const D = bY - aY;
    const dot = A * C + B * D;
    const lengthSquare = C * C + D * D;
    let param = -1;
    if (lengthSquare !== 0) {
        param = dot / lengthSquare;
    }
    let xx;
    let yy;
    if (param < 0) {
        xx = aX;
        yy = aY;
    }
    else if (param > 1) {
        xx = bX;
        yy = bY;
    }
    else {
        xx = aX + param * C;
        yy = aY + param * D;
    }
    const dx = pX - xx;
    const dy = pY - yy;
    return dx * dx + dy * dy;
}
//# sourceMappingURL=distances-2d.js.map