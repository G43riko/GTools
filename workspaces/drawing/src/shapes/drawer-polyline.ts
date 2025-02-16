import type { DrawingObject } from "../drawing-object.ts";
import type { PointAble } from "../interfaces/pointable.ts";
import type { ShadowAble } from "../interfaces/shadowable.ts";
import type { StrokeAble } from "../interfaces/strokeable.ts";

export interface DrawerPolyline extends DrawingObject, PointAble, StrokeAble, ShadowAble {
}
