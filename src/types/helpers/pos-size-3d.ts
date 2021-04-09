import { ReadonlySimpleVector3, SimpleVector3 } from "gtools/math";

export interface PosSize3D {
    readonly position: SimpleVector3;
    readonly size: SimpleVector3;
}

export interface ReadonlyPosSize3D {
    readonly position: ReadonlySimpleVector3;
    readonly size: ReadonlySimpleVector3;
}
