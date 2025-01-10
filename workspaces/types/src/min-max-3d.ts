import type { ReadonlySimpleVector3, SimpleVector3 } from "./simple-vector3.ts";

export interface MinMaxFlat3D {
    minX: number;
    minY: number;
    minZ: number;
    maxX: number;
    maxY: number;
    maxZ: number;
}

export type ReadonlyMinMaxFlat3D = Readonly<MinMaxFlat3D>;

export interface MinMax3D {
    min: SimpleVector3;
    max: SimpleVector3;
}

export interface ReadonlyMinMax3D {
    readonly min: ReadonlySimpleVector3;
    readonly max: ReadonlySimpleVector3;
}
