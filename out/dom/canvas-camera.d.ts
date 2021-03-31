import { SimpleVector2 } from "gtools/math";
export interface CanvasCameraSettings {
    readonly fieldOfView?: number;
}
export interface CanvasCameraViewport {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
    scale: [number, number];
}
export declare class CanvasCamera {
    private readonly context;
    private readonly settings;
    private distance;
    private readonly lookAt;
    private readonly viewport;
    private readonly fieldOfView;
    private readonly aspectRatio;
    constructor(context: CanvasRenderingContext2D, settings: CanvasCameraSettings);
    begin(): void;
    end(): void;
    private applyScale;
    private applyTranslation;
    private updateViewport;
    zoomTo(zoom: number): void;
    moveTo(x: number, y: number): void;
    screenToWorld(x: number, y: number, obj?: SimpleVector2): SimpleVector2;
    worldToScreen(x: number, y: number, obj?: SimpleVector2): SimpleVector2;
    private addListeners;
}
