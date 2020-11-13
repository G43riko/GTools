import { Color } from "./color.model";
export class Range {
    constructor(min, max = min) {
        this.min = min;
        this.max = max;
    }
    static random(range) {
        return Math.random() * (range.max - range.min) + range.min;
    }
    static randomVector(range) {
        return {
            x: Math.random() * (range.max.x - range.min.x) + range.min.x,
            y: Math.random() * (range.max.y - range.min.y) + range.min.y,
        };
    }
    static randomColor(range, method = "rgba") {
        const min = range.min.rgba;
        const max = range.max.rgba;
        return new Color(Math.random() * (max[0] - min[0]) + min[0], Math.random() * (max[1] - min[1]) + min[1], Math.random() * (max[2] - min[2]) + min[2], Math.random() * (max[3] - min[3]) + min[3]);
    }
}
//# sourceMappingURL=range.js.map