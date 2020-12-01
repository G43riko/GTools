"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixSphere = exports.fixPosSize = exports.fixXYWH = void 0;
function fixXYWH(minMax, xywh) {
    var result = { x: xywh.x, y: xywh.y };
    if (xywh.x < minMax.min.x) {
        result.x = minMax.min.x;
    }
    else if (xywh.x + xywh.w > minMax.max.x) {
        result.x = minMax.max.x - xywh.w;
    }
    if (xywh.y < minMax.min.y) {
        result.y = minMax.min.y;
    }
    else if (xywh.y + xywh.h > minMax.max.y) {
        result.y = minMax.max.y - xywh.h;
    }
    return result;
}
exports.fixXYWH = fixXYWH;
function fixPosSize(minMax, target) {
    var result = __assign({}, target.position);
    if (target.position.x < minMax.min.x) {
        result.x = minMax.min.x;
    }
    else if (target.position.x + target.size.x > minMax.max.x) {
        result.x = minMax.max.x - target.size.x;
    }
    if (target.position.y < minMax.min.y) {
        result.y = minMax.min.y;
    }
    else if (target.position.y + target.size.y > minMax.max.y) {
        result.y = minMax.max.y - target.size.y;
    }
    return result;
}
exports.fixPosSize = fixPosSize;
function fixSphere(minMax, sphere) {
    var result = __assign({}, sphere.center);
    var halfRadius = sphere.radius / 2;
    if (sphere.center.x - halfRadius < minMax.min.x) {
        result.x = minMax.min.x + halfRadius;
    }
    else if (sphere.center.x + halfRadius > minMax.max.x) {
        result.x = minMax.max.x - halfRadius;
    }
    if (sphere.center.y - halfRadius < minMax.min.y) {
        result.y = minMax.min.y + halfRadius;
    }
    else if (sphere.center.y + halfRadius > minMax.max.y) {
        result.y = minMax.max.y - halfRadius;
    }
    return result;
}
exports.fixSphere = fixSphere;
//# sourceMappingURL=bounders-2d.js.map