import type { FillAble } from "../interfaces/fillable.ts";
import type { PositionAble } from "../interfaces/positionable.ts";
import type { StrokeAble } from "../interfaces/strokeable.ts";
import type { DrawingObject } from "../drawing-object.ts";

export interface Circle extends DrawingObject, PositionAble, FillAble, StrokeAble {
    radius: number;
    innerRadius: number;
    startAngle: number;
    endAngle: number;
}
