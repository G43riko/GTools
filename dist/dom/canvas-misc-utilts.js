"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRoundedRect = void 0;
function makeRoundedRect(context, x, y, w, h, radius) {
    var tr = typeof radius === "number" ? radius : (typeof radius.tr === "number" ? radius.tr : 0);
    var tl = typeof radius === "number" ? radius : (typeof radius.tl === "number" ? radius.tl : 0);
    var br = typeof radius === "number" ? radius : (typeof radius.br === "number" ? radius.br : 0);
    var bl = typeof radius === "number" ? radius : (typeof radius.bl === "number" ? radius.bl : 0);
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
exports.makeRoundedRect = makeRoundedRect;
//# sourceMappingURL=canvas-misc-utilts.js.map