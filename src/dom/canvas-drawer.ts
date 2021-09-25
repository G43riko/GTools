import { ReadonlySimpleVector2, SimpleVector2 } from "../math";
import { Color } from "../models";
import { RoundData, TextOptionsInterface } from "../types";
import { makeRoundedRect } from "./canvas-misc-utilts";
import { Drawer } from "./drawer";

const PI2 = Math.PI * 2;
const PI05 = Math.PI * 0.5;

export type ColorType = string | Color;

function extractColor(color: ColorType): string {
    if (typeof color === "string") {
        return color;
    }

    return color.hex;
}

export class CanvasDrawer implements Drawer {
    public constructor(private readonly context: CanvasRenderingContext2D) {
    }

    public fillRoundedRect(x: number, y: number, w: number, h: number, round: RoundData, color?: ColorType): void {
        if (color) {
            this.context.fillStyle = extractColor(color);
        }

        makeRoundedRect(this.context, x, y, w, h, round);
        this.context.fill();
    }

    public strokeRoundedRect(x: number, y: number, w: number, h: number, round: RoundData, color?: ColorType, width = NaN): void {
        if (color) {
            this.context.strokeStyle = extractColor(color);
        }

        if (!isNaN(width)) {
            this.context.lineWidth = width;

            if (width === 0) {
                return;
            }
        }

        makeRoundedRect(this.context, x, y, w, h, round);
        this.context.stroke();
    }

    public fillRectangles(data: [x: number, y: number, w: number, h: number][], color?: Color | string): void {
        if (color) {
            this.context.fillStyle = extractColor(color);
        }

        data.forEach((item) => {
            this.context.fillRect(...item);
        });
    }

    public fillRect(x: number, y: number, w: number, h: number, color?: ColorType): void {
        if (color) {
            this.context.fillStyle = extractColor(color);
        }

        this.context.strokeRect(x, y, w, h);
    }

    public strokeRectangles(data: [x: number, y: number, w: number, h: number][], color?: Color | string, width?: number): void {
        if (color) {
            this.context.strokeStyle = extractColor(color);
        }
        if (typeof width !== "undefined") {
            this.context.lineWidth = width;
        }

        data.forEach((item) => {
            this.context.strokeRect(...item);
        });
    }

    public strokeRect(x: number, y: number, w: number, h: number, color?: ColorType, width = NaN): void {
        if (color) {
            this.context.strokeStyle = extractColor(color);
        }

        if (!isNaN(width)) {
            this.context.lineWidth = width;

            if (width === 0) {
                return;
            }
        }

        this.context.strokeRect(x, y, w, h);
    }

    private createEllipse(x: number, y: number, w: number, h: number): void {
        if(w === h) {
            const halfSize = w / 2;
            this.context.arc(
                x + halfSize,
                y + halfSize,
                w,
                0,
                PI2,
            );
        } else {
            const halfSize = {x: w / 2, y: h / 2};
            this.context.ellipse(
                x + halfSize.x,
                y + halfSize.y,
                halfSize.x,
                halfSize.y,
                0,
                0,
                PI2,
            );
        }
    }

    public fillArc(x: number, y: number, w: number, h: number, color?: ColorType): void {
        if (color) {
            this.context.fillStyle = extractColor(color);
        }

        this.createEllipse(x, y, w, h);
        this.context.stroke();
    }

    public strokeArc(x: number, y: number, w: number, h: number, color?: ColorType, width = NaN): void {
        if (color) {
            this.context.strokeStyle = extractColor(color);
        }

        if (!isNaN(width)) {
            this.context.lineWidth = width;

            if (width === 0) {
                return;
            }
        }

        this.createEllipse(x, y, w, h);
        this.context.stroke();
    }

    public fillPath(points: ReadonlySimpleVector2[], color?: ColorType, close = false): void {
        if (!Array.isArray(points) || points.length < 2) {
            return;
        }

        if (color) {
            this.context.strokeStyle = extractColor(color);
        }

        this.context.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.context.lineTo(points[i].x, points[i].y);
        }

        if (close) {
            this.context.closePath();
        }

