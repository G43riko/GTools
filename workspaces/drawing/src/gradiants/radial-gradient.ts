import type { ReadonlySimpleVector2 } from "@g43/types";

export interface RadialGradient {
    readonly startCenter: ReadonlySimpleVector2;
    readonly startRadius: number;
    readonly endCenter: ReadonlySimpleVector2;
    readonly endRadius: number;
}
