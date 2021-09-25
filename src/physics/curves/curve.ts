import { ReadonlySimpleVector2, ReadonlySimpleVector3 } from "../../math";

interface Curve<T> {
    readonly points: readonly T[];
    readonly length: number;

    getSize(): number;

    getPoint(value: number): T;

    getLerpPointAt(value: number): T;

    getPointAtArc(value: number): T;

    getPoints(divisions?: number): readonly T[];
}

export interface Curve2D extends Curve<ReadonlySimpleVector2> {

}

export interface Curve3D extends Curve<ReadonlySimpleVector3> {

}