import { assertExists } from "@std/assert";
import { Color } from "@g43/tools";
import type { ReadonlyPair, ReadonlySimpleVector2, RoundData, TextOptionsInterface } from "@g43/types";
import type { Drawer } from "./drawer.ts";
import { type ColorType, DrawerUtils, type SizeType } from "./drawer-utils.ts";
import { StaticCanvasDrawer } from "./static-canvas-drawer.ts";

export class CanvasDrawer implements Drawer {
    public static createFromSize(size: number): CanvasDrawer;
    public static createFromSize(x: number, y: number): CanvasDrawer;
    public static createFromSize(x: number, y = x): CanvasDrawer {
        const canvas = document.createElement("canvas");
        canvas.width = x;
        canvas.height = y;
        const context = canvas.getContext("2d");
        assertExists(context, "Context is required");

        return new CanvasDrawer(context);
    }

    public set strokeStyle(color: ColorType) {
        this.context.strokeStyle = DrawerUtils.extractColor(color);
    }

    public set fillStyle(colorOrGradient: ColorType | CanvasGradient) {
        if (colorOrGradient instanceof CanvasGradient) {
            this.context.fillStyle = colorOrGradient;
        } else {
            this.context.fillStyle = DrawerUtils.extractColor(colorOrGradient);
        }
    }

    public constructor(
        public readonly context: CanvasRenderingContext2D,
    ) {
    }

    // Paths

    public fillPath(points: readonly ReadonlySimpleVector2[], color?: ColorType): void {
        this.fillPathWithOffset(points, color);
    }

    public fillPathWithOffset(
        points: readonly ReadonlySimpleVector2[],
        color?: ColorType,
        offset?: ReadonlySimpleVector2,
    ): void {
        if (!Array.isArray(points) || points.length < 2) {
            return;
        }

        if (color) {
            this.context.fillStyle = DrawerUtils.extractColor(color);
        }

        this.context.beginPath();
        DrawerUtils.makePath(this.context, points, offset);

        this.context.fill();
    }

    /**
     * Fill path if fillColor is provided and stroke if strokeColor and strokeWidth are provided
     *
     * @param points
     * @param fillColor
     * @param strokeColor
     * @param offset
     * @param multiplier
     * @param strokeWidth
     * @param close
     */
    public drawPathWithOffsetAndMultiplier(
        points: readonly ReadonlySimpleVector2[],
        fillColor?: ColorType,
        strokeColor?: ColorType,
        offset?: ReadonlySimpleVector2,
        multiplier?: number,
        strokeWidth?: number,
        close = false,
    ): void {
        if (!Array.isArray(points) || points.length < 2) {
            return;
        }

        this.context.beginPath();
        DrawerUtils.makePath(this.context, points, offset, multiplier);
        if (close) {
            this.context.closePath();
        }

        if (fillColor) {
            this.context.fillStyle = DrawerUtils.extractColor(fillColor);
            this.context.fill();
        }

        if (strokeColor && typeof strokeWidth === "number" && strokeWidth > 0) {
            this.context.strokeStyle = DrawerUtils.extractColor(strokeColor);
            this.context.lineWidth = strokeWidth;

            this.context.stroke();
        }
    }

    public strokePathWithOffset(
        points: readonly ReadonlySimpleVector2[],
        color?: ColorType,
        offset?: ReadonlySimpleVector2,
        width = NaN,
        close = false,
    ): void {
        return this.drawPathWithOffsetAndMultiplier(points, undefined, color, offset, undefined, width, close);
    }

    public strokePath(points: readonly ReadonlySimpleVector2[], color?: ColorType, width = NaN, close = false): void {
        return this.drawPathWithOffsetAndMultiplier(points, undefined, color, undefined, undefined, width, close);
    }

    // Images

    /**
     * @param image
     * @param x
     * @param y
     * @param w
     * @param h
     * @param rotation - angle in radians
     */
    public drawRotatedImage(
        image: CanvasImageSource,
        x: number,
        y: number,
        w: number,
        h: number,
        rotation: number,
    ): void {
        StaticCanvasDrawer.drawRotatedImage(this.context, image, x, y, w, h, rotation);
    }

