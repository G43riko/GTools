export declare class CanvasManager {
    private readonly localCanvas;
    private readonly localContext;

    constructor(arg1: HTMLCanvasElement | HTMLImageElement, arg2: number, arg3: number);

    readonly canvas: HTMLCanvasElement;
    readonly context: CanvasRenderingContext2D | null;

    static clearCanvas(ctx: CanvasRenderingContext2D): void;

    static setCanvasSize(canvas: HTMLCanvasElement, width?: number, height?: number): void;

    static setShadow(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, blur: number): void;

    static imageToCanvas(image: HTMLImageElement): HTMLCanvasElement;

    static setLineDash(ctx: CanvasRenderingContext2D, ...args: number[]): void;

    static calcTextWidth(ctx: CanvasRenderingContext2D, value: string, font?: string): number;

    static canvasToImage(canvas: HTMLCanvasElement, format?: string): HTMLImageElement;

    getImage(): HTMLImageElement;

    setShadow(x: number, y: number, color: string, blur: number): void;

    show(format?: string): void;
    clearCanvas(): void;
    setCanvasSize(width?: number, height?: number): void;
    appendTo(element: Element): Element;
}
