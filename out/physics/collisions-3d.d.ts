import { SimpleVector2 } from "../math";
export declare function sphereSphere(ax: number, ay: number, az: number, aRadius: number, bx: number, by: number, bz: number, bRadius: number): boolean;
export declare function pointSphere(ax: number, ay: number, az: number, bx: number, by: number, bz: number, bRadius: number): boolean;
export declare function lineSphere(ax: number, ay: number, az: number, bx: number, by: number, bz: number, sx: number, sy: number, sz: number, sr: number): boolean;
export declare enum IntersectionType {
    OUTSIDE = "OUTSIDE",
    INSIDE = "INSIDE",
    ONE_INTERSECTION = "ONE_INTERSECTION",
    TWO_INTERSECTION = "TWO_INTERSECTION"
}
export declare function lineBox2(p0X: number, p0Y: number, p0Z: number, p1X: number, p1Y: number, p1Z: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, result: SimpleVector2): IntersectionType;
export declare function BoxBoxMinMax(ax: number, ay: number, az: number, aWidth: number, aHeight: number, aDepth: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): boolean;
export declare function pointBox(bx: number, by: number, bz: number, ax: number, ay: number, az: number, aWidth: number, aHeight: number, aDepth: number): boolean;
export declare function pointBoxMinMax(bPosX: number, bPosY: number, bPosZ: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): boolean;
export declare function lineBox(a1x: number, a1y: number, a1z: number, a2x: number, a2y: number, a2z: number, bPosX: number, bPosY: number, bPosZ: number, bSizeX: number, bSizeY: number, bSizeZ: number): boolean;
export declare function lineSphere2(p0X: number, p0Y: number, p0Z: number, p1X: number, p1Y: number, p1Z: number, centerX: number, centerY: number, centerZ: number, radiusSquared: number): boolean;
export declare function boxBox(ax: number, ay: number, az: number, aw: number, ah: number, ad: number, bx: number, by: number, bz: number, bw: number, bh: number, bd: number): boolean;
export declare function pointEllipsoid(ax: number, ay: number, az: number, bPosX: number, bPosY: number, bPosZ: number, bSizeX: number, bSizeY: number, bSizeZ: number): boolean;
export declare function lineEllipsoid(aStartX: number, aStartY: number, aStartZ: number, aEndX: number, aEndY: number, aEndZ: number, bPosX: number, bPosY: number, bPosZ: number, bSizeX: number, bSizeY: number, bSizeZ: number): boolean;
export declare function pointCylinder(ax: number, ay: number, az: number, bx: number, by: number, bz: number, bRadius: number, bHeight: number): boolean;
export declare function sphereCylinder(ax: number, ay: number, az: number, aRadius: number, bx: number, by: number, bz: number, bRadius: number, bHeight: number): boolean;
export declare function testSphereBoxMinMax(centerX: number, centerY: number, centerZ: number, radiusSquared: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): boolean;
