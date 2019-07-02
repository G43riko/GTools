export class DateUtils {
    public static isDate(obj: any): boolean {
        try {
            const date = new Date(obj);

            return !isNaN(date.getTime());
        } catch (e) {
            return false;
        }
    }
}
