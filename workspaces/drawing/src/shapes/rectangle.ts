import type { DrawingObject } from "../drawing-object.ts";
import type { FillAble } from "../interfaces/fillable.ts";
import type { PositionAble } from "../interfaces/positionable.ts";
import type { ShadowAble } from "../interfaces/shadowable.ts";
import type { SizeAble } from "../interfaces/sizeAble.ts";
import type { StrokeAble } from "../interfaces/strokeable.ts";

export interface AbstractRectangle extends DrawingObject, SizeAble, FillAble, StrokeAble, ShadowAble {
    roundedCorners: number | [number, number, number, number] | { tr: number; tl: number; br: number; bl: number };
}

export type Rectangle = PositionAble & AbstractRectangle;
