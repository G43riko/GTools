import { SimpleVector3 } from "./simple-vector3";
export interface SimpleVector4 extends SimpleVector3 {
    w: number;
}
export declare type ReadonlySimpleVector4 = Readonly<SimpleVector4>;
