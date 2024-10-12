import { ReadonlySimpleVector2, SimpleVector2 } from "./simple-vector2.ts";

type ReadonlyPair<T> = any;
type Vector<T, S> = any;
type ReadonlyMinMax2D = any;

// eslint-disable-next-line no-use-before-define
export class Vector2 implements SimpleVector2, Vector<SimpleVector2, Vector2> {
    public constructor(
        public x = 0,
        public y = 0,
    ) {
    }

    public static average(points: ReadonlySimpleVector2[]): ReadonlySimpleVector2 {
        const result = { x: 0, y: 0 };
        points.forEach((point) => {
            result.x += point.x;
            result.y += point.y;
        });
        result.x /= points.length;
        result.y /= points.length;

        return result;
    }

    public perpendicular(): Vector2 {
        return new Vector2(this.y, -this.x);
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

    public toArray(): ReadonlyPair<number> {
        return [this.x, this.y];
    }

    public angle(v: ReadonlySimpleVector2): number {
        return Vector2.angle(this, v);
    }

    public static fromAngle(angle: number): Vector2 {
        return new Vector2(Math.cos(angle), Math.sin(angle));
    }

    public cross(vector: ReadonlySimpleVector2): number {
        return Vector2.cross(this, vector);
    }

    /**
     * Rotate point around anchor
     * @param angle - rotation angle in radians
     * @param point
     */
    public static rotate(angle: number, point: ReadonlySimpleVector2, anchor?: ReadonlySimpleVector2): Vector2 {
        const anchorX  = anchor?.x ?? 0;
        const anchorY  = anchor?.x ?? 0;
        const sinAngle = Math.sin(angle);
        const cosAngle = Math.cos(angle);
        const x        = cosAngle * (point.x - anchorX) - sinAngle * (point.y - anchorY) + anchorX;
        const y        = sinAngle * (point.x - anchorX) + cosAngle * (point.y - anchorY) + anchorY;

        return new Vector2(x, y);
    }

    /**
     *
     * @param angle - rotation angle in radians
     * @param anchor
     */
    public rotate(angle: number, anchor?: ReadonlySimpleVector2): Vector2 {
        return Vector2.rotate(angle, this, anchor);
    }

    public toString(): string {
        return Vector2.toString(this);
    }
    public static toString(vector?: unknown, toFixed = NaN): string {

        if (Vector2.isVector(vector)) {
            if (!isNaN(toFixed)) {
                return `[${vector.x.toFixed(toFixed)}, ${vector.y.toFixed(toFixed)}]`;
            }

            return `[${vector.x}, ${vector.y}]`;
        }

        return String(vector);
    }

    public static sizeOf<T extends SimpleVector2>(points: readonly ReadonlySimpleVector2[], result: T = new Vector2() as unknown as T): T {
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;
        points.forEach((point) => {
            if (point.x < minX) {
                minX = point.x;
            }
            if (point.y < minY) {
                minY = point.y;
            }
            if (point.x > maxX) {
                maxX = point.x;
            }
            if (point.y > maxY) {
                maxY = point.y;
            }
        });
        result.x = maxX - minX;
        result.y = maxY - minY;

        return result;
    }

    public static center<T extends SimpleVector2>(points: readonly ReadonlySimpleVector2[], result: T = new Vector2() as unknown as T): T {
        result.x = 0;
        result.y = 0;
        points.forEach((point) => {
            result.x += point.x;
            result.y += point.y;
        });
        result.x /= points.length;
        result.y /= points.length;

        return result;
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

    public static get DOWN(): Vector2 {
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

    public static fromArray(val: ReadonlyPair<number> | Float32Array): Vector2 {
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

    public static sub(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): Vector2;
    public static sub<T extends SimpleVector2>(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2, result?: T): T;
    public static sub<T extends SimpleVector2>(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2, result: T = new Vector2() as unknown as T): T {
        result.x = vecA.x - vecB.x;
        result.y = vecA.y - vecB.y;

        return result;
    }

    public static cross(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): number {
        return vecA.x * vecB.y - vecA.y * vecB.x;
    }

    public static dot(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): number {
        return vecA.x * vecB.x + vecA.y * vecB.y;
    }

    public static sizeSQ(vector: ReadonlySimpleVector2): number {
        return vector.x * vector.x + vector.y * vector.y;
    }

    public static size(vec: ReadonlySimpleVector2): number {
        return Math.sqrt(Vector2.sizeSQ(vec));
    }

    public static lerp(start: ReadonlySimpleVector2, end: ReadonlySimpleVector2, ratio: number): Vector2
    public static lerp<T extends SimpleVector2>(start: ReadonlySimpleVector2, end: ReadonlySimpleVector2, ratio: number, result?: T): T;
    public static lerp<T extends SimpleVector2>(start: ReadonlySimpleVector2, end: ReadonlySimpleVector2, ratio: number, result: T = new Vector2() as unknown as T): T {
        result.x = start.x + (end.x - start.x) * ratio;
        result.y = start.y + (end.y - start.y) * ratio;

        return result;
    }

    public static getAbs(vec: ReadonlySimpleVector2): Vector2
    public static getAbs<T extends SimpleVector2>(vec: ReadonlySimpleVector2, result?: T): T;
    public static getAbs<T extends SimpleVector2>(vec: ReadonlySimpleVector2, result: T = new Vector2() as unknown as T): T {
        result.x = Math.abs(vec.x);
        result.y = Math.abs(vec.y);

        return result;
    }

    public static from(valA: number, valB = valA): Vector2 {
        return new Vector2(valA, valB);
    }

    /**
     * returns angle between two vectors
     */
    public static angle(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): number {
        const dot  = Vector2.dot(vecA, vecB);
        const lenA = Vector2.size(vecA);
        const lenB = Vector2.size(vecB);
        const cos  = dot / (lenA * lenB);

        return Math.acos(cos);
    }

    public static isVisible(obsX: number, obsY: number, angle: number, cutOff: number, px: number, py: number): boolean {
        return angle - Math.atan2(
            py - obsY,
            px - obsX,
        ) <= cutOff;
    }

    public static createOutlineMinMax(points: readonly ReadonlySimpleVector2[]): ReadonlyMinMax2D {
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

        return { min, max };
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

    public static isVector(item: any): item is SimpleVector2 {
        return item && !isNaN(item.x) && !isNaN(item.y);
    }

    public static sum(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): Vector2;
    public static sum<T extends SimpleVector2>(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2, result?: T): T;
    public static sum<T extends SimpleVector2>(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2, result: T = new Vector2() as unknown as T): T {
        result.x = vecA.x + vecB.x;
        result.y = vecA.y + vecB.y;

        return result;
    }

    public static min(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2, result = new Vector2()): Vector2 {
        return result.setData(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y));
    }

    public static max(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2, result = new Vector2()): Vector2 {
        return result.setData(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y));
    }

    public static dist(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): number {
        return Math.sqrt(Vector2.sqrtDist(vecA, vecB));
    }

    public static sqrtDist(vecA: ReadonlySimpleVector2, vecB: ReadonlySimpleVector2): number {
        return (vecA.x - vecB.x) ** 2 + (vecA.y - vecB.y) ** 2;
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

    public static normalize<T extends SimpleVector2>(vec: T): T;
    public static normalize<T extends SimpleVector2>(vec: SimpleVector2, result: T): T
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

    public static mulNum(vecA: ReadonlySimpleVector2, val: number): Vector2;
    public static mulNum<T extends SimpleVector2>(vecA: ReadonlySimpleVector2, val: number, result?: T): T;
    public static mulNum<T extends SimpleVector2>(vecA: ReadonlySimpleVector2, val: number, result: T = new Vector2() as unknown as T): T {
        result.x = vecA.x * val;
        result.y = vecA.y * val;

        return result;
    }

    public static sumNum(vecA: ReadonlySimpleVector2, val: number): Vector2;
    public static sumNum<T extends SimpleVector2>(vecA: ReadonlySimpleVector2, val: number, result?: T): T;
    public static sumNum<T extends SimpleVector2>(vecA: ReadonlySimpleVector2, val: number, result: T = new Vector2() as unknown as T): T {
        result.x = vecA.x + val;
        result.y = vecA.y + val;

        return result;
    }

    public mulNums(x: number, y: number): this {
        this.x *= x;
        this.y *= y;

        return this;
    }

    public mulNum(value: number): this {
        return this.mulNums(value, value);
    }

    public mul(value: ReadonlySimpleVector2): this {
        return this.mulNums(value.x, value.y);
    }

    public addNums(x: number, y: number): this {
        this.x += x;
        this.y += y;

        return this;
    }

    public addNum(value: number): this {
        return this.addNums(value, value);
    }

    public add(value: ReadonlySimpleVector2): this {
        return this.addNums(value.x, value.y);
    }

    public subNums(x: number, y: number): this {
        this.x -= x;
        this.y -= y;

        return this;
    }

    public subNum(value: number): this {
        return this.subNums(value, value);
    }

    public sub(value: ReadonlySimpleVector2): this {
        return this.subNums(value.x, value.y);
    }

    public divNums(x: number, y: number): this {
        this.x /= x;
        this.y /= y;

        return this;
    }

    public divNum(value: number): this {
        return this.divNums(value, value);
    }

    public div(value: ReadonlySimpleVector2): this {
        return this.divNums(value.x, value.y);
    }

    public setData(x: number, y: number): this {
        this.x = x;
        this.y = y;

        return this;
    }

    public set(vec: ReadonlySimpleVector2): this {
        return this.setData(vec.x, vec.y);
    }

    public static crossNum(num: number, vec: ReadonlySimpleVector2): Vector2;
    public static crossNum<T extends SimpleVector2>(num: number, vec: ReadonlySimpleVector2, result?: T): T;
    public static crossNum<T extends SimpleVector2>(num: number, vec: ReadonlySimpleVector2, result: T = new Vector2() as unknown as T): T {
        result.x = -num * vec.y;
        result.y = num * vec.x;

        return result;
    }
}
