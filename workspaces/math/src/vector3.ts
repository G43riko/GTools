import type { ReadonlyMinMax3D, ReadonlySimpleVector3, ReadonlyTrinity, SimpleVector3 } from "@g43/types";
import { Mat4 } from "./mat4.ts";
import type { Quaternion } from "./quaternion.ts";
import { SimpleVector } from "./simple-vector.ts";
import type { Vector } from "./vector.ts";
import { Vector2 } from "./vector2.ts";
import { Vector4 } from "./vector4.ts";

// eslint-disable-next-line no-use-before-define
export class Vector3 implements SimpleVector3, Vector<SimpleVector3, Vector3> {
    public static readonly TMP: Vector3 = new Vector3();

    public static get UP(): Vector3 {
        return new Vector3(0, 1, 0);
    }

    public static get ZERO(): Vector3 {
        return new Vector3(0, 0, 0);
    }

    public static get ONE(): Vector3 {
        return new Vector3(1, 1, 1);
    }

    public static createEmpty(): Vector3 {
        return new Vector3(0, 0, 0);
    }

    public static from(valA: number, valB = valA, valC = valA): Vector3 {
        return new Vector3(valA, valB, valC);
    }

    public static fromVec(vec: ReadonlySimpleVector3): Vector3 {
        return new Vector3(vec.x, vec.y, vec.z);
    }

    public static fromArray(value: ReadonlyTrinity<number> | Float32Array): Vector3 {
        return new Vector3(value[0], value[1], value[2]);
    }

    public constructor(
        public x = 0,
        public y = 0,
        public z = 0,
    ) {
    }

