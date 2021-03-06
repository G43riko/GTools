import { ReadonlySimpleVector3, SimpleVector3 } from "../../math";

export interface MinMaxFlat3D {
    minX: number;
    minY: number;
    minZ: number;
    maxX: number;
    maxY: number;
    maxZ: number;
}

export interface MinMax3D {
    min: SimpleVector3;
    max: SimpleVector3;
}

export interface ReadonlyMinMax3D {
    min: ReadonlySimpleVector3;
    max: ReadonlySimpleVector3;
}
