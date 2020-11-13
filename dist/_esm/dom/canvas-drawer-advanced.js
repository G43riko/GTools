import { CanvasDrawer } from "./canvas-drawer";
import { CanvasManager } from "./canvas-manager";
export class CanvasDrawerAdvanced {
    constructor(context) {
        this.context = context;
        this.drawer = new CanvasDrawer(this.context);
    }
    prepareShadow(shadow) {
        var _a, _b, _c, _d;
        if (shadow) {
            CanvasManager.setShadow(this.context, (_a = shadow.x) !== null && _a !== void 0 ? _a : 0, (_b = shadow.y) !== null && _b !== void 0 ? _b : 0, (_c = shadow.color) !== null && _c !== void 0 ? _c : "black", (_d = shadow.blur) !== null && _d !== void 0 ? _d : 5);
        }
    }
    prepareDashed(dashes) {
        if (Array.isArray(dashes)) {
            CanvasManager.setLineDash(this.context, ...dashes);
        }
    }
    prepareOpacity(opacity) {
        if (!isNaN(opacity !== null && opacity !== void 0 ? opacity : NaN)) {
            this.context.globalAlpha = opacity;
        }
    }
    renderRect(location, options) {
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
    }
}
//# sourceMappingURL=canvas-drawer-advanced.js.map