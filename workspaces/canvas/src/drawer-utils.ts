import type { Color } from "@g43/tools";
import type { ReadonlySimpleVector2, RoundData } from "@g43/types";

export type ColorType = string | Color;
export type SizeType = ReadonlySimpleVector2 | number;

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

export class DrawerUtils {
    public static readonly PI2 = Math.PI * 2;
    public static readonly PI05 = Math.PI * 0.5;

    public static extractSize(size: SizeType): [x: number, y: number] {
        if (typeof size === "number") {
            return [size, size];
        }

        return [size.x, size.y];
    }

    public static extractColor(color: ColorType): string {
        if (typeof color === "string") {
            return color;
        }

        return color.hex;
    }

    public static createSilhouetteFrom(image: HTMLImageElement, size: number, color?: ColorType): HTMLCanvasElement {
        if (!image.complete || !image.src) {
            throw new Error("Not valid image");
        }

        const canvas = document.createElement("canvas");
        canvas.width = image.width + size * 2;
        canvas.height = image.height + size * 2;

        const context = canvas.getContext("2d") as CanvasRenderingContext2D;
        const prevCompositeOperation = context.globalCompositeOperation;

        // fill canvas if it has background color
        if (color) {
            context.fillStyle = DrawerUtils.extractColor(color);
            context.fillRect(
                0,
                0,
                canvas.width,
                canvas.height,
            );

            // we want to keep only background color
            context.globalCompositeOperation = "destination-in";
        }

        // draw image
        context.drawImage(
            image,
            0,
            0,
            canvas.width,
            canvas.height,
        );

        context.globalCompositeOperation = "destination-out";
        context.drawImage(
            image,
            size,
            size,
            image.width,
            image.height,
        );

        context.globalCompositeOperation = prevCompositeOperation;

        return canvas;
    }

    /**
     * @param context
     * @param centerX
     * @param centerY
     * @param text The text to be displayed in circular fashion
     * @param diameter The diameter of the circle around which the text will be displayed (inside or outside)
     * @param startAngle In degrees, Where the text will be shown. 0 degrees if the top of the circle
     * @param align Positions text to left right or center of startAngle
     * @param textInside true to show inside the diameter. False draws outside
     * @param inwardFacing true for base of text facing inward. false for outward
     * @param fName name of font family. Make sure it is loaded
     * @param fSize size of font family. Don't forget to include units
     * @param kerning 0 for normal gap between letters. positive or negative number to expand/compact gap in pixels
     */
    public static getCircularText(
        context: CanvasRenderingContext2D,
        text: string,
        diameter: number,
        startAngle: number,
        textInside: boolean,
        inwardFacing: boolean,
        fName: string,
        fSize: string,
        centerX = context.canvas.width / 2,
        centerY = context.canvas.height / 2,
        align: "right" | "left" | "center" = "center",
        kerning = 0,
    ): void {
        let charWid;

        const ctxRef = context;
        const clockwise = align === "right" ? 1 : -1; // draw clockwise for aligned right. Else Anticlockwise
        startAngle *= Math.PI / 180; // convert to radians

        // calculate height of the font. Many ways to do this
        // you can replace with your own!
        const div = document.createElement("div");
        div.innerHTML = text;
        div.style.position = "absolute";
        div.style.top = "-10000px";
        div.style.left = "-10000px";
        div.style.fontFamily = fName;
        div.style.fontSize = fSize;
        document.body.appendChild(div);
        const textHeight = div.offsetHeight;
        document.body.removeChild(div);

        // in cases where we are drawing outside diameter,
        // expand diameter to handle it
        if (!textInside) {
            diameter += textHeight * 2;
        }

        ctxRef.font = `${fSize} ${fName}`;

        // Reverse letter order for align Left inward, align right outward
        // and align center inward.
        if (
            (([
                "left",
                "center",
            ].indexOf(align) > -1) && inwardFacing) || (align === "right" && !inwardFacing)
        ) {
            text = text.split("")
                .reverse()
                .join("");
        }

        ctxRef.save();
        // Setup letters and positioning
        ctxRef.translate(centerX, centerY); // Move to center
        startAngle += inwardFacing ? Math.PI : 0; // Rotate 180 if outward // (Math.PI * !inwardFacing)
        ctxRef.textBaseline = "middle"; // Ensure we draw in exact center
        ctxRef.textAlign = "center"; // Ensure we draw in exact center

        // rotate 50% of total angle for center alignment
        if (align === "center") {
            for (let j = 0; j < text.length; j++) {
                charWid = ctxRef.measureText(text[j]).width;
                startAngle += ((charWid + (j === text.length - 1 ? 0 : kerning)) / (diameter / 2 - textHeight)) / 2 *
                    -clockwise;
            }
        }

        // Phew... now rotate into final start position
        ctxRef.rotate(startAngle);

        // Now for the fun bit: draw, rotate, and repeat
        for (let j = 0; j < text.length; j++) {
            charWid = ctxRef.measureText(text[j]).width; // half letter

            ctxRef.rotate((charWid / 2) / (diameter / 2 - textHeight) * clockwise); // rotate half letter

            // draw char at "top" if inward facing or "bottom" if outward
            ctxRef.fillText(text[j], 0, (inwardFacing ? 1 : -1) * (0 - diameter / 2 + textHeight / 2));

            ctxRef.rotate((charWid / 2 + kerning) / (diameter / 2 - textHeight) * clockwise); // rotate half letter
        }
        ctxRef.restore();
    }

