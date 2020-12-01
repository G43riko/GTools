import { Vector3 } from "../math";
export function pointPoint3dDistance(ax, ay, az, bx, by, bz) {
    return Math.sqrt(pointPointSqr3dDistance(ax, ay, az, bx, by, bz));
}
export function pointPointSqr3dDistance(ax, ay, az, bx, by, bz) {
    const distX = ax - bx;
    const distY = ay - by;
    const distZ = az - bz;
    return distX * distX + distY * distY + distZ * distZ;
}
export function pointLine3dDistance(aStartX, aStartY, aStartZ, aEndX, aEndY, aEndZ, bCenterX, bCenterY, bCenterZ) {
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
export function pointNormalPlane3dDistance(aNormal, aPoint, bPoint) {
    const d = -Vector3.mul(aNormal, aPoint).sum();
    return Math.abs((Vector3.mul(aNormal, bPoint).sum() + d) / Math.sqrt(Vector3.mul(aNormal, aNormal).sum()));
}
export function vectorPoint3dDistance(startX, startY, startZ, endX, endY, endZ, pointX, pointY, pointZ) {
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
//# sourceMappingURL=distances-3d.js.map