import { SimpleVector2 } from "../../../math";
import { MinMax } from "gtools/types";
import { MassAble } from "./object-2d";
import { Ray } from "./ray";
import { Sphere } from "./sphere";
export declare class Rect implements MassAble {
    readonly position: SimpleVector2;
    readonly size: SimpleVector2;
    constructor(position: SimpleVector2, size: SimpleVector2);
    get area(): number;
    get momentOfInertia(): number;
    get boundingRadius(): number;
    get circuit(): number;
    toMinMax(): MinMax;
    static fromSphere({ radius, center }: Pick<Sphere, "radius" | "center">): Rect;
    static fromRay({ origin, direction, length }: Pick<Ray, "origin" | "direction" | "length">, realLength?: number): Rect;
    static fromPoints(points: SimpleVector2[], offsetX?: number, offsetY?: number): Rect;
    static fromMinMax({ min, max }: MinMax): Rect;
}
