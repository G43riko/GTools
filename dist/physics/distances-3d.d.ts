import { Vector3 } from "../math";
export declare function pointPoint3dDistance(ax: number, ay: number, az: number, bx: number, by: number, bz: number): number;
export declare function pointPointSqr3dDistance(ax: number, ay: number, az: number, bx: number, by: number, bz: number): number;
export declare function pointLine3dDistance(aStartX: number, aStartY: number, aStartZ: number, aEndX: number, aEndY: number, aEndZ: number, bCenterX: number, bCenterY: number, bCenterZ: number): number;
export declare function pointNormalPlane3dDistance(aNormal: Vector3, aPoint: Vector3, bPoint: Vector3): number;
export declare function vectorPoint3dDistance(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, pointX: number, pointY: number, pointZ: number): number;
//# sourceMappingURL=distances-3d.d.ts.map