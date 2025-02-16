import { Vector2 } from "@g43/math";
import type { ReadonlySimpleVector2 } from "@g43/types";

export interface SizeAble {
    /**
     * @deprecated use {@link width} and {@link height} instead
     */
    size: ReadonlySimpleVector2;
    width: number;
    height: number;
}

export const SizeAble: {
    extractSize(sizeable: Partial<SizeAble>): ReadonlySimpleVector2;
} = {
    extractSize(sizeable: Partial<SizeAble>): ReadonlySimpleVector2 {
        if (typeof sizeable.width === "number" && typeof sizeable.height === "number") {
            return {
                x: sizeable.width,
                y: sizeable.height,
            };
        }
        if (Vector2.isVector(sizeable.size)) {
            return sizeable.size;
        }

        throw new Error(`SizeAble is not valid ${JSON.stringify(sizeable)}`);
    },
};
