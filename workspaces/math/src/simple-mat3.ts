/**
 * 00 03 06
 * 01 04 07
 * 02 05 08
 */

import type { SimpleVector2 } from "@g43/types";
import { SimpleVector } from "./simple-vector.ts";

export class SimpleMat3 {
    public readonly data: number[];
    public constructor(
        data: number[],
    ) {
        this.data = data;
    }

    public set(x: number, y: number, value: number): void {
        this.data[x * 3 + y] = value;
    }

    public get(x: number, y: number): number {
        return this.data[x * 3 + y];
    }

    public static setIdentity(data: number[]): number[] {
        data[0] = 1;
        data[1] = 0;
        data[2] = 0;
        data[3] = 0;
        data[4] = 1;
        data[5] = 0;
        data[6] = 0;
        data[7] = 0;
        data[8] = 1;

        return data;
    }

    private static setTranslation(x: number, y: number, data: number[]): number[] {
        data[2] = x;
        data[5] = y;

        return data;
    }

    private static setScale(x: number, y: number, data: number[]): number[] {
        data[0] = x;
        data[4] = y;

        return data;
    }

    public static fromTranslation(x: number, y: number): SimpleMat3;
    public static fromTranslation<T extends SimpleMat3>(x: number, y: number, out: T): T;
    public static fromTranslation<T extends SimpleMat3>(
        x: number,
        y: number,
        out: T = SimpleMat3.create() as unknown as T,
    ): T {
        SimpleMat3.setIdentity(out.data);
        SimpleMat3.setTranslation(x, y, out.data);

        return out as T;
    }

    public static fromScale(x: number, y: number): SimpleMat3;
    public static fromScale<T extends SimpleMat3>(x: number, y: number, out: T): T;
    public static fromScale<T extends SimpleMat3>(
        x: number,
        y: number,
        out: T = SimpleMat3.create() as unknown as T,
    ): T {
        SimpleMat3.setIdentity(out.data);
        SimpleMat3.setScale(x, y, out.data);

        return out as T;
    }

    /**
     * @param angle in radians
     * @param data
     * @returns
     */
    private static setRotation(angle: number, data: number[]): number[] {
        data[0] = Math.cos(angle);
        data[1] = -Math.sin(angle);
        data[3] = Math.sin(angle);
        data[4] = Math.cos(angle);

        return data;
    }

    public static fromRotation(angle: number): SimpleMat3;
    public static fromRotation<T extends SimpleMat3>(angle: number, out: T): T;
    /**
     * @param angle in radians
     * @param out
     * @returns
     */
    public static fromRotation<T extends SimpleMat3>(angle: number, out: T = SimpleMat3.create() as unknown as T): T {
        SimpleMat3.setIdentity(out.data);
        SimpleMat3.setRotation(angle, out.data);

        return out as T;
    }

    public static create(): SimpleMat3 {
        return new SimpleMat3([
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
        ]);
    }

    public stringify(): string {
        return JSON.stringify(
            [
                [this.data[0], this.data[3], this.data[6]],
                [this.data[1], this.data[4], this.data[7]],
                [this.data[2], this.data[5], this.data[8]],
            ],
            null,
            4,
        );
    }

    public static translate(a: SimpleMat3, x: number, y: number): SimpleMat3;
    public static translate<T extends SimpleMat3>(a: SimpleMat3, x: number, y: number, out: T): T;
    public static translate<T extends SimpleMat3>(
        a: SimpleMat3,
        x: number,
        y: number,
        out: T = SimpleMat3.create() as unknown as T,
    ): T {
        const a00 = a.data[0];
        const a01 = a.data[1];
        const a02 = a.data[2];
        const a10 = a.data[3];
        const a11 = a.data[4];
        const a12 = a.data[5];
        const a20 = a.data[6];
        const a21 = a.data[7];
        const a22 = a.data[8];
        out.data[0] = a00;
        out.data[1] = a01;
        out.data[2] = a02;
        out.data[3] = a10;
        out.data[4] = a11;
        out.data[5] = a12;
        out.data[6] = x * a00 + y * a10 + a20;
        out.data[7] = x * a01 + y * a11 + a21;
        out.data[8] = x * a02 + y * a12 + a22;

        return out as T;
    }

