import type { ReadonlySimpleVector2 } from "@g43/types";

export interface PointAble {
    points: readonly (ReadonlySimpleVector2 | [number, number])[];
}
