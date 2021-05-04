/**
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Matrix4.js
 * https://github.com/BennyQBD/3DEngineCpp/blob/master/src/core/math3d.h
 * https://glmatrix.net/docs/mat4.js.html
 * https://github.com/fynnfluegge/oreon-engine/blob/master/oreonengine/oe-core/src/main/java/org/oreon/core/math/Matrix4f.java
 */
import { Quaternion } from "./quaternion";
import { SimpleVector3 } from "./simple-vector3";
import { Vector3 } from "./vector3";

/**
 * 00 04 08 12
 * 01 05 09 13
 * 02 06 10 14
 * 03 07 11 14
 */
export class SimpleMat4 {
    public constructor(public readonly data: number[]) {
    }

    public set(x: number, y: number, value: number): void {
        this.data[x * 4 + y] = value;
    }

    public get(x: number, y: number): number {
        return this.data[x * 4 + y];
    }

    public getTranslation(): SimpleVector3 {
        return {
            x: this.data[12],
            y: this.data[13],
            z: this.data[14],
        };
    }

    public getScale(): SimpleVector3 {
        return {
            x: this.data[0],
            y: this.data[5],
            z: this.data[10],
        };
    }

    public equalsArray(data: number[]): boolean {
        if (!data?.length) {
            return false;
        }

        for (let i = 0; i < 16; i++) {
            if (data[i] !== this.data[i]) {
                return false;
            }
        }

        return true;
    }

    public equals(mat: Mat4): boolean {
        if (!mat) {
            return false;
        }

        return this.equalsArray(mat.data);
    }

    public static create(): SimpleMat4 {
        return new SimpleMat4([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]);
    }

    public static setIdentity(result: SimpleMat4): SimpleMat4 {
        result.data[0]  = 1;
        result.data[1]  = 0;
        result.data[2]  = 0;
        result.data[3]  = 0;
        result.data[4]  = 0;
        result.data[5]  = 1;
        result.data[6]  = 0;
        result.data[7]  = 0;
        result.data[8]  = 0;
        result.data[9]  = 0;
        result.data[10] = 1;
        result.data[11] = 0;
        result.data[12] = 0;
        result.data[13] = 0;
        result.data[14] = 0;
        result.data[15] = 1;

        return result;
    }

    private static setTranslation(x: number, y: number, z: number, result: number[]): number[] {
        result[12] = x;
        result[13] = y;
        result[14] = z;

        return result;
    }

    private static setScale(x: number, y: number, z: number, result: number[]): number[] {
        result[0]  = x;
        result[5]  = y;
        result[10] = z;

        return result;
    }

    public static fromTranslation(translation: SimpleVector3, result = SimpleMat4.create()): SimpleMat4 {
        Mat4.setIdentity(result);
        Mat4.setTranslation(translation.x, translation.y, translation.z, result.data);

        return result;
    }

    public static fromScale(scale: SimpleVector3, result = SimpleMat4.create()): SimpleMat4 {
        Mat4.setIdentity(result);
        Mat4.setScale(scale.x, scale.y, scale.z, result.data);

        return result;
    }

    public static from(
        param: {
            scale?: SimpleVector3 | [number, number, number],
            translation?: SimpleVector3 | [number, number, number],
            rotation?: Quaternion,
            angle?: number,
            axes?: number | SimpleVector3,
            rotX?: number;
            rotY?: number;
            rotZ?: number;
        },
        result = SimpleMat4.create()): SimpleMat4 {

        Mat4.setIdentity(result);

        if (param.translation) {
            if (Vector3.isVector(param.translation)) {
                Mat4.setTranslation(param.translation.x, param.translation.y, param.translation.z, result.data);
            } else {
                Mat4.setTranslation(param.translation[0], param.translation[1], param.translation[2], result.data);
            }
        }

        if (param.scale) {
            if (Vector3.isVector(param.scale)) {
                Mat4.setScale(param.scale.x, param.scale.y, param.scale.z, result.data);
            } else {
                Mat4.setScale(param.scale[0], param.scale[1], param.scale[2], result.data);
            }
        }

        return result;
    }

