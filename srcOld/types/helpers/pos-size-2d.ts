import { ReadonlySimpleVector2, SimpleVector2 } from "../../math";

export interface PosSize2D {
    readonly position: SimpleVector2;
    readonly size: SimpleVector2;
}

export interface ReadonlyPosSize2D {
    readonly position: ReadonlySimpleVector2;
    readonly size: ReadonlySimpleVector2;
}
