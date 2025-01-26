import type { ReadonlySimpleVector2 } from "@g43/types";
import { intersection2dLineLine, intersectionCircleCircle } from "./intersects-2d.ts";
import type { Circle } from "./objects/2d/circle.ts";
import type { Line2D } from "./objects/2d/line-2d.ts";

export class IntersectionTable2d {
    public static lineLineIntersection(lineA: Line2D, lineB: Line2D): ReadonlySimpleVector2 | undefined {
        return intersection2dLineLine(
            lineA.pointA.x,
            lineA.pointA.y,
            lineA.pointB.x,
            lineA.pointB.y,
            lineB.pointA.x,
            lineB.pointA.y,
            lineB.pointB.x,
            lineB.pointB.y,
        );
    }

    public static circleCircle(
        circleA: Circle,
        circleB: Circle,
    ): undefined | [ReadonlySimpleVector2] | [ReadonlySimpleVector2, ReadonlySimpleVector2] {
        return intersectionCircleCircle(
            circleA.center.x,
            circleA.center.y,
            circleA.radius,
            circleB.center.x,
            circleB.center.y,
            circleB.radius,
        );
    }
}
