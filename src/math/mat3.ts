import { SimpleMat3 } from "./simple-mat3";
import { SimpleVector2 } from "./simple-vector2";

/**
 * https://github.com/mrdoob/three.js/blob/dev/src/math/Matrix3.js
 */
export class Mat3 extends SimpleMat3 {
    public static mul(a: SimpleMat3, b: SimpleMat3): SimpleMat3;
    public static mul<T extends SimpleMat3>(a: SimpleMat3, b: SimpleMat3, out: T): T;
    public static mul<T extends SimpleMat3>(a: SimpleMat3, b: SimpleMat3, out = SimpleMat3.create()): T {
        const a00   = a.data[0];
        const a01   = a.data[1];
        const a02   = a.data[2];
        const a10   = a.data[3];
        const a11   = a.data[4];
        const a12   = a.data[5];
        const a20   = a.data[6];
        const a21   = a.data[7];
        const a22   = a.data[8];
        const b00   = b.data[0];
        const b01   = b.data[1];
        const b02   = b.data[2];
        const b10   = b.data[3];
        const b11   = b.data[4];
        const b12   = b.data[5];
        const b20   = b.data[6];
        const b21   = b.data[7];
        const b22   = b.data[8];
        out.data[0] = b00 * a00 + b01 * a10 + b02 * a20;
        out.data[1] = b00 * a01 + b01 * a11 + b02 * a21;
        out.data[2] = b00 * a02 + b01 * a12 + b02 * a22;
        out.data[3] = b10 * a00 + b11 * a10 + b12 * a20;
        out.data[4] = b10 * a01 + b11 * a11 + b12 * a21;
        out.data[5] = b10 * a02 + b11 * a12 + b12 * a22;
        out.data[6] = b20 * a00 + b21 * a10 + b22 * a20;
        out.data[7] = b20 * a01 + b21 * a11 + b22 * a21;
        out.data[8] = b20 * a02 + b21 * a12 + b22 * a22;

        return out as T;
    }

    public static getTranslatedVector(a: SimpleVector2, m: SimpleMat3): SimpleVector2;
    public static getTranslatedVector<T extends SimpleVector2>(a: SimpleVector2, m: SimpleMat3, out: T): T;
    public static getTranslatedVector<T extends SimpleVector2>(a: SimpleVector2, m: SimpleMat3, out = {x: 0, y: 0}): T {
        const x = a.x;
        const y = a.y;

        out.x = m.data[0] * x + m.data[3] * y + m.data[6];
        out.y = m.data[1] * x + m.data[4] * y + m.data[7];

        return out as T;
    }
}
