import { SimpleVector3 } from "./simple-vector3";

export interface SimpleVector4 extends SimpleVector3 {
    w: number;
}

export type ReadonlySimpleVector4 = Readonly<SimpleVector4>;
