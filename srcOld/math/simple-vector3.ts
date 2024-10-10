import { SimpleVector2 } from "./simple-vector2";

export interface SimpleVector3 extends SimpleVector2 {
    z: number;
}

export type ReadonlySimpleVector3 = Readonly<SimpleVector3>;

export const SimpleVector3 = Object.freeze({
    UP            : Object.freeze<SimpleVector3>({x: 0, y: 1, z: 0}),
    RIGHT         : Object.freeze<SimpleVector3>({x: 1, y: 1, z: 0}),
    ONE           : Object.freeze<SimpleVector3>({x: 1, y: 1, z: 1}),
    ZERO          : Object.freeze<SimpleVector3>({x: 0, y: 0, z: 0}),
    from          : (vector: ReadonlySimpleVector3): SimpleVector3 => ({x: vector.x, y: vector.y, z: vector.z}),
    fromReadonly  : (vector: ReadonlySimpleVector3): ReadonlySimpleVector3 => ({x: vector.x, y: vector.y, z: vector.z}),
    create        : (x: number, y: number, z: number): SimpleVector3 => ({x, y, z}),
    createReadonly: (x: number, y: number, z: number): ReadonlySimpleVector3 => ({x, y, z}),
    assign(dest: SimpleVector3, source: ReadonlySimpleVector3): void {
        dest.x = source.x;
        dest.y = source.y;
        dest.z = source.z;
    },
});
