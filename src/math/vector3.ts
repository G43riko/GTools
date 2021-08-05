import { ReadonlySimpleVector3, SimpleVector3 } from "./simple-vector3";
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

    public static lengthOf(vector: ReadonlySimpleVector3): number {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
    }

    public get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    public static equals(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): boolean {
        if (vecA === vecB) {
            return true;
        }

        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z;
    }

    public static sub(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): Vector3 {
        return new Vector3(vecA.x - vecB.x, vecA.y - vecB.y, vecA.z - vecB.z);
    }

    /**
     * @deprecated use {@link sum} instead
     */
    public static add(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): Vector3 {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    }

    public static sum<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3, result: T = new Vector3() as unknown as T): T {
        result.x = vecA.x + vecB.x;
        result.y = vecA.y + vecB.y;
        result.z = vecA.z + vecB.z;

        return result;
    }

    public static sumNum<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, val: number, result: T = new Vector3() as unknown as T): T {
        result.x = vecA.x + val;
        result.y = vecA.y + val;
        result.z = vecA.z + val;

        return result;
    }

    public static dot(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): number {
        return vecA.x * vecB.x + vecA.y * vecB.y + vecA.z * vecB.z;
    }

    public static mul<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3, result: T = new Vector3() as unknown as T): T {
        result.x = vecA.x * vecB.x;
        result.y = vecA.y * vecB.y;
        result.z = vecA.z * vecB.z;

        return result;
    }

    public static mulNum<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, val: number, result: T = new Vector3() as unknown as T): T {
        result.x = vecA.x * val;
        result.y = vecA.y * val;
        result.z = vecA.z * val;

        return result;
    }

    public static min<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3, result: T = new Vector3() as unknown as T): T {
        result.x = Math.min(vecA.x, vecB.x);
        result.y = Math.min(vecA.y, vecB.y);
        result.z = Math.min(vecA.z, vecB.z);

        return result;
    }

    public static max<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3, result: T = new Vector3() as unknown as T): T {
        result.x = Math.max(vecA.x, vecB.x);
        result.y = Math.max(vecA.y, vecB.y);
        result.z = Math.max(vecA.z, vecB.z);

        return result;
    }

    public static createFromSphericalCoords(radius: number, phi: number, theta: number): Vector3 {
        const sinPhiRadius = Math.sin(phi) * radius;

        const x = sinPhiRadius * Math.sin(theta);
        const y = Math.cos(phi) * radius;
        const z = sinPhiRadius * Math.cos(theta);

        return new Vector3(x, y, z);
    }

    public static distSqrt(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): number {
        return Math.pow(vecA.x - vecB.x, 2) + Math.pow(vecA.y - vecB.y, 2) + Math.pow(vecA.z - vecB.z, 2);
    }

    public static dist(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): number {
        return Math.sqrt(Vector3.distSqrt(vecA, vecB));
    }

    public static normalize<T extends SimpleVector3>(vec: T): T {
        const length = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);
        vec.x /= length;
        vec.y /= length;
        vec.z /= length;

        return vec;
    }

    public static from(valA: number, valB = valA, valC = valA): Vector3 {
        return new Vector3(valA, valB, valC);
    }

    public static fromVec(vec: ReadonlySimpleVector3): Vector3 {
        return new Vector3(vec.x, vec.y, vec.z);
    }

    public static fromArray(value: [number, number, number] | Float32Array): Vector3 {
        return new Vector3(value[0], value[1], value[2]);
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

    public mul(value: ReadonlySimpleVector3 | number): this {
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

    public add(vec: ReadonlySimpleVector3): this {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;

        return this;
    }

    public cross(v: ReadonlySimpleVector3): Vector3 {
        const localX = this.y * v.z - this.z * v.y;
        const localY = this.z * v.x - this.x * v.z;
        const localZ = this.x * v.y - this.y * v.x;

        return new Vector3(localX, localY, localZ);
    }

    public dot(v: ReadonlySimpleVector3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    public sub(vec: ReadonlySimpleVector3): this {
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

    public set(vec: ReadonlySimpleVector3): this {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;

        return this;
    }

    public get xy(): Vector2 {
        return new Vector2(this.x, this.y);
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
}
