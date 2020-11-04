"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointLineSqr2dDistance = exports.pointLine2dDistance = exports.pointCircleSqr2dDistance = exports.pointCircle2dDistance = exports.circleCircleSqr2dDistance = exports.circleCircle2dDistance = exports.pointPointSqr2dDistance = exports.pointPoint2dDistance = void 0;
function pointPoint2dDistance(ax, ay, bx, by) {
    return Math.sqrt(pointPointSqr2dDistance(ax, ay, bx, by));
}
exports.pointPoint2dDistance = pointPoint2dDistance;
function pointPointSqr2dDistance(ax, ay, bx, by) {
    var distX = ax - bx;
    var distY = ay - by;
    return distX * distX + distY * distY;
}
exports.pointPointSqr2dDistance = pointPointSqr2dDistance;
function circleCircle2dDistance(ax, ay, ar, bx, by, br) {
    return Math.max(pointPoint2dDistance(ax, ay, bx, by) - br - ar, 0);
}
exports.circleCircle2dDistance = circleCircle2dDistance;
function circleCircleSqr2dDistance(ax, ay, ar, bx, by, br) {
    return Math.max(pointPointSqr2dDistance(ax, ay, bx, by) - br - ar);
}
exports.circleCircleSqr2dDistance = circleCircleSqr2dDistance;
function pointCircle2dDistance(ax, ay, bx, by, br) {
    return Math.max(pointPoint2dDistance(ax, ay, bx, by) - br, 0);
}
exports.pointCircle2dDistance = pointCircle2dDistance;
function pointCircleSqr2dDistance(ax, ay, bx, by, br) {
    return Math.max(pointPointSqr2dDistance(ax, ay, bx, by) - br, 0);
}
exports.pointCircleSqr2dDistance = pointCircleSqr2dDistance;
function pointLine2dDistance(aX, aY, bX, bY, pX, pY) {
    return Math.sqrt(pointLineSqr2dDistance(aX, aY, bX, bY, pX, pY));
}
exports.pointLine2dDistance = pointLine2dDistance;
function pointLineSqr2dDistance(aX, aY, bX, bY, pX, pY) {
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
exports.pointLineSqr2dDistance = pointLineSqr2dDistance;
