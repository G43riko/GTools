import { Vector2 } from "@g43/math";
import type { ReadonlySimpleVector2 } from "@g43/types";
import type { Gradient } from "./gradient.ts";

export interface LinearGradient extends Gradient {
    readonly startPoint: ReadonlySimpleVector2;
    readonly endPoint: ReadonlySimpleVector2;
}

export const LinearGradient = {
    isLinearGradient: (object: Gradient): object is LinearGradient =>
        Vector2.isVector((object as any).startPoint) && Vector2.isVector((object as any).endPoint),
};
