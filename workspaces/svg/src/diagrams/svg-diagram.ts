import type { Color } from "@g43/tools";

export abstract class SvgDiagram {
    protected _strokeColor?: string | Color;
    protected _strokeWidth?: number;

    public setStrokeColor(color?: string | Color): this {
        this._strokeColor = color;

        return this;
    }

    public setStrokeWidth(width?: number): this {
        this._strokeWidth = width;

        return this;
    }

    public get strokeColor(): string | Color | undefined {
        return this._strokeColor;
    }

    public get strokeWidth(): number | undefined {
        return this._strokeWidth;
    }
}
