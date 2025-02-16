import type { Color } from "@g43/tools";
import type { ReadonlySimpleVector2 } from "@g43/types";
import { DrawingObjectType } from "@g43/drawing";
import { SvgElementFactory } from "./svg-element-factory.ts";

export class SvgCircleElementFactory extends SvgElementFactory {
    public readonly type = DrawingObjectType.CIRCLE;

    public setFillColor(color?: string | Color): this {
        return this.processColorAttribute("fill", color);
    }

    public get fillColor(): string | Color {
        return this.getColorAttribute("fill");
    }

    public setStrokeColor(color?: string | Color): this {
        return this.processColorAttribute("stroke", color);
    }

    public get strokeColor(): string | Color {
        return this.getColorAttribute("stroke");
    }

    public setStrokeWidth(width?: number): this {
        return this.processNumberAttribute("stroke-width", width);
    }

    public get strokeWidth(): number {
        return this.getNumericAttribute("stroke-width");
    }

    public setCenter(center: ReadonlySimpleVector2): this;
    public setCenter(x: number, y: number): this;
    public setCenter(
        valueA: ReadonlySimpleVector2 | number,
        valueB?: number,
    ): this {
        return this.processVectorAttributes("cx", "cy", valueA, valueB);
    }

    public setRadius(r: number): this {
        return this.processNumberAttribute("r", r);
    }

    public get radius(): number {
        return this.getNumericAttribute("r");
    }

    public setCx(x: number): this {
        return this.processNumberAttribute("cx", x);
    }

    public get cx(): number {
        return this.getNumericAttribute("cx");
    }

    public setCy(y: number): this {
        return this.processNumberAttribute("cy", y);
    }

    public get cy(): number {
        return this.getNumericAttribute("cy");
    }

    public setPathLength(pathLength: number): this {
        return this.processNumberAttribute("pathLength", pathLength);
    }

    public get pathLength(): number {
        return this.getNumericAttribute("pathLength");
    }

    public constructor() {
        super("circle");
    }
}
