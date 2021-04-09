import { Vector2 } from "../../math";
export class AABB3 {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    rayCast(result, ray, maxFraction = Infinity) {
        let tmin = -Infinity;
        let tmax = Infinity;
        const p = ray.from;
        const d = ray.direction;
        const absD = Vector2.getAbs(d);
        const normal = Vector2.ZERO;
        for (let f = "x"; f !== null; f = (f === "x" ? "y" : null)) {
            if (absD.x < Number.EPSILON) {
                if (p[f] < this.min[f] || this.max[f] < p[f]) {
                    return false;
                }
            }
            else {
                const invD = 1 / d[f];
                let t1 = (this.min[f] - p[f]) * invD;
                let t2 = (this.max[f] - p[f]) * invD;
                let s = -1;
                if (t1 > t2) {
                    const temp = t1;
                    t1 = t2;
                    t2 = temp;
                    s = 1;
                }
                if (t1 > tmin) {
                    normal.setData(0, 0);
                    normal[f] = s;
                    tmin = t1;
                }
                tmax = Math.min(tmax, t2);
                if (tmin > tmax) {
                    return false;
                }
            }
        }
        if (tmin < 0 || maxFraction < tmin) {
            return false;
        }
        result.fraction = tmin;
        result.normal.set(normal);
        return true;
    }
    expandByScalar(distance) {
        this.min.x -= distance;
        this.min.y -= distance;
        this.min.z -= distance;
        this.max.x += distance;
        this.max.y += distance;
        this.max.z += distance;
    }
    expandByVector(vec) {
        this.min.x -= vec.x;
        this.min.y -= vec.y;
        this.min.z -= vec.z;
        this.max.x += vec.x;
        this.max.y += vec.y;
        this.max.z += vec.z;
    }
    expandByPoint(point) {
        this.min.x = Math.min(this.min.x, point.x);
        this.min.y = Math.min(this.min.y, point.y);
        this.min.z = Math.min(this.min.z, point.z);
        this.max.x = Math.max(this.max.x, point.x);
        this.max.y = Math.max(this.max.y, point.y);
        this.max.z = Math.max(this.max.z, point.z);
    }
    expandBtAABB(other) {
        this.min.x = Math.min(this.min.x, other.min.x);
        this.min.y = Math.min(this.min.y, other.min.y);
        this.min.z = Math.min(this.min.z, other.min.z);
        this.max.x = Math.max(this.max.x, other.max.x);
        this.max.y = Math.max(this.max.y, other.max.y);
        this.max.z = Math.max(this.max.z, other.max.z);
    }
    moveByScalar(distance) {
        this.min.x += distance;
        this.min.y += distance;
        this.min.z += distance;
        this.max.x += distance;
        this.max.y += distance;
        this.max.z += distance;
    }
    getCenter() {
        return {
            x: (this.max.x + this.min.x) / 2,
            y: (this.max.y + this.min.y) / 2,
            z: (this.max.z + this.min.z) / 2,
        };
    }
    getSize() {
        return {
            x: this.max.x - this.min.x,
            y: this.max.y - this.min.y,
            z: this.max.z - this.min.z,
        };
    }
    getVolume() {
        const size = this.getSize();
        return size.x * size.y * size.z;
    }
    moveByVector(vec) {
        this.min.x += vec.x;
        this.min.y += vec.y;
        this.min.z += vec.z;
        this.max.x += vec.x;
        this.max.y += vec.y;
        this.max.z += vec.z;
    }
    getMinMax() {
        return {
            min: this.min,
            max: this.max,
        };
    }
    static fromPosAndSize(pos, size) {
        return new AABB3({
            x: pos.x,
            y: pos.y,
            z: pos.z,
        }, {
            x: pos.x + size.x,
            y: pos.y + size.y,
            z: pos.z + size.z,
        });
    }
    getPosition() {
        return {
            x: this.min.x,
            y: this.min.y,
            z: this.min.z,
        };
    }
    static fromCenterAndSize(center, size) {
        const halfSize = {
            x: size.x / 2,
            y: size.y / 2,
            z: size.z / 2,
        };
        return new AABB3({
            x: center.x + halfSize.x,
            y: center.y + halfSize.y,
            z: center.z + halfSize.z,
        }, {
            x: center.x - halfSize.x,
            y: center.y - halfSize.y,
            z: center.z - halfSize.z,
        });
    }
    moveCenterTo(center) {
        const offset = {
            x: center.x - (this.max.x + this.min.x) / 2,
            y: center.y - (this.max.y + this.min.y) / 2,
            z: center.z - (this.max.z + this.min.z) / 2,
        };
        this.min.x += offset.x;
        this.min.y += offset.y;
        this.min.z += offset.z;
        this.max.x += offset.x;
        this.max.y += offset.y;
        this.max.z += offset.z;
    }
}
//# sourceMappingURL=AABB3.js.map