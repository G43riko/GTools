import { NotBrowserException } from "gtools/errors";
class AbstractCanvasManager {
    constructor(arg1, arg2, arg3) {
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
    get canvas() {
        return this.localCanvas;
    }
    get context() {
        return this.localContext;
    }
    setTransform(transform) {
        this.setTransformRaw(transform.offset.x, transform.offset.y, transform.scale);
    }
    setTransformRaw(translationX, translationY, scaleX, scaleY = scaleX) {
        if (this.localContext) {
            CanvasManager.setTransformRaw(this.localContext, translationX, translationY, scaleX, scaleY);
        }
    }
    getImage() {
        return CanvasManager.canvasToImage(this.localCanvas);
    }
    setShadow(x, y, color, blur) {
        if (this.localContext) {
            CanvasManager.setShadow(this.localContext, x, y, color, blur);
        }
    }
    show(format = "image/png") {
        window.open(this.localCanvas.toDataURL(format), "_blank");
    }
    clearCanvas() {
        if (this.localContext) {
            CanvasManager.clearCanvas(this.localContext);
        }
    }
    setCanvasSize(width = window.innerWidth, height = window.innerHeight) {
        CanvasManager.setCanvasSize(this.localCanvas, width, height);
    }
    appendTo(element) {
        element.appendChild(this.localCanvas);
        return element;
    }
}
export class CanvasManager extends AbstractCanvasManager {
    static clearCanvas(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    static setCanvasSize(canvas, width = window.innerWidth, height = window.innerHeight) {
        canvas.width = width;
        canvas.height = height;
    }
    static setShadow(ctx, x, y, color, blur) {
        ctx.shadowColor = color;
        ctx.shadowBlur = blur;
        ctx.shadowOffsetX = x;
        ctx.shadowOffsetY = y;
    }
    static imageToCanvas(image) {
        if (typeof document === "undefined") {
            throw new NotBrowserException();
        }
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
            ctx.drawImage(image, 0, 0);
        }
        return canvas;
    }
    static setLineDash(ctx, ...args) {
        if (typeof ctx.setLineDash === "function") {
            ctx.setLineDash(args);
        }
    }
    static calcTextWidth(ctx, value, font) {
        if (font) {
            ctx.font = font;
        }
        return ctx.measureText(value).width;
    }
    static setTransformRaw(ctx, translationX, translationY, scaleX, scaleY = scaleX) {
        ctx.setTransform(scaleX, 0, 0, scaleY, translationX, translationY);
    }
    static canvasToImage(canvas, format = "image/png") {
        const image = new Image();
        image.src = canvas.toDataURL(format);
        image.width = canvas.width;
        image.height = canvas.height;
        return image;
    }
}
//# sourceMappingURL=canvas-manager.js.map