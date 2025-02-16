import type { DrawingObject } from "../drawing-object.ts";
import type { FillAble } from "../interfaces/fillable.ts";
import type { PositionAble } from "../interfaces/positionable.ts";
import type { ShadowAble } from "../interfaces/shadowable.ts";
import type { StrokeAble } from "../interfaces/strokeable.ts";

export interface Text extends DrawingObject, PositionAble, ShadowAble, FillAble, StrokeAble {
    text: string;
    verticalAlign: "top" | "middle" | "bottom";
    horizontalAlign: "left" | "center" | "right";
    font: string;
    weight: "normal" | "bold" | "bolder" | "lighter" | number;
    fontSize: number | string;
}