    public toReadonlyProxy(): ReadonlySimpleVector3 {
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
        };
    }
    /**
     * https://glmatrix.net/docs/vec3.js.html#line522
     */
    public static transformQuat<T extends SimpleVector3>(
        q: Quaternion,
        a: ReadonlySimpleVector3,
        out = SimpleVector.empty3() as T,
    ): T {
        const qx = q.x;
        const qy = q.y;
        const qz = q.z;
        const qw = q.w;
        const x = a.x;
        const y = a.y;
        const z = a.z;

        let uvx = qy * z - qz * y;
        let uvy = qz * x - qx * z;
        let uvz = qx * y - qy * x;

        let uuvx = qy * uvz - qz * uvy;
        let uuvy = qz * uvx - qx * uvz;
        let uuvz = qx * uvy - qy * uvx;

        const w2 = qw * 2;
        uvx *= w2;
        uvy *= w2;
        uvz *= w2;

        uuvx *= 2;
        uuvy *= 2;
        uuvz *= 2;

        out.x = x + uvx + uuvx;
        out.y = y + uvy + uuvy;
        out.z = z + uvz + uuvz;

        return out;
    }

    public static generateRandomUnitVectorWithinCone(
        coneDirection: ReadonlySimpleVector3,
        angleInRadians: number,
    ): SimpleVector3 {
        const cosAngle = Math.cos(angleInRadians);
        const theta = Math.random() * 2 * Math.PI;
        const z = cosAngle + Math.random() * (1 - cosAngle);
        const rootOneMinusZSquared = Math.sqrt(1 - z * z);
        const x = rootOneMinusZSquared * Math.cos(theta);
        const y = rootOneMinusZSquared * Math.sin(theta);

        const direction = new Vector4(x, y, z, 1);
        if (coneDirection.x !== 0 || coneDirection.y !== 0 || (coneDirection.z !== 1 && coneDirection.z !== -1)) {
            const rotateAxis = this.fromVec(coneDirection).cross(SimpleVector.FORWARD_3);
            rotateAxis.normalize();
            const rotateAngle = Math.acos(this.dot(coneDirection, SimpleVector.FORWARD_3));
            const rotationMatrix = Mat4.create();
            rotationMatrix.rotate(-rotateAngle, rotateAxis);

            return rotationMatrix.transformVector(direction);
        }
        if (coneDirection.z === -1) {
            direction.z *= -1;
        }

        return SimpleVector.clone3(direction);
    }

    public static reflect<Result extends SimpleVector3>(
        vector: ReadonlySimpleVector3,
        normal: ReadonlySimpleVector3,
        result: Result,
    ): Result;
    public static reflect(vector: ReadonlySimpleVector3, normal: ReadonlySimpleVector3): Vector3;
    public static reflect<Result extends SimpleVector3>(
        vector: Result,
        normal: ReadonlySimpleVector3,
        result = new Vector3(),
    ): Result {
        // Calculate the dot product of the vector and the normal
        const dotProduct = this.dot(vector, normal);

        // Calculate the reflection vector
        result.x = vector.x - 2 * dotProduct * normal.x;
        result.y = vector.y - 2 * dotProduct * normal.y;
        result.z = vector.z - 2 * dotProduct * normal.z;

        return result as unknown as Result;
    }

    public static rotate(vector: SimpleVector3, axis: ReadonlySimpleVector3, angleInRadians: number): void {
        if (Math.random() < 2) {
            throw new Error("Not tested");
        }
        const sinAngle = Math.sin(-angleInRadians);
        const cosAngle = Math.cos(-angleInRadians);

        const result = this.fromVec(vector);

        result.cross(this.mulNum(axis, sinAngle)); // Rotation on local X

        result.add(result.mulNum(cosAngle)); // Rotation on local Z

        result.add(this.mulNum(axis, result.dot(this.mulNum(axis, 1 - cosAngle)))); // Rotation on local Y

        vector.x = result.x;
        vector.y = result.y;
        vector.z = result.z;
        // return this.cross(axis.mul(sinAngle)).add(           //Rotation on local X
        //     (this.mul(cosAngle)).add(                     //Rotation on local Z
        //         axis.mul(this.dot(axis.mul(1 - cosAngle))))); //Rotation on local Y
    }

    public equals(vector: any): boolean {
        return Vector3.equals(this, vector);
    }

    public isZero(): boolean {
        return this.x === 0 && this.y === 0 && this.z === 0;
    }

    public dist(vector: ReadonlySimpleVector3): number {
        return Vector3.dist(this, vector);
    }

    public angle(v: ReadonlySimpleVector3): number {
        return Vector3.angle(this, v);
    }

    public getInverted(): Vector3;
    public getInverted<Vec extends SimpleVector3>(result: Vec): Vec;
    public getInverted(result: Vector3 = this.clone()): Vector3 {
        return Vector3.invert(result);
    }


    public getAbs(): Vector3 {
        return new Vector3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
    }

    public get avg(): number {
        return this.sum / 3;
    }

    public divNums(x: number, y: number, z: number): this {
        this.x /= x;
        this.y /= y;
        this.z /= z;

        return this;
    }

    public divNum(value: number): this {
        return this.divNums(value, value, value);
    }

    public div(vector: ReadonlySimpleVector3): this {
        return this.divNums(vector.x, vector.y, vector.z);
    }

    public static sizeSQ(vector: ReadonlySimpleVector3): number {
        return vector.x * vector.x + vector.y * vector.y + vector.z * vector.z;
    }

    public static size(vector: ReadonlySimpleVector3): number {
        return Math.sqrt(this.sizeSQ(vector));
    }

    public get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    public invert(): this {
        return Vector3.invert(this);
    }

    public static invert<T extends SimpleVector3>(vec: T, result: T = vec): T {
        result.x = -vec.x;
        result.y = -vec.y;
        result.z = -vec.z;

        return result;
    }

    public static equals(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): boolean {
        if (vecA === vecB) {
            return true;
        }

        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z;
    }

    public static toString(vector?: unknown, fixedSize?: number): string {
        if (this.isVector(vector)) {
            if (fixedSize) {
                return `[${vector.x.toFixed(fixedSize)}, ${vector.y.toFixed(fixedSize)}, ${
                    vector.z.toFixed(fixedSize)
                }]`;
            }

            return `[${vector.x}, ${vector.y}, ${vector.z}]`;
        }

        return String(vector);
    }

    public static createOutlineMinMax(points: readonly ReadonlySimpleVector3[]): ReadonlyMinMax3D {
        const min = {
            x: Infinity,
            y: Infinity,
            z: Infinity,
        };
        const max = {
            x: -Infinity,
            y: -Infinity,
            z: -Infinity,
        };

        points.forEach((p) => {
            if (p.x < min.x) {
                min.x = p.x;
            }
            if (p.y < min.y) {
                min.y = p.y;
            }
            if (p.z < min.z) {
                min.z = p.z;
            }
            if (p.x > max.x) {
                max.x = p.x;
            }
            if (p.y > max.y) {
                max.y = p.y;
            }
            if (p.z > max.z) {
                max.z = p.z;
            }
        });

        return { min, max };
    }

    public static equalsApproximately(
        vecA: ReadonlySimpleVector3,
        vecB: ReadonlySimpleVector3,
        EPSILON = 0.0000001,
    ): boolean {
        if (vecA === vecB) {
            return true;
        }

        const equal = (a: number, b: number): boolean =>
            Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));

        return equal(vecA.x, vecB.x) && equal(vecA.y, vecB.y) && equal(vecA.z, vecB.z);
    }

    public static sub(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): Vector3;
    public static sub<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3, result?: T): T;
    public static sub<T extends SimpleVector3>(
        vecA: ReadonlySimpleVector3,
        vecB: ReadonlySimpleVector3,
        result: T = new Vector3() as unknown as T,
    ): T {
        result.x = vecA.x - vecB.x;
        result.y = vecA.y - vecB.y;
        result.z = vecA.z - vecB.z;

        return result;
    }

    public static sum(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): Vector3;
    public static sum<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3, result?: T): T;
    public static sum<T extends SimpleVector3>(
        vecA: ReadonlySimpleVector3,
        vecB: ReadonlySimpleVector3,
        result: T = new Vector3() as unknown as T,
    ): T {
        result.x = vecA.x + vecB.x;
        result.y = vecA.y + vecB.y;
        result.z = vecA.z + vecB.z;

        return result;
    }

    public static sumNum(vecA: ReadonlySimpleVector3, val: number): Vector3;
    public static sumNum<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, val: number, result?: T): T;
    public static sumNum<T extends SimpleVector3>(
        vecA: ReadonlySimpleVector3,
        val: number,
        result: T = new Vector3() as unknown as T,
    ): T {
        result.x = vecA.x + val;
        result.y = vecA.y + val;
        result.z = vecA.z + val;

        return result;
    }

    public static dot(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): number {
        return vecA.x * vecB.x + vecA.y * vecB.y + vecA.z * vecB.z;
    }

    public static mul(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): Vector3;
    public static mul<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3, result?: T): T;
    public static mul<T extends SimpleVector3>(
        vecA: ReadonlySimpleVector3,
        vecB: ReadonlySimpleVector3,
        result: T = new Vector3() as unknown as T,
    ): T {
        result.x = vecA.x * vecB.x;
        result.y = vecA.y * vecB.y;
        result.z = vecA.z * vecB.z;

        return result;
    }

    public static mulNum(vecA: ReadonlySimpleVector3, val: number): Vector3;
    public static mulNum<T extends SimpleVector3>(vecA: ReadonlySimpleVector3, val: number, result?: T): T;
    public static mulNum<T extends SimpleVector3>(
        vecA: ReadonlySimpleVector3,
        val: number,
        result: T = new Vector3() as unknown as T,
    ): T {
        result.x = vecA.x * val;
        result.y = vecA.y * val;
        result.z = vecA.z * val;

        return result;
    }

    public static min<T extends SimpleVector3>(
        vecA: ReadonlySimpleVector3,
        vecB: ReadonlySimpleVector3,
        result: T = new Vector3() as unknown as T,
    ): T {
        result.x = Math.min(vecA.x, vecB.x);
        result.y = Math.min(vecA.y, vecB.y);
        result.z = Math.min(vecA.z, vecB.z);

        return result;
    }

    public static refract<T extends SimpleVector3>(
        normal: ReadonlySimpleVector3,
        vector: ReadonlySimpleVector3,
        result: T = new Vector3() as unknown as T,
    ): ReadonlySimpleVector3 {
        return this.sub(
            vector,
            this.mulNum(normal, this.dot(vector, normal) * 2, result),
            result,
        );
    }

    /**
     * returns angle between two vectors
     */
    public static angle(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): number {
        const dot = this.dot(vecA, vecB);
        const lenA = this.size(vecA);
        const lenB = this.size(vecB);
        const cos = dot / (lenA * lenB);

        return Math.acos(cos);
    }

    public static max<T extends SimpleVector3>(
        vecA: ReadonlySimpleVector3,
        vecB: ReadonlySimpleVector3,
        result: T = new Vector3() as unknown as T,
    ): T {
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
        return (vecA.x - vecB.x) ** 2 + (vecA.y - vecB.y) ** 2 + (vecA.z - vecB.z) ** 2;
    }

    public static dist(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): number {
        return Math.sqrt(this.distSqrt(vecA, vecB));
    }

    public static normalize<T extends ReadonlySimpleVector3>(vec: ReadonlySimpleVector3, result: T): T;
    public static normalize<T extends SimpleVector3>(vec: T): T;
    public static normalize<T extends SimpleVector3>(vec: T, result: T = vec): T {
        const length = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);
        result.x = vec.x / length;
        result.y = vec.y / length;
        result.z = vec.z / length;

        return result;
    }

    public static isVector<Item extends SimpleVector>(item: Item | any): item is SimpleVector3 {
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z);
    }

    public toArray(): ReadonlyTrinity<number> {
        return [this.x, this.y, this.z];
    }

    public get sum(): number {
        return this.x + this.y + this.z;
    }

    public get max(): number {
        return Math.max(this.x, this.y, this.z);
    }

    public get min(): number {
        return Math.min(this.x, this.y, this.z);
    }

    public getNormalized(): Vector3 {
        return this.clone().normalize();
    }

    public clone(): Vector3 {
        return new Vector3(this.x, this.y, this.z);
    }

    public normalize(): this {
        return Vector3.normalize(this);
    }

    public mul(value: ReadonlySimpleVector3): this {
        return this.mulNums(value.x, value.y, value.z);
    }

    public mulNum(value: number): this {
        return this.mulNums(value, value, value);
    }

    public mulNums(x: number, y: number, z: number): this {
        this.x *= x;
        this.y *= y;
        this.z *= z;

        return this;
    }

    public addNums(x: number, y: number, z: number): this {
        this.x += x;
        this.y += y;
        this.z += z;

        return this;
    }

    public addNum(value: number): this {
        return this.addNums(value, value, value);
    }

    public add(vec: ReadonlySimpleVector3): this {
        return this.addNums(vec.x, vec.y, vec.z);
    }

    public static crossStatic(vecA: ReadonlySimpleVector3, vecB: ReadonlySimpleVector3): Vector3;
    public static crossStatic<T extends SimpleVector3>(
        vecA: ReadonlySimpleVector3,
        vecB: ReadonlySimpleVector3,
        result?: T,
    ): T;

    /**
     * @example crossStatic({x: 0, y: 0, z: -1}, {x: 1, y: 0, z: 0}) =>  {x: 0, y: -1, z: 0}
     * @param vecA
     * @param vecB
     * @param result
     */
    public static crossStatic<T extends SimpleVector3>(
        vecA: ReadonlySimpleVector3,
        vecB: ReadonlySimpleVector3,
        result: T = new Vector3() as unknown as T,
    ): T {
        result.x = vecA.y * vecB.z - vecA.z * vecB.y;
        result.y = vecA.z * vecB.x - vecA.x * vecB.z;
        result.z = vecA.x * vecB.y - vecA.y * vecB.x;

        return result;
    }

    public cross(v: ReadonlySimpleVector3): Vector3 {
        return Vector3.crossStatic(this, v);
    }

    public dot(vector: ReadonlySimpleVector3): number {
        return Vector3.dot(this, vector);
    }

    public subNums(x: number, y: number, z: number): this {
        this.x -= x;
        this.y -= y;
        this.z -= z;

        return this;
    }

    public subNum(value: number): this {
        return this.subNums(value, value, value);
    }

    public sub(vec: ReadonlySimpleVector3): this {
        return this.subNums(vec.x, vec.y, vec.z);
    }

    public setData(x: number, y: number, z: number): this {
        this.x = x;
        this.y = y;
        this.z = z;

        return this;
    }

    public set(vec: ReadonlySimpleVector3): this {
        return this.setData(vec.x, vec.y, vec.z);
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
