import { SimpleVector3 } from "./simple-vector3";
import { Vector2 } from "./vector2";

export class Vector3 implements SimpleVector3 {
    public constructor(public x = 0,
                       public y = 0,
                       public z = 0) {
    }

    public static get UP(): Vector3 {
        return new Vector3(0, 1, 0);
    }

    public static get ZERO(): Vector3 {
        return new Vector3(0, 0, 0);
    }

    public static get ONE(): Vector3 {
        return new Vector3(1, 1, 1);
    }

    public get avg(): number {
        return (this.x + this.y + this.z) / 3;
    }

    public get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    public static equals(vecA: SimpleVector3, vecB: SimpleVector3): boolean {
        if (vecA === vecB) {
            return true;
        }

        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z;
    }

    public static sub(vecA: SimpleVector3, vecB: SimpleVector3): Vector3 {
        return new Vector3(vecA.x - vecB.x, vecA.y - vecB.y, vecA.z - vecB.z);
    }

    public static add(vecA: SimpleVector3, vecB: SimpleVector3): Vector3 {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    }

    public static sum(vecA: SimpleVector3, vecB: SimpleVector3): Vector3 {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    }

    public static mulNum(vecA: SimpleVector3, val: number): Vector3 {
        return new Vector3(vecA.x * val, vecA.y * val, vecA.z * val);
    }

    public static mul(vecA: SimpleVector3, vecB: SimpleVector3): Vector3 {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    }

    public static min(vecA: SimpleVector3, vecB: SimpleVector3): Vector3 {
        return new Vector3(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y), Math.min(vecA.z, vecB.z));
    }

    public static createFromSphericalCoords(radius: number, phi: number, theta: number): Vector3 {
        const sinPhiRadius = Math.sin(phi) * radius;

        const x = sinPhiRadius * Math.sin(theta);
        const y = Math.cos(phi) * radius;
        const z = sinPhiRadius * Math.cos(theta);

        return new Vector3(x, y, z);
    }

    public static max(vecA: SimpleVector3, vecB: SimpleVector3): Vector3 {
        return new Vector3(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y), Math.max(vecA.z, vecB.z));
    }

    public static dist(vecA: SimpleVector3, vecB: SimpleVector3): number {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) + Math.pow(vecA.y - vecB.y, 2) + Math.pow(vecA.z - vecB.z, 2));
    }

    public static normalize<T extends SimpleVector3>(vec: T): T {
        const length = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);
        vec.x /= length;
        vec.y /= length;
        vec.z /= length;

        return vec;
    }

    public get xy(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    public static from(valA: number, valB = valA, valC = valA): Vector3 {
        return new Vector3(valA, valB, valC);
    }

    public static isVector(item: any): item is SimpleVector3 {
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z);
    }

    public toArray(): [number, number, number] {
        return [this.x, this.y, this.z];
    }

    public sum(): number {
        return this.x + this.y + this.z;
    }

    public getNormalized(): SimpleVector3 {
        return this.clone().normalize();
    }

    public clone(): Vector3 {
        return new Vector3(this.x, this.y, this.z);
    }

    public normalize(): this {
        const length = this.length;
        this.x /= length;
        this.y /= length;
        this.z /= length;

        return this;
    }

    public mul(value: SimpleVector3 | number): this {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
            this.z *= value;
        } else {
            this.x *= value.x;
            this.y *= value.y;
            this.z *= value.z;
        }

        return this;
    }

    public add(vec: SimpleVector3): this {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;

        return this;
    }

    public cross(v: SimpleVector3): Vector3 {
        const localX = this.y * v.z - this.z * v.y;
        const localY = this.z * v.x - this.x * v.z;
        const localZ = this.x * v.y - this.y * v.x;

        return new Vector3(localX, localY, localZ);
    }

    public dot(v: SimpleVector3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    public sub(vec: SimpleVector3): this {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;

        return this;
    }

    public setData(x: number, y: number, z: number): this {
        this.x = x;
        this.y = y;
        this.z = z;

        return this;
    }

    public set(vec: SimpleVector3): this {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;

        return this;
    }

    public get yx(): Vector2 {
        return new Vector2(this.y, this.x);
    }

    public get yz(): Vector2 {
        return new Vector2(this.y, this.z);
    }

    public get zy(): Vector2 {
        return new Vector2(this.z, this.y);
    }

    public get xz(): Vector2 {
        return new Vector2(this.x, this.z);
    }

    public get zx(): Vector2 {
        return new Vector2(this.z, this.x);
    }

    public static fromArray(value: [number, number, number] | Float32Array): Vector3 {
        return new Vector3(value[0], value[1], value[2]);
    }
}
