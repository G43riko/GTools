import { SimpleVector4 } from "./simple-vector4";

export class Vector4 implements SimpleVector4 {
    public constructor(public x = 0,
                       public y = 0,
                       public z = 0,
                       public w = 0) {
    }

    public static get ZERO(): Vector4 {
        return new Vector4(0, 0, 0, 0);
    }

    public static get ONE(): Vector4 {
        return new Vector4(1, 1, 1, 1);
    }

    public static fromArray(val: [number, number, number, number] | Float32Array): Vector4 {
        return new Vector4(val[0], val[1], val[2], val[3]);
    }

    public static from(valA: number, valB = valA, valC = valB, valD = valC): Vector4 {
        return new Vector4(valA, valB, valC, valD);
    }

    public get avg(): number {
        return (this.x + this.y + this.z + this.w) / 4;
    }

    public get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    public static equals(vecA: SimpleVector4, vecB: SimpleVector4): boolean {
        if (vecA === vecB) {
            return true;
        }

        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z && vecA.w === vecB.w;
    }

    public static min(vecA: SimpleVector4, vecB: SimpleVector4): Vector4 {
        return new Vector4(
            Math.min(vecA.x, vecB.x),
            Math.min(vecA.y, vecB.y),
            Math.min(vecA.z, vecB.z),
            Math.min(vecA.w, vecB.w),
        );
    }

    public static max(vecA: SimpleVector4, vecB: SimpleVector4): Vector4 {
        return new Vector4(
            Math.max(vecA.x, vecB.x),
            Math.max(vecA.y, vecB.y),
            Math.max(vecA.z, vecB.z),
            Math.max(vecA.w, vecB.w),
        );
    }

    public static dist(vecA: SimpleVector4, vecB: SimpleVector4): number {
        return Math.sqrt(
            Math.pow(vecA.x - vecB.x, 2) +
            Math.pow(vecA.y - vecB.y, 2) +
            Math.pow(vecA.z - vecB.z, 2) +
            Math.pow(vecA.w - vecB.w, 2),
        );
    }

    public static normalize<T extends SimpleVector4>(vec: T): T {
        const length = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z + vec.w * vec.w);
        vec.x /= length;
        vec.y /= length;
        vec.z /= length;
        vec.w /= length;

        return vec;
    }

    public static isVector(item: any): item is SimpleVector4 {
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z) && !isNaN(item.w);
    }

    public toArray(): [number, number, number, number] {
        return [this.x, this.y, this.z, this.w];
    }

    public getNormalized(): SimpleVector4 {
        return this.clone().normalize();
    }

    public clone(): Vector4 {
        return new Vector4(this.x, this.y, this.z, this.w);
    }

    public normalize(): this {
        const length = this.length;
        this.x /= length;
        this.y /= length;
        this.z /= length;
        this.w /= length;

        return this;
    }

    public mul(value: SimpleVector4 | number): this {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
            this.z *= value;
            this.w *= value;
        } else {
            this.x *= value.x;
            this.y *= value.y;
            this.z *= value.z;
            this.w *= value.w;
        }

        return this;
    }

    public add(vec: SimpleVector4): this {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        this.w += vec.w;

        return this;
    }

    public sub(vec: SimpleVector4): this {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        this.w -= vec.w;

        return this;
    }

    public setData(x: number, y: number, z: number, w: number): this {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        return this;
    }

    public set(vec: SimpleVector4): this {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        this.w = vec.w;

        return this;
    }
}
