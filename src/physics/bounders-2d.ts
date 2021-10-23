import { SimpleVector2 } from "../math";
import { MinMax2D, PosSize2D, XYWH } from "../types";
import { Circle } from "./objects/2d/circle";

export function fixXYWH(minMax: MinMax2D, xywh: XYWH): SimpleVector2 {
    const result = SimpleVector2.from(xywh);

    if (xywh.x < minMax.min.x) {
        result.x = minMax.min.x;
    } else if (xywh.x + xywh.w > minMax.max.x) {
        result.x = minMax.max.x - xywh.w;
    }

    if (xywh.y < minMax.min.y) {
        result.y = minMax.min.y;
    } else if (xywh.y + xywh.h > minMax.max.y) {
        result.y = minMax.max.y - xywh.h;
    }

    return result;
}

export function fixPosSize(minMax: MinMax2D, target: PosSize2D): SimpleVector2 {
    const result = {...target.position};
    if (target.position.x < minMax.min.x) {
        result.x = minMax.min.x;
    } else if (target.position.x + target.size.x > minMax.max.x) {
        result.x = minMax.max.x - target.size.x;
    }

    if (target.position.y < minMax.min.y) {
        result.y = minMax.min.y;
    } else if (target.position.y + target.size.y > minMax.max.y) {
        result.y = minMax.max.y - target.size.y;
    }

    return result;
}

export function fixSphere(minMax: MinMax2D, sphere: Circle): SimpleVector2 {
    const result     = {...sphere.center};
    const halfRadius = sphere.radius / 2;

    if (sphere.center.x - halfRadius < minMax.min.x) {
        result.x = minMax.min.x + halfRadius;
    } else if (sphere.center.x + halfRadius > minMax.max.x) {
        result.x = minMax.max.x - halfRadius;
    }

    if (sphere.center.y - halfRadius < minMax.min.y) {
        result.y = minMax.min.y + halfRadius;
    } else if (sphere.center.y + halfRadius > minMax.max.y) {
        result.y = minMax.max.y - halfRadius;
    }

    return result;
}
