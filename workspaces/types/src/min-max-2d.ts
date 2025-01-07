import type { ReadonlySimpleVector2, SimpleVector2 } from "./simple-vector2.ts";

export interface MinMaxFlat2D {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}

export type ReadonlyMinMaxFlat2D = Readonly<MinMaxFlat2D>;

export interface MinMax2D {
    min: SimpleVector2;
    max: SimpleVector2;
}

export interface ReadonlyMinMax2D {
    readonly min: ReadonlySimpleVector2;
    readonly max: ReadonlySimpleVector2;
};

