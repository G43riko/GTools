export class MathUtils {
    public static roundToDecimals(num: number, decimals = 2): string {
        return (Math.ceil(num * 100) / 100).toFixed(decimals);
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
        for (let d = 1 ; d <= k; d++) {
            r *= n--;
            r /= d;
        }
        return r;
    };
    public static lerp(a: number, b: number, val: number): number {
        return a * val + (1 - val) * b;
    };

    public static log2i(value: number) {
        let r = 0;
        while ((value >>= 1) > 0) {
            r++;
        }
        return r;
    };


    public static lamp(min: number, max: number, scale: number): number {
        return MathUtils.clamp((max - min) * scale + min, min, max);
    }
    public static average(args: number[]): number {
        let sum = 0;
        for (const item of args) {
            sum += item;
        }
        return sum / args.length;
    }
}
