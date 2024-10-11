import { MinMax3D, PosSize3D, ReadonlyMinMax3D, ReadonlyPosSize3D } from "../../types";

export function convertMinMaxToPosSize3D({ min, max }: ReadonlyMinMax3D): PosSize3D {
    return {
        position: {
            x: min.x,
            y: min.y,
            z: min.z,
        },
        size: {
            x: max.x - min.x,
            y: max.y - min.y,
            z: max.z - min.z,
        },
    };
}

export function convertPosSizeToMinMax3D({ position, size }: ReadonlyPosSize3D): MinMax3D {
    return {
        min: {
            x: position.x,
            y: position.y,
            z: position.z,
        },
        max: {
            x: position.x + size.x,
            y: position.y + size.y,
            z: position.z + size.z,
        },
    };
}
