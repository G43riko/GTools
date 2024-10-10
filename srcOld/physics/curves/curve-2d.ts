import { ReadonlySimpleVector2 } from "../../math";
import { Curve } from "./curve";

export abstract class Curve2D extends Curve<ReadonlySimpleVector2> {
    protected lerp(vec1: ReadonlySimpleVector2, vec2: ReadonlySimpleVector2, value: number): ReadonlySimpleVector2 {
        const dirX = vec2.x - vec1.x;
        const dirY = vec2.y - vec1.y;

        return {
            x: dirX * value + vec1.x,
            y: dirY * value + vec1.y,
        };
    }
}

