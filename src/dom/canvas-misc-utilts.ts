import { Origin } from "../enums";
import { ReadonlySimpleVector2 } from "../math";
import { RoundData, XYWH } from "../types";

function extractRoundData(radius: RoundData): { tr: number; tl: number; br: number; bl: number } {
    if (typeof radius === "number") {
        return {
            bl: radius,
            tl: radius,
            br: radius,
            tr: radius,
        };
    }
    if (Array.isArray(radius)) {
        return {
            tr: radius[0],
            br: radius[1],
            bl: radius[2],
            tl: radius[3],
        };
    }

    return {
        tr: radius.tr ?? 0,
        br: radius.br ?? 0,
        bl: radius.bl ?? 0,
        tl: radius.tl ?? 0,
    };
}

export function makeRoundedRect(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    radius: RoundData,
): void {
    const {tr, br, bl, tl} = extractRoundData(radius);
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

export function getXYWHFrom(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2, origin: Origin): XYWH {
    switch (origin) {
        case Origin.TL:
            return {
                x: position.x,
                y: position.y,
                w: size.x,
                h: size.y,
            };
        case Origin.BR:
            return {
                x: position.x - size.x,
                y: position.y - size.y,
                w: size.x,
                h: size.y,
            };
        case Origin.CENTER:
            return {
                x: position.x - size.x / 2,
                y: position.y - size.y / 2,
                w: size.x,
                h: size.y,
            };
        default:
            throw new Error(`Not implemented conversion from origin ${origin}`);
    }
}
