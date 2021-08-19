import { SimpleVector2 } from "./simple-vector2";

export interface SimpleVector3 extends SimpleVector2 {
    z: number;
}

export type ReadonlySimpleVector3 = Readonly<SimpleVector3>;

export const SimpleVector3 = Object.freeze({
    UP   : Object.freeze({x: 0, y: 1, z: 0}) as ReadonlySimpleVector3,
    RIGHT: Object.freeze({x: 1, y: 1, z: 0}) as ReadonlySimpleVector3,
    ONE  : Object.freeze({x: 1, y: 1, z: 1}) as ReadonlySimpleVector3,
    ZERO : Object.freeze({x: 0, y: 0, z: 0}) as ReadonlySimpleVector3,
});
