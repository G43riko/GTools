import type { Color } from "@g43/tools";
import type { Gradient } from "../gradiants/gradient.ts";

export interface FillAble {
    fillColor: Color | string | Gradient;
    fillOpacity: number;

    fillImage?: HTMLImageElement;
}
