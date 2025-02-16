import type { Color } from "@g43/tools";
import { DrawingObjectType, type Gradient } from "@g43/drawing";
import { SvgElementFactory } from "./svg-element-factory.ts";
import type { PartiallyRequired, ReadonlySimpleVector2 } from "@g43/types";
import type { Text } from "../../../drawing/src/index.ts";

export class SvgTextElementFactory extends SvgElementFactory {
    public readonly type = DrawingObjectType.RECTANGLE;

    public static from(
        text: PartiallyRequired<Text, "x" | "y" | "text" | "type">,
        result: SvgTextElementFactory = new SvgTextElementFactory(),
    ): SvgTextElementFactory {
        return result.setFrom(text);
    }

    public override setFrom(text: PartiallyRequired<Text, "x" | "y" | "text" | "type">): this {
        const result = this.setPosition(text.x, text.y)
            .setText(text.text)
            .setStrokeWidth(text.strokeWidth ?? this.strokeWidth);

        if (text.fillColor) {
            result.setFillColor(text.fillColor);
        }
        if (text.strokeColor) {
            result.setStrokeColor(text.strokeColor);
        }
        if (text.weight) {
            result.setWeight(text.weight);
        }
        if (text.font) {
            result.setFont(text.font);
        }
        if (text.fontSize) {
            result.setFontSize(text.fontSize);
        }
        if (text.verticalAlign) {
            result.setVerticalAlign(text.verticalAlign);
        }
        if (text.horizontalAlign) {
            result.setHorizontalAlign(text.horizontalAlign);
        }

        return result;
    }

    public setFillColor(color: string | Color | Gradient): this {
        return this.processColorAttribute("fill", color);
    }

    public get fillColor(): string | Color | Gradient {
        return this._element.getAttribute("fill") as string;
    }

    public setFont(font: string): this {
        this._element.setAttribute("font-family", font);

        return this;
    }

    public setStrokeColor(color: string | Color): this {
        return this.processColorAttribute("stroke", color);
    }

    public get strokeColor(): string | Color {
        return this._element.getAttribute("stroke") as string;
    }

    public setStrokeWidth(width: number): this {
        return this.processNumberAttribute("stroke-width", width);
    }

    public get strokeWidth(): number {
        return this.getNumericAttribute("stroke-width");
    }

    public setPosition(position: ReadonlySimpleVector2): this;
    public setPosition(x: number, y: number): this;
    public setPosition(
        valueA: ReadonlySimpleVector2 | number,
        valueB?: number,
    ): this {
        return this.processVectorAttributes("x", "y", valueA, valueB);
    }

    public setSize(size: ReadonlySimpleVector2): this;
    public setSize(x: number, y: number): this;
    public setSize(
        valueA: ReadonlySimpleVector2 | number,
        valueB?: number,
    ): this {
        return this.processVectorAttributes("width", "height", valueA, valueB);
    }

    public setText(text: string): this {
        this._element.textContent = text;

        return this;
    }

    public get text(): string | undefined {
        return this._element.textContent;
    }

    public setHorizontalAlign(align: "left" | "center" | "right" | "start" | "middle" | "end"): this {
        if (align === "left" || align === "start") {
            this._element.setAttribute("text-anchor", "start");
        } else if (align === "right" || align === "end") {
            this._element.setAttribute("text-anchor", "end");
        } else {
            this._element.setAttribute("text-anchor", "middle");
        }

        return this;
    }

    public get horizontalAlign(): "start" | "middle" | "end" | undefined {
        return this._element.getAttribute("text-anchor") as "start" | "middle" | "end";
    }

    public setVerticalAlign(align: "top" | "middle" | "bottom" | "hanging" | "baseline" | "central"): this {
        if (align === "central") {
            this._element.setAttribute("alignment-baseline", "central");
        } else if (align === "hanging" || align === "top") {
            this._element.setAttribute("alignment-baseline", "hanging");
        } else if (align === "baseline" || align === "bottom") {
            this._element.setAttribute("alignment-baseline", "baseline");
        } else {
            this._element.setAttribute("alignment-baseline", "middle");
        }

        return this;
    }

    public setWeight(size: "normal" | "bold" | "bolder" | "lighter" | number): this {
        if (typeof size === "number") {
            return this.processNumberAttribute("font-weight", size);
        }

        this._element.setAttribute("font-weight", size);

        return this;
    }

    public get fontWeight(): string {
        return this._element.getAttribute("font-weight") as string;
    }

    public setFontSize(size: number | string): this {
        if (typeof size === "number") {
            this._element.setAttribute("font-size", `${size}px`);
        } else {
            this._element.setAttribute("font-size", size);
        }

        return this;
    }

    public get fontSize(): string | undefined {
        return this._element.getAttribute("font-size");
    }

    public get verticalAlign(): "middle" | "hanging" | "baseline" | undefined {
        return this._element.getAttribute("alignment-baseline") as "middle" | "hanging" | "baseline";
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

    public constructor() {
        super("text");
    }
}
