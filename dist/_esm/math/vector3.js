import { Vector2 } from "./vector2";
export class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static get UP() {
        return new Vector3(0, 1, 0);
    }
    static get ZERO() {
        return new Vector3(0, 0, 0);
    }
    static get ONE() {
        return new Vector3(1, 1, 1);
    }
    get avg() {
        return (this.x + this.y + this.z) / 3;
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    static equals(vecA, vecB) {
        if (vecA === vecB) {
            return true;
        }
        return vecA.x === vecB.x && vecA.y === vecB.y && vecA.z === vecB.z;
    }
    static sub(vecA, vecB) {
        return new Vector3(vecA.x - vecB.x, vecA.y - vecB.y, vecA.z - vecB.z);
    }
    static add(vecA, vecB) {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    }
    static sum(vecA, vecB) {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    }
    static mulNum(vecA, val) {
        return new Vector3(vecA.x * val, vecA.y * val, vecA.z * val);
    }
    static mul(vecA, vecB) {
        return new Vector3(vecA.x + vecB.x, vecA.y + vecB.y, vecA.z + vecB.z);
    }
    static min(vecA, vecB) {
        return new Vector3(Math.min(vecA.x, vecB.x), Math.min(vecA.y, vecB.y), Math.min(vecA.z, vecB.z));
    }
    static createFromSphericalCoords(radius, phi, theta) {
        const sinPhiRadius = Math.sin(phi) * radius;
        const x = sinPhiRadius * Math.sin(theta);
        const y = Math.cos(phi) * radius;
        const z = sinPhiRadius * Math.cos(theta);
        return new Vector3(x, y, z);
    }
    static max(vecA, vecB) {
        return new Vector3(Math.max(vecA.x, vecB.x), Math.max(vecA.y, vecB.y), Math.max(vecA.z, vecB.z));
    }
    static dist(vecA, vecB) {
        return Math.sqrt(Math.pow(vecA.x - vecB.x, 2) + Math.pow(vecA.y - vecB.y, 2) + Math.pow(vecA.z - vecB.z, 2));
    }
    static normalize(vec) {
        const length = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);
        vec.x /= length;
        vec.y /= length;
        vec.z /= length;
        return vec;
    }
    get xy() {
        return new Vector2(this.x, this.y);
    }
    static from(valA, valB = valA, valC = valA) {
        return new Vector3(valA, valB, valC);
    }
    static isVector(item) {
        return item && !isNaN(item.x) && !isNaN(item.y) && !isNaN(item.z);
    }
    toArray() {
        return [this.x, this.y, this.z];
    }
    sum() {
        return this.x + this.y + this.z;
    }
    getNormalized() {
        return this.clone().normalize();
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    normalize() {
        const length = this.length;
        this.x /= length;
        this.y /= length;
        this.z /= length;
        return this;
    }
    mul(value) {
        if (typeof value === "number") {
            this.x *= value;
            this.y *= value;
            this.z *= value;
        }
        else {
            this.x *= value.x;
            this.y *= value.y;
            this.z *= value.z;
        }
        return this;
    }
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    }
    cross(v) {
        const localX = this.y * v.z - this.z * v.y;
        const localY = this.z * v.x - this.x * v.z;
        const localZ = this.x * v.y - this.y * v.x;
        return new Vector3(localX, localY, localZ);
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    }
    setData(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    set(vec) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        return this;
    }
    get yx() {
        return new Vector2(this.y, this.x);
    }
    get yz() {
        return new Vector2(this.y, this.z);
    }
    get zy() {
        return new Vector2(this.z, this.y);
    }
    get xz() {
        return new Vector2(this.x, this.z);
    }
    get zx() {
        return new Vector2(this.z, this.x);
    }
    static fromArray(value) {
        return new Vector3(value[0], value[1], value[2]);
    }
}
//# sourceMappingURL=vector3.js.map