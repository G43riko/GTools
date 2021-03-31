import { SimpleVector3 } from "./simple-vector3";
import { Vector2 } from "./vector2";
export declare class Vector3 implements SimpleVector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    static get UP(): Vector3;
    static get ZERO(): Vector3;
    static get ONE(): Vector3;
    get avg(): number;
    get length(): number;
    static equals(vecA: SimpleVector3, vecB: SimpleVector3): boolean;
    static sub(vecA: SimpleVector3, vecB: SimpleVector3): Vector3;
    /**
     * @deprecated use {@link sum} instead
     */
    static add(vecA: SimpleVector3, vecB: SimpleVector3): Vector3;
    static sum<T extends SimpleVector3>(vecA: SimpleVector3, vecB: SimpleVector3, result?: T): T;
    static sumNum<T extends SimpleVector3>(vecA: SimpleVector3, val: number, result?: T): T;
    static dot(vecA: SimpleVector3, vecB: SimpleVector3): number;
    static mul<T extends SimpleVector3>(vecA: SimpleVector3, vecB: SimpleVector3, result?: T): T;
    static mulNum<T extends SimpleVector3>(vecA: SimpleVector3, val: number, result?: T): T;
    static min<T extends SimpleVector3>(vecA: SimpleVector3, vecB: SimpleVector3, result?: T): T;
    static max<T extends SimpleVector3>(vecA: SimpleVector3, vecB: SimpleVector3, result?: T): T;
    static createFromSphericalCoords(radius: number, phi: number, theta: number): Vector3;
    static distSqrt(vecA: SimpleVector3, vecB: SimpleVector3): number;
    static dist(vecA: SimpleVector3, vecB: SimpleVector3): number;
    static normalize<T extends SimpleVector3>(vec: T): T;
    get xy(): Vector2;
    static from(valA: number, valB?: number, valC?: number): Vector3;
    static fromVec(vec: SimpleVector3): Vector3;
    static fromArray(value: [number, number, number] | Float32Array): Vector3;
    static isVector(item: any): item is SimpleVector3;
    toArray(): [number, number, number];
    sum(): number;
    getNormalized(): SimpleVector3;
    clone(): Vector3;
    normalize(): this;
    mul(value: SimpleVector3 | number): this;
    add(vec: SimpleVector3): this;
    cross(v: SimpleVector3): Vector3;
    dot(v: SimpleVector3): number;
    sub(vec: SimpleVector3): this;
    setData(x: number, y: number, z: number): this;
    set(vec: SimpleVector3): this;
    get yx(): Vector2;
    get yz(): Vector2;
    get zy(): Vector2;
    get xz(): Vector2;
    get zx(): Vector2;
}
//# sourceMappingURL=vector3.d.ts.map