import { XYWH } from "gtools/types";
import { CanvasDrawer } from "./canvas-drawer";
import { CanvasManager } from "./canvas-manager";
import { CanvasShadowConfig } from "./types/canvas-shadow-config";

export interface ObjectOptions {
    opacity?: number;
    shadow?: CanvasShadowConfig;
}

export type CanvasLineCap = "butt" | "round" | "square";
export type CanvasLineJoin = "bevel" | "round" | "miter";

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

export class CanvasDrawerAdvanced {
    private readonly drawer = new CanvasDrawer(this.context);

    public constructor(private readonly context: CanvasRenderingContext2D) {
    }

    public renderRect(location: XYWH, options: RenderOptions): void {
        this.prepareShadow(options.shadow);
        this.prepareOpacity(options.opacity);
        if (options.fill) {
            this.prepareShadow(options.fill.shadow);
            this.prepareOpacity(options.fill.opacity);

            if (options.fill.fillImage) {
                this.drawer.drawImage(options.fill.fillImage);
            }
            if (options.fill.fillColor) {
                this.drawer.fillRect(location.x, location.y, location.w, location.h, options.fill.fillColor);
            }
        }
        if (options.stroke) {
            this.prepareShadow(options.stroke.shadow);
            this.prepareOpacity(options.stroke.opacity);
            this.prepareDashed(options.stroke.lineDash);

            if (options.stroke.joinType) {
                this.context.lineJoin = options.stroke.joinType;
            }
            if (options.stroke.lineCap) {
                this.context.lineCap = options.stroke.lineCap;
            }

            if (!isNaN(options.stroke.width ?? NaN)) {
                this.context.lineWidth = options.stroke.width as number;
            }
            if (options.stroke.strokeColor) {
                this.drawer.fillRect(location.x, location.y, location.w, location.h, options.stroke.strokeColor);
            }
        }
    }

    private prepareShadow(shadow?: CanvasShadowConfig): void {
        if (shadow) {
            CanvasManager.setShadow(
                this.context,
                shadow.x ?? 0,
                shadow.y ?? 0,
                shadow.color ?? "black",
                shadow.blur ?? 5,
            );
        }
    }

    private prepareDashed(dashes?: number[]): void {
        if (Array.isArray(dashes)) {
            CanvasManager.setLineDash(this.context, ...dashes);
        }
    }

    private prepareOpacity(opacity?: number): void {
        if (!isNaN(opacity ?? NaN)) {
            this.context.globalAlpha = opacity as number;
        }
    }
}
