import type { ReadonlySimpleVector4, SimpleVector4 } from "@g43/types";
import type { Vector } from "./vector.ts";

// eslint-disable-next-line no-use-before-define
export class Vector4 implements SimpleVector4, Vector<SimpleVector4, Vector4> {
    public static readonly TMP: Vector4 = new Vector4();

    public static createEmpty(): Vector4 {
        return new Vector4(0, 0, 0, 0);
    }
    public static fromArray(val: [number, number, number, number] | Float32Array): Vector4 {
        return new Vector4(val[0], val[1], val[2], val[3]);
    }

    public static from(valA: number, valB = valA, valC = valB, valD = valC): Vector4 {
        return new Vector4(valA, valB, valC, valD);
    }
    public constructor(
        public x = 0,
        public y = 0,
        public z = 0,
        public w = 0,
    ) {
    }
    public toReadonlyProxy(): ReadonlySimpleVector4 {
        // deno-lint-ignore no-this-alias
        const vec = this;
        return {
            get x(): number {
                return vec.x;
            },
            get y(): number {
                return vec.y;
            },
            get z(): number {
                return vec.z;
            },
            get w(): number {
                return vec.w;
            },
        };
    }

    public static get ZERO(): Vector4 {
        return new Vector4(0, 0, 0, 0);
    }

    public getInverted(): Vector4;
    public getInverted<Vec extends SimpleVector4>(result: Vec): Vec;
    public getInverted(result: Vector4 = this.clone()): Vector4 {
        return Vector4.invert(result);
    }

    public dist(vector: ReadonlySimpleVector4): number {
        return Vector4.dist(this, vector);
    }

    public dot(vector: ReadonlySimpleVector4): number {
        return Vector4.dot(this, vector);
    }

    public static dot(vecA: ReadonlySimpleVector4, vecB: ReadonlySimpleVector4): number {
        return vecA.x * vecB.x + vecA.y * vecB.y + vecA.z * vecB.z + vecA.w * vecB.w;
    }

    public angle(vector: ReadonlySimpleVector4): number {
        const dot = Vector4.dot(this, vector);
        const lenA = Vector4.size(this);
        const lenB = Vector4.size(vector);
        const cos = dot / (lenA * lenB);

        return Math.acos(cos);
    }

    public equals(vector: any): boolean {
        return Vector4.equals(this, vector);
    }

    public isZero(): boolean {
        return this.x === 0 && this.y === 0 && this.z === 0;
    }

    public static invert<T extends SimpleVector4>(vec: T, result: T = vec): T {
        result.x = -vec.x;
        result.y = -vec.y;
        result.z = -vec.z;
        result.w = -vec.w;

        return result;
    }

    public static get ONE(): Vector4 {
        return new Vector4(1, 1, 1, 1);
    }

    public get avg(): number {
        return (this.x + this.y + this.z + this.w) / 4;
    }

    public static sizeSQ(vec: ReadonlySimpleVector4): number {
        return vec.x * vec.x + vec.y * vec.y + vec.z * vec.z + vec.w * vec.w;
    }

    public static size(vec: ReadonlySimpleVector4): number {
        return Math.sqrt(Vector4.sizeSQ(vec));
    }

    public get length(): number {
        return Vector4.size(this);
    }

    public static equals(vecA: ReadonlySimpleVector4, vecB: ReadonlySimpleVector4): boolean {
        if (vecA === vecB) {
            return true;
        }

        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z && vecA.w === vecB.w;
    }

