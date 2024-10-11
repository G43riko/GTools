import { Range } from "../models/range";
import { ReadonlySimpleVector2, SimpleVector2 } from "./simple-vector2";
import { Vector } from "./vector";

export class Vector2 implements SimpleVector2, Vector<SimpleVector2, Vector2> {
    public constructor(
        public x = 0,
        public y = 0,
    ) {
    }

    public equals(vector: any): boolean {
        return Vector2.equals(this, vector);
    }

    public dot(vector: ReadonlySimpleVector2): number {
        return Vector2.dot(this, vector);
    }

    public dist(vector: ReadonlySimpleVector2): number {
        return Vector2.dist(this, vector);
    }

    public toArray(): readonly [number, number] {
        return [this.x, this.y];
    }

    public angle(v: ReadonlySimpleVector2): number {
        return Vector2.angle(this, v);
    }

    public static get ZERO(): Vector2 {
        return new Vector2(0, 0);
    }

    public static get UP(): Vector2 {
        return new Vector2(0, 1);
    }

    public static get LEFT(): Vector2 {
        return new Vector2(-1, 0);
    }

    public static get BOTTOM(): Vector2 {
        return new Vector2(0, -1);
    }

    public static get RIGHT(): Vector2 {
        return new Vector2(1, 0);
    }

    public static get ONE(): Vector2 {
        return new Vector2(1, 1);
    }

    public getAbs(result = new Vector2()): Vector2 {
        result.x = Math.abs(this.x);
        result.y = Math.abs(this.y);

        return result;
    }

    public invert(): this {
        this.x = -this.x;
        this.y = -this.y;

        return this;
    }

    public get avg(): number {
        return this.sum / 2;
    }

    public get sum(): number {
        return this.x + this.y;
    }

    public get max(): number {
        return Math.max(this.x, this.y);
    }

    public get min(): number {
        return Math.min(this.x, this.y);
    }

    public static fromArray(val: [number, number] | Float32Array): Vector2 {
        return new Vector2(val[0], val[1]);
    }

    public get length(): number {
        return Vector2.size(this);
    }

    public static equals(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): boolean {
        if (vecA === vecB) {
            return true;
        }

        return vecA.x === vecB.x && vecA.y === vecB.y;
    }

    public static sub(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2, result = new Vector2()): Vector2 {
        return result.setData(vecA.x - vecB.x, vecA.y - vecB.y);
    }

    public static dot(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): number {
        return vecA.x * vecB.x + vecA.y * vecB.y;
    }

    public static lengthOf(vector: ReadonlySimpleVector2): number {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    }

    public static lerp(start: ReadonlySimpleVector2, end: ReadonlySimpleVector2, ratio: number): Vector2 {
        const dir = Vector2.sub(end, start);

        return Vector2.mulNum(dir, ratio, dir).add(start);
    }

    public static getAbs(vec: ReadonlySimpleVector2, result = new Vector2()): Vector2 {
        return result.setData(Math.abs(vec.x), Math.abs(vec.y));
    }

    public static from(valA: number, valB = valA): Vector2 {
        return new Vector2(valA, valB);
    }

    /**
     * returns angle between two vectors
     */
    public static angle(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): number {
        const dot = Vector2.dot(vecA, vecB);
        const lenA = Vector2.lengthOf(vecA);
        const lenB = Vector2.lengthOf(vecB);
        const cos = dot / (lenA * lenB);

        return Math.acos(cos);
    }

    public static isVisible(
        obsX: number,
        obsY: number,
        angle: number,
        cutOff: number,
        px: number,
        py: number,
    ): boolean {
        return angle - Math.atan2(
                    py - obsY,
                    px - obsX,
                ) <= cutOff;
    }

    public static createOutlineRange(points: readonly ReadonlySimpleVector2[]): Range<SimpleVector2> {
        const min = {
            x: Infinity,
            y: Infinity,
        };
        const max = {
            x: -Infinity,
            y: -Infinity,
        };

        points.forEach((p) => {
            if (p.x < min.x) {
                min.x = p.x;
            }
            if (p.y < min.y) {
                min.y = p.y;
            }
            if (p.x > max.x) {
                max.x = p.x;
            }
            if (p.y > max.y) {
                max.y = p.y;
            }
        });

        return new Range(min, max);
    }

    public static angleBetweenPoints(
        obsX: number,
        obsY: number,
        px1: number,
        py1: number,
        px2: number,
        py2: number,
    ): number {
        return Math.atan2(
            py1 - obsY,
            px1 - obsX,
        ) - Math.atan2(
            py2 - obsY,
            px2 - obsX,
        );
    }

    public static isVector(item: any): item is SimpleVector2 {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
        return item && !isNaN(item.x) && !isNaN(item.y);
    }

    public static sum(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2, result = new Vector2()): Vector2 {
        return result.setData(vecA.x + vecB.x, vecA.y + vecB.y);
    }

    public static min(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2, result = new Vector2()): Vector2 {
        return result.setData(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y));
    }

    public static max(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2, result = new Vector2()): Vector2 {
        return result.setData(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y));
    }

    public static dist(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): number {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) + Math.pow(vecA.y - vecB.y, 2));
    }

    public static size(vec: ReadonlySimpleVector2): number {
        return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
    }

    public static fromVec(vec: ReadonlySimpleVector2): Vector2 {
        return new Vector2(vec.x, vec.y);
    }

    public isZero(): boolean {
        return this.x === 0 && this.y === 0;
    }

    public clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    public getNormalized(result = this.clone()): Vector2 {
        return Vector2.normalize(this, result);
    }

    public getInverted(result = this.clone()): Vector2 {
        return Vector2.invert(this, result);
    }

    public normalize(): this {
        const length = Vector2.size(this);
        this.x /= length;
        this.y /= length;

        return this;
    }

    public static normalize<T extends SimpleVector2>(vec: T, result: T = vec): T {
        const length = Vector2.size(vec);

        result.x = vec.x / length;
        result.y = vec.y / length;

        return result;
    }

    public static invert<T extends SimpleVector2>(vec: T, result: T = vec): T {
        result.x = -vec.x;
        result.y = -vec.y;

        return result;
    }

    public static mulNum(vecA: ReadonlySimpleVector2, val: number, result = new Vector2()): Vector2 {
        return result.setData(vecA.x * val, vecA.y * val);
    }

    public static addNum(vecA: ReadonlySimpleVector2, val: number, result = new Vector2()): Vector2 {
        return result.setData(vecA.x + val, vecA.y + val);
    }

    public mul(value: ReadonlySimpleVector2 | number): this {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
        } else {
            this.x *= value.x;
            this.y *= value.y;
        }

        return this;
    }

    public add(value: ReadonlySimpleVector2 | number): this {
        if (typeof value === "number") {
            this.x += value;
            this.y += value;
        } else {
            this.x += value.x;
            this.y += value.y;
        }

        return this;
    }

    public sub(value: ReadonlySimpleVector2 | number): this {
        if (typeof value === "number") {
            this.x -= value;
            this.y -= value;
        } else {
            this.x -= value.x;
            this.y -= value.y;
        }

        return this;
    }

    public div(value: ReadonlySimpleVector2 | number): this {
        if (typeof value === "number") {
            this.x /= value;
            this.y /= value;
        } else {
            this.x /= value.x;
            this.y /= value.y;
        }

        return this;
    }

    public setData(x: number, y: number): this {
        this.x = x;
        this.y = y;

        return this;
    }

    public set(vec: ReadonlySimpleVector2): this {
        this.x = vec.x;
        this.y = vec.y;

        return this;
    }
}
