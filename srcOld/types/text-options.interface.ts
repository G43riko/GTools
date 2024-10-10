import { HorizontalAlign } from "./horizontal-align.type";
import { VerticalAlign } from "./vertical-align.type";

export interface TextOptionsInterface {
    fontSize: number;
    font: string;
    fontColor: string;
    rotation?: number;
    verticalAlign: VerticalAlign;
    horizontalAlign: HorizontalAlign;
}
