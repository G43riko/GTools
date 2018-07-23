export class MathUtils {
    public static roundToDecimals(num: number, decimals = 2, type: "floor" | "ceil" | "round" = "round"): string {
        const divider = parseInt(1 + new Array(decimals + 1).join("0"), 10);

        return (Math[type](num * divider) / divider).toFixed(decimals);
    }

    public static pad(num: number, size: number): string {
        const s = "00000000000000" + num;

        return s.substr(s.length - size);
    }

    public static clamp(value: number, min: number, max: number): number {
        return Math.max(min, Math.min(value, max));
    }

    public static binomialCoefficient(n: number, k: number): number {
        let r = 1;
        if (k > n) {
            return 0;
        }
        for (let d = 1; d <= k; d++) {
            r *= n--;
            r /= d;
        }

        return r;
    }

    public static lerp(a: number, b: number, val: number): number {
        return b * val + (1 - val) * a;
    }

    public static log2i(value: number): number {
        let r = 0;
        while ((value >>= 1) > 0) {
            r++;
        }

        return r;
    }

    public static lamp(min: number, max: number, scale: number): number {
        return MathUtils.clamp((max - min) * scale + min, min, max);
    }

    public static randomInt(min: number, max: number): number {
        return Math.floor(MathUtils.random(min, max));
    }

    public static random(min: number, max: number): number {
        const diff = max - min;

        return min + Math.random() * diff;
    }

    public static average(args: number[]): number {
        let sum = 0;
        for (const item of args) {
            sum += item;
        }

        return sum / args.length;
    }

    public static diff(num1: number, num2: number): number {
        return Math.abs(num1 - num2);
    }
}
