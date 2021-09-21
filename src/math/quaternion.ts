import { Mat4 } from "./mat4";
import { SimpleVector3 } from "./simple-vector3";
import { SimpleVector4 } from "./simple-vector4";

export class Quaternion implements SimpleVector4 {
    public constructor(
        public w = 0,
        public x = 0,
        public y = 0,
        public z = 0,
    ) {
    }

    public static fromRotationMatrix(rot: Mat4): Quaternion {
        const trace = rot.get(0, 0) + rot.get(1, 1) + rot.get(2, 2);

        let x: number;
        let y: number;
        let z: number;
        let w: number;
        if (trace > 0) {
            const s = 0.5 / Math.sqrt(trace + 1);
            w       = 0.25 / s;
            x       = (rot.get(1, 2) - rot.get(2, 1)) * s;
            y       = (rot.get(2, 0) - rot.get(0, 2)) * s;
            z       = (rot.get(0, 1) - rot.get(1, 0)) * s;
        } else if (rot.get(0, 0) > rot.get(1, 1) && rot.get(0, 0) > rot.get(2, 2)) {
            const s = 2 * Math.sqrt(1 + rot.get(0, 0) - rot.get(1, 1) - rot.get(2, 2));
            w       = (rot.get(1, 2) - rot.get(2, 1)) / s;
            x       = 0.25 * s;
            y       = (rot.get(1, 0) + rot.get(0, 1)) / s;
            z       = (rot.get(2, 0) + rot.get(0, 2)) / s;
        } else if (rot.get(1, 1) > rot.get(2, 2)) {
            const s = 2 * Math.sqrt(1 + rot.get(1, 1) - rot.get(0, 0) - rot.get(2, 2));
            w       = (rot.get(2, 0) - rot.get(0, 2)) / s;
            x       = (rot.get(1, 0) + rot.get(0, 1)) / s;
            y       = 0.25 * s;
            z       = (rot.get(2, 1) + rot.get(1, 2)) / s;
        } else {
            const s = 2 * Math.sqrt(1 + rot.get(2, 2) - rot.get(0, 0) - rot.get(1, 1));
            w       = (rot.get(0, 1) - rot.get(1, 0)) / s;
            x       = (rot.get(2, 0) + rot.get(0, 2)) / s;
            y       = (rot.get(1, 2) + rot.get(2, 1)) / s;
            z       = 0.25 * s;
        }

        const length = Math.sqrt(x * x + y * y + z * z + w * w);

        return new Quaternion(
            x / length,
            y / length,
            z / length,
            w / length,
        );
    }

    public toEuler(): SimpleVector3 {
        const ysqr = this.y * this.y;

        const t0   = 2 * (this.w * this.x + this.y * this.z);
        const t1   = 1 - 2 * (this.x * this.x + ysqr);
        const resX = Math.atan2(t0, t1);

        let t2 = 2 * (this.w * this.y - this.z * this.x);
        if (t2 > 1) {
            t2 = 1;
        } else if (t2 < -1) {
            t2 = -1;
        }
        const resY = Math.asin(t2);

        const t3   = 2 * (this.w * this.z + this.x * this.y);
        const t4   = 1 - 2 * (ysqr + this.z * this.z);
        const resZ = Math.atan2(t3, t4);

        return {
            x: resX,
            y: resY,
            z: resZ,
        };
    }
}
