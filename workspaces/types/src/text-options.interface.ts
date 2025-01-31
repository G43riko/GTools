import type { HorizontalAlign } from "./horizontal-align.ts";
import type { VerticalAlign } from "./vertical-align.ts";

export interface TextOptionsInterface {
    readonly fontSize: number;
    readonly font: string;
    readonly fontColor: string;
    readonly rotation?: number;
    readonly verticalAlign: VerticalAlign;
    readonly horizontalAlign: HorizontalAlign;
}
