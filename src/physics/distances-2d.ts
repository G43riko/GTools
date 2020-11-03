export function pointPoint2dDistance(ax: number, ay: number, bx: number, by: number): number {
    return Math.sqrt(pointPointSqr2dDistance(ax, ay, bx, by));
}

export function pointPointSqr2dDistance(ax: number, ay: number, bx: number, by: number): number {
    const distX = ax - bx;
    const distY = ay - by;

    return distX * distX + distY * distY;
}

export function circleCircle2dDistance(
    ax: number,
    ay: number,
    ar: number,
    bx: number,
    by: number,
    br: number,
): number {
    return Math.max(pointPoint2dDistance(ax, ay, bx, by) - br - ar, 0);
}

export function circleCircleSqr2dDistance(
    ax: number,
    ay: number,
    ar: number,
    bx: number,
    by: number,
    br: number,
): number {
    return Math.max(pointPointSqr2dDistance(ax, ay, bx, by) - br - ar);
}

export function pointCircle2dDistance(
    ax: number,
    ay: number,
    bx: number,
    by: number,
    br: number,
): number {
    return Math.max(pointPoint2dDistance(ax, ay, bx, by) - br, 0);
}

export function pointCircleSqr2dDistance(
    ax: number,
    ay: number,
    bx: number,
    by: number,
    br: number,
): number {
    return Math.max(pointPointSqr2dDistance(ax, ay, bx, by) - br, 0);
}

export function pointLine2dDistance(
    aX: number,
    aY: number,
    bX: number,
    bY: number,
    pX: number,
    pY: number,
): number {
    return Math.sqrt(pointLineSqr2dDistance(aX, aY, bX, bY, pX, pY));
}

export function pointLineSqr2dDistance(
    aX: number,
    aY: number,
    bX: number,
    bY: number,
    pX: number,
    pY: number,
): number {
    const A = pX - aX;
    const B = pY - aY;
    const C = bX - aX;
    const D = bY - aY;

    const dot          = A * C + B * D;
    const lengthSquare = C * C + D * D;
    let param          = -1;
    if (lengthSquare !== 0) {
        param = dot / lengthSquare;
    }

    let xx: number;
    let yy: number;

    if (param < 0) {
        xx = aX;
        yy = aY;
    } else if (param > 1) {
        xx = bX;
        yy = bY;
    } else {
        xx = aX + param * C;
        yy = aY + param * D;
    }

    const dx = pX - xx;
    const dy = pY - yy;

    return dx * dx + dy * dy;
}


