import type { AdvancedPolygon2d } from "@g43/drawing";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { DrawerUtils } from "./drawer-utils.ts";
/**
 * @param ctx
 * @param min
 * @returns
 */
export function renderAdvancedPolygonAtPosition(
    polygon: AdvancedPolygon2d,
    ctx: CanvasRenderingContext2D,
    min: ReadonlySimpleVector2,
): void {
    if (!(polygon.points && polygon.points.length)) {
        return;
    }
    ctx.beginPath();
    const firstPoint = {
        x: polygon.points[0].x - min.x,
        y: polygon.points[0].y - min.y,
    };
    ctx.moveTo(firstPoint.x, firstPoint.y);
    polygon.points.forEach((point) => {
        ctx.lineTo(point.x - min.x, point.y - min.y);
    });
    ctx.lineTo(firstPoint.x, firstPoint.y);
    ctx.closePath();
    if (polygon.fillColor) {
        ctx.fillStyle = DrawerUtils.extractColor(polygon.fillColor);
        ctx.fill();
    }
    if (polygon.strokeColor) {
        ctx.strokeStyle = DrawerUtils.extractColor(polygon.strokeColor);
        ctx.stroke();
    }
}
