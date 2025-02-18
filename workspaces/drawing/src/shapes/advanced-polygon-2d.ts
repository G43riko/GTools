import { SimpleVector } from "@g43/math";
import { Color } from "@g43/tools";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { DrawingObjectType } from "../drawing-object-type.ts";
import type { Polygon2d } from "./polygon-2d.ts";

export class AdvancedPolygon2d implements Polygon2d {
    public readonly type = DrawingObjectType.POLYGON;
    public fillColor = Color.WHITE;
    public fillOpacity = 1;
    public strokeColor = Color.BLACK;
    public strokeOpacity = 1;
    public strokeWidth = 1;

    public constructor(
        public readonly points: readonly ReadonlySimpleVector2[],
    ) {
    }

    public getMin(): ReadonlySimpleVector2 {
        let minX = Infinity;
        let minY = Infinity;
        for (const point of this.points) {
            minX = Math.min(minX, point.x);
            minY = Math.min(minY, point.y);
        }

        return SimpleVector.createReadonly(minX, minY);
    }

    public getMax(): ReadonlySimpleVector2 {
        let maxX = Infinity;
        let maxY = Infinity;
        for (const point of this.points) {
            maxX = Math.max(maxX, point.x);
            maxY = Math.max(maxY, point.y);
        }

        return SimpleVector.createReadonly(maxX, maxY);
    }

    public clone(): AdvancedPolygon2d {
        return new AdvancedPolygon2d([...this.points]);
    }
}
