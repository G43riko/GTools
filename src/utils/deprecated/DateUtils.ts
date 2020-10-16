import * as Dates from "../date-utils";

/**
 * @deprecated use {@link Dates} instead
 */
export class DateUtils {
    /**
     * @deprecated use {@link isValidDate}
     * @param obj - return true if parameter is valid date
     */
    public static isDate(obj: any): boolean {
        return Dates.isValidDate(obj);
    }
}
