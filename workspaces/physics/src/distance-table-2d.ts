import type { ReadonlySimpleVector2 } from "@g43/types";
import {
    distance2dCircleCircle,
    distance2dPointCircle,
    distance2dPointPoint,
    distance2dPointPointSqr,
} from "./distances-2d.ts";
import type { Circle } from "./objects/2d/circle.ts";
import type { Line2D } from "./objects/2d/line-2d.ts";

export class DistanceTable2d {
    /**
     * TODO: use {@link distance2dPointLineNew}
     * @see distance2dPointLine
     * @param point
     * @param line
     * @param signed
     */
    public static pointLine(point: ReadonlySimpleVector2, line: Line2D, signed = false): number {
        const dy = line.pointB.y - line.pointA.y;
        const dx = line.pointB.x - line.pointA.x;
        const determinant = dy * point.x - dx * point.y + line.pointB.x * line.pointA.y - line.pointB.y * line.pointA.x;
        const distance = determinant / line.length;

        return signed ? distance : Math.abs(distance);
    }

    public static circleCircle(circleA: Circle, circleB: Circle): number {
        return distance2dCircleCircle(
            circleA.center.x,
            circleA.center.y,
            circleA.radius,
            circleB.center.x,
            circleB.center.y,
            circleB.radius,
        );
    }

    public static pointPoint(pointA: ReadonlySimpleVector2, pointB: ReadonlySimpleVector2): number {
        return distance2dPointPoint(
            pointA.x,
            pointA.y,
            pointB.x,
            pointB.y,
        );
    }

    public static pointPointSqr(pointA: ReadonlySimpleVector2, pointB: ReadonlySimpleVector2): number {
        return distance2dPointPointSqr(
            pointA.x,
            pointA.y,
            pointB.x,
            pointB.y,
        );
    }

    public static pointCircle(point: ReadonlySimpleVector2, circle: Circle): number {
        return distance2dPointCircle(
            point.x,
            point.y,
            circle.center.x,
            circle.center.y,
            circle.radius,
        );
    }
}