    public drawImage(image: CanvasImageSource, x: number, y: number, w?: number, h?: number): void {
        if (typeof w !== "number" || typeof h !== "number") {
            this.context.drawImage(image, x, y);

            return;
        }
        this.context.drawImage(image, x, y, w, h);
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

    // Texts

    public drawStaticTextWithinGrid(
        texts: readonly string[],
        x: number | "left" | "right",
        y: number | "top" | "bottom",
        width?: number,
        height?: number,
        {
            padding = 5,
            font = "courier",
            fontSize = 12,
            fontColor = Color.BLACK.hex,
            horizontalAlign = "left",
            verticalAlign = "top",
            gridFillColor = Color.WHITE,
            gridStrokeColor = Color.BLACK,
            gridStrokeWidth = 2,
        }: Partial<TextOptionsInterface> & {
            padding?: number;
            gridFillColor?: Color;
            gridStrokeColor?: Color;
            gridStrokeWidth?: number;
        } = {},
    ): void {
        const realHeight = height ?? fontSize * texts.length + 2 * padding;
        const realWidth = width ?? Math.max(...texts.map((t) => t.length)) * 7.5 + 2 * padding;

        let realX: number;
        let realY: number;
        switch (x) {
            case "left":
                realX = 0;
                break;
            case "right":
                realX = this.context.canvas.width - realWidth;
                break;
            default:
                realX = x;
        }
        switch (y) {
            case "top":
                realY = 0;
                break;
            case "bottom":
                realY = this.context.canvas.height - realHeight;
                break;
            default:
                realY = y;
        }
        realY = Math.round(realY);
        realX = Math.round(realX);
        this.drawInClearTransform(() => {
            this.fillRect(realX, realY, realWidth, realHeight, gridFillColor);
            this.strokeRect(realX, realY, realWidth, realHeight, gridStrokeColor, gridStrokeWidth);
            this.drawTexts(texts, realX + padding, realY + padding, realWidth, realHeight, {
                font,
                fontColor,
                fontSize,
                horizontalAlign,
                verticalAlign,
            });
        });
    }

    public drawTextSimple(
        text: string,
        x: number,
        y: number,
        textOptions: Omit<TextOptionsInterface, "horizontalAlign" | "verticalAlign">,
    ): void {
        this.context.fillStyle = textOptions.fontColor;
        this.context.font = `${textOptions.fontSize}px ${textOptions.font}`;
        this.fillRotatedText(text, x, y, textOptions.rotation ?? 0);
    }

    public drawSimpleTexts(
        texts: readonly string[],
        x: number,
        y: number,
        textOptions: Omit<TextOptionsInterface, "horizontalAlign" | "verticalAlign">,
    ): void {
        this.context.fillStyle = textOptions.fontColor;
        this.context.font = `${textOptions.fontSize}px ${textOptions.font}`;
        texts.forEach((text, i) => {
            this.fillRotatedText(text, x, y + i * textOptions.fontSize, textOptions.rotation ?? 0);
        });
    }

    public drawTexts(
        texts: readonly string[],
        x: number,
        y: number,
        w: number,
        h: number,
        textOptions: Omit<TextOptionsInterface, "rotation">,
    ): void {
        this.context.fillStyle = textOptions.fontColor;
        this.context.font = `${textOptions.fontSize}px ${textOptions.font}`;

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

        texts.forEach((text) => {
            this.fillRotatedText(text, realX, realY, 0, w);
            realY += textOptions.fontSize;
        });
    }

    public drawText(text: string, x: number, y: number, w: number, h: number, textOptions: TextOptionsInterface): void {
        this.context.fillStyle = textOptions.fontColor;
        this.context.font = `${textOptions.fontSize}px ${textOptions.font}`;

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

    public fillText(text: string, x: number, y: number, maxWidth?: number): void {
        this.fillRotatedText(text, x, y, 0, maxWidth);
    }

    public fillVerticalText(text: string, x: number, y: number, maxWidth?: number): void {
        this.fillRotatedText(text, x, y, -DrawerUtils.PI05, maxWidth);
    }

    private fillRotatedText(text: string, x: number, y: number, angle?: number, maxWidth?: number): void {
        if (!angle) {
            return this.context.fillText(text, x, y, maxWidth);
        }

        this.context.save();
        this.context.translate(x, y);
        this.context.rotate(angle);
        this.context.fillText(text, 0, 0, maxWidth);
        this.context.restore();
    }

    // Shapes

    public fillRoundedRect(x: number, y: number, w: number, h: number, round: RoundData, color?: ColorType): void {
        StaticCanvasDrawer.fillRoundedRect(this.context, x, y, w, h, round, color);
    }

    public strokeRoundedRect(
        x: number,
        y: number,
        w: number,
        h: number,
        round: RoundData,
        color?: ColorType,
        width?: number,
    ): void {
        StaticCanvasDrawer.strokeRoundedRect(this.context, x, y, w, h, round, width, color);
    }

    public fillRectangles(data: [x: number, y: number, w: number, h: number][], color?: ColorType): void {
        if (color) {
            this.context.fillStyle = DrawerUtils.extractColor(color);
        }

        data.forEach((item) => {
            this.context.fillRect(item[0], item[1], item[2], item[3]);
        });
    }

    public fillRect(x: number, y: number, w: number, h: number, color?: ColorType): this {
        StaticCanvasDrawer.fillRect(this.context, x, y, w, h, color);

        return this;
    }

    public strokeRectangles(
        data: [x: number, y: number, w: number, h: number][],
        color?: ColorType,
        width?: number,
    ): void {
        if (color) {
            this.context.strokeStyle = DrawerUtils.extractColor(color);
        }
        if (typeof width === "number") {
            if (width === 0) {
                return;
            }

            this.context.lineWidth = width;
        }

        data.forEach((item) => {
            this.context.strokeRect(...item);
        });
    }

    public strokeRectVec(
        position: ReadonlySimpleVector2,
        size: ReadonlySimpleVector2,
        color?: ColorType,
        width?: number,
    ): void {
        StaticCanvasDrawer.strokeRect(this.context, position.x, position.y, size.x, size.y, width, color);
    }

    public strokeRect(x: number, y: number, w: number, h: number, color?: ColorType, width?: number): void {
        StaticCanvasDrawer.strokeRect(this.context, x, y, w, h, width, color);
    }

    /**
     * @param x
     * @param y
     * @param w
     * @param h
     * @param angle in radians
     * @param color
     */
    public fillRotatedRect(x: number, y: number, w: number, h: number, angle: number, color?: ColorType): void {
        StaticCanvasDrawer.fillRotatedRect(
            this.context,
            x,
            y,
            w,
            h,
            angle,
            color,
        );
    }

    /**
     * @param x
     * @param y
     * @param w
     * @param h
     * @param angle in radians
     * @param color
     * @param width
     */
    public strokeRotatedRect(
        x: number,
        y: number,
        w: number,
        h: number,
        angle: number,
        color?: ColorType,
        width?: number,
    ): void {
        StaticCanvasDrawer.strokeRotatedRect(
            this.context,
            x,
            y,
            w,
            h,
            angle,
            color,
            width,
        );
    }

    public fillArcByCenterAndRadius(cx: number, cy: number, radius: number, color?: ColorType): void {
        this.fillRotatedArc(cx - radius, cy - radius, radius * 2, radius * 2, 0, color);
    }

    public fillArcByCenter(cx: number, cy: number, w: number, h: number, color?: ColorType): void {
        this.fillRotatedArc(cx - w / 2, cy - h / 2, w, h, 0, color);
    }

    public fillArc(x: number, y: number, w: number, h: number, color?: ColorType): void {
        this.fillRotatedArc(x, y, w, h, 0, color);
    }

    /**
     * @param x
     * @param y
     * @param w
     * @param h
     * @param angle in radians
     * @param color
     */
    public fillRotatedArc(x: number, y: number, w: number, h: number, angle: number, color?: ColorType): void {
        if (color) {
            this.context.fillStyle = DrawerUtils.extractColor(color);
        }

        this.context.beginPath();
        DrawerUtils.makeEllipse(this.context, x, y, w, h, angle);
        this.context.fill();
    }

    public strokeArc(x: number, y: number, w: number, h: number, color?: ColorType, width?: number): void {
        this.strokeRotatedArc(x, y, w, h, 0, color, width);
    }

    /**
     * @param x
     * @param y
     * @param w
     * @param h
     * @param angle in radians
     * @param color
     * @param width
     */
    public strokeRotatedArc(
        x: number,
        y: number,
        w: number,
        h: number,
        angle: number,
        color?: ColorType,
        width?: number,
    ): void {
        if (color) {
            this.context.strokeStyle = DrawerUtils.extractColor(color);
        }

        if (typeof width === "number") {
            if (width === 0) {
                return;
            }

            this.context.lineWidth = width;
        }

        this.context.beginPath();
        DrawerUtils.makeEllipse(this.context, x, y, w, h, angle);
        this.context.stroke();
    }

    public fillPolygon(points: readonly ReadonlyPair<number>[], color?: ColorType): void {
        if (color) {
            this.context.fillStyle = DrawerUtils.extractColor(color);
        }

        this.context.beginPath();
        DrawerUtils.makePathFromNumbers(this.context, points);
        this.context.closePath();
        this.context.fill();
    }

    public fillDots(points: readonly ReadonlyPair<number>[], color: ColorType, radius: number): this {
        this.context.fillStyle = DrawerUtils.extractColor(color);
        points.forEach(([x, y]) => {
            this.context.beginPath();
            this.context.arc(x, y, radius, 0, Math.PI * 2);
            this.context.fill();
        });

        return this;
    }

    public strokePolyline(points: readonly ReadonlyPair<number>[], color?: ColorType, width?: number): this {
        if (color) {
            this.context.strokeStyle = DrawerUtils.extractColor(color);
        }
        if (typeof width === "number") {
            if (width === 0) {
                return this;
            }
            this.context.lineWidth = width;
        }
        points.forEach(([x, y], i) => {
            if (i === 0) {
                this.startDrawingLine(x, y);
            } else {
                this.addPointToLine(x, y, false);
            }
        });
        this.context.stroke();

        return this;
    }

    public strokePolygon(points: readonly ReadonlyPair<number>[], color?: ColorType, width?: number): void {
        if (color) {
            this.context.strokeStyle = DrawerUtils.extractColor(color);
        }
        if (typeof width === "number") {
            if (width === 0) {
                return;
            }
            this.context.lineWidth = width;
        }
        this.context.beginPath();
        DrawerUtils.makePathFromNumbers(this.context, points);
        this.context.closePath();

        this.context.stroke();
    }

    // Lines, Grid, Cross, Arrow

    public drawArrow(
        _x1: number,
        _y1: number,
        _x2: number,
        _y2: number,
        _color?: ColorType,
        width?: number,
        _arrowWidth: number = width ? (width * 2) : 4,
        _arrowLength: number = 10,
    ): void {
        throw new Error("Not implemented");
    }

    public drawLine(x1: number, y1: number, x2: number, y2: number, color?: ColorType, width?: number): void {
        StaticCanvasDrawer.drawLine(this.context, x1, y1, x2, y2, width, color);
    }

    private makeGrid(blocks: ReadonlySimpleVector2, blockSize: SizeType, offset?: ReadonlySimpleVector2): void {
        const [blockWidth, blockHeight] = DrawerUtils.extractSize(blockSize);
        const mapSize = {
            x: blocks.x * blockWidth,
            y: blocks.y * blockHeight,
        };
        const start = {
            x: offset?.x ?? 0,
            y: offset?.y ?? 0,
        };

        // vertical lines
        for (let x = 0; x <= blocks.x; x++) {
            this.verticalLine(
                start.x + x * blockWidth,
                start.y,
                start.y + mapSize.y,
            );
        }

        // horizontal lines
        for (let y = 0; y <= blocks.y; y++) {
            this.horizontalLine(
                start.y + y * blockHeight,
                start.x,
                start.x + mapSize.x,
            );
        }
    }

    public strokeGrid(
        blocks: ReadonlySimpleVector2,
        blockSize: SizeType,
        color?: ColorType,
        width?: number,
        offset?: ReadonlySimpleVector2,
    ): void {
        if (color) {
            this.context.strokeStyle = DrawerUtils.extractColor(color);
        }
        if (typeof width === "number") {
            if (width === 0) {
                return;
            }
            this.context.lineWidth = width;
        }

        this.context.beginPath();
        this.makeGrid(blocks, blockSize, offset);
        this.context.stroke();
    }

    public drawCross(x: number, y: number, w: number, h: number, color?: ColorType, width?: number): this {
        this.drawLine(x, x, w, h, color, width);
        this.drawLine(w, y, x, h, color, width);

        return this;
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

    public horizontalLines(
        startY: number,
        offsetY: number,
        steps: number,
        startX = 0,
        endX = this.context.canvas.width,
    ): void {
        for (let i = 0; i < steps; i++) {
            const y = startY + offsetY * i;
            this.horizontalLine(y, startX, endX);
        }
    }

    public horizontalLine(y: number, startX = 0, endX = this.context.canvas.width): void {
        this.context.moveTo(startX, y);
        this.context.lineTo(endX, y);
    }

    public verticalLines(
        startX: number,
        offsetX: number,
        steps: number,
        startY = 0,
        endY = this.context.canvas.height,
    ): void {
        for (let i = 0; i < steps; i++) {
            const x = startX + offsetX * i;
            this.verticalLine(x, startY, endY);
        }
    }

    public verticalLine(x: number, startY = 0, endY = this.context.canvas.height): void {
        this.context.moveTo(x, startY);
        this.context.lineTo(x, endY);
    }

    // Misc

    public show(format = "image/png"): void {
        globalThis.open(this.context.canvas.toDataURL(format), "_blank");
    }

    public clear(resetTransform = true): void {
        StaticCanvasDrawer.clear(this.context, resetTransform);
    }

    public toUrl(format = "image/png"): string {
        return this.context.canvas.toDataURL(format);
    }

    public drawInOffsetTransform(x: number, y: number, callback: (drawer: CanvasDrawer) => unknown): void {
        this.context.translate(x, y);
        callback(this);
        this.context.translate(-x, -y);
    }

    public drawInClearTransform(callback: (drawer: CanvasDrawer) => unknown): void {
        const transform = this.context.getTransform();
        this.context.resetTransform();
        callback(this);
        this.context.setTransform(transform);
    }
}
