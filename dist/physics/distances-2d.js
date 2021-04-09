"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distance2dPointLineSqr = exports.distance2dPointLine = exports.distance2dPointCircleSqr = exports.distance2dPointCircle = exports.distance2dCircleCircleSqr = exports.distance2dCircleCircle = exports.distance2dPointPointSqr = exports.distance2dPointPoint = void 0;
function distance2dPointPoint(ax, ay, bx, by) {
    return Math.sqrt(distance2dPointPointSqr(ax, ay, bx, by));
}
exports.distance2dPointPoint = distance2dPointPoint;
function distance2dPointPointSqr(ax, ay, bx, by) {
    var distX = ax - bx;
    var distY = ay - by;
    return distX * distX + distY * distY;
}
exports.distance2dPointPointSqr = distance2dPointPointSqr;
function distance2dCircleCircle(ax, ay, ar, bx, by, br) {
    return Math.max(distance2dPointPoint(ax, ay, bx, by) - br - ar, 0);
}
exports.distance2dCircleCircle = distance2dCircleCircle;
function distance2dCircleCircleSqr(ax, ay, ar, bx, by, br) {
    return Math.max(distance2dPointPointSqr(ax, ay, bx, by) - br - ar);
}
exports.distance2dCircleCircleSqr = distance2dCircleCircleSqr;
function distance2dPointCircle(ax, ay, bx, by, br) {
    return Math.max(distance2dPointPoint(ax, ay, bx, by) - br, 0);
}
exports.distance2dPointCircle = distance2dPointCircle;
function distance2dPointCircleSqr(ax, ay, bx, by, br) {
    return Math.max(distance2dPointPointSqr(ax, ay, bx, by) - br, 0);
}
exports.distance2dPointCircleSqr = distance2dPointCircleSqr;
function distance2dPointLine(aX, aY, bX, bY, pX, pY) {
    return Math.sqrt(distance2dPointLineSqr(aX, aY, bX, bY, pX, pY));
}
exports.distance2dPointLine = distance2dPointLine;
function distance2dPointLineSqr(aX, aY, bX, bY, pX, pY) {
    var A = pX - aX;
    var B = pY - aY;
    var C = bX - aX;
    var D = bY - aY;
    var dot = A * C + B * D;
    var lengthSquare = C * C + D * D;
    var param = -1;
    if (lengthSquare !== 0) {
        param = dot / lengthSquare;
    }
    var xx;
    var yy;
    if (param < 0) {
        xx = aX;
        yy = aY;
    }
    else if (param > 1) {
        xx = bX;
        yy = bY;
    }
    else {
        xx = aX + param * C;
        yy = aY + param * D;
    }
    var dx = pX - xx;
    var dy = pY - yy;
    return dx * dx + dy * dy;
}
exports.distance2dPointLineSqr = distance2dPointLineSqr;
//# sourceMappingURL=distances-2d.js.map