import { Vector2 } from "@g43/math";
import type { ReadonlySimpleVector2 } from "@g43/types";

export interface PositionAble {
    /**
     * @deprecated use {@link x} and {@link y} instead
     */
    position: ReadonlySimpleVector2;
    x: number;
    y: number;
}

export const PositionAble: {
    extractPosition(positionAble: Partial<PositionAble>): ReadonlySimpleVector2;
} = {
    extractPosition(positionAble: Partial<PositionAble>): ReadonlySimpleVector2 {
        if (typeof positionAble.x === "number" && typeof positionAble.y === "number") {
            return {
                x: positionAble.x,
                y: positionAble.y,
            };
        }
        if (Vector2.isVector(positionAble.position)) {
            return positionAble.position;
        }

        throw new Error(`PositionAble is not valid ${JSON.stringify(positionAble)}`);
    },
};
