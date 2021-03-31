import { SimpleVector2, SimpleVector3, SimpleVector4 } from "gtools/math";
import { Color } from "./color.model";
export declare class Range<T> {
    readonly min: T;
    readonly max: T;
    constructor(min: T, max?: T);
    static random(range: Range<number>): number;
    static randomVector2i(range: Range<SimpleVector2>): SimpleVector2;
    static randomVector3i(range: Range<SimpleVector3>): SimpleVector3;
    static randomVector4i(range: Range<SimpleVector4>): SimpleVector4;
    static randomVector2f(range: Range<SimpleVector2>): SimpleVector2;
    static randomVector3f(range: Range<SimpleVector3>): SimpleVector3;
    static randomVector4f(range: Range<SimpleVector4>): SimpleVector4;
    static randomColorF(range: Range<Color>): Color;
    static randomColorI(range: Range<Color>): Color;
}
//# sourceMappingURL=range.d.ts.map