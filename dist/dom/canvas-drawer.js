"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasDrawer = void 0;
var canvas_misc_utilts_1 = require("./canvas-misc-utilts");
var PI2 = Math.PI * 2;
var CanvasDrawer = (function () {
    function CanvasDrawer(context) {
        this.context = context;
    }
    CanvasDrawer.prototype.fillRoundedRect = function (x, y, w, h, round, color) {
        if (color) {
            this.context.fillStyle = color;
        }
        canvas_misc_utilts_1.makeRoundedRect(this.context, x, y, w, h, round);
        this.context.fill();
    };
    CanvasDrawer.prototype.strokeRoundedRect = function (x, y, w, h, round, color, width) {
        if (width === void 0) { width = NaN; }
        if (color) {
            this.context.strokeStyle = color;
        }
        if (!isNaN(width)) {
            this.context.lineWidth = width;
            if (width === 0) {
                return;
            }
        }
        canvas_misc_utilts_1.makeRoundedRect(this.context, x, y, w, h, round);
        this.context.stroke();
    };
    CanvasDrawer.prototype.fillRect = function (x, y, w, h, color) {
        if (color) {
            this.context.fillStyle = color;
        }
        this.context.strokeRect(x, y, w, h);
    };
    CanvasDrawer.prototype.strokeRect = function (x, y, w, h, color, width) {
        if (width === void 0) { width = NaN; }
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
    };
    CanvasDrawer.prototype.fillArc = function (x, y, w, h, color) {
        if (color) {
            this.context.fillStyle = color;
        }
        var halfSize = { x: w / 2, y: h / 2 };
        this.context.ellipse(x + halfSize.x, y + halfSize.y, halfSize.x, halfSize.y, 0, 0, PI2);
        this.context.stroke();
    };
    CanvasDrawer.prototype.strokeArc = function (x, y, w, h, color, width) {
        if (width === void 0) { width = NaN; }
        if (color) {
            this.context.strokeStyle = color;
        }
        if (!isNaN(width)) {
            this.context.lineWidth = width;
            if (width === 0) {
                return;
            }
        }
        var halfSize = { x: w / 2, y: h / 2 };
        this.context.ellipse(x + halfSize.x, y + halfSize.y, halfSize.x, halfSize.y, 0, 0, PI2);
        this.context.stroke();
    };
    CanvasDrawer.prototype.fillPath = function (points, color, close) {
        if (close === void 0) { close = false; }
        if (!Array.isArray(points) || points.length < 2) {
            return;
        }
        if (color) {
            this.context.strokeStyle = color;
        }
        this.context.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++) {
            this.context.lineTo(points[i].x, points[i].y);
        }
        if (close) {
            this.context.closePath();
        }
        this.context.fill();
    };
    CanvasDrawer.prototype.drawPath = function (points, color, width, close) {
        if (width === void 0) { width = NaN; }
        if (close === void 0) { close = false; }
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
        for (var i = 1; i < points.length; i++) {
            this.context.lineTo(points[i].x, points[i].y);
        }
        if (close) {
            this.context.closePath();
        }
        this.context.stroke();
    };
    CanvasDrawer.prototype.drawImage = function (image, x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = x; }
        if (w === void 0) { w = NaN; }
        if (h === void 0) { h = w; }
        if (isNaN(w) || isNaN(h)) {
            this.context.drawImage(image, x, y);
            return;
        }
        this.context.drawImage(image, x, y, w, h);
    };
    CanvasDrawer.prototype.drawLine = function (x1, y1, x2, y2, color, width) {
        if (width === void 0) { width = NaN; }
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
    };
    CanvasDrawer.prototype.drawText = function (text, x, y, w, h, textOptions) {
        this.context.fillStyle = textOptions.fontColor;
        this.context.font = textOptions.fontSize + "px " + textOptions.font;
        var realX = x;
        var realY = y;
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
    };
    CanvasDrawer.prototype.clear = function (resetTransform) {
        if (resetTransform === void 0) { resetTransform = true; }
        if (resetTransform) {
            this.context.save();
            this.context.resetTransform();
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
            this.context.restore();
            return;
        }
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    };
    CanvasDrawer.prototype.startDrawingLine = function (x, y) {
        this.context.moveTo(x, y);
    };
    CanvasDrawer.prototype.addPointToLine = function (x, y, stroke) {
        if (stroke === void 0) { stroke = true; }
        this.context.lineTo(x, y);
        if (stroke) {
            this.context.stroke();
        }
    };
    return CanvasDrawer;
}());
exports.CanvasDrawer = CanvasDrawer;
//# sourceMappingURL=canvas-drawer.js.map