"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasDrawerAdvanced = void 0;
var canvas_drawer_1 = require("./canvas-drawer");
var canvas_manager_1 = require("./canvas-manager");
var CanvasDrawerAdvanced = (function () {
    function CanvasDrawerAdvanced(context) {
        this.context = context;
        this.drawer = new canvas_drawer_1.CanvasDrawer(this.context);
    }
    CanvasDrawerAdvanced.prototype.renderRect = function (location, options) {
        var _a;
        this.prepareShadow(options.shadow);
        this.prepareOpacity(options.opacity);
        if (options.fill) {
            this.prepareShadow(options.fill.shadow);
            this.prepareOpacity(options.fill.opacity);
            if (options.fill.fillImage) {
                this.drawer.drawImage(options.fill.fillImage);
            }
            if (options.fill.fillColor) {
                this.drawer.fillRect(location.x, location.y, location.w, location.h, options.fill.fillColor);
            }
        }
        if (options.stroke) {
            this.prepareShadow(options.stroke.shadow);
            this.prepareOpacity(options.stroke.opacity);
            this.prepareDashed(options.stroke.lineDash);
            if (options.stroke.joinType) {
                this.context.lineJoin = options.stroke.joinType;
            }
            if (options.stroke.lineCap) {
                this.context.lineCap = options.stroke.lineCap;
            }
            if (!isNaN((_a = options.stroke.width) !== null && _a !== void 0 ? _a : NaN)) {
                this.context.lineWidth = options.stroke.width;
            }
            if (options.stroke.strokeColor) {
                this.drawer.fillRect(location.x, location.y, location.w, location.h, options.stroke.strokeColor);
            }
        }
    };
    CanvasDrawerAdvanced.prototype.prepareShadow = function (shadow) {
        var _a, _b, _c, _d;
        if (shadow) {
            canvas_manager_1.CanvasManager.setShadow(this.context, (_a = shadow.x) !== null && _a !== void 0 ? _a : 0, (_b = shadow.y) !== null && _b !== void 0 ? _b : 0, (_c = shadow.color) !== null && _c !== void 0 ? _c : "black", (_d = shadow.blur) !== null && _d !== void 0 ? _d : 5);
        }
    };
    CanvasDrawerAdvanced.prototype.prepareDashed = function (dashes) {
        if (Array.isArray(dashes)) {
            canvas_manager_1.CanvasManager.setLineDash.apply(canvas_manager_1.CanvasManager, __spreadArrays([this.context], dashes));
        }
    };
    CanvasDrawerAdvanced.prototype.prepareOpacity = function (opacity) {
        if (!isNaN(opacity !== null && opacity !== void 0 ? opacity : NaN)) {
            this.context.globalAlpha = opacity;
        }
    };
    return CanvasDrawerAdvanced;
}());
exports.CanvasDrawerAdvanced = CanvasDrawerAdvanced;
//# sourceMappingURL=canvas-drawer-advanced.js.map