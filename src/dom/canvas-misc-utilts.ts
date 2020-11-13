import { RoundData } from "gtools/types";

export function makeRoundedRect(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    radius: RoundData): void {
    const tr = typeof radius === "number" ? radius : (typeof radius.tr === "number" ? radius.tr : 0);
    const tl = typeof radius === "number" ? radius : (typeof radius.tl === "number" ? radius.tl : 0);
    const br = typeof radius === "number" ? radius : (typeof radius.br === "number" ? radius.br : 0);
    const bl = typeof radius === "number" ? radius : (typeof radius.bl === "number" ? radius.bl : 0);
    context.beginPath();
    context.moveTo(x + tl,
        y);
    context.lineTo(x + w - tr,
        y);
    context.quadraticCurveTo(x + w,
        y,
        x + w,
        y + tr);
    context.lineTo(x + w,
        y + h - br);
    context.quadraticCurveTo(x + w,
        y + h,
        x + w - br,
        y + h);
    context.lineTo(x + bl,
        y + h);
    context.quadraticCurveTo(x,
        y + h,
        x,
        y + h - bl);
    context.lineTo(x,
        y + tl);
    context.quadraticCurveTo(x,
        y,
        x + tl,
        y);
    context.closePath();
}
