import { Vector3 } from "../math";

export function pointPointSqr3dDistance(
    ax: number,
    ay: number,
    az: number,
    bx: number,
    by: number,
    bz: number,
): number {
    const distX = ax - bx;
    const distY = ay - by;
    const distZ = az - bz;

    return distX * distX + distY * distY + distZ * distZ;
}

export function pointPoint3dDistance(ax: number, ay: number, az: number, bx: number, by: number, bz: number): number {
    return Math.sqrt(pointPointSqr3dDistance(ax, ay, az, bx, by, bz));
}

export function sphereSphereDistance(
    aCenterX: number,
    aCenterY: number,
    aCenterZ: number,
    aRadius: number,
    bCenterX: number,
    bCenterY: number,
    bCenterZ: number,
    bRadius: number,
): number {
    const centerDistances = pointPoint3dDistance(aCenterX, aCenterY, aCenterZ, bCenterX, bCenterY, bCenterZ);

    return centerDistances - aRadius - bRadius;
}

export function vectorPoint3dDistance(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
    pointX: number,
    pointY: number,
    pointZ: number,
): number {
    const startSubEndX = startX - endX;
    const startSubEndY = startY - endY;
    const startSubEndZ = startZ - endZ;

    const endSubPointX = endX - pointX;
    const endSubPointY = endY - pointY;
    const endSubPointZ = endZ - pointZ;

    const crossX = startSubEndY * endSubPointZ - startSubEndZ * endSubPointY;
    const crossY = startSubEndZ * endSubPointX - startSubEndX * endSubPointZ;
    const crossZ = startSubEndX * endSubPointY - startSubEndY * endSubPointX;

    const length1 = Math.sqrt(crossX * crossX + crossY * crossY + crossZ * crossZ);
    const length2 = Math.sqrt(startSubEndX * startSubEndX + startSubEndY * startSubEndY + startSubEndZ * startSubEndZ);

    return length1 / length2;
}

export function pointLine3dDistance(
    aStartX: number,
    aStartY: number,
    aStartZ: number,
    aEndX: number,
    aEndY: number,
    aEndZ: number,
    bCenterX: number,
    bCenterY: number,
    bCenterZ: number,
): number {
    const aSubBx = aStartX - aEndX;
    const aSubBy = aStartY - aEndY;
    const aSubBz = aStartZ - aEndZ;
    const pSubBx = bCenterX - aEndX;
    const pSubBy = bCenterY - aEndY;
    const pSubBz = bCenterZ - aEndZ;
    const dotA = aSubBx * pSubBx + aSubBy * pSubBy + aSubBz * pSubBz;
    if (dotA < 0) {
        return pointPoint3dDistance(bCenterX, bCenterY, bCenterZ, aEndX, aEndY, aEndZ);
    }

    const bSubAx = aEndX - aStartX;
    const bSubAy = aEndY - aStartY;
    const bSubAz = aEndZ - aStartZ;
    const pSubAx = bCenterX - aStartX;
    const pSubAy = bCenterY - aStartY;
    const pSubAz = bCenterZ - aStartZ;
    const dotB = bSubAx * pSubAx + bSubAy * pSubAy + bSubAz * pSubAz;
    if (dotB < 0) {
        return pointPoint3dDistance(bCenterX, bCenterY, bCenterZ, aStartX, aStartY, aStartZ);
    }

    return vectorPoint3dDistance(aStartX, aStartY, aStartZ, aEndX, aEndY, aEndZ, bCenterX, bCenterY, bCenterZ);
}

export function pointNormalPlane3dDistance(aNormal: Vector3, aPoint: Vector3, bPoint: Vector3): number {
    const d = -Vector3.mul(aNormal, aPoint, new Vector3()).sum;

    return Math.abs(
        (Vector3.mul(aNormal, bPoint, new Vector3()).sum + d) /
            Math.sqrt(Vector3.mul(aNormal, aNormal, new Vector3()).sum),
    );
}

// export function pointPlane(Vector3 a1, Vector3 a2, Vector3 a3, Vector3 bPoint) {
//     return pointPlane(a3.sub(a2).cross(a1.sub(a2)), a1, bPoint);
// }
