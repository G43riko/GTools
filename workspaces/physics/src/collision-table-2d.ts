import type { MinMax2D, ReadonlyMinMax2D, ReadonlyMinMaxFlat2D, ReadonlyPosSize2D, ReadonlySimpleVector2 } from "@g43/types";
import {
    circleRect2dCollision,
    minMaxMinMax2dCollision,
    pointCircle2dCollision,
    pointRectMinMax2dCollision,
    rectRect2dCollision,
} from "./collisions-2d.ts";
import type { Circle } from "./objects/2d/circle.ts";

export class CollisionTable2d {
    public static circleRectangle(circle: Circle, rectangle: ReadonlyPosSize2D): boolean {
        return circleRect2dCollision(
            circle.center.x,
            circle.center.y,
            circle.radius,
            rectangle.position.x,
            rectangle.position.y,
            rectangle.size.x,
            rectangle.size.y,
        );
    }

    public static rectangleRectangle(rectA: ReadonlyPosSize2D, rectB: ReadonlyPosSize2D): boolean {
        return rectRect2dCollision(
            rectA.position.x,
            rectA.position.y,
            rectA.size.x,
            rectA.size.y,
            rectB.position.x,
            rectB.position.y,
            rectB.size.x,
            rectB.size.y,
        );
    }
    public static minMaxMinMax(minMaxA: MinMax2D, minMaxB: MinMax2D): boolean {
        return minMaxMinMax2dCollision(
            minMaxA.min.x,
            minMaxA.min.y,
            minMaxA.max.x,
            minMaxA.max.y,
            minMaxB.min.x,
            minMaxB.min.y,
            minMaxB.max.x,
            minMaxB.max.y,
        )
    }

    public static pointCircle(
        pointX: number,
        pointY: number,
        circleX: number,
        circleY: number,
        circleRadius: number,
    ): boolean {
        return pointCircle2dCollision(
            pointX,
            pointY,
            circleX,
            circleY,
            circleRadius,
        );
    }

    public static pointMinMaxFlat(point: ReadonlySimpleVector2, minMax: ReadonlyMinMaxFlat2D): boolean {
        return pointRectMinMax2dCollision(
            point.x,
            point.y,
            minMax.minX,
            minMax.minY,
            minMax.maxX,
            minMax.maxY,
        );
    }

    public static pointMinMax(point: ReadonlySimpleVector2, minMax: ReadonlyMinMax2D): boolean {
        return pointRectMinMax2dCollision(
            point.x,
            point.y,
            minMax.min.x,
            minMax.min.y,
            minMax.max.x,
            minMax.max.y,
        );
    }

    public static rectangleMinMax(rectA: ReadonlyPosSize2D, minMax: ReadonlyMinMax2D): boolean {
        return rectRect2dCollision(
            rectA.position.x,
            rectA.position.y,
            rectA.size.x,
            rectA.size.y,
            minMax.min.x,
            minMax.min.y,
            minMax.max.x - minMax.min.x,
            minMax.max.y - minMax.min.y,
        );
    }
}
