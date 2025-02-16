import { DrawingObjectType, type Polygon2d } from "@g43/drawing";
import { SvgPathElementFactory } from "./svg-path-element-factory.ts";
import { SvgPolylineElementFactory } from "./svg-polyline-element-factory.ts";
import type { ReadonlySimpleVector2 } from "@g43/types";

export class SvgPolygonElementFactory extends SvgPathElementFactory {
    public override readonly type = DrawingObjectType.POLYGON;
    private points: ReadonlySimpleVector2[] = [];

    public static fromPolygon(
        polygon: Polygon2d,
        factory: SvgPolygonElementFactory = new SvgPolygonElementFactory(),
    ): SvgPolygonElementFactory {
        return factory.setFrom(polygon);
    }

    public override setFrom(polygon: Polygon2d): this {
        return this.setPoints(polygon.points)
            .setFillColor(polygon.fillColor)
            .setStrokeColor(polygon.strokeColor)
            .setStrokeWidth(polygon.strokeWidth ?? this.strokeWidth);
    }

    public setPoints(points: readonly (ReadonlySimpleVector2 | [number, number])[]): this {
        this.points = points.map((e) => ("length" in e ? { x: e[0], y: e[1] } : e));

        return this.onPathChange();
    }

    public addPoints(...points: (ReadonlySimpleVector2 | [number, number])[]): this {
        this.points.push(...points.map((e) => ("length" in e ? { x: e[0], y: e[1] } : e)));

        return this.onPathChange();
    }

    private onPathChange(): this {
        this._element.setAttribute("d", this.getPath());

        return this;
    }

    public static getPathFromPoints(points: readonly ReadonlySimpleVector2[]): string {
        return `${SvgPolylineElementFactory.getPathFromPoints(points)}Z`;
    }

    private getPath(): string {
        return SvgPolygonElementFactory.getPathFromPoints(this.points);
    }
}
