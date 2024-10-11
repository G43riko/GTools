import { SimpleVector2 } from "../math";

export interface Transform2D {
    readonly offset: Readonly<SimpleVector2>;
    readonly scale: number;
    readonly rotation: number;
}

export function getDefaultTransform2D(): Transform2D {
    return {
        offset: {
            x: 0,
            y: 0,
        },
        scale: 1,
        rotation: 0,
    };
}
