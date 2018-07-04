export class MathUtils {
    public static roundToDecimals(num: number, decimals = 2): any {
        return (Math.ceil(num * 100) / 100).toFixed(decimals);
    }
}
