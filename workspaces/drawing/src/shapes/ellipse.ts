import type { FillAble } from "../interfaces/fillable.ts";
import type { PositionAble } from "../interfaces/positionable.ts";
import type { ShadowAble } from "../interfaces/shadowable.ts";
import type { SizeAble } from "../interfaces/sizeAble.ts";
import type { StrokeAble } from "../interfaces/strokeable.ts";
import type { DrawingObject } from "../drawing-object.ts";

export interface AbstractEllipse extends DrawingObject, SizeAble, FillAble, StrokeAble, ShadowAble {
    rotation: number;
    innerWidth: number;
    innerHeight: number;
    startAngle: number;
    endAngle: number;
}

export type Ellipse = AbstractEllipse & PositionAble;