    /**
     * @param context
     * @param x
     * @param y
     * @param w
     * @param h
     * @param angle in radians
     */
    public static makeRotatedRect(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        angle: number,
    ): void {
        const center = {
            x: x + w * 0.5,
            y: y + h * 0.5,
        };
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const rotatePoint = (px: number, py: number) => {
            const a = {
                x: px - center.x,
                y: py - center.y,
            };

            return {
                x: a.x * cos - a.y * sin + center.x,
                y: a.x * sin + a.y * cos + center.y,
            };
        };
        const tl = rotatePoint(x, y);
        const tr = rotatePoint(x + w, y);
        const bl = rotatePoint(x, y + h);
        const br = rotatePoint(x + w, y + h);

        context.moveTo(tl.x, tl.y);
        context.lineTo(tr.x, tr.y);
        context.lineTo(br.x, br.y);
        context.lineTo(bl.x, bl.y);
        context.closePath();
    }

    /**
     * @param context
     * @param x
     * @param y
     * @param w
     * @param h
     * @param angle - angle in radians
     */
    public static makeEllipse(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        angle = 0,
    ): void {
        if (w === h) {
            const halfSize = w / 2;
            context.arc(
                x + halfSize,
                y + halfSize,
                halfSize,
                0,
                DrawerUtils.PI2,
            );
        } else {
            const halfSize = { x: w / 2, y: h / 2 };
            context.ellipse(
                x + halfSize.x,
                y + halfSize.y,
                halfSize.x,
                halfSize.y,
                angle,
                0,
                DrawerUtils.PI2,
            );
        }
    }

    public static makeRoundedRect(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        w: number,
        h: number,
        radius: RoundData,
    ): void {
        const { tr, br, bl, tl } = extractRoundData(radius);
        context.beginPath();
        context.moveTo(x + tl, y);
        context.lineTo(x + w - tr, y);
        context.quadraticCurveTo(x + w, y, x + w, y + tr);
        context.lineTo(x + w, y + h - br);
        context.quadraticCurveTo(x + w, y + h, x + w - br, y + h);
        context.lineTo(x + bl, y + h);
        context.quadraticCurveTo(x, y + h, x, y + h - bl);
        context.lineTo(x, y + tl);
        context.quadraticCurveTo(x, y, x + tl, y);
        context.closePath();
    }

    public static makePath(
        context: CanvasRenderingContext2D,
        points: ReadonlySimpleVector2[],
        offset?: ReadonlySimpleVector2,
        multiplier?: number,
    ): void {
        if (offset && multiplier) {
            context.moveTo((points[0].x * multiplier) + offset.x, (points[0].y * multiplier) + offset.y);
            for (let i = 1; i < points.length; i++) {
                context.lineTo((points[i].x * multiplier) + offset.x, (points[i].y * multiplier) + offset.y);
            }

            return;
        }
        if (offset) {
            context.moveTo(points[0].x + offset.x, points[0].y + offset.y);
            for (let i = 1; i < points.length; i++) {
                context.lineTo(points[i].x + offset.x, points[i].y + offset.y);
            }

            return;
        }
        if (multiplier) {
            context.moveTo(points[0].x * multiplier, points[0].y * multiplier);
            for (let i = 1; i < points.length; i++) {
                context.lineTo(points[i].x * multiplier, points[i].y * multiplier);
            }

            return;
        }
        context.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            context.lineTo(points[i].x, points[i].y);
        }
    }
}
