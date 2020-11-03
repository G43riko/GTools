import { SimpleVector2 } from "./simple-vector2";
export declare class Vector2 implements SimpleVector2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    static get ZERO(): Vector2;
    static get ONE(): Vector2;
    get avg(): number;
    get length(): number;
    static equals(vecA: SimpleVector2, vecB: SimpleVector2): boolean;
    static sub(vecA: SimpleVector2, vecB: SimpleVector2): Vector2;
    static isVisible(obsX: number, obsY: number, angle: number, cutOff: number, px: number, py: number): boolean;
    static angleBetweenPoints(obsX: number, obsY: number, px1: number, py1: number, px2: number, py2: number): number;
    static sum(vecA: SimpleVector2, vecB: SimpleVector2): Vector2;
    static mulNum(vecA: SimpleVector2, val: number): Vector2;
    static min(vecA: SimpleVector2, vecB: SimpleVector2): Vector2;
    static max(vecA: SimpleVector2, vecB: SimpleVector2): Vector2;
    static dist(vecA: SimpleVector2, vecB: SimpleVector2): number;
    static from(valA: number, valB?: number): Vector2;
    isZero(): boolean;
    getNormalized(): SimpleVector2;
    clone(): Vector2;
    normalize(): this;
    mul(value: SimpleVector2 | number): this;
    add(vec: SimpleVector2): this;
    sub(vec: SimpleVector2): this;
    set(vec: SimpleVector2): this;
}
