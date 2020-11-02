import { SimpleVector4 } from "./simple-vector4";
export declare class Vector4 implements SimpleVector4 {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
    static get ZERO(): Vector4;
    static get ONE(): Vector4;
    toArray(): [number, number, number, number];
    static equals(vecA: SimpleVector4, vecB: SimpleVector4): boolean;
    get avg(): number;
    static min(vecA: SimpleVector4, vecB: SimpleVector4): Vector4;
    static max(vecA: SimpleVector4, vecB: SimpleVector4): Vector4;
    static dist(vecA: SimpleVector4, vecB: SimpleVector4): number;
    static normalize<T extends SimpleVector4>(vec: T): T;
    getNormalized(): SimpleVector4;
    get length(): number;
    clone(): Vector4;
    normalize(): this;
    mul(value: SimpleVector4 | number): this;
    add(vec: SimpleVector4): this;
    sub(vec: SimpleVector4): this;
    static fromArray(value: [number, number, number, number] | Float32Array): Vector4;
    static from(valA: number, valB?: number, valC?: number, valD?: number): Vector4;
    static isVector(item: any): item is SimpleVector4;
    setFromValues(x: number, y: number, z: number, w: number): this;
    set(vec: SimpleVector4): this;
}
