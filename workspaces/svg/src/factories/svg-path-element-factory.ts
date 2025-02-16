import type { Color } from "@g43/tools";
import { DrawingObjectType, type Gradient } from "@g43/drawing";
import { SvgElementFactory } from "./svg-element-factory.ts";

export class SvgPathElementFactory extends SvgElementFactory {
    public readonly type: DrawingObjectType = DrawingObjectType.PATH;

    public setFillColor(color: string | Color | Gradient): this {
        return this.processColorAttribute("fill", color);
    }

    public get fillColor(): string | Color | Gradient {
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

    public constructor() {
        super("path");
    }

    public setPathLength(pathLength: number): this {
        return this.processNumberAttribute("pathLength", pathLength);
    }

    public get pathLength(): number {
        return this.getNumericAttribute("pathLength");
    }
}
