"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointCircle2dCollision = exports.pointRectMinMax2dCollision = exports.pointRect2dCollision = exports.circleCircle2dCollision = exports.rectRect2dCollision = exports.lineLine2dCollision = exports.lineRectangle2dCollision = exports.circleRect2dCollision = void 0;
var distances_2d_1 = require("./distances-2d");
function circleRect2dCollision(cPosX, cPosY, cRadius, rPosX, rPosY, rSizeX, rSizeY) {
    var circleDistanceX = Math.abs(cPosX - rPosX);
    var circleDistanceY = Math.abs(cPosY - rPosY);
    if (circleDistanceX > rSizeX / 2 + cRadius) {
        return false;
    }
    if (circleDistanceY > rSizeY / 2 + cRadius) {
        return false;
    }
    if (circleDistanceX <= rSizeX / 2) {
        return true;
    }
    if (circleDistanceY <= rSizeY / 2) {
        return true;
    }
    var cornerDistanceSQ = Math.pow(circleDistanceX - rPosX / 2, 2) +
        Math.pow(circleDistanceY - rPosY / 2, 2);
    return cornerDistanceSQ <= Math.pow(cRadius, 2);
}
exports.circleRect2dCollision = circleRect2dCollision;
function lineRectangle2dCollision(aStartX, aStartY, aEndX, aEndY, bPosX, bPosY, bSizeX, bSizeY) {
    return pointRect2dCollision(aStartX, aStartY, bPosX, bPosY, bSizeX, bSizeY) ||
        pointRect2dCollision(aEndX, aEndY, bPosX, bPosY, bSizeX, bSizeY) ||
        lineLine2dCollision(aStartX, aStartY, aEndX, aEndY, bPosX, bPosY, bPosX + bSizeX, bPosY + bSizeY) ||
        lineLine2dCollision(aStartX, aStartY, aEndX, aEndY, bPosX + bSizeX, bPosY, bPosX, bPosY + bSizeY);
}
exports.lineRectangle2dCollision = lineRectangle2dCollision;
function lineLine2dCollision(aStartX, aStartY, aEndX, aEndY, bStartX, bStartY, bEndX, bEndY) {
    var denominator = (aEndX - aStartX) * (bEndY - bStartY) - (aEndY - aStartY) * (bEndX - bStartX);
    var numerator1 = (aStartY - bStartY) * (bEndX - bStartX) - (aStartX - bStartX) * (bEndY - bStartY);
    var numerator2 = (aStartY - bStartY) * (aEndX - aStartX) - (aStartX - bStartX) * (aEndY - aStartY);
    if (denominator === 0) {
        return numerator1 === 0 && numerator2 === 0;
    }
    var r = numerator1 / denominator;
    var s = numerator2 / denominator;
    return r >= 0 && r <= 1 && (s >= 0 && s <= 1);
}
exports.lineLine2dCollision = lineLine2dCollision;
function rectRect2dCollision(ax, ay, aw, ah, bx, by, bw, bh) {
    return bx + bw >= ax && by + bh >= ay && bx <= ax + aw && by <= ay + ah;
}
exports.rectRect2dCollision = rectRect2dCollision;
function circleCircle2dCollision(aX, aY, aRadius, bX, bY, bRadius) {
    return distances_2d_1.pointPoint2dDistance(aX, aY, bX, bY) <= aRadius + bRadius;
}
exports.circleCircle2dCollision = circleCircle2dCollision;
function pointRect2dCollision(pointX, pointY, rectX, rectY, rectW, rectH) {
    return pointX >= rectX &&
        pointY >= rectY &&
        pointX <= rectX + rectW &&
        pointY <= rectY + rectH;
}
exports.pointRect2dCollision = pointRect2dCollision;
function pointRectMinMax2dCollision(pointX, pointY, minX, minY, maxX, maxY) {
    return pointX >= minX &&
        pointY >= minY &&
        pointX <= maxX &&
        pointY <= maxY;
}
exports.pointRectMinMax2dCollision = pointRectMinMax2dCollision;
function pointCircle2dCollision(pointX, pointY, circleX, circleY, circleRadius) {
    return distances_2d_1.pointPoint2dDistance(pointX, pointY, circleX, circleY) <= circleRadius;
}
exports.pointCircle2dCollision = pointCircle2dCollision;
//# sourceMappingURL=collisions-2d.js.map