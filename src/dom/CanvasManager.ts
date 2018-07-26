import { NotBrowserException } from "../errors/NotBrowserException";

export class CanvasManager {
    private readonly localCanvas: HTMLCanvasElement;
    private readonly localContext: CanvasRenderingContext2D | null;

    public constructor(arg1: HTMLCanvasElement | HTMLImageElement, arg2: number, arg3: number) {
        if (arg1 instanceof HTMLCanvasElement) {
            this.localCanvas = arg1;
            if (arg2 && arg3) {
                this.setCanvasSize(arg2, arg3);
            }
        }
        else if (arg1 instanceof HTMLImageElement) {
            this.localCanvas = CanvasManager.imageToCanvas(arg1);
        }
        else {
            if (typeof document === "undefined") {
                throw new NotBrowserException();
            }
            this.localCanvas = document.createElement("canvas");

            if (arg1 && arg2) {
                this.setCanvasSize(arg1, arg2);
            }
        }
        this.localContext = this.localCanvas.getContext("2d");
    }

    public get canvas(): HTMLCanvasElement {
        return this.localCanvas;
    }

    public get context(): CanvasRenderingContext2D | null {
        return this.localContext;
    }

    public static clearCanvas(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    public static setCanvasSize(canvas: HTMLCanvasElement, width = window.innerWidth, height = window.innerHeight): void {
        canvas.width  = width;
        canvas.height = height;
    }

    public static setShadow(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, blur: number): void {
        ctx.shadowColor   = color;
        ctx.shadowBlur    = blur;
        ctx.shadowOffsetX = x;
        ctx.shadowOffsetY = y;
    }

    public static imageToCanvas(image: HTMLImageElement): HTMLCanvasElement {
        if (typeof document === "undefined") {
            throw new NotBrowserException();
        }
        const canvas  = document.createElement("canvas");
        canvas.width  = image.width;
        canvas.height = image.height;
        const ctx     = canvas.getContext("2d");
        if (ctx) {
            ctx.drawImage(image, 0, 0);
        }

        return canvas;
    }

    public static setLineDash(ctx: CanvasRenderingContext2D, ...args: number[]): void {
        if (typeof ctx.setLineDash === "function") {
            ctx.setLineDash(args);
        }
    }

    public static calcTextWidth(ctx: CanvasRenderingContext2D, value: string, font?: string): number {
        if (font) {
            ctx.font = font;
        }

        return ctx.measureText(value).width;
    }

    public static canvasToImage(canvas: HTMLCanvasElement, format = "image/png"): HTMLImageElement {
        const image  = new Image();
        image.src    = canvas.toDataURL(format);
        image.width  = canvas.width;
        image.height = canvas.height;

        return image;
    }

    public getImage(): HTMLImageElement {
        return CanvasManager.canvasToImage(this.localCanvas);
    }

    public setShadow(x: number, y: number, color: string, blur: number): void {
        if (this.localContext) {
            CanvasManager.setShadow(this.localContext, x, y, color, blur);
        }
    }

    public show(format = "image/png"): void {
        window.open(this.localCanvas.toDataURL(format), "_blank");
    }

    public clearCanvas(): void {
        if (this.localContext) {
            CanvasManager.clearCanvas(this.localContext);
        }
    }

    public setCanvasSize(width = window.innerWidth, height = window.innerHeight): void {
        CanvasManager.setCanvasSize(this.localCanvas, width, height);
    }

    public appendTo(element: Element): Element {
        element.appendChild(this.localCanvas);

        return element;
    }
}
