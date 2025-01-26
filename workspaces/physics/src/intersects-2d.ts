import type { ReadonlySimpleVector2 } from "@g43/types";
import { clamp } from "@g43/utils";
import { distance2dPointPoint } from "./distances-2d.ts";

/**
 * https://github.com/Silverwolf90/2d-visibility/blob/master/src/lineIntersection.js
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @param x3
 * @param y3
 * @param x4
 * @param y4
 */
export function intersection2dLineLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number,
): undefined | ReadonlySimpleVector2 {
    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denom === 0) {
        return undefined;
    }

    const numeA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    const numeB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);

    const uA = numeA / denom;
    const uB = numeB / denom;

    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
        const x = x1 + uA * (x2 - x1);
        const y = y1 + uA * (y2 - y1);

        return { x, y };
    }

    return undefined;
}

export function intersectionCircleCircle(
    ax: number,
    ay: number,
    ar: number,
    bx: number,
    by: number,
    br: number,
): [ReadonlySimpleVector2] | [ReadonlySimpleVector2, ReadonlySimpleVector2] | undefined {
    /* dx and dy are the vertical and horizontal distances between
     * the circle centers.
     */
    const dx = bx - ax;
    const dy = by - ay;

    const d = Math.sqrt((dy * dy) + (dx * dx));

    if (d > (ar + br)) {
        return;
    }
    if (d < Math.abs(ar - br)) {
        return;
    }

    const a = ((ar * ar) - (br * br) + (d * d)) / (2.0 * d);

    const x2 = ax + (dx * a / d);
    const y2 = ay + (dy * a / d);

    const h = Math.sqrt((ar * ar) - (a * a));

    const rx = -dy * (h / d);
    const ry = dx * (h / d);

    const xi = x2 + rx;
    const xi_prime = x2 - rx;
    const yi = y2 + ry;
    const yi_prime = y2 - ry;

    return [
        {
            x: xi,
            y: yi,
        },
        {
            x: xi_prime,
            y: yi_prime,
        },
    ];
}

export function intersection2dCircleMinMax(
    cx: number,
    cy: number,
    cr: number,
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
): ReadonlySimpleVector2 | undefined {
    if (cx > minX && cy > minY && cx < maxX && cy < maxY) {
        return { x: cx, y: cy };
    }

    // Find the closest point to the circle within the rectangle
    const closestX = clamp(cx, minX, minX);
    const closestY = clamp(cy, minY, maxY);

    const distance = distance2dPointPoint(
        closestX,
        closestY,
        cx,
        cy,
    );

    if (distance < cr) {
        return { x: closestX, y: closestY };
    }
}

/**
 * Finds the intersection point between the rectangle with parallel sides to the x and y axes the half-line pointing towards (x,y) originating from the middle of the rectangle
 *
 * Note: the function works given min[XY] <= max[XY], even though minY may not be the "top" of the rectangle because the coordinate system is flipped.
 * Note: if the input is inside the rectangle, the line segment wouldn't have an intersection with the rectangle, but the projected half-line does.
 * Warning: passing in the middle of the rectangle will return the midpoint itself there are infinitely many half-lines projected in all directions,
 * so let's just shortcut to midpoint (GIGO).
 *
 * @param x:Number x coordinate of point to build the half-line from
 * @param y:Number y coordinate of point to build the half-line from
 * @param minX:Number the "left" side of the rectangle
 * @param minY:Number the "top" side of the rectangle
 * @param maxX:Number the "right" side of the rectangle
 * @param maxY:Number the "bottom" side of the rectangle
 * @param validate:boolean (optional) whether to treat point inside the rect as error
 * @return an object with x and y members for the intersection
 * @throws if validate == true and (x,y) is inside the rectangle
 */
function _pointOnRect(
    x: number,
    y: number,
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
    validate = false,
): ReadonlySimpleVector2 {
    // assert minX <= maxX;
    // assert minY <= maxY;
    if (validate && (minX < x && x < maxX) && (minY < y && y < maxY)) {
        throw new Error(`Point [${x}, ${y}] cannot be inside the rectangle: [${minX}, ${minY}] - [${maxX}, ${maxY}].`);
    }
    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    // if (midX - x == 0) -> m == ±Inf -> minYx/maxYx == x (because value / ±Inf = ±0)
    const m = (midY - y) / (midX - x);

    if (x <= midX) { // check "left" side
        const minXy = m * (minX - x) + y;
        if (minY <= minXy && minXy <= maxY) {
            return { x: minX, y: minXy };
        }
    }

    if (x >= midX) { // check "right" side
        const maxXy = m * (maxX - x) + y;
        if (minY <= maxXy && maxXy <= maxY) {
            return { x: maxX, y: maxXy };
        }
    }

    if (y <= midY) { // check "top" side
        const minYx = (minY - y) / m + x;
        if (minX <= minYx && minYx <= maxX) {
            return { x: minYx, y: minY };
        }
    }

    if (y >= midY) { // check "bottom" side
        const maxYx = (maxY - y) / m + x;
        if (minX <= maxYx && maxYx <= maxX) {
            return { x: maxYx, y: maxY };
        }
    }

    // edge case when finding midpoint intersection: m = 0/0 = NaN
    if (x === midX && y === midY) {
        return { x, y };
    }

    // Should never happen :) If it does, please tell me!
    throw new Error(
        `Cannot find intersection for [${x}, ${y}] inside rectangle: [${minX}, ${minY}] - [${maxX}, ${maxY}].`,
    );
}

// intersection2dLineRect(Vector2
// ps1, Vector2;
// pe1, Vector2;
// ps2, Vector2;
// pe2;
// )
// {
//     // Get A,B of first line - points : ps1 to pe1
//     float;
//     A1 = pe1.y - ps1.y;
//     float;
//     B1 = ps1.x - pe1.x;
//     // Get A,B of second line - points : ps2 to pe2
//     float;
//     A2 = pe2.y - ps2.y;
//     float;
//     B2 = ps2.x - pe2.x;
//
//     // Get delta and check if the lines are parallel
//     float;
//     delta = A1 * B2 - A2 * B1;
//     if (delta == 0) return null;
//
//     // Get C of first and second lines
//     float;
//     C2 = A2 * ps2.x + B2 * ps2.y;
//     float;
//     C1 = A1 * ps1.x + B1 * ps1.y;
//     //invert delta to make division cheaper
//     float;
//     invdelta = 1 / delta;
//     // now return the Vector2 intersection point
//     return new Vector2((B2 * C1 - B1 * C2) * invdelta, (A1 * C2 - A2 * C1) * invdelta);
// }