        this.context.fill();
    }

    public drawPath(points: ReadonlySimpleVector2[], color?: ColorType, width = NaN, close = false): void {
        if (!Array.isArray(points) || points.length < 2) {
            return;
        }

        if (color) {
            this.context.strokeStyle = extractColor(color);
        }

        if (!isNaN(width)) {
            this.context.lineWidth = width;

            if (width === 0) {
                return;
            }
        }

        this.context.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.context.lineTo(points[i].x, points[i].y);
        }

        if (close) {
            this.context.closePath();
        }

        this.context.stroke();
    }

    public drawImage(image: CanvasImageSource, x = 0, y = x, w = NaN, h = w): void {
        if (isNaN(w) || isNaN(h)) {
            this.context.drawImage(image, x, y);

            return;
        }
        this.context.drawImage(image, x, y, w, h);
    }

    public drawLine(x1: number, y1: number, x2: number, y2: number, color?: ColorType, width = NaN): void {
        if (color) {
            this.context.strokeStyle = extractColor(color);
        }

        if (!isNaN(width)) {
            this.context.lineWidth = width;

            if (width === 0) {
                return;
            }
        }

        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    }

    public drawText(text: string, x: number, y: number, w: number, h: number, textOptions: TextOptionsInterface): void {
        this.context.fillStyle = textOptions.fontColor;
        this.context.font      = `${textOptions.fontSize}px ${textOptions.font}`;

        let realX = x;
        let realY = y;

        if (textOptions.verticalAlign === "top") {
            this.context.textBaseline = "top";
        } else if (textOptions.verticalAlign === "center") {
            this.context.textBaseline = "middle";
            realY += h / 2;
        } else if (textOptions.verticalAlign === "bottom") {
            this.context.textBaseline = "bottom";
            realY += h;
        }

        if (textOptions.horizontalAlign === "left") {
            this.context.textAlign = "left";
        } else if (textOptions.horizontalAlign === "center") {
            this.context.textAlign = "center";
            realX += w / 2;
        } else if (textOptions.horizontalAlign === "right") {
            this.context.textAlign = "right";
            realX += w;
        }

        this.fillRotatedText(text, realX, realY, textOptions.rotation ?? 0, w);
    }

    public clear(resetTransform = true): void {
        if (resetTransform) {
            this.context.save();
            this.context.resetTransform();
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
            this.context.restore();

            return;
        }
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    public startDrawingLine(x: number, y: number): void {
        this.context.moveTo(x, y);
    }

    public addPointToLine(x: number, y: number, stroke = true): void {
        this.context.lineTo(x, y);

        if (stroke) {
            this.context.stroke();
        }
    }

    public fillText(text: string, x: number, y: number, maxWidth?: number): void {
        this.fillRotatedText(text, x, y, 0, maxWidth);
    }

    public fillVerticalText(text: string, x: number, y: number, maxWidth?: number): void {
        this.fillRotatedText(text, x, y, -PI05, maxWidth);
    }

    private fillRotatedText(text: string, x: number, y: number, angle: number, maxWidth?: number): void {
        if (!angle) {
            return this.context.fillText(text, 0, 0, maxWidth);
        }

        this.context.save();
        this.context.translate(x, y);
        this.context.rotate(angle);
        this.context.fillText(text, 0, 0, maxWidth);
        this.context.restore();
    }

    public horizontalLine(y: number, startX = 0, endX = this.context.canvas.width): void {
        this.context.moveTo(startX, y);
        this.context.lineTo(endX, y);
    }

    public drawFullCanvasGrid(startX: number, startY: number, offset: number, rows: number, columns: number): void {
        this.context.beginPath();
        this.fullCanvasGrid(startX, startY, offset, rows, columns);
        this.context.stroke();
    }

    public fullCanvasGrid(startX: number, startY: number, offset: number, rows: number, columns: number): void {
        this.verticalLines(
            startX,
            offset,
            columns,
        );
        this.horizontalLines(
            startY,
            offset,
            rows,
        );
    }

    public fillPolygon(points: [number, number][], color?: Color | string): void {
        if (color) {
            this.context.fillStyle = extractColor(color);
        }

        this.drawPolygon(points);
        this.context.fill();
    }

    public strokePolygon(points: [number, number][], color?: Color | string, width?: number): void {
        if (color) {
            this.context.strokeStyle = extractColor(color);
        }
        if (typeof width !== "undefined") {
            this.context.lineWidth = width;
        }

        this.drawPolygon(points);
        this.context.stroke();
    }

    private drawPolygon(points: [number, number][]): void {
        this.context.beginPath();
        this.context.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
            this.context.lineTo(points[i][0], points[i][1]);
        }
        this.context.closePath();
    }

    public horizontalLines(startY: number, offsetY: number, steps: number, startX = 0, endX = this.context.canvas.width): void {
        for (let i = 0; i < steps; i++) {
            const y = startY + offsetY * i;
            this.horizontalLine(y, startX, endX);
        }
    }

    public verticalLines(startX: number, offsetX: number, steps: number, startY = 0, endY = this.context.canvas.height): void {
        for (let i = 0; i < steps; i++) {
            const x = startX + offsetX * i;
            this.verticalLine(x, startY, endY);
        }
    }

    public verticalLine(x: number, startY = 0, endY = this.context.canvas.height): void {
        this.context.moveTo(x, startY);
        this.context.lineTo(x, endY);
    }
}
