import { SimpleVector2 } from "gtools/math";
import { RoundData, TextOptionsInterface } from "gtools/types";
import { Drawer } from "./drawer";
export declare class CanvasDrawer implements Drawer {
    private readonly context;
    constructor(context: CanvasRenderingContext2D);
    fillRoundedRect(x: number, y: number, w: number, h: number, round: RoundData, color?: string): void;
    strokeRoundedRect(x: number, y: number, w: number, h: number, round: RoundData, color?: string, width?: number): void;
    fillRect(x: number, y: number, w: number, h: number, color?: string): void;
    strokeRect(x: number, y: number, w: number, h: number, color?: string, width?: number): void;
    fillArc(x: number, y: number, w: number, h: number, color?: string): void;
    strokeArc(x: number, y: number, w: number, h: number, color?: string, width?: number): void;
    fillPath(points: SimpleVector2[], color?: string, close?: boolean): void;
    drawPath(points: SimpleVector2[], color?: string, width?: number, close?: boolean): void;
    drawImage(image: CanvasImageSource, x?: number, y?: number, w?: number, h?: number): void;
    drawLine(x1: number, y1: number, x2: number, y2: number, color?: string, width?: number): void;
    drawText(text: string, x: number, y: number, w: number, h: number, textOptions: TextOptionsInterface): void;
    clear(resetTransform?: boolean): void;
    startDrawingLine(x: number, y: number): void;
    addPointToLine(x: number, y: number, stroke?: boolean): void;
}
