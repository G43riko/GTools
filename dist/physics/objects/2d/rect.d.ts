import { SimpleVector2 } from "gtools/math";
import { MinMax } from "gtools/types";
import { Sphere } from "./sphere";
export declare class Rect {
    readonly position: SimpleVector2;
    readonly size: SimpleVector2;
    constructor(position: SimpleVector2, size: SimpleVector2);
    get area(): number;
    get circuit(): number;
    toMinMax(): MinMax;
    static fromSphere({ radius, center }: Pick<Sphere, "radius" | "center">): Rect;
    static fromMinMax({ min, max }: MinMax): Rect;
}
//# sourceMappingURL=rect.d.ts.map