import type { ReadonlySimpleVector2, SimpleVector2 } from "./simple-vector2.ts";

export interface PosSize2D {
    readonly position: SimpleVector2;
    readonly size: SimpleVector2;
}

export interface ReadonlyPosSize2D {
    readonly position: ReadonlySimpleVector2;
    readonly size: ReadonlySimpleVector2;
}
