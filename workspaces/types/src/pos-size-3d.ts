import type { ReadonlySimpleVector3, SimpleVector3 } from "./simple-vector3.ts";

export interface PosSize3D {
    readonly position: SimpleVector3;
    readonly size: SimpleVector3;
}

export interface ReadonlyPosSize3D {
    readonly position: ReadonlySimpleVector3;
    readonly size: ReadonlySimpleVector3;
}
