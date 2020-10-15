import { Vector2f } from "..";
export interface CanvasShadowConfig {
    x: number;
    y: number;
    color: string;
    blur: number;
}
export interface CanvasConfig {
    shadow?: CanvasShadowConfig;
    position?: number | Vector2f;
    center?: boolean;
    size?: number | Vector2f;
    bgImage?: {
        img: HTMLImageElement;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    fill: boolean;
    fillColor: string;
    draw: boolean;
    borderWidth: number;
    radius: number | {
        tl: number;
        tr: number;
        br: number;
        bl: number;
    };
    borderColor: string;
    ctx: CanvasRenderingContext2D;
    lineCap: "butt" | "round" | "square";
    joinType: "bevel" | "round" | "miter";
    x: number;
    y: number;
    startAngle: number;
    endAngle: number;
    offset: any;
    lineDash: number[];
    width: number;
    height: number;
}
export declare class CanvasUtils {
    static doArc(obj: any): void;
    static doRect(obj: any): void;
}
