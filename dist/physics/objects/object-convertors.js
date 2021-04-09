"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertPosSizeToMinMax = exports.convertMinMaxToPosSize = void 0;
function convertMinMaxToPosSize(_a) {
    var min = _a.min, max = _a.max;
    return {
        position: {
            x: min.x,
            y: min.y,
        },
        size: {
            x: max.x - min.x,
            y: max.y - min.y,
        },
    };
}
exports.convertMinMaxToPosSize = convertMinMaxToPosSize;
function convertPosSizeToMinMax(_a) {
    var position = _a.position, size = _a.size;
    return {
        min: {
            x: position.x,
            y: position.y,
        },
        max: {
            x: position.x + size.x,
            y: position.y + size.y,
        },
    };
}
exports.convertPosSizeToMinMax = convertPosSizeToMinMax;
//# sourceMappingURL=object-convertors.js.map