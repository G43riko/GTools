import { Transform } from "gtools/models";
declare class AbstractCanvasManager {
    private readonly localCanvas;
    private readonly localContext;
    constructor(arg1: HTMLCanvasElement | HTMLImageElement, arg2: number, arg3: number);
    get canvas(): HTMLCanvasElement;
    get context(): CanvasRenderingContext2D | null;
    setTransform(transform: Transform): void;
    setTransformRaw(translationX: number, translationY: number, scaleX: number, scaleY?: number): void;
    getImage(): HTMLImageElement;
    setShadow(x: number, y: number, color: string, blur: number): void;
    show(format?: string): void;
    clearCanvas(): void;
    setCanvasSize(width?: number, height?: number): void;
    appendTo(element: Element): Element;
}
export declare class CanvasManager extends AbstractCanvasManager {
    static clearCanvas(ctx: CanvasRenderingContext2D): void;
    static setCanvasSize(canvas: HTMLCanvasElement, width?: number, height?: number): void;
    static setShadow(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, blur: number): void;
    static imageToCanvas(image: HTMLImageElement): HTMLCanvasElement;
    static setLineDash(ctx: CanvasRenderingContext2D, ...args: number[]): void;
    static calcTextWidth(ctx: CanvasRenderingContext2D, value: string, font?: string): number;
    static setTransformRaw(ctx: CanvasRenderingContext2D, translationX: number, translationY: number, scaleX: number, scaleY?: number): void;
    static canvasToImage(canvas: HTMLCanvasElement, format?: string): HTMLImageElement;
}
export {};
