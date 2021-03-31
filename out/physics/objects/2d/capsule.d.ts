import { SimpleVector2 } from "gtools/math";
import { MinMax } from "gtools/types";
import { MassAble } from "./object-2d";
export declare class Capsule implements MassAble {
    private readonly start;
    private readonly end;
    private readonly radius;
    constructor(start: SimpleVector2, end: SimpleVector2, radius: number);
    get boundingRadius(): number;
    get area(): number;
    get circuit(): number;
    toMinMax(): MinMax;
    get momentOfInertia(): number;
    get length(): number;
}
