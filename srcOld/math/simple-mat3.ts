import { Mat3 } from "./mat3";

/**
 * 00 03 06
 * 01 04 07
 * 02 05 08
 */

export class SimpleMat3 {
    public constructor(
        public readonly data: number[],
    ) {
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

    public static fromTranslation<T extends SimpleMat3 = SimpleMat3>(
        x: number,
        y: number,
        out = SimpleMat3.create(),
    ): T {
        SimpleMat3.setIdentity(out.data);
        SimpleMat3.setTranslation(x, y, out.data);

        return out as T;
    }

    public static fromScale<T extends SimpleMat3 = SimpleMat3>(x: number, y: number, out = SimpleMat3.create()): T {
        SimpleMat3.setIdentity(out.data);
        SimpleMat3.setScale(x, y, out.data);

        return out as T;
    }

    private static setRotation(angle: number, data: number[]): number[] {
        data[0] = Math.cos(angle);
        data[1] = -Math.sin(angle);
        data[3] = Math.sin(angle);
        data[4] = Math.cos(angle);

        return data;
    }

    public static fromRotation<T extends SimpleMat3 = SimpleMat3>(angle: number, out = SimpleMat3.create()): T {
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

    public static translate<T extends SimpleMat3 = SimpleMat3>(
        a: SimpleMat3,
        x: number,
        y: number,
        out = SimpleMat3.create(),
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

    public static rotate<T extends SimpleMat3 = SimpleMat3>(a: SimpleMat3, rad: number, out = SimpleMat3.create()): T {
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

    public equalsArray(data: number[]): boolean {
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

    public static getTransformationMatrix<T extends SimpleMat3 = SimpleMat3>(
        transitionX: number,
        transitionY: number,
        rotation: number,
        scaleX: number,
        scaleY: number,
        out = SimpleMat3.create(),
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

    public equals(mat: Mat3): boolean {
        if (!mat) {
            return false;
        }

        return this.equalsArray(mat.data);
    }

    public static scale<T extends SimpleMat3 = SimpleMat3>(
        a: SimpleMat3,
        x: number,
        y: number,
        out = SimpleMat3.create(),
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
