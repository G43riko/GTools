import { randomFloatBetween, randomIntBetween } from "gtools/utils";
import { Color } from "./color.model";
export class Range {
    constructor(min, max = min) {
        this.min = min;
        this.max = max;
    }
    static random(range) {
        return randomFloatBetween(range.min, range.max);
    }
    static randomVector(range) {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
        };
    }
    static randomColorF(range) {
        return new Color(randomFloatBetween(range.min.red, range.max.red), randomFloatBetween(range.min.green, range.max.green), randomFloatBetween(range.min.blue, range.max.blue), randomFloatBetween(range.min.alpha, range.max.alpha));
    }
    static randomColorI(range) {
        return new Color(randomIntBetween(range.min.red, range.max.red), randomIntBetween(range.min.green, range.max.green), randomIntBetween(range.min.blue, range.max.blue), randomIntBetween(range.min.alpha, range.max.alpha));
    }
}
//# sourceMappingURL=range.js.map