import { Color } from "./color.model";
var Range = (function () {
    function Range(min, max) {
        if (max === void 0) { max = min; }
        this.min = min;
        this.max = max;
    }
    Range.random = function (range) {
        return Math.random() * (range.max - range.min) + range.min;
    };
    Range.randomVector = function (range) {
        return {
            x: Math.random() * (range.max.x - range.min.x) + range.min.x,
            y: Math.random() * (range.max.y - range.min.y) + range.min.y,
        };
    };
    Range.randomColor = function (range, method) {
        if (method === void 0) { method = "rgba"; }
        var min = range.min.rgba;
        var max = range.max.rgba;
        return new Color(Math.random() * (max[0] - min[0]) + min[0], Math.random() * (max[1] - min[1]) + min[1], Math.random() * (max[2] - min[2]) + min[2], Math.random() * (max[3] - min[3]) + min[3]);
    };
    return Range;
}());
export { Range };
//# sourceMappingURL=range.js.map