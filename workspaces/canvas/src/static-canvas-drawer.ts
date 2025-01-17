import type { RoundData } from "@g43/types";
import { type ColorType, DrawerUtils } from "./drawer-utils.ts";

export type Transform2D = any;
export class StaticCanvasDrawer {
    public static fillArc(
        context: CanvasRenderingContext2D,
        centerX: number,
        centerY: number,
        radius: number,
        fillColor?: ColorType,
    ): void {
        if (fillColor) {
            context.fillStyle = DrawerUtils.extractColor(fillColor);
        }

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.fill();
    }

    private static createArc(
        context: CanvasRenderingContext2D,
        centerX: number,
        centerY: number,
        radius: number,
        segments = 36,
    ): void {
        for (let i = 0; i < segments; i++) {
            const angle = i * 2 * Math.PI / segments;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            i ? context.lineTo(x, y) : context.moveTo(x, y);
        }
        context.closePath();
    }

    public static fillRotatedText(
        context: CanvasRenderingContext2D,
        text: string,
        x: number,
        y: number,
        angle?: number,
        maxWidth?: number,
    ): void {
        if (!angle) {
            return context.fillText(text, x, y, maxWidth);
        }

        context.save();
        context.translate(x, y);
        context.rotate(angle);
        context.fillText(text, 0, 0, maxWidth);
        context.restore();
    }

    public static strokeArc(
        context: CanvasRenderingContext2D,
        centerX: number,
        centerY: number,
        radius: number,
        strokeWidth?: number,
        strokeColor?: ColorType,
    ): void {
        if (strokeColor) {
            context.fillStyle = DrawerUtils.extractColor(strokeColor);
        }

        if (typeof strokeWidth === "number") {
            if (strokeWidth === 0) {
                return;
            }

            context.lineWidth = strokeWidth;
        }

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.stroke();
    }

    /**
     * @param context
     * @param fromX
     * @param fromY
     * @param toX
     * @param toY
     * @param r
     * @param options
     * @param options.drawLineWidth - if is greater than 0, draw a line from the 'to' to the 'from' point
     * @param options.arrowColor - if is color, arrow will be filled with this color
     * @param options.toPositionIsTop if true top of the arrow is exactly at the 'to' point, otherwise center of 'to' point
     */
    public static drawArrow(
        context: CanvasRenderingContext2D,
        fromX: number,
        fromY: number,
        toX: number,
        toY: number,
        r: number,
        options: {
            drawLineWidth?: number;
            arrowColor?: string;
            toPositionIsTop?: boolean;
        } = {},
    ): void {
        const stepAngle = (1 / 3) * (2 * Math.PI);
        const direction = Math.atan2(toY - fromY, toX - fromX);
        const xCenter = options.toPositionIsTop ? toX - r * Math.cos(direction) : toX;
        const yCenter = options.toPositionIsTop ? toY - r * Math.sin(direction) : toY;

        if (options.arrowColor && options.drawLineWidth && options.drawLineWidth > 0) {
            context.strokeStyle = options.arrowColor;
            context.beginPath();
            context.moveTo(fromX, fromY);
            context.lineTo(xCenter, yCenter);
            context.stroke();
        }

        let angle;
        let x;
        let y;

        context.beginPath();

        angle = direction;
        x = r * Math.cos(angle) + xCenter;
        y = r * Math.sin(angle) + yCenter;

        context.moveTo(x, y);

        angle += stepAngle;
        x = r * Math.cos(angle) + xCenter;
        y = r * Math.sin(angle) + yCenter;

        context.lineTo(x, y);

        angle += stepAngle;
        x = r * Math.cos(angle) + xCenter;
        y = r * Math.sin(angle) + yCenter;

        context.lineTo(x, y);

        context.closePath();

        if (options.arrowColor) {
            context.fillStyle = options.arrowColor;
            context.fill();
        }
    }

