import { SimpleVector3 } from "./simple-vector3";

export interface SimpleVector4 extends SimpleVector3 {
    w: number;
}

export type ReadonlySimpleVector4 = Readonly<SimpleVector4>;
export const SimpleVector4 = Object.freeze({
    ONE: Object.freeze<SimpleVector4>({ x: 1, y: 1, z: 1, w: 1 }),
    ZERO: Object.freeze<SimpleVector4>({ x: 0, y: 0, z: 0, w: 0 }),
    from: (vector: ReadonlySimpleVector4): SimpleVector4 => ({ x: vector.x, y: vector.y, z: vector.z, w: vector.w }),
    fromReadonly: (vector: ReadonlySimpleVector4): ReadonlySimpleVector4 => ({
        x: vector.x,
        y: vector.y,
        z: vector.z,
        w: vector.w,
    }),
    create: (x: number, y: number, z: number, w: number): SimpleVector4 => ({ x, y, z, w }),
    createReadonly: (x: number, y: number, z: number, w: number): ReadonlySimpleVector4 => ({ x, y, z, w }),
    assign(dest: SimpleVector4, source: ReadonlySimpleVector4): void {
        dest.x = source.x;
        dest.y = source.y;
        dest.z = source.z;
        dest.w = source.w;
    },
});
