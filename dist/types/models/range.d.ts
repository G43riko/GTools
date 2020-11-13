import { SimpleVector2 } from "gtools/math";
import { Color } from "./color.model";
export declare class Range<T> {
    readonly min: T;
    readonly max: T;
    constructor(min: T, max?: T);
    static random(range: Range<number>): number;
    static randomVector(range: Range<SimpleVector2>): SimpleVector2;
    static randomColor(range: Range<Color>, method?: string): Color;
}
//# sourceMappingURL=range.d.ts.map