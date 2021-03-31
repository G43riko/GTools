import { pointPoint2dDistance } from "./distances-2d";

export function circleRect2dCollision(
    cPosX: number,
    cPosY: number,
    cRadius: number,
    rPosX: number,
    rPosY: number,
    rSizeX: number,
    rSizeY: number,
): boolean {
    const circleDistanceX = Math.abs(cPosX - rPosX);
    const circleDistanceY = Math.abs(cPosY - rPosY);

    if (circleDistanceX > rSizeX / 2 + cRadius) {
        return false;
    }
    if (circleDistanceY > rSizeY / 2 + cRadius) {
        return false;
    }

    if (circleDistanceX <= rSizeX / 2) {
        return true;
    }
    if (circleDistanceY <= rSizeY / 2) {
        return true;
    }

    const cornerDistanceSQ =
              Math.pow(circleDistanceX - rPosX / 2, 2) +
              Math.pow(circleDistanceY - rPosY / 2, 2);

    return cornerDistanceSQ <= Math.pow(cRadius, 2);
}

export function lineRectangle2dCollision(
    aStartX: number,
    aStartY: number,
    aEndX: number,
    aEndY: number,
    bPosX: number,
    bPosY: number,
    bSizeX: number,
    bSizeY: number,
): boolean {
    return pointRect2dCollision(aStartX, aStartY, bPosX, bPosY, bSizeX, bSizeY) ||
        pointRect2dCollision(aEndX, aEndY, bPosX, bPosY, bSizeX, bSizeY) ||
        lineLine2dCollision(aStartX,
            aStartY,
            aEndX,
            aEndY,
            bPosX,
            bPosY,
            bPosX + bSizeX,
            bPosY + bSizeY) ||
        lineLine2dCollision(aStartX,
            aStartY,
            aEndX,
            aEndY,
            bPosX + bSizeX,
            bPosY,
            bPosX,
            bPosY + bSizeY);

}

export function lineLine2dCollision(
    aStartX: number,
    aStartY: number,
    aEndX: number,
    aEndY: number,
    bStartX: number,
    bStartY: number,
    bEndX: number,
    bEndY: number,
): boolean {

    const denominator = (aEndX - aStartX) * (bEndY - bStartY) - (aEndY - aStartY) * (bEndX - bStartX);
    const numerator1  = (aStartY - bStartY) * (bEndX - bStartX) - (aStartX - bStartX) * (bEndY - bStartY);
    const numerator2  = (aStartY - bStartY) * (aEndX - aStartX) - (aStartX - bStartX) * (aEndY - aStartY);

    // Detect coincident lines (contains a problem, read below)
    if (denominator === 0) {
        return numerator1 === 0 && numerator2 === 0;
    }

    const r = numerator1 / denominator;
    const s = numerator2 / denominator;

    return r >= 0 && r <= 1 && (s >= 0 && s <= 1);
}

/**
 * @returns true if the line from (a,b)->(c,d) lineLine2dIntersect with (p,q)->(r,s)
 */
export function lineLine2dCollision2(
    a: number,
    b: number,
    c: number,
    d: number,
    p: number,
    q: number,
    r: number,
    s: number,
): boolean {
    const det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
        return false;
    }

    const lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    const gamma  = ((b - d) * (r - a) + (c - a) * (s - b)) / det;

    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
}

export function rectRect2dCollision(
    ax: number,
    ay: number,
    aw: number,
    ah: number,
    bx: number,
    by: number,
    bw: number,
    bh: number,
): boolean {
    return bx + bw >= ax && by + bh >= ay && bx <= ax + aw && by <= ay + ah;
}

export function circleCircle2dCollision(
    aX: number,
    aY: number,
    aRadius: number,
    bX: number,
    bY: number,
    bRadius: number,
): boolean {
    return pointPoint2dDistance(aX, aY, bX, bY) <= aRadius + bRadius;
}

export function pointRect2dCollision(
    pointX: number,
    pointY: number,
    rectX: number,
    rectY: number,
    rectW: number,
    rectH: number,
): boolean {
    return pointX >= rectX &&
        pointY >= rectY &&
        pointX <= rectX + rectW &&
        pointY <= rectY + rectH;
}

export function pointRectMinMax2dCollision(
    pointX: number,
    pointY: number,
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
): boolean {
    return pointX >= minX &&
        pointY >= minY &&
        pointX <= maxX &&
        pointY <= maxY;
}

export function pointCircle2dCollision(
    pointX: number,
    pointY: number,
    circleX: number,
    circleY: number,
    circleRadius: number,
): boolean {
    return pointPoint2dDistance(pointX, pointY, circleX, circleY) <= circleRadius;
}

export function pointPolygon2dCollision2(x: number, y: number, vs: [number, number][]): boolean {
    let inside = false;
    let i = 0;
    let j = vs.length - 1;
    for (; i < vs.length; j = i++) {
        const xi = vs[i][0];
        const yi = vs[i][1];
        const xj = vs[j][0];
        const yj = vs[j][1];

        const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) {
            inside = !inside;
        }
    }

    return inside;
}

export function pointMultiPolygon2dCollision(
    pointX: number,
    pointY: number,
    polys: [number, number][][],
    ignoreBoundary = false,
): boolean {
    const multipolygon = [polys];
    const pt           = [pointX, pointY];
    let insidePoly     = false;
    for (let i = 0; i < multipolygon.length && !insidePoly; i++) {
        // check if it is not in the outer ring first
        // tslint:disable-next-line:early-exit
        if (pointPolygon2dCollision(pt, multipolygon[i][0], ignoreBoundary)) {
            let inHole = false;
            // for(let k=1; k < k < multipolygon[i].length && !inHole; k++) {
            //
            // }
            let k = 1;
            while (k < multipolygon[i].length && !inHole) {
                if (pointPolygon2dCollision(pt, multipolygon[i][k], !ignoreBoundary)) {
                    inHole = true;
                }
                k++;
            }
            if (!inHole) {
                insidePoly = true;
            }
        }
    }

    return insidePoly;
}

/**
 * pointPolygon2dCollision
 *
 * @private
 * @param {Array<number>} pt [x,y]
 * @param {Array<Array<number>>} ring [[x,y], [x,y],..]
 * @param {boolean} ignoreBoundary ignoreBoundary
 * @returns {boolean} inRing
 */
export function pointPolygon2dCollision(pt: number[], ring: number[][], ignoreBoundary: boolean): boolean {
    let isInside = false;
    if (
        ring[0][0] === ring[ring.length - 1][0] &&
        ring[0][1] === ring[ring.length - 1][1]
    ) {
        ring = ring.slice(0, ring.length - 1);
    }
    // tslint:disable-next-line:one-variable-per-declaration
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const xi         = ring[i][0];
        const yi         = ring[i][1];
        const xj         = ring[j][0];
        const yj         = ring[j][1];
        const onBoundary = pt[1] * (xi - xj) + yi * (xj - pt[0]) + yj * (pt[0] - xi) === 0 && (xi - pt[0]) * (xj - pt[0]) <= 0 && (yi - pt[1]) * (yj - pt[1]) <= 0;
        if (onBoundary) {
            return !ignoreBoundary;
        }
        const intersect = yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi;
        if (intersect) {
            isInside = !isInside;
        }
    }

    return isInside;
}
