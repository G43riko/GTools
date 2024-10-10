import { ReadonlySimpleVector3, ReadonlySimpleVector4 } from "../math";

export interface Transform3D {
    readonly offset: ReadonlySimpleVector3;
    readonly scale: ReadonlySimpleVector3;
    /**
     * Rotation as quaternion
     */
    readonly rotation: ReadonlySimpleVector4;
}

export function getDefaultTransform3D(): Transform3D {
    return {
        offset  : {
            x: 0,
            y: 0,
            z: 1,
        },
        scale   : {
            x: 1,
            y: 1,
            z: 1,
        },
        rotation: {
            x: 0,
            y: 0,
            z: 0,
            w: 1,
        },
    };
}