    public static rotate(a: SimpleMat3, rad: number): SimpleMat3;
    public static rotate<T extends SimpleMat3>(a: SimpleMat3, rad: number, out: T): T;
    public static rotate<T extends SimpleMat3>(
        a: SimpleMat3,
        rad: number,
        out: T = SimpleMat3.create() as unknown as T,
    ): T {
        const a00 = a.data[0];
        const a01 = a.data[1];
        const a02 = a.data[2];
        const a10 = a.data[3];
        const a11 = a.data[4];
        const a12 = a.data[5];
        const a20 = a.data[6];
        const a21 = a.data[7];
        const a22 = a.data[8];
        const s = Math.sin(rad);
        const c = Math.cos(rad);
        out.data[0] = c * a00 + s * a10;
        out.data[1] = c * a01 + s * a11;
        out.data[2] = c * a02 + s * a12;
        out.data[3] = c * a10 - s * a00;
        out.data[4] = c * a11 - s * a01;
        out.data[5] = c * a12 - s * a02;
        out.data[6] = a20;
        out.data[7] = a21;
        out.data[8] = a22;

        return out as T;
    }

    public equalsArray(data: readonly number[]): boolean {
        if (!data?.length) {
            return false;
        }

        for (let i = 0; i < 9; i++) {
            if (data[i] !== this.data[i]) {
                return false;
            }
        }

        return true;
    }

    public static getTranslate(mat: SimpleMat3): SimpleVector2 {
        return SimpleVector.create2(mat.data[2], mat.data[5]);
    }

    public getScaleX(): number {
        // absolute scale of the matrix (we lose sign so need to add it back)
        const xScaleSq = this.data[0] * this.data[0] + this.data[2] * this.data[2];

        return Math.sqrt(xScaleSq);
    }

    public getScaleY(): number {
        // absolute scale of the matrix (we lose sign so need to add it back)
        const yScaleSq = this.data[1] * this.data[1] + this.data[3] * this.data[3];

        return Math.sqrt(yScaleSq);
    }
    public static getScale(mat: SimpleMat3): SimpleVector2 {
        const sx = Math.sqrt(mat.data[0] * mat.data[0] + mat.data[3] * mat.data[3]);
        const sy = Math.sqrt(mat.data[1] * mat.data[1] + mat.data[4] * mat.data[4]);
        return SimpleVector.create2(sx, sy);
    }

    public static getRotation(mat: SimpleMat3): number {
        return Math.atan2(mat.data[3], mat.data[0]);
    }

    public static getTransformationMatrix(
        transitionX: number,
        transitionY: number,
        rotation: number,
        scaleX: number,
        scaleY: number,
    ): SimpleMat3;
    public static getTransformationMatrix<T extends SimpleMat3>(
        transitionX: number,
        transitionY: number,
        rotation: number,
        scaleX: number,
        scaleY: number,
        out: T,
    ): T;
    public static getTransformationMatrix<T extends SimpleMat3>(
        transitionX: number,
        transitionY: number,
        rotation: number,
        scaleX: number,
        scaleY: number,
        out: T = SimpleMat3.create() as unknown as T,
    ): T {
        SimpleMat3.setIdentity(out.data);

        return SimpleMat3.translate(
            SimpleMat3.rotate(
                SimpleMat3.scale(
                    out,
                    scaleX,
                    scaleY,
                    out,
                ),
                rotation,
                out,
            ),
            transitionX,
            transitionY,
            out,
        );
    }

    public equals(mat: SimpleMat3): boolean {
        if (!mat) {
            return false;
        }

        return this.equalsArray(mat.data);
    }
    public static scale(a: SimpleMat3, x: number, y: number): SimpleMat3;
    public static scale<T extends SimpleMat3>(a: SimpleMat3, x: number, y: number, out: T): T;
    public static scale<T extends SimpleMat3>(
        a: SimpleMat3,
        x: number,
        y: number,
        out: T = SimpleMat3.create() as unknown as T,
    ): T {
        out.data[0] = x * a.data[0];
        out.data[1] = x * a.data[1];
        out.data[2] = x * a.data[2];
        out.data[3] = y * a.data[3];
        out.data[4] = y * a.data[4];
        out.data[5] = y * a.data[5];
        out.data[6] = a.data[6];
        out.data[7] = a.data[7];
        out.data[8] = a.data[8];

        return out as T;
    }
}
