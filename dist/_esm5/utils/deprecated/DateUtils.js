import * as Dates from "../date-utils";
var DateUtils = (function () {
    function DateUtils() {
    }
    DateUtils.isDate = function (obj) {
        return Dates.isValidDate(obj);
    };
    return DateUtils;
}());
export { DateUtils };
//# sourceMappingURL=DateUtils.js.map