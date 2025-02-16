import type { DrawingObject } from "../drawing-object.ts";
import type { FillAble } from "../interfaces/fillable.ts";
import type { PointAble } from "../interfaces/pointable.ts";
import type { ShadowAble } from "../interfaces/shadowable.ts";
import type { StrokeAble } from "../interfaces/strokeable.ts";

export interface Polygon2d extends DrawingObject, PointAble, ShadowAble, FillAble, StrokeAble {
}
