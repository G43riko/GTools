import { SimpleVector2 } from "gtools/math";

export interface Transform {
    readonly offset: Readonly<SimpleVector2>;
    readonly scale: number;
    readonly rotation: number;
}

export function getDefaultTransform(): Transform {
    return {
        offset  : {
            x: 0,
            y: 0,
        },
        scale   : 1,
        rotation: 0,
    };
}
