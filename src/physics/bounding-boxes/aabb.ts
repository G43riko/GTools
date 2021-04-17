export interface AABB<Aabb, Vec, MinMax> {
    expandByScalar(distance: number): void;

    expandByVector(vec: Vec): void;

    expandByPoint(point: Vec): void;

    expandByAABB(other: Aabb): void;

    moveByScalar(distance: number): void;

    getCenter(): Vec;

    getSize(): Vec;

    getVolume(): number;

    moveByVector(vec: Vec): void;

    getMinMax(): MinMax;

    getPosition(): Vec;

    moveCenterTo(center: Vec): void;
}
