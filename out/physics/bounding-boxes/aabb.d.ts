import { MinMax } from "gtools/types";
import { SimpleVector3 } from "../../math";
import { RayCast, RaycastResult } from "../objects/2d/ray";
export declare class AABB {
    protected readonly min: SimpleVector3;
    protected readonly max: SimpleVector3;
    constructor(min: SimpleVector3, max: SimpleVector3);
    rayCast(result: RaycastResult, ray: RayCast, maxFraction?: number): boolean;
    expandByScalar(distance: number): void;
    expandByVector(vec: SimpleVector3): void;
    expandByPoint(point: SimpleVector3): void;
    expandBtAABB(other: AABB): void;
    moveByScalar(distance: number): void;
    getCenter(): SimpleVector3;
    getSize(): SimpleVector3;
    getVolume(): number;
    moveByVector(vec: SimpleVector3): void;
    getMinMax(): MinMax;
    static fromPosAndSize(pos: SimpleVector3, size: SimpleVector3): AABB;
    getPosition(): SimpleVector3;
    static fromCenterAndSize(center: SimpleVector3, size: SimpleVector3): AABB;
    moveCenterTo(center: SimpleVector3): void;
}
