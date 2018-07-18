import { Vector2f } from "../math/Vector2f";
import { CanvasManager } from "./CanvasManager";
import { Checkers } from "./Checkers";

declare const $: any;

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

function setShadow(context: CanvasRenderingContext2D, config?: CanvasShadowConfig): void {
    if (config) {
        CanvasManager.setShadow(context, config.x, config.y, config.color, config.blur);
    }
    else {
        CanvasManager.setShadow(context, 0, 0, "black", 0);
    }
}

function process(res: CanvasConfig): void {
    if (res.shadow) {
        setShadow(res.ctx, res.shadow);
    }
    if (res.bgImage) {
        res.ctx.save();
        res.ctx.clip();
        if (res.bgImage instanceof HTMLImageElement) {
            res.ctx.drawImage(res.bgImage, res.x, res.y, res.width, res.height);
        }
        else {
            res.ctx.drawImage(res.bgImage.img,
                res.bgImage.x,
                res.bgImage.y,
                res.bgImage.w,
                res.bgImage.h,
                res.x,
                res.y,
                res.width,
                res.height);
        }
        res.ctx.restore();
    }
    else if (res.fill) {
        res.ctx.fillStyle = res.fillColor;
        res.ctx.fill();
    }

    if (res.shadow) {
        setShadow(res.ctx);
    }

    res.ctx.lineCap  = res.lineCap;
    res.ctx.lineJoin = res.joinType;
    if (typeof res.ctx.setLineDash === "function") {
        res.ctx.setLineDash(res.lineDash);
    }

    if (res.draw) {
        res.ctx.lineWidth   = res.borderWidth;
        res.ctx.strokeStyle = res.borderColor;
        res.ctx.stroke();
    }
}

function initDef(obj: any): CanvasConfig {
    return {
        borderColor: "black",
        borderWidth: 1,
        center: false,
        ctx: obj.ctx,
        draw: typeof obj.borderColor !== "undefined" || typeof obj.borderWidth !== "undefined",
        endAngle: Math.PI * 2,
        fill: typeof obj.fillColor !== "undefined",
        fillColor: "white",
        height: 0,
        joinType: "bevel",
        lineCap: "round",
        lineDash: [],
        offset: null,
        radius: {tl: 0, tr: 0, br: 0, bl: 0},
        startAngle: 0,
        width: 0,
        x: 0,
        y: 0,
    };
}

function remakePosAndSize(def: CanvasConfig, obj: any): CanvasConfig {
    const res: CanvasConfig = $.extend(def, obj);
    const checkAttribute = (attrName: keyof CanvasConfig, partA: keyof CanvasConfig, partB: keyof CanvasConfig): void => {
        if (typeof res[attrName] !== "undefined") {
            if (Checkers.isNumber(res[attrName])) {
                res[partA] = res[attrName] as number;
                res[partB] = res[attrName] as number;
            }
            else if (Array.isArray(res[attrName])) {
                res[partA] = res[attrName][0];
                res[partB] = res[attrName][1];
            }
            else {
                res[partA] = (res[attrName] as Vector2f).x;
                res[partB] = (res[attrName] as Vector2f).y;
            }
        }
    };

    checkAttribute("size", "width", "size");
    checkAttribute("position", "x", "y");

    if (res.center) {
        res.x -= res.width >> 1;
        res.y -= res.height >> 1;
    }

    return res;
}

function checkPosAndSize(obj: CanvasConfig, name: string): CanvasConfig {

    if ((typeof obj.x === "undefined" || typeof obj.y === "undefined") && typeof obj.position === "undefined") {
        console.error("MSG_TRY_DRAW_WITHOUT_POSITION");
    }

    if ((typeof obj.width === "undefined" || typeof obj.height === "undefined") && typeof obj.size === "undefined") {
        console.error("MSG_TRY_DRAW_WITHOUT_SIZE");
    }

    if (obj.width <= 0 || obj.height <= 0) {
        console.error("MSG_TRY_DRAW_WITH_NEG_POSITION");
    }

    return initDef(obj);
}

export class CanvasUtils {
    public static doArc(obj: any): void {
        const res = remakePosAndSize(checkPosAndSize(obj, "Arc"), obj);

        res.ctx.beginPath();
        if (typeof res.ctx.ellipse === "function") {
            res.ctx.ellipse(res.x + (res.width >> 1),
                res.y + (res.height >> 1),
                res.width >> 1,
                res.height >> 1,
                0,
                res.startAngle,
                res.endAngle);
        }
        else {
            res.ctx.rect(res.x + (res.width >> 1),
                res.y + (res.height >> 1),
                res.width >> 1,
                res.height >> 1);
        }

        process(res);
    }

    public static doRect(obj: any): void {
        const def = checkPosAndSize(obj, "Rect");

        if (typeof obj.radius !== "undefined") {
            if (Checkers.isNumber(obj.radius)) {
                obj.radius = {
                    bl: obj.radius,
                    br: obj.radius,
                    tl: obj.radius,
                    tr: obj.radius,
                };
            }
            else {
                for (const key in def.radius as any) {
                    if (def.radius.hasOwnProperty(key)) {
                        obj.radius[key] = obj.radius[key] || (def.radius as any)[key];
                    }
                }
            }
        }

        const res = remakePosAndSize(def, obj);

        res.ctx.beginPath();
        res.ctx.moveTo(res.x + (res.radius as any).tl,
            res.y);
        res.ctx.lineTo(res.x + res.width - (res.radius as any).tr,
            res.y);
        res.ctx.quadraticCurveTo(res.x + res.width,
            res.y,
            res.x + res.width,
            res.y + (res.radius as any).tr);
        res.ctx.lineTo(res.x + res.width,
            res.y + res.height - (res.radius as any).br);
        res.ctx.quadraticCurveTo(res.x + res.width,
            res.y + res.height,
            res.x + res.width - (res.radius as any).br,
            res.y + res.height);
        res.ctx.lineTo(res.x + (res.radius as any).bl,
            res.y + res.height);
        res.ctx.quadraticCurveTo(res.x,
            res.y + res.height,
            res.x,
            res.y + res.height - (res.radius as any).bl);
        res.ctx.lineTo(res.x,
            res.y + (res.radius as any).tl);
        res.ctx.quadraticCurveTo(res.x,
            res.y,
            res.x + (res.radius as any).tl,
            res.y);
        res.ctx.closePath();

        process(res);
    }
}
