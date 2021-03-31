import { XYWH } from "gtools/types";
import { CanvasShadowConfig } from "./types/canvas-shadow-config";
export interface ObjectOptions {
    opacity?: number;
    shadow?: CanvasShadowConfig;
}
export interface StrokeOptions extends ObjectOptions {
    width?: number;
    strokeColor?: string;
    lineDash?: number[];
    lineCap?: CanvasLineCap;
    joinType?: CanvasLineJoin;
}
export interface FillOptions extends ObjectOptions {
    fillColor?: string;
    fillImage?: HTMLImageElement;
}
export interface RenderOptions extends ObjectOptions {
    fill?: FillOptions;
    stroke?: StrokeOptions;
}
export declare class CanvasDrawerAdvanced {
    private readonly context;
    private readonly drawer;
    constructor(context: CanvasRenderingContext2D);
    renderRect(location: XYWH, options: RenderOptions): void;
    private prepareShadow;
    private prepareDashed;
    private prepareOpacity;
}
//# sourceMappingURL=canvas-drawer-advanced.d.ts.map