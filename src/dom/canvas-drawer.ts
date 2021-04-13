import { SimpleVector2 } from "../math";
import { RoundData, TextOptionsInterface } from "../types";
import { makeRoundedRect } from "./canvas-misc-utilts";
import { Drawer } from "./drawer";

const PI2 = Math.PI * 2;

export class CanvasDrawer implements Drawer {
    public constructor(private readonly context: CanvasRenderingContext2D) {
    }

    public fillRoundedRect(x: number, y: number, w: number, h: number, round: RoundData, color?: string): void {
        if (color) {
            this.context.fillStyle = color;
        }

        makeRoundedRect(this.context, x, y, w, h, round);
        this.context.fill();
    }

    public strokeRoundedRect(x: number, y: number, w: number, h: number, round: RoundData, color?: string, width = NaN): void {
        if (color) {
            this.context.strokeStyle = color;
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

    public fillRect(x: number, y: number, w: number, h: number, color?: string): void {
        if (color) {
            this.context.fillStyle = color;
        }

        this.context.strokeRect(x, y, w, h);
    }

    public strokeRect(x: number, y: number, w: number, h: number, color?: string, width = NaN): void {
        if (color) {
            this.context.strokeStyle = color;
        }

        if (!isNaN(width)) {
            this.context.lineWidth = width;

            if (width === 0) {
                return;
            }
        }

        this.context.strokeRect(x, y, w, h);
    }

    public fillArc(x: number, y: number, w: number, h: number, color?: string): void {
        if (color) {
            this.context.fillStyle = color;
        }

        const halfSize = {x: w / 2, y: h / 2};
        this.context.ellipse(
            x + halfSize.x,
            y + halfSize.y,
            halfSize.x,
            halfSize.y,
            0,
            0,
            PI2);
        this.context.stroke();
    }

    public strokeArc(x: number, y: number, w: number, h: number, color?: string, width = NaN): void {
        if (color) {
            this.context.strokeStyle = color;
        }

        if (!isNaN(width)) {
            this.context.lineWidth = width;

            if (width === 0) {
                return;
            }
        }

        const halfSize = {x: w / 2, y: h / 2};
        this.context.ellipse(
            x + halfSize.x,
            y + halfSize.y,
            halfSize.x,
            halfSize.y,
            0,
            0,
            PI2);
        this.context.stroke();
    }

    public fillPath(points: SimpleVector2[], color?: string, close = false): void {
        if (!Array.isArray(points) || points.length < 2) {
            return;
        }

        if (color) {
            this.context.strokeStyle = color;
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

    public drawPath(points: SimpleVector2[], color?: string, width = NaN, close = false): void {
        if (!Array.isArray(points) || points.length < 2) {
            return;
        }

        if (color) {
            this.context.strokeStyle = color;
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

    public drawLine(x1: number, y1: number, x2: number, y2: number, color?: string, width = NaN): void {
        if (color) {
            this.context.strokeStyle = color;
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
        this.context.font      = textOptions.fontSize + "px " + textOptions.font;

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

        this.context.fillText(text, realX, realY, w);
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
}
