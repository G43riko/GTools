import moment from "moment";
import { MathUtils } from "./deprecated/MathUtils";
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     *
     * @param from - time in string using HH:mm:ss format
     * @param to - time in string using HH:mm:ss format
     * @returns duration in minutes
     */
    TimeUtils.getDurationInMinutes = function (from, to) {
        var fromDate = moment("1970-01-01T" + from);
        var toDate = moment("1970-01-01T" + to);
        var duration = moment.duration(toDate.diff(fromDate));
        return duration.asMinutes();
    };
    TimeUtils.getStartOfTheMonthDate = function (date) {
        date.setDate(1);
        return TimeUtils.getDateShort(date);
    };
    TimeUtils.getDateShort = function (date) {
        return TimeUtils.format(date, "YYY-MM-DD");
    };
    TimeUtils.formatDateAndTime = function (date) {
        return TimeUtils.format(date, "YYY-MM-DDTHH:mm:ss");
    };
    TimeUtils.formatDateUTC = function (date) {
        if (!date) {
            return "";
        }
        return date.toUTCString();
    };
    TimeUtils.getStartOfTheDay = function (date) {
        if (!date) {
            return new Date("");
        }
        return moment(date).startOf("day").toDate();
    };
    TimeUtils.getEndOfTheDay = function (date) {
        if (!date) {
            return new Date("");
        }
        return moment(date).endOf("day").toDate();
    };
    TimeUtils.formatDate = function (date) {
        return moment(date).format();
    };
    TimeUtils.getTimeFromDate = function (date) {
        return TimeUtils.format(date, "HH:mm");
    };
    TimeUtils.getStringFromSeconds = function (time) {
        var minutes = parseInt((time / 60) + "", 10);
        var seconds = time % 60;
        return MathUtils.pad(minutes, 2) + ":" + MathUtils.pad(seconds, 2);
    };
    TimeUtils.toHHMMSS = function (time, decimals) {
        if (decimals === void 0) { decimals = 0; }
        var secNum = parseInt(time, 10) / 1000;
        var hours = Math.floor(secNum / 3600);
        var minutes = Math.floor((secNum - (hours * 3600)) / 60);
        var seconds = secNum - (hours * 3600) - (minutes * 60);
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds.toFixed(decimals);
        }
        else {
            seconds = seconds.toFixed(decimals);
        }
        return hours + ":" + minutes + ":" + seconds;
    };
    TimeUtils.format = function (date, format) {
        var toString = function (time) { return time < 10 ? "0" + time : "" + time; };
        var regex = new RegExp("(DD|MM|YYYY|YYY|YY|HH|mm|SS)", "g");
        var DD = toString(date.getDate());
        var MM = toString(date.getMonth() + 1);
        var YYYY = date.getFullYear() + "";
        var YYY = YYYY.substr(1, 4);
        var YY = YYY.substr(1, 4);
        var HH = toString(date.getHours());
        var mm = toString(date.getMinutes());
        var SS = toString(date.getSeconds());
        return format.replace(regex, function (e) {
            switch (e) {
                case "DD":
                    return DD;
                case "MM":
                    return MM;
                case "YYYY":
                    return YYYY;
                case "YYY":
                    return YYY;
                case "YY":
                    return YY;
                case "HH":
                    return HH;
                case "mm":
                    return mm;
                case "SS":
                    return SS;
                default:
                    return e;
            }
        });
    };
    return TimeUtils;
}());
export { TimeUtils };
