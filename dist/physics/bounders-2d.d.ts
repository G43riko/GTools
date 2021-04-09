import { SimpleVector2 } from "gtools/math";
import { MinMax2D, PosSize2d, XYWH } from "gtools/types";
import { Sphere } from "./objects/2d/sphere";
export declare function fixXYWH(minMax: MinMax2D, xywh: XYWH): SimpleVector2;
export declare function fixPosSize(minMax: MinMax2D, target: PosSize2d): SimpleVector2;
export declare function fixSphere(minMax: MinMax2D, sphere: Sphere): SimpleVector2;
//# sourceMappingURL=bounders-2d.d.ts.map