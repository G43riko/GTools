import { ReadonlySimpleVector2, SimpleVector2 } from "gtools/math";

export interface MinMaxFlat2D {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}

export interface MinMax2D {
    min: SimpleVector2;
    max: SimpleVector2;
}

export interface ReadonlyMinMax2D {
    min: ReadonlySimpleVector2;
    max: ReadonlySimpleVector2;
}
