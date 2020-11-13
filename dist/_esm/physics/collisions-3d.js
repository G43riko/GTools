import { Vector3 } from "gtools/math";
import { getClosestPointOnLine } from "./closest-3d";
import { pointPoint2dDistance } from "./distances-2d";
import { pointLine3dDistance, pointPoint3dDistance } from "./distances-3d";
import { vectorSquareIntersect3d } from "./intersects-3d";
export function sphereSphere(ax, ay, az, aRadius, bx, by, bz, bRadius) {
    const dist = pointPoint3dDistance(ax, ay, az, bx, by, bz);
    return dist <= aRadius + bRadius;
}
export function pointSphere(ax, ay, az, bx, by, bz, bRadius) {
    const dist = pointPoint3dDistance(ax, ay, az, bx, by, bz);
    return dist <= bRadius;
}
export function lineSphere(ax, ay, az, bx, by, bz, sx, sy, sz, sr) {
    return pointLine3dDistance(ax, ay, az, bx, by, bz, sx, sy, sz) < sr;
}
export var IntersectionType;
(function (IntersectionType) {
    IntersectionType["OUTSIDE"] = "OUTSIDE";
    IntersectionType["INSIDE"] = "INSIDE";
    IntersectionType["ONE_INTERSECTION"] = "ONE_INTERSECTION";
    IntersectionType["TWO_INTERSECTION"] = "TWO_INTERSECTION";
})(IntersectionType || (IntersectionType = {}));
export function lineBox2(p0X, p0Y, p0Z, p1X, p1Y, p1Z, minX, minY, minZ, maxX, maxY, maxZ, result) {
    const dirX = p1X - p0X;
    const dirY = p1Y - p0Y;
    const dirZ = p1Z - p0Z;
    const invDirX = 1 / dirX;
    const invDirY = 1 / dirY;
    const invDirZ = 1 / dirZ;
    let tNear;
    let tFar;
    let tymin;
    let tymax;
    let tzmin;
    let tzmax;
    if (invDirX >= 0) {
        tNear = (minX - p0X) * invDirX;
        tFar = (maxX - p0X) * invDirX;
    }
    else {
        tNear = (maxX - p0X) * invDirX;
        tFar = (minX - p0X) * invDirX;
    }
    if (invDirY >= 0) {
        tymin = (minY - p0Y) * invDirY;
        tymax = (maxY - p0Y) * invDirY;
    }
    else {
        tymin = (maxY - p0Y) * invDirY;
        tymax = (minY - p0Y) * invDirY;
    }
    if (tNear > tymax || tymin > tFar) {
        return IntersectionType.OUTSIDE;
    }
    if (invDirZ >= 0) {
        tzmin = (minZ - p0Z) * invDirZ;
        tzmax = (maxZ - p0Z) * invDirZ;
    }
    else {
        tzmin = (maxZ - p0Z) * invDirZ;
        tzmax = (minZ - p0Z) * invDirZ;
    }
    if (tNear > tzmax || tzmin > tFar) {
        return IntersectionType.OUTSIDE;
    }
    tNear = tymin > tNear || isNaN(tNear) ? tymin : tNear;
    tFar = tymax < tFar || isNaN(tFar) ? tymax : tFar;
    tNear = tzmin > tNear ? tzmin : tNear;
    tFar = tzmax < tFar ? tzmax : tFar;
    let type = IntersectionType.OUTSIDE;
    if (tNear < tFar && tNear <= 1 && tFar >= 0) {
        if (tNear > 0 && tFar > 1) {
            tFar = tNear;
            type = IntersectionType.ONE_INTERSECTION;
        }
        else if (tNear < 0 && tFar < 1) {
            tNear = tFar;
            type = IntersectionType.ONE_INTERSECTION;
        }
        else if (tNear < 0 && tFar > 1) {
            type = IntersectionType.INSIDE;
        }
        else {
            type = IntersectionType.TWO_INTERSECTION;
        }
        result.x = tNear;
        result.y = tFar;
    }
    return type;
}
export function pointBox(bx, by, bz, ax, ay, az, aWidth, aHeight, aDepth) {
    return ax < bx && ax + aWidth > bx &&
        ay < by && ay + aHeight > by &&
        az < bz && az + aDepth > bz;
}
export function pointBoxMinMax(bPosX, bPosY, bPosZ, minX, minY, minZ, maxX, maxY, maxZ) {
    return bPosX >= minX && bPosY >= minY && bPosZ >= minZ &&
        bPosX <= maxX && bPosY >= minY && bPosZ <= maxZ;
}
export function lineBox(a1x, a1y, a1z, a2x, a2y, a2z, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ) {
    return vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX - bSizeX, bPosY + bSizeY, bPosZ - bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ - bSizeZ, bPosX + bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX - bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY - bSizeY, bPosZ + bSizeZ) ||
        vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX + bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX - bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX + bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        vectorSquareIntersect3d(a1x, a1y, a1z, a2x, a2y, a2z, bPosX + bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY - bSizeY, bPosZ - bSizeZ);
}
export function lineSphere2(p0X, p0Y, p0Z, p1X, p1Y, p1Z, centerX, centerY, centerZ, radiusSquared) {
    let dX = p1X - p0X;
    let dY = p1Y - p0Y;
    let dZ = p1Z - p0Z;
    const nom = (centerX - p0X) * dX + (centerY - p0Y) * dY + (centerZ - p0Z) * dZ;
    const den = dX * dX + dY * dY + dZ * dZ;
    const u = nom / den;
    if (u < 0) {
        dX = p0X - centerX;
        dY = p0Y - centerY;
        dZ = p0Z - centerZ;
    }
    else if (u > 1) {
        dX = p1X - centerX;
        dY = p1Y - centerY;
        dZ = p1Z - centerZ;
    }
    else {
        const pX = p0X + u * dX;
        const pY = p0Y + u * dY;
        const pZ = p0Z + u * dZ;
        dX = pX - centerX;
        dY = pY - centerY;
        dZ = pZ - centerZ;
    }
    const dist = dX * dX + dY * dY + dZ * dZ;
    return dist <= radiusSquared;
}
export function boxBox(ax, ay, az, aw, ah, ad, bx, by, bz, bw, bh, bd) {
    return ax + aw > bx && bx + bw > ax &&
        ay + ah > by && by + bh > ay &&
        az + ad > bz && bz + bd > az;
}
export function pointEllipsoid(ax, ay, az, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ) {
    const aposNewX = ax - bPosX;
    const aposNewY = ay - bPosY;
    const aposNewZ = az - bPosZ;
    const xa = (aposNewX * aposNewX) / (bSizeX * bSizeX);
    const yb = (aposNewY * aposNewY) / (bSizeY * bSizeY);
    const zc = (aposNewZ * aposNewZ) / (bSizeZ * bSizeZ);
    return xa + yb + zc <= 1;
}
export function lineEllipsoid(aStartX, aStartY, aStartZ, aEndX, aEndY, aEndZ, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ) {
    const point = getClosestPointOnLine(aStartX, aStartY, aStartZ, aEndX, aEndY, aEndZ, bPosX, bPosY, bPosZ);
    return pointEllipsoid(point.x, point.y, point.z, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ);
}
export function pointCylinder(ax, ay, az, bx, by, bz, bRadius, bHeight) {
    const conditionOne = ay > by && ay < by + bHeight;
    const conditionTwo = pointPoint2dDistance(ax, az, bx, bz) < bRadius;
    return conditionOne && conditionTwo;
}
export function sphereCylinder(ax, ay, az, aRadius, bx, by, bz, bRadius, bHeight) {
    const conditionOne = ay + aRadius > by && ay - aRadius < by + bHeight;
    const conditionTwo = pointPoint2dDistance(ax, az, bx, bz) < aRadius + bRadius;
    return conditionOne && conditionTwo;
}
export function testSphereBoxMinMax(centerX, centerY, centerZ, radiusSquared, minX, minY, minZ, maxX, maxY, maxZ) {
    let radius2 = radiusSquared;
    const func = (val) => {
        let d = 0;
        if (val.z < val.x) {
            d = val.z - val.x;
        }
        else if (val.z > val.y) {
            d = val.z - val.y;
        }
        return d * d;
    };
    const params = new Vector3();
    radius2 -= func(params.setData(minX, maxX, centerX));
    radius2 -= func(params.setData(minY, maxY, centerY));
    radius2 -= func(params.setData(minZ, maxZ, centerZ));
    return radius2 >= 0;
}
//# sourceMappingURL=collisions-3d.js.map