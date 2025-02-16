import type { Color } from "@g43/tools";

export interface StrokeAble {
    strokeColor: string | Color;
    strokeWidth: number;
    strokeOpacity: number;

    lineDash?: number[];
    lineCap?: CanvasLineCap;
    joinType?: CanvasLineJoin;
}
