import { SimpleVector2 } from "./simple-vector2";

export class Vector2 implements SimpleVector2 {
    public constructor(public x = 0,
                       public y = 0) {
    }

    public static get ZERO(): Vector2 {
        return new Vector2(0, 0);
    }

    public static get ONE(): Vector2 {
        return new Vector2(1, 1);
    }

    public get avg(): number {
        return (this.x + this.y) / 2;
    }

    public get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public static equals(vecA: SimpleVector2, vecB: SimpleVector2): boolean {
        if (vecA === vecB) {
            return true;
        }

        return vecA.x === vecB.x && vecA.y === vecB.y;
    }

    public static sub(vecA: SimpleVector2, vecB: SimpleVector2): Vector2 {
        return new Vector2(vecA.x - vecB.x, vecA.y - vecB.y);
    }

    public static isVisible(obsX: number, obsY: number, angle: number, cutOff: number, px: number, py: number): boolean {
        return angle - Math.atan2(
            py - obsY,
            px - obsX,
        ) <= cutOff;
    }

    public static angleBetweenPoints(obsX: number, obsY: number, px1: number, py1: number, px2: number, py2: number): number {
        return Math.atan2(
            py1 - obsY,
            px1 - obsX,
        ) - Math.atan2(
            py2 - obsY,
            px2 - obsX,
        );
    }

    public static sum(vecA: SimpleVector2, vecB: SimpleVector2): Vector2 {
        return new Vector2(vecA.x + vecB.x, vecA.y + vecB.y);
    }

    public static mulNum(vecA: SimpleVector2, val: number): Vector2 {
        return new Vector2(vecA.x * val, vecA.y * val);
    }

    public static min(vecA: SimpleVector2, vecB: SimpleVector2): Vector2 {
        return new Vector2(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y));
    }

    public static max(vecA: SimpleVector2, vecB: SimpleVector2): Vector2 {
        return new Vector2(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y));
    }

    public static dist(vecA: SimpleVector2, vecB: SimpleVector2): number {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) + Math.pow(vecA.y - vecB.y, 2));
    }

    public static from(valA: number, valB = valA): Vector2 {
        return new Vector2(valA, valB);
    }

    public isZero(): boolean {
        return this.x === 0 && this.y === 0;
    }

    public getNormalized(): SimpleVector2 {
        return this.clone().normalize();
    }

    public clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    public normalize(): this {
        const length = this.length;
        this.x /= length;
        this.y /= length;

        return this;
    }

    public mul(value: SimpleVector2 | number): this {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;

        } else {
            this.x *= value.x;
            this.y *= value.y;
        }

        return this;
    }

    public add(vec: SimpleVector2): this {
        this.x += vec.x;
        this.y += vec.y;

        return this;
    }

    public sub(vec: SimpleVector2): this {
        this.x -= vec.x;
        this.y -= vec.y;

        return this;
    }

    public set(vec: SimpleVector2): this {
        this.x = vec.x;
        this.y = vec.y;

        return this;
    }
}
