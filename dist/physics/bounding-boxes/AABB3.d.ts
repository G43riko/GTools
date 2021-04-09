import { MinMax2D } from "gtools/types";
import { SimpleVector3 } from "../../math";
import { RayCast, RaycastResult } from "../objects/2d/ray-2d";
export declare class AABB3 {
    protected readonly min: SimpleVector3;
    protected readonly max: SimpleVector3;
    constructor(min: SimpleVector3, max: SimpleVector3);
    rayCast(result: RaycastResult, ray: RayCast, maxFraction?: number): boolean;
    expandByScalar(distance: number): void;
    expandByVector(vec: SimpleVector3): void;
    expandByPoint(point: SimpleVector3): void;
    expandBtAABB(other: AABB3): void;
    moveByScalar(distance: number): void;
    getCenter(): SimpleVector3;
    getSize(): SimpleVector3;
    getVolume(): number;
    moveByVector(vec: SimpleVector3): void;
    getMinMax(): MinMax2D;
    static fromPosAndSize(pos: SimpleVector3, size: SimpleVector3): AABB3;
    getPosition(): SimpleVector3;
    static fromCenterAndSize(center: SimpleVector3, size: SimpleVector3): AABB3;
    moveCenterTo(center: SimpleVector3): void;
}
//# sourceMappingURL=AABB3.d.ts.map