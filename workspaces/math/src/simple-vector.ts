import type {
    ReadonlySimpleVector2,
    ReadonlySimpleVector3,
    ReadonlySimpleVector4,
    SimpleVector2,
    SimpleVector3,
    SimpleVector4,
} from "@g43/types";
import type { ReadonlySimpleVectorXZ, SimpleVectorXZ } from "./simple-vector-xz.ts";

export class SimpleVector {
    public static readonly TMP2: SimpleVector2 = SimpleVector.create2(0, 0);
    public static readonly TMP3: SimpleVector3 = SimpleVector.create3(0, 0, 0);
    public static readonly TMP4: SimpleVector4 = SimpleVector.create4(0, 0, 0, 0);
    public static readonly X2 = (x: number): SimpleVector2 => ({ x, y: 0 });
    public static readonly Y2 = (y: number): SimpleVector2 => ({ x: 0, y });
    public static readonly X3 = (x: number): SimpleVector3 => ({ x, y: 0, z: 0 });
    public static readonly Y3 = (y: number): SimpleVector3 => ({ x: 0, y, z: 0 });
    public static readonly Z3 = (z: number): SimpleVector3 => ({ x: 0, y: 0, z });
    public static readonly UP_2: ReadonlySimpleVector2 = Object.freeze<ReadonlySimpleVector2>({ x: 0, y: 1 });
    public static readonly INFINITY_2: ReadonlySimpleVector2 = Object.freeze<ReadonlySimpleVector2>({
        x: Infinity,
        y: Infinity,
    });
    public static readonly N_INFINITY_2: ReadonlySimpleVector2 = Object.freeze<ReadonlySimpleVector2>({
        x: -Infinity,
        y: -Infinity,
    });
    public static readonly RIGHT_2: ReadonlySimpleVector2 = Object.freeze<ReadonlySimpleVector2>({ x: 1, y: 0 });
    public static readonly ONE_2: ReadonlySimpleVector2 = Object.freeze<ReadonlySimpleVector2>({ x: 1, y: 1 });
    public static readonly ZERO_2: ReadonlySimpleVector2 = Object.freeze<ReadonlySimpleVector2>({ x: 0, y: 0 });
    public static readonly HALF_2: ReadonlySimpleVector2 = Object.freeze<ReadonlySimpleVector2>({ x: 0.5, y: 0.5 });
    public static readonly NaN_2: ReadonlySimpleVector2 = Object.freeze<ReadonlySimpleVector2>({ x: NaN, y: NaN });

    public static readonly ZERO_XZ: ReadonlySimpleVectorXZ = Object.freeze<ReadonlySimpleVectorXZ>({ x: 0, z: 0 });

    public static readonly UP_3: ReadonlySimpleVector3 = Object.freeze<ReadonlySimpleVector3>({ x: 0, y: 1, z: 0 });
    public static readonly DOWN_3: ReadonlySimpleVector3 = Object.freeze<ReadonlySimpleVector3>({ x: 0, y: -1, z: 0 });
    public static readonly FORWARD_3: ReadonlySimpleVector3 = Object.freeze<ReadonlySimpleVector3>({
        x: 0,
        y: 0,
        z: 1,
    });
    public static readonly RIGHT_3: ReadonlySimpleVector3 = Object.freeze<ReadonlySimpleVector3>({ x: 1, y: 0, z: 0 });
    public static readonly ONE_3: ReadonlySimpleVector3 = Object.freeze<ReadonlySimpleVector3>({ x: 1, y: 1, z: 1 });
    public static readonly ZERO_3: ReadonlySimpleVector3 = Object.freeze<ReadonlySimpleVector3>({ x: 0, y: 0, z: 0 });
    public static readonly HALF_3: ReadonlySimpleVector3 = Object.freeze<ReadonlySimpleVector3>({
        x: 0.5,
        y: 0.5,
        z: 0.5,
    });
    public static readonly NaN_3: ReadonlySimpleVector3 = Object.freeze<ReadonlySimpleVector3>({
        x: NaN,
        y: NaN,
        z: NaN,
    });

    public static readonly ZERO_4: ReadonlySimpleVector4 = Object.freeze<ReadonlySimpleVector4>({
        x: 0,
        y: 0,
        z: 0,
        w: 0,
    });
    public static readonly HALF_4: ReadonlySimpleVector4 = Object.freeze<ReadonlySimpleVector4>({
        x: 0.5,
        y: 0.5,
        z: 0.5,
        w: 0.5,
    });
    public static readonly NaN_4: ReadonlySimpleVector4 = Object.freeze<ReadonlySimpleVector4>({
        x: NaN,
        y: NaN,
        z: NaN,
        w: NaN,
    });

