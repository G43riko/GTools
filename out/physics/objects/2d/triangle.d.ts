import { SimpleVector2 } from "gtools/math";
import { MinMax } from "gtools/types";
import { MassAble } from "./object-2d";
export declare class Triangle implements MassAble {
    private readonly pointA;
    private readonly pointB;
    private readonly pointC;
    constructor(pointA: SimpleVector2, pointB: SimpleVector2, pointC: SimpleVector2);
    get area(): number;
    get boundingRadius(): number;
    get circuit(): number;
    get momentOfInertia(): number;
    toMinMax(): MinMax;
}