    public static equalsApproximately(
        vecA: ReadonlySimpleVector4,
        vecB: ReadonlySimpleVector4,
        EPSILON = 0.0000001,
    ): boolean {
        if (vecA === vecB) {
            return true;
        }

        const equal = (a: number, b: number): boolean =>
            Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));

        return equal(vecA.x, vecB.x) && equal(vecA.y, vecB.y) && equal(vecA.z, vecB.z) && equal(vecA.w, vecB.w);
    }

    public static min(vecA: ReadonlySimpleVector4, vecB: ReadonlySimpleVector4): Vector4 {
        return new Vector4(
            Math.min(vecA.x, vecB.x),
            Math.min(vecA.y, vecB.y),
            Math.min(vecA.z, vecB.z),
            Math.min(vecA.w, vecB.w),
        );
    }

    public static max(vecA: ReadonlySimpleVector4, vecB: ReadonlySimpleVector4): Vector4 {
        return new Vector4(
            Math.max(vecA.x, vecB.x),
            Math.max(vecA.y, vecB.y),
            Math.max(vecA.z, vecB.z),
            Math.max(vecA.w, vecB.w),
        );
    }

    public static dist(vecA: ReadonlySimpleVector4, vecB: ReadonlySimpleVector4): number {
        return Math.sqrt(
            (vecA.x - vecB.x) ** 2 +
                (vecA.y - vecB.y) ** 2 +
                (vecA.z - vecB.z) ** 2 +
                (vecA.w - vecB.w) ** 2,
        );
    }

    public divNums(x: number, y: number, z: number, w: number): this {
        this.x /= x;
        this.y /= y;
        this.z /= z;
        this.w /= w;

        return this;
    }

    public divNum(value: number): this {
        return this.divNums(value, value, value, value);
    }

    public div(value: ReadonlySimpleVector4): this {
        return this.divNums(value.x, value.y, value.z, value.w);
    }

    public get sum(): number {
        return this.x + this.y + this.z + this.w;
    }

    public get max(): number {
        return Math.max(this.x, this.y, this.z, this.w);
    }

    public get min(): number {
        return Math.min(this.x, this.y, this.z, this.w);
    }

    public static isVector(item: any): item is SimpleVector4 {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z) && !isNaN(item.w);
    }

    public toArray(): [x: number, y: number, z: number, w: number] {
        return [this.x, this.y, this.z, this.w];
    }

    public getNormalized(): Vector4 {
        return this.clone().normalize();
    }

    public clone(): Vector4 {
        return new Vector4(this.x, this.y, this.z, this.w);
    }

    public static normalize<T extends SimpleVector4>(vec: T, result: T = vec): T {
        const length = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z + vec.w * vec.w);
        result.x /= length;
        result.y /= length;
        result.z /= length;
        result.w /= length;

        return result;
    }

    public normalize(): this {
        return Vector4.normalize(this);
    }

    public mulNums(x: number, y: number, z: number, w: number): this {
        this.x *= x;
        this.y *= y;
        this.z *= z;
        this.w *= w;

        return this;
    }

    public mulNum(value: number): this {
        return this.mulNums(value, value, value, value);
    }

    public mul(value: ReadonlySimpleVector4): this {
        return this.mulNums(value.x, value.y, value.z, value.w);
    }

    public addNums(x: number, y: number, z: number, w: number): this {
        this.x += x;
        this.y += y;
        this.z += z;
        this.w += w;

        return this;
    }

    public addNum(value: number): this {
        return this.addNums(value, value, value, value);
    }

    public add(vec: ReadonlySimpleVector4): this {
        return this.addNums(vec.x, vec.y, vec.z, vec.w);
    }

    public subNums(x: number, y: number, z: number, w: number): this {
        this.x -= x;
        this.y -= y;
        this.z -= z;
        this.w -= w;

        return this;
    }

    public subNum(value: number): this {
        return this.subNums(value, value, value, value);
    }

    public sub(vec: ReadonlySimpleVector4): this {
        return this.subNums(vec.x, vec.y, vec.z, vec.w);
    }

    public setData(x: number, y: number, z: number, w: number): this {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        return this;
    }

    public invert(): this {
        return Vector4.invert(this, this);
    }

    public getAbs(): Vector4 {
        return new Vector4(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z), Math.abs(this.w));
    }

    public set(vec: ReadonlySimpleVector4): this {
        return this.setData(vec.x, vec.y, vec.z, vec.w);
    }
}