    public static fromQuaternion(v: Quaternion, result = SimpleMat4.create()): SimpleMat4 {
        const x2 = v.x + v.x;
        const y2 = v.y + v.y;
        const z2 = v.z + v.z;
        const xx = v.x * x2;
        const xy = v.x * y2;
        const xz = v.x * z2;
        const yy = v.y * y2;
        const yz = v.y * z2;
        const zz = v.z * z2;
        const wx = v.w * x2;
        const wy = v.w * y2;
        const wz = v.w * z2;

        result.data[0]  = 1 - (yy + zz);
        result.data[1]  = xy + wz;
        result.data[2]  = xz - wy;
        result.data[3]  = 0;
        result.data[4]  = xy - wz;
        result.data[5]  = 1 - (xx + zz);
        result.data[6]  = yz + wx;
        result.data[7]  = 0;
        result.data[8]  = xz + wy;
        result.data[9]  = yz - wx;
        result.data[10] = 1 - (xx + yy);
        result.data[11] = 0;
        result.data[12] = v.x;
        result.data[13] = v.y;
        result.data[14] = v.z;
        result.data[15] = 1;

        return result;
    }

    public static fromRotation(rad: number, axis: SimpleVector3, result = SimpleMat4.create()): SimpleMat4 | null {
        let len = Math.hypot(axis.x, axis.y, axis.z);
        if (len < Number.EPSILON) {
            return null;
        }
        len     = 1 / len;
        const x = axis.x * len;
        const y = axis.y * len;
        const z = axis.z * len;
        const s = Math.sin(rad);
        const c = Math.cos(rad);
        const t = 1 - c;

        result.data[0]  = x * x * t + c;
        result.data[1]  = y * x * t + z * s;
        result.data[2]  = z * x * t - y * s;
        result.data[3]  = 0;
        result.data[4]  = x * y * t - z * s;
        result.data[5]  = y * y * t + c;
        result.data[6]  = z * y * t + x * s;
        result.data[7]  = 0;
        result.data[8]  = x * z * t + y * s;
        result.data[9]  = y * z * t - x * s;
        result.data[10] = z * z * t + c;
        result.data[11] = 0;
        result.data[12] = 0;
        result.data[13] = 0;
        result.data[14] = 0;
        result.data[15] = 1;

        return result;
    }

    private static staticSetAngleRotation(sin: number, cos: number, axe: "X" | "Y" | "Z", data: number[]): number[] {
        switch (axe) {
            case "X":
                data[5]  = cos;
                data[6]  = sin;
                data[9]  = -sin;
                data[10] = cos;

                return data;
            case "Y":
                data[0]  = cos;
                data[2]  = -sin;
                data[8]  = sin;
                data[10] = cos;

                return data;
            case "Z":
                data[0]  = cos;
                data[1]  = sin;
                data[4]  = -sin;
                data[5] = cos;

                return data;
            default:
                throw new Error("Unknown axe " + axe);
        }
    }

    public static fromXRotation(rad: number, result = SimpleMat4.create()): SimpleMat4 {
        Mat4.setIdentity(result);
        Mat4.staticSetAngleRotation(Math.sin(rad), Math.cos(rad), "X", result.data);

        return result;
    }

    public static fromYRotation(rad: number, result = SimpleMat4.create()): SimpleMat4 {
        Mat4.setIdentity(result);
        Mat4.staticSetAngleRotation(Math.sin(rad), Math.cos(rad), "Y", result.data);

        return result;
    }

    public static fromZRotation(rad: number, result = SimpleMat4.create()): SimpleMat4 {
        Mat4.setIdentity(result);
        Mat4.staticSetAngleRotation(Math.sin(rad), Math.cos(rad), "Z", result.data);

        return result;
    }
}

export class Mat4 extends SimpleMat4 {
    public static createViewMatrix(): void {
        // TODO: implement
    }

    public static createTransformMatrix(): void {
        // TODO: implement
    }

    public static createPerspectiveMatrix(): void {
        // TODO: implement
    }

    public static createOrthographicMatrix(): void {
        // TODO: implement
    }
}
