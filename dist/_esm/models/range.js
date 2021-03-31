import { randomFloatBetween, randomIntBetween } from "../utils";
import { Color } from "./color.model";
export class Range {
    constructor(min, max = min) {
        this.min = min;
        this.max = max;
    }
    static random(range) {
        return randomFloatBetween(range.min, range.max);
    }
    static randomVector2i(range) {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
        };
    }
    static randomVector3i(range) {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
            z: randomIntBetween(range.min.z, range.max.z),
        };
    }
    static randomVector4i(range) {
        return {
            x: randomIntBetween(range.min.x, range.max.x),
            y: randomIntBetween(range.min.y, range.max.y),
            z: randomIntBetween(range.min.z, range.max.z),
            w: randomIntBetween(range.min.w, range.max.w),
        };
    }
    static randomVector2f(range) {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
        };
    }
    static randomVector3f(range) {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
            z: randomFloatBetween(range.min.z, range.max.z),
        };
    }
    static randomVector4f(range) {
        return {
            x: randomFloatBetween(range.min.x, range.max.x),
            y: randomFloatBetween(range.min.y, range.max.y),
            z: randomFloatBetween(range.min.z, range.max.z),
            w: randomFloatBetween(range.min.w, range.max.w),
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