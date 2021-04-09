import { SimpleVector2 } from "../math";
export declare function collision3dSphereSphere(ax: number, ay: number, az: number, aRadius: number, bx: number, by: number, bz: number, bRadius: number): boolean;
export declare function collision3dPointSphere(ax: number, ay: number, az: number, bx: number, by: number, bz: number, bRadius: number): boolean;
export declare function collision3dLineSphere(ax: number, ay: number, az: number, bx: number, by: number, bz: number, sx: number, sy: number, sz: number, sr: number): boolean;
export declare enum IntersectionType {
    OUTSIDE = "OUTSIDE",
    INSIDE = "INSIDE",
    ONE_INTERSECTION = "ONE_INTERSECTION",
    TWO_INTERSECTION = "TWO_INTERSECTION"
}
export declare function collision3dLineBox2(p0X: number, p0Y: number, p0Z: number, p1X: number, p1Y: number, p1Z: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, result: SimpleVector2): IntersectionType;
export declare function collision3dBoxBoxMinMax(ax: number, ay: number, az: number, aWidth: number, aHeight: number, aDepth: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): boolean;
export declare function collision3dMinMaxMinMax(minAX: number, minAY: number, minAZ: number, maxAX: number, maxAY: number, maxAZ: number, minBX: number, minBY: number, minBZ: number, maxBX: number, maxBY: number, maxBZ: number): boolean;
export declare function collision3dPointBox(bx: number, by: number, bz: number, ax: number, ay: number, az: number, aWidth: number, aHeight: number, aDepth: number): boolean;
export declare function collision3dPointBoxMinMax(bPosX: number, bPosY: number, bPosZ: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): boolean;
export declare function collision3dLineBox(a1x: number, a1y: number, a1z: number, a2x: number, a2y: number, a2z: number, bPosX: number, bPosY: number, bPosZ: number, bSizeX: number, bSizeY: number, bSizeZ: number): boolean;
export declare function collision3dLineSphere2(p0X: number, p0Y: number, p0Z: number, p1X: number, p1Y: number, p1Z: number, centerX: number, centerY: number, centerZ: number, radiusSquared: number): boolean;
export declare function collision3dBoxBox(ax: number, ay: number, az: number, aw: number, ah: number, ad: number, bx: number, by: number, bz: number, bw: number, bh: number, bd: number): boolean;
export declare function collision3dPointEllipsoid(ax: number, ay: number, az: number, bPosX: number, bPosY: number, bPosZ: number, bSizeX: number, bSizeY: number, bSizeZ: number): boolean;
export declare function collision3dLineEllipsoid(aStartX: number, aStartY: number, aStartZ: number, aEndX: number, aEndY: number, aEndZ: number, bPosX: number, bPosY: number, bPosZ: number, bSizeX: number, bSizeY: number, bSizeZ: number): boolean;
export declare function collision3dPointCylinder(ax: number, ay: number, az: number, bx: number, by: number, bz: number, bRadius: number, bHeight: number): boolean;
export declare function collision3dBoxCylinder(ax: number, ay: number, az: number, aSizeX: number, aSizeY: number, aSizeZ: number, bx: number, by: number, bz: number, bRadius: number, bHeight: number): boolean;
export declare function collision3dSphereCylinder(ax: number, ay: number, az: number, aRadius: number, bx: number, by: number, bz: number, bRadius: number, bHeight: number): boolean;
export declare function collision3dSphereBoxMinMax(centerX: number, centerY: number, centerZ: number, radiusSquared: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): boolean;
//# sourceMappingURL=collisions-3d.d.ts.map