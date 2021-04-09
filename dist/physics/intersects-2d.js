"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersection2dLineLine = void 0;
function intersection2dLineLine(x1, y1, x2, y2, x3, y3, x4, y4) {
    var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denom === 0) {
        return null;
    }
    var numeA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    var numeB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
    var uA = numeA / denom;
    var uB = numeB / denom;
    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
        var x = x1 + uA * (x2 - x1);
        var y = y1 + uA * (y2 - y1);
        return { x: x, y: y };
    }
    return null;
}
exports.intersection2dLineLine = intersection2dLineLine;
//# sourceMappingURL=intersects-2d.js.map