    public static strokeRect(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        strokeWidth?: number,
        strokeColor?: ColorType,
    ): void {
        if (strokeColor) {
            context.strokeStyle = DrawerUtils.extractColor(strokeColor);
        }
        if (typeof strokeWidth === "number") {
            if (strokeWidth === 0) {
                return;
            }

            context.lineWidth = strokeWidth;
        }

        context.strokeRect(x, y, w, h);
    }

    /**
     * @param context
     * @param x
     * @param y
     * @param w
     * @param h
     * @param angle in radians
     * @param color
     */
    public static fillRotatedRect(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        angle: number,
        color?: ColorType,
    ): void {
        if (color) {
            context.fillStyle = DrawerUtils.extractColor(color);
        }

        context.beginPath();
        DrawerUtils.makeRotatedRect(context, x, y, w, h, angle);
        context.fill();
    }

    /**
     * @param context
     * @param x
     * @param y
     * @param w
     * @param h
     * @param angle in radians
     * @param color
     * @param width
     */
    public static strokeRotatedRect(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        angle: number,
        color?: ColorType,
        width?: number,
    ): void {
        if (color) {
            context.strokeStyle = DrawerUtils.extractColor(color);
        }

        if (typeof width === "number") {
            if (width === 0) {
                return;
            }

            context.lineWidth = width;
        }

        context.beginPath();
        DrawerUtils.makeRotatedRect(context, x, y, w, h, angle);
        context.stroke();
    }

    public static fillRect(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        fillColor?: ColorType,
    ): void {
        if (fillColor) {
            context.fillStyle = DrawerUtils.extractColor(fillColor);
        }

        context.fillRect(x, y, w, h);
    }

    public static fillRoundedRect(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        round: RoundData,
        color?: ColorType,
    ): void {
        if (color) {
            context.fillStyle = DrawerUtils.extractColor(color);
        }

        DrawerUtils.makeRoundedRect(context, x, y, w, h, round);
        context.fill();
    }

    public static strokeRoundedRect(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        round: RoundData,
        width?: number,
        color?: ColorType,
    ): void {
        if (color) {
            context.strokeStyle = DrawerUtils.extractColor(color);
        }
        if (typeof width === "number") {
            if (width === 0) {
                return;
            }

            context.lineWidth = width;
        }

        DrawerUtils.makeRoundedRect(context, x, y, w, h, round);
        context.stroke();
    }

    /**
     * @param context
     * @param image
     * @param x
     * @param y
     * @param w
     * @param h
     * @param rotation - angle in radians
     */
    public static drawRotatedImage(
        context: CanvasRenderingContext2D,
        image: CanvasImageSource,
        x: number,
        y: number,
        w: number,
        h: number,
        rotation: number,
    ): void {
        const halfW = w / 2;
        const halfH = h / 2;

        context.save();
        context.translate(x + halfW, y + halfH);
        context.rotate(rotation);
        context.drawImage(image, -halfW, -halfH, w, h);
        context.restore();
    }

    public static drawLine(
        context: CanvasRenderingContext2D,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        width?: number,
        color?: ColorType,
    ): void {
        if (color) {
            context.strokeStyle = DrawerUtils.extractColor(color);
        }
        if (typeof width === "number") {
            if (width === 0) {
                return;
            }

            context.lineWidth = width;
        }

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }

    public static clear(
        context: CanvasRenderingContext2D,
        resetTransformOrTransform: boolean | Transform2D = true,
        color: string | undefined = undefined,
    ): void {
        if (typeof resetTransformOrTransform === "boolean") {
            context.save();
            context.resetTransform();
            if (color) {
                context.fillStyle = color;
                context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            } else {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            }
            context.restore();

            return;
        }
        if (resetTransformOrTransform) {
            context.resetTransform();
            if (color) {
                context.fillStyle = color;
                context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            } else {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            }
            context.setTransform(
                resetTransformOrTransform.avgScale,
                0,
                0,
                resetTransformOrTransform.avgScale,
                resetTransformOrTransform.offset.x,
                resetTransformOrTransform.offset.y,
            );
        }
        if (color) {
            context.fillStyle = color;
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        } else {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        }
    }
}
