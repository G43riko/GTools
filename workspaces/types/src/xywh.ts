import type { ReadonlySimpleVector2, SimpleVector2 } from "./simple-vector2.ts";

export interface XYWH extends SimpleVector2 {
    w: number;
    h: number;
}

export interface ReadonlyXYWH extends ReadonlySimpleVector2 {
    readonly w: number;
    readonly h: number;
}