    public static createXZ(x: number, z: number): SimpleVectorXZ {
        return { x, z };
    }

    public static create2(x: number, y: number): SimpleVector2 {
        return { x, y };
    }

    public static empty2(): SimpleVector2 {
        return this.create2(0, 0);
    }

    /**
     * Create random vector with int values between 0 and (x,y) exclusive
     * @param x
     * @param y
     */
    public static createRandom2Int(x: number, y: number): SimpleVector2 {
        return SimpleVector.create2(
            Math.floor(Math.random() * x),
            Math.floor(Math.random() * y),
        );
    }

    public static createReadonlyXZ(x: number, z: number): ReadonlySimpleVectorXZ {
        return { x, z } as const;
    }

    public static createReadonly2(x: number, y: number): ReadonlySimpleVector2 {
        return { x, y } as const;
    }

    /**
     * @param angle - angle in radians
     */
    public static createDir(angle: number): SimpleVector2 {
        return { x: Math.cos(angle), y: Math.sin(angle) };
    }

    /**
     * @param angle - angle in radians
     * @param zValue - default z value
     */
    public static createDirXY(angle: number, zValue = 0): SimpleVector3 {
        return { x: Math.cos(angle), y: Math.sin(angle), z: zValue };
    }

    public static create3(x: number, y: number, z: number): SimpleVector3 {
        return { x, y, z };
    }

    public static empty3(): SimpleVector3 {
        return this.create3(0, 0, 0);
    }

    public static createReadonly3(x: number, y: number, z: number): ReadonlySimpleVector3 {
        return { x, y, z } as const;
    }

    public static create4(x: number, y: number, z: number, w: number): SimpleVector4 {
        return { x, y, z, w };
    }

    public static createReadonly4(x: number, y: number, z: number, w: number): ReadonlySimpleVector4 {
        return { x, y, z, w } as const;
    }

    public static clone2(vector: ReadonlySimpleVector2): SimpleVector2 {
        return { x: vector.x, y: vector.y };
    }

    public static cloneXZ(vector: ReadonlySimpleVectorXZ): ReadonlySimpleVectorXZ {
        return { x: vector.x, z: vector.z };
    }

    public static cloneReadonly2(vector: ReadonlySimpleVector2): ReadonlySimpleVector2 {
        return { x: vector.x, y: vector.y } as const;
    }

    public static clone3(vector: ReadonlySimpleVector3): SimpleVector3 {
        return { x: vector.x, y: vector.y, z: vector.z };
    }

    public static cloneReadonly3(vector: ReadonlySimpleVector3): ReadonlySimpleVector3 {
        return { x: vector.x, y: vector.y, z: vector.z } as const;
    }

    public static clone4(vector: ReadonlySimpleVector4): SimpleVector4 {
        return { x: vector.x, y: vector.y, z: vector.z, w: vector.w };
    }

    public static cloneReadonly4(vector: ReadonlySimpleVector4): ReadonlySimpleVector4 {
        return { x: vector.x, y: vector.y, z: vector.z, w: vector.w };
    }

    public static create(x: number, y: number): SimpleVector2;
    public static create(x: number, y: number, z: number): SimpleVector3;
    public static create(x: number, y: number, z: number, w: number): SimpleVector4;
    public static create(x: number, y: number, z?: number, w?: number): SimpleVector2 | SimpleVector3 | SimpleVector4 {
        if (typeof z === "number") {
            if (typeof w === "number") {
                return { x, y, z, w };
            }

            return { x, y, z };
        }

        return { x, y };
    }

    public static createReadonly(x: number, y: number): ReadonlySimpleVector2;
    public static createReadonly(x: number, y: number, z: number): ReadonlySimpleVector3;
    public static createReadonly(x: number, y: number, z: number, w: number): ReadonlySimpleVector4;
    public static createReadonly(
        x: number,
        y: number,
        z?: number,
        w?: number,
    ): ReadonlySimpleVector2 | ReadonlySimpleVector3 | ReadonlySimpleVector4 {
        if (typeof z === "number") {
            if (typeof w === "number") {
                return { x, y, z, w };
            }

            return { x, y, z };
        }

        return { x, y };
    }

    public static assign2(dest: SimpleVector2, source: ReadonlySimpleVector2): void {
        dest.x = source.x;
        dest.y = source.y;
    }

    public static assign3(dest: SimpleVector3, source: ReadonlySimpleVector3): void {
        dest.x = source.x;
        dest.y = source.y;
        dest.z = source.z;
    }

    public static assign4(dest: SimpleVector4, source: ReadonlySimpleVector4): void {
        dest.x = source.x;
        dest.y = source.y;
        dest.z = source.z;
        dest.w = source.w;
    }
}
