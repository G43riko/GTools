import * as Dates from "../date-utils";
/**
 * @deprecated use {@link Dates} instead
 */
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    /**
     * @deprecated use {@link isValidDate}
     * @param obj - return true if parameter is valid date
     */
    DateUtils.isDate = function (obj) {
        return Dates.isValidDate(obj);
    };
    return DateUtils;
}());
export { DateUtils };
