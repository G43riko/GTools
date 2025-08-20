import type { ReadonlySimpleVector3 } from "@g43/types";
import type { Mat4 } from "./mat4.ts";
import { Vector4 } from "./vector4.ts";

/**
 * A quaternion class for representing 3D rotations.
 *
 * Quaternions are a mathematical concept used to represent rotations in 3D space.
 * They offer advantages over Euler angles (avoiding gimbal lock) and rotation matrices
 * (more compact and numerically stable).
 *
 * This class extends Vector4, where:
 * - x, y, z components represent the vector partbv
 * - w component represents the scalar part
 *
 * @extends {Vector4} - Quaternions are represented as 4D vectors
 *
 * @example
 * ```ts ignore
 * // Create a quaternion from Euler angles (in degrees)
 * const rotation = Quaternion.fromEuler(45, 0, 30);
 *
 * // Convert back to Euler angles
 * const euler = rotation.toEuler();
 *
 * // Combine rotations using multiplication
 * const combined = Quaternion.multiply(rotation1, rotation2);
 * ```
 */
export class Quaternion extends Vector4 {
    public static fromRotationMatrix(rot: Mat4): Quaternion {
        const trace = rot.get(0, 0) + rot.get(1, 1) + rot.get(2, 2);

        let x: number;
        let y: number;
        let z: number;
        let w: number;
        if (trace > 0) {
            const s = 0.5 / Math.sqrt(trace + 1);
            w = 0.25 / s;
            x = (rot.get(1, 2) - rot.get(2, 1)) * s;
            y = (rot.get(2, 0) - rot.get(0, 2)) * s;
            z = (rot.get(0, 1) - rot.get(1, 0)) * s;
        } else if (rot.get(0, 0) > rot.get(1, 1) && rot.get(0, 0) > rot.get(2, 2)) {
            const s = 2 * Math.sqrt(1 + rot.get(0, 0) - rot.get(1, 1) - rot.get(2, 2));
            w = (rot.get(1, 2) - rot.get(2, 1)) / s;
            x = 0.25 * s;
            y = (rot.get(1, 0) + rot.get(0, 1)) / s;
            z = (rot.get(2, 0) + rot.get(0, 2)) / s;
        } else if (rot.get(1, 1) > rot.get(2, 2)) {
            const s = 2 * Math.sqrt(1 + rot.get(1, 1) - rot.get(0, 0) - rot.get(2, 2));
            w = (rot.get(2, 0) - rot.get(0, 2)) / s;
            x = (rot.get(1, 0) + rot.get(0, 1)) / s;
            y = 0.25 * s;
            z = (rot.get(2, 1) + rot.get(1, 2)) / s;
        } else {
            const s = 2 * Math.sqrt(1 + rot.get(2, 2) - rot.get(0, 0) - rot.get(1, 1));
            w = (rot.get(0, 1) - rot.get(1, 0)) / s;
            x = (rot.get(2, 0) + rot.get(0, 2)) / s;
            y = (rot.get(1, 2) + rot.get(2, 1)) / s;
            z = 0.25 * s;
        }

        const length = Math.sqrt(x * x + y * y + z * z + w * w);

        return new Quaternion(
            x / length,
            y / length,
            z / length,
            w / length,
        );
    }

    public static fromEuler(x: number, y: number, z: number, result: Quaternion = new Quaternion()): Quaternion {
        const halfToRad = 0.5 * Math.PI / 180;
        x *= halfToRad;
        y *= halfToRad;
        z *= halfToRad;
        const sx = Math.sin(x);
        const cx = Math.cos(x);
        const sy = Math.sin(y);
        const cy = Math.cos(y);
        const sz = Math.sin(z);
        const cz = Math.cos(z);
        result.x = sx * cy * cz - cx * sy * sz;
        result.y = cx * sy * cz + sx * cy * sz;
        result.z = cx * cy * sz - sx * sy * cz;
        result.w = cx * cy * cz + sx * sy * sz;

        return result;
    }

    public override clone(): Quaternion {
        return new Quaternion(this.x, this.y, this.z, this.w);
    }

    public static multiply(a: Quaternion, b: Quaternion, result: Quaternion = new Quaternion()): Quaternion {
        const ax = a.x;
        const ay = a.y;
        const az = a.z;
        const aw = a.w;
        const bx = b.x;
        const by = b.y;
        const bz = b.z;
        const bw = b.w;

        result.x = ax * bw + aw * bx + ay * bz - az * by;
        result.y = ay * bw + aw * by + az * bx - ax * bz;
        result.z = az * bw + aw * bz + ax * by - ay * bx;
        result.w = aw * bw - ax * bx - ay * by - az * bz;

        return result;
    }

    public toEuler(): ReadonlySimpleVector3 {
        const ysqr = this.y * this.y;

        const t0 = 2 * (this.w * this.x + this.y * this.z);
        const t1 = 1 - 2 * (this.x * this.x + ysqr);
        const resX = Math.atan2(t0, t1);

        let t2 = 2 * (this.w * this.y - this.z * this.x);
        if (t2 > 1) {
            t2 = 1;
        } else if (t2 < -1) {
            t2 = -1;
        }
        const resY = Math.asin(t2);

        const t3 = 2 * (this.w * this.z + this.x * this.y);
        const t4 = 1 - 2 * (ysqr + this.z * this.z);
        const resZ = Math.atan2(t3, t4);

        return {
            x: resX,
            y: resY,
            z: resZ,
        };
    }
}
