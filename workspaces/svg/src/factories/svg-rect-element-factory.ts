import type { Color } from "@g43/tools";
import { DrawingObjectType, type Gradient, PositionAble, type Rectangle, SizeAble } from "@g43/drawing";
import { SvgElementFactory } from "./svg-element-factory.ts";
import type { ReadonlySimpleVector2 } from "@g43/types";

export class SvgRectElementFactory extends SvgElementFactory {
    public readonly type = DrawingObjectType.RECTANGLE;

    public static fromRectangle(
        rectangle: Rectangle,
        factory: SvgRectElementFactory = new SvgRectElementFactory(),
    ): SvgRectElementFactory {
        return factory.setFrom(rectangle);
    }

    public override patchFrom(rectangle: Partial<Rectangle>): this {
        try {
            this.setPosition(PositionAble.extractPosition(rectangle));
        } catch (_: unknown) {
            // empty
        }
        try {
            this.setSize(SizeAble.extractSize(rectangle));
        } catch (_: unknown) {
            // empty
        }
        if (rectangle.fillColor) {
            this.setFillColor(rectangle.fillColor);
        }
        if (rectangle.strokeColor) {
            this.setStrokeColor(rectangle.strokeColor);
        }
        if (rectangle.strokeWidth) {
            this.setStrokeWidth(rectangle.strokeWidth);
        }

        return this;
    }

    public override setFrom(rectangle: Rectangle): this {
        return this.setPosition(PositionAble.extractPosition(rectangle))
            .setSize(SizeAble.extractSize(rectangle))
            .setFillColor(rectangle.fillColor)
            .setStrokeColor(rectangle.strokeColor)
            .setStrokeWidth(rectangle.strokeWidth ?? this.strokeWidth);
    }

    public setFillColor(color: string | Color | Gradient): this {
        return this.processColorAttribute("fill", color);
    }

    public get fillColor(): string | Color | Gradient {
        return this._element.getAttribute("fill") as string;
    }

    public setStrokeColor(color?: string | Color): this {
        return this.processColorAttribute("stroke", color);
    }

    public get strokeColor(): string | Color {
        return this._element.getAttribute("stroke") as string;
    }

    public setStrokeWidth(width?: number): this {
        return this.processNumberAttribute("stroke-width", width);
    }

    public get strokeWidth(): number {
        return this.getNumericAttribute("stroke-width");
    }

    public setSize(size: ReadonlySimpleVector2): this;
    public setSize(x: number, y: number): this;
    public setSize(
        valueA: ReadonlySimpleVector2 | number,
        valueB?: number,
    ): this {
        return this.processVectorAttributes("width", "height", valueA, valueB);
    }

    public setPosition(position: ReadonlySimpleVector2): this;
    public setPosition(x: number, y: number): this;
    public setPosition(
        valueA: ReadonlySimpleVector2 | number,
        valueB?: number,
    ): this {
        return this.processVectorAttributes("x", "y", valueA, valueB);
    }

    public setWidth(x: number): this {
        return this.processNumberAttribute("width", x);
    }

    public get width(): number {
        return this.getNumericAttribute("width");
    }

    public setHeight(y: number): this {
        return this.processNumberAttribute("height", y);
    }

    public get height(): number {
        return this.getNumericAttribute("height");
    }

    public setX(x: number): this {
        return this.processNumberAttribute("x", x);
    }

    public get x(): number {
        return this.getNumericAttribute("x");
    }

    public setY(y: number): this {
        return this.processNumberAttribute("y", y);
    }

    public get y(): number {
        return this.getNumericAttribute("y");
    }

    public setRx(x: number): this {
        return this.processNumberAttribute("rx", x);
    }

    public setRound(round: ReadonlySimpleVector2): this;
    public setRound(rx: number, ry: number): this;
    public setRound(
        valueA: ReadonlySimpleVector2 | number,
        valueB?: number,
    ): this {
        return this.processVectorAttributes("rx", "ry", valueA, valueB);
    }

    public get rx(): number {
        return this.getNumericAttribute("rx");
    }

    public setRy(y: number): this {
        return this.processNumberAttribute("ry", y);
    }

    public get ry(): number {
        return this.getNumericAttribute("ry");
    }

    public setPathLength(pathLength: number): this {
        return this.processNumberAttribute("pathLength", pathLength);
    }

    public get pathLength(): number {
        return this.getNumericAttribute("pathLength");
    }

    public constructor() {
        super("rect");
    }
}
