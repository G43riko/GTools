import { Mat4 } from "./mat4";
import { mat4type, SimpleMat4 } from "./simple-mat4";

export type vec3type = [number, number, number];
export const EPSILON = 0.000001;

export class GlMat4 {
    public constructor(
        private readonly data: mat4type,
    ) {
    }

    private equalsData(data: number[]): boolean{
        for (let i = 0; i < 16; i++) {
            if (data[i] !== this.data[i]) {
                return false;
            }
        }

        return true;
    }

    public equals(data?: null | GlMat4 | SimpleMat4 | number[]): boolean {
        if(!data) {
            return false;
        }
        if (Array.isArray(data)) {
            return this.equalsData(data);
        }

        if(data instanceof GlMat4) {
            return this.equalsData(data.data);
        }

        return this.equalsData(data.data);
    }

    public static fromRotation(out: mat4type, rad: number, axis: vec3type): GlMat4 | null {
        let x   = axis[0];
        let y   = axis[1];
        let z   = axis[2];
        let len = Math.sqrt(x * x + y * y + z * z);
        const s = Math.sin(rad);
        const c = Math.cos(rad);
        const t = 1 - c;

        if (Math.abs(len) < EPSILON) {
            return null;
        }

        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;

        // Perform rotation-specific matrix multiplication
        out[0]  = x * x * t + c;
        out[1]  = y * x * t + z * s;
        out[2]  = z * x * t - y * s;
        out[3]  = 0;
        out[4]  = x * y * t - z * s;
        out[5]  = y * y * t + c;
        out[6]  = z * y * t + x * s;
        out[7]  = 0;
        out[8]  = x * z * t + y * s;
        out[9]  = y * z * t - x * s;
        out[10] = z * z * t + c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;

        return new GlMat4(out);
    }

    public transformVec3(out: vec3type, a: vec3type, m: mat4type = this.data): vec3type {
        const x = a[0];
        const y = a[1];
        const z = a[2];
        let w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;

        return out;
    }

}
