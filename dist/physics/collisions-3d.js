"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSphereBoxMinMax = exports.sphereCylinder = exports.pointCylinder = exports.lineEllipsoid = exports.pointEllipsoid = exports.boxBox = exports.lineSphere2 = exports.lineBox = exports.pointBoxMinMax = exports.pointBox = exports.BoxBoxMinMax = exports.lineBox2 = exports.IntersectionType = exports.lineSphere = exports.pointSphere = exports.sphereSphere = void 0;
var math_1 = require("../math");
var closest_3d_1 = require("./closest-3d");
var distances_2d_1 = require("./distances-2d");
var distances_3d_1 = require("./distances-3d");
var intersects_3d_1 = require("./intersects-3d");
function sphereSphere(ax, ay, az, aRadius, bx, by, bz, bRadius) {
    var dist = distances_3d_1.pointPoint3dDistance(ax, ay, az, bx, by, bz);
    return dist <= aRadius + bRadius;
}
exports.sphereSphere = sphereSphere;
function pointSphere(ax, ay, az, bx, by, bz, bRadius) {
    var dist = distances_3d_1.pointPoint3dDistance(ax, ay, az, bx, by, bz);
    return dist <= bRadius;
}
exports.pointSphere = pointSphere;
function lineSphere(ax, ay, az, bx, by, bz, sx, sy, sz, sr) {
    return distances_3d_1.pointLine3dDistance(ax, ay, az, bx, by, bz, sx, sy, sz) < sr;
}
exports.lineSphere = lineSphere;
var IntersectionType;
(function (IntersectionType) {
    IntersectionType["OUTSIDE"] = "OUTSIDE";
    IntersectionType["INSIDE"] = "INSIDE";
    IntersectionType["ONE_INTERSECTION"] = "ONE_INTERSECTION";
    IntersectionType["TWO_INTERSECTION"] = "TWO_INTERSECTION";
})(IntersectionType = exports.IntersectionType || (exports.IntersectionType = {}));
function lineBox2(p0X, p0Y, p0Z, p1X, p1Y, p1Z, minX, minY, minZ, maxX, maxY, maxZ, result) {
    var dirX = p1X - p0X;
    var dirY = p1Y - p0Y;
    var dirZ = p1Z - p0Z;
    var invDirX = 1 / dirX;
    var invDirY = 1 / dirY;
    var invDirZ = 1 / dirZ;
    var tNear;
    var tFar;
    var tymin;
    var tymax;
    var tzmin;
    var tzmax;
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
    var type = IntersectionType.OUTSIDE;
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
exports.lineBox2 = lineBox2;
function BoxBoxMinMax(ax, ay, az, aWidth, aHeight, aDepth, minX, minY, minZ, maxX, maxY, maxZ) {
    return ax + aWidth > minX && ax < maxX
        && ay + aHeight > minY && ay < maxY
        && az + aDepth > minZ && az < maxZ;
}
exports.BoxBoxMinMax = BoxBoxMinMax;
function pointBox(bx, by, bz, ax, ay, az, aWidth, aHeight, aDepth) {
    return ax < bx && ax + aWidth > bx
        && ay < by && ay + aHeight > by
        && az < bz && az + aDepth > bz;
}
exports.pointBox = pointBox;
function pointBoxMinMax(bPosX, bPosY, bPosZ, minX, minY, minZ, maxX, maxY, maxZ) {
    return bPosX >= minX && bPosX <= maxX
        && bPosY >= minY && bPosY >= minY
        && bPosZ >= minZ && bPosZ <= maxZ;
}
exports.pointBoxMinMax = pointBoxMinMax;
function lineBox(a1x, a1y, a1z, a2x, a2y, a2z, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ) {
    return intersects_3d_1.vectorSquare3dIntersect(a1x, a1y, a1z, a2x, a2y, a2z, bPosX - bSizeX, bPosY + bSizeY, bPosZ - bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ - bSizeZ, bPosX + bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        intersects_3d_1.vectorSquare3dIntersect(a1x, a1y, a1z, a2x, a2y, a2z, bPosX - bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY - bSizeY, bPosZ + bSizeZ) ||
        intersects_3d_1.vectorSquare3dIntersect(a1x, a1y, a1z, a2x, a2y, a2z, bPosX + bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        intersects_3d_1.vectorSquare3dIntersect(a1x, a1y, a1z, a2x, a2y, a2z, bPosX - bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        intersects_3d_1.vectorSquare3dIntersect(a1x, a1y, a1z, a2x, a2y, a2z, bPosX + bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY + bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY + bSizeY, bPosZ - bSizeZ) ||
        intersects_3d_1.vectorSquare3dIntersect(a1x, a1y, a1z, a2x, a2y, a2z, bPosX + bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX - bSizeX, bPosY - bSizeY, bPosZ + bSizeZ, bPosX + bSizeX, bPosY - bSizeY, bPosZ - bSizeZ);
}
exports.lineBox = lineBox;
function lineSphere2(p0X, p0Y, p0Z, p1X, p1Y, p1Z, centerX, centerY, centerZ, radiusSquared) {
    var dX = p1X - p0X;
    var dY = p1Y - p0Y;
    var dZ = p1Z - p0Z;
    var nom = (centerX - p0X) * dX + (centerY - p0Y) * dY + (centerZ - p0Z) * dZ;
    var den = dX * dX + dY * dY + dZ * dZ;
    var u = nom / den;
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
        var pX = p0X + u * dX;
        var pY = p0Y + u * dY;
        var pZ = p0Z + u * dZ;
        dX = pX - centerX;
        dY = pY - centerY;
        dZ = pZ - centerZ;
    }
    var dist = dX * dX + dY * dY + dZ * dZ;
    return dist <= radiusSquared;
}
exports.lineSphere2 = lineSphere2;
function boxBox(ax, ay, az, aw, ah, ad, bx, by, bz, bw, bh, bd) {
    return ax + aw > bx && bx + bw > ax &&
        ay + ah > by && by + bh > ay &&
        az + ad > bz && bz + bd > az;
}
exports.boxBox = boxBox;
function pointEllipsoid(ax, ay, az, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ) {
    var aposNewX = ax - bPosX;
    var aposNewY = ay - bPosY;
    var aposNewZ = az - bPosZ;
    var xa = (aposNewX * aposNewX) / (bSizeX * bSizeX);
    var yb = (aposNewY * aposNewY) / (bSizeY * bSizeY);
    var zc = (aposNewZ * aposNewZ) / (bSizeZ * bSizeZ);
    return xa + yb + zc <= 1;
}
exports.pointEllipsoid = pointEllipsoid;
function lineEllipsoid(aStartX, aStartY, aStartZ, aEndX, aEndY, aEndZ, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ) {
    var point = closest_3d_1.getClosestPointOnLine(aStartX, aStartY, aStartZ, aEndX, aEndY, aEndZ, bPosX, bPosY, bPosZ);
    return pointEllipsoid(point.x, point.y, point.z, bPosX, bPosY, bPosZ, bSizeX, bSizeY, bSizeZ);
}
exports.lineEllipsoid = lineEllipsoid;
function pointCylinder(ax, ay, az, bx, by, bz, bRadius, bHeight) {
    var conditionOne = ay > by && ay < by + bHeight;
    var conditionTwo = distances_2d_1.pointPoint2dDistance(ax, az, bx, bz) < bRadius;
    return conditionOne && conditionTwo;
}
exports.pointCylinder = pointCylinder;
function sphereCylinder(ax, ay, az, aRadius, bx, by, bz, bRadius, bHeight) {
    var conditionOne = ay + aRadius > by && ay - aRadius < by + bHeight;
    var conditionTwo = distances_2d_1.pointPoint2dDistance(ax, az, bx, bz) < aRadius + bRadius;
    return conditionOne && conditionTwo;
}
exports.sphereCylinder = sphereCylinder;
function testSphereBoxMinMax(centerX, centerY, centerZ, radiusSquared, minX, minY, minZ, maxX, maxY, maxZ) {
    var radius2 = radiusSquared;
    var func = function (val) {
        var d = 0;
        if (val.z < val.x) {
            d = val.z - val.x;
        }
        else if (val.z > val.y) {
            d = val.z - val.y;
        }
        return d * d;
    };
    var params = new math_1.Vector3();
    radius2 -= func(params.setData(minX, maxX, centerX));
    radius2 -= func(params.setData(minY, maxY, centerY));
    radius2 -= func(params.setData(minZ, maxZ, centerZ));
    return radius2 >= 0;
}
exports.testSphereBoxMinMax = testSphereBoxMinMax;
//# sourceMappingURL=collisions-3d.js.map