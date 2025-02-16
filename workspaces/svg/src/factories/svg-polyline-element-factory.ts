import type { Color } from "@g43/tools";
import { type DrawerPolyline, DrawingObjectType } from "@g43/drawing";
import { SvgElementFactory } from "./svg-element-factory.ts";
import type { ReadonlySimpleVector2 } from "@g43/types";
export class SvgPolylineElementFactory extends SvgElementFactory {
    public readonly type = DrawingObjectType.POLYLINE;
    private points: ReadonlySimpleVector2[] = [];

    public setStrokeColor(color: string | Color): this {
        return this.processColorAttribute("stroke", color);
    }

    public get strokeColor(): string | Color {
        return this.getColorAttribute("stroke");
    }

    public setStrokeWidth(width: number): this {
        return this.processNumberAttribute("stroke-width", width);
    }

    public get strokeWidth(): number {
        return this.getNumericAttribute("stroke-width");
    }

    public constructor() {
        super("path");
        this.element.setAttribute("fill", "none");
    }

    public static fromPoints(points: readonly ReadonlySimpleVector2[]): SvgPolylineElementFactory {
        return new SvgPolylineElementFactory().setPoints(points);
    }

    public setPathLength(pathLength: number): this {
        return this.processNumberAttribute("pathLength", pathLength);
    }

    public get pathLength(): number {
        return this.getNumericAttribute("pathLength");
    }

    public override setFrom(polygon: DrawerPolyline): this {
        return this.setPoints(polygon.points)
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
        if (!points.length) {
            return "";
        }

        const result: string[] = [
            `M${points[0].x} ${points[0].y}`,
            "L",
        ];

        for (let i = 1; i < points.length; i++) {
            result.push(`${points[i].x} ${points[i].y} `);
        }

        return result.join("");
    }

    private getPath(): string {
        return SvgPolylineElementFactory.getPathFromPoints(this.points);
    }
}
