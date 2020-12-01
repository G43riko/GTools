import { makeRoundedRect } from "./canvas-misc-utilts";
const PI2 = Math.PI * 2;
export class CanvasDrawer {
    constructor(context) {
        this.context = context;
    }
    fillRoundedRect(x, y, w, h, round, color) {
        if (color) {
            this.context.fillStyle = color;
        }
        makeRoundedRect(this.context, x, y, w, h, round);
        this.context.fill();
    }
    strokeRoundedRect(x, y, w, h, round, color, width = NaN) {
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
    fillRect(x, y, w, h, color) {
        if (color) {
            this.context.fillStyle = color;
        }
        this.context.strokeRect(x, y, w, h);
    }
    strokeRect(x, y, w, h, color, width = NaN) {
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
    fillArc(x, y, w, h, color) {
        if (color) {
            this.context.fillStyle = color;
        }
        const halfSize = { x: w / 2, y: h / 2 };
        this.context.ellipse(x + halfSize.x, y + halfSize.y, halfSize.x, halfSize.y, 0, 0, PI2);
        this.context.stroke();
    }
    strokeArc(x, y, w, h, color, width = NaN) {
        if (color) {
            this.context.strokeStyle = color;
        }
        if (!isNaN(width)) {
            this.context.lineWidth = width;
            if (width === 0) {
                return;
            }
        }
        const halfSize = { x: w / 2, y: h / 2 };
        this.context.ellipse(x + halfSize.x, y + halfSize.y, halfSize.x, halfSize.y, 0, 0, PI2);
        this.context.stroke();
    }
    fillPath(points, color, close = false) {
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
    drawPath(points, color, width = NaN, close = false) {
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
    drawImage(image, x = 0, y = x, w = NaN, h = w) {
        if (isNaN(w) || isNaN(h)) {
            this.context.drawImage(image, x, y);
            return;
        }
        this.context.drawImage(image, x, y, w, h);
    }
    drawLine(x1, y1, x2, y2, color, width = NaN) {
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
    drawText(text, x, y, w, h, textOptions) {
        this.context.fillStyle = textOptions.fontColor;
        this.context.font = textOptions.fontSize + "px " + textOptions.font;
        let realX = x;
        let realY = y;
        if (textOptions.verticalAlign === "top") {
            this.context.textBaseline = "top";
        }
        else if (textOptions.verticalAlign === "center") {
            this.context.textBaseline = "middle";
            realY += h / 2;
        }
        else if (textOptions.verticalAlign === "bottom") {
            this.context.textBaseline = "bottom";
            realY += h;
        }
        if (textOptions.horizontalAlign === "left") {
            this.context.textAlign = "left";
        }
        else if (textOptions.horizontalAlign === "center") {
            this.context.textAlign = "center";
            realX += w / 2;
        }
        else if (textOptions.horizontalAlign === "right") {
            this.context.textAlign = "right";
            realX += w;
        }
        this.context.fillText(text, realX, realY, w);
    }
    clear(resetTransform = true) {
        if (resetTransform) {
            this.context.save();
            this.context.resetTransform();
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
            this.context.restore();
            return;
        }
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
    startDrawingLine(x, y) {
        this.context.moveTo(x, y);
    }
    addPointToLine(x, y, stroke = true) {
        this.context.lineTo(x, y);
        if (stroke) {
            this.context.stroke();
        }
    }
}
//# sourceMappingURL=canvas-drawer.js.map