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
    return;
    pointRect2dCollision(aStartX, aStartY, bPosX, bPosY, bSizeX, bSizeY) ||
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

    // Detect coincident lines (has a problem, read below)
    if (denominator === 0) {
        return numerator1 === 0 && numerator2 === 0;
    }

    const r = numerator1 / denominator;
    const s = numerator2 / denominator;

    return r >= 0 && r <= 1 && (s >= 0 && s <= 1);
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
