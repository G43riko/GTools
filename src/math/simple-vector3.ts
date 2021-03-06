import { SimpleVector2 } from "./simple-vector2";

export interface SimpleVector3 extends SimpleVector2 {
    z: number;
}

export type ReadonlySimpleVector3 = Readonly<SimpleVector3>;
