import * as Maths from "../math-utils";
export class MathUtils {
    static roundToDecimals(num, decimals = 2, type = "round") {
        return Maths.roundToDecimals(num, decimals, type);
    }
    static pad(num, size) {
        return Maths.pad(num, size);
    }
    static clamp(value, min, max) {
        return Maths.clamp(value, min, max);
    }
    static binomialCoefficient(n, k) {
        return Maths.binomialCoefficient(n, k);
    }
    static lerp(a, b, val) {
        return Maths.lerp(a, b, val);
    }
    static log2i(value) {
        return Maths.log2i(value);
    }
    static lamp(min, max, scale) {
        return Maths.lamp(min, max, scale);
    }
    static randomInt(min, max) {
        return Maths.randomInt(min, max);
    }
    static random(min, max) {
        return Maths.random(min, max);
    }
    static average(args) {
        return Maths.average(args);
    }
    static diff(num1, num2) {
        return Maths.getDiff(num1, num2);
    }
}
//# sourceMappingURL=MathUtils.js.map