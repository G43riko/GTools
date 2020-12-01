import { SimpleVector2 } from "gtools/math";
import { MinMax, PosSize, XYWH } from "gtools/types";
import { Sphere } from "./objects/2d/sphere";
export declare function fixXYWH(minMax: MinMax, xywh: XYWH): SimpleVector2;
export declare function fixPosSize(minMax: MinMax, target: PosSize): SimpleVector2;
export declare function fixSphere(minMax: MinMax, sphere: Sphere): SimpleVector2;
