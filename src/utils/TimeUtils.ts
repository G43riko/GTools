import * as moment from "moment";

export class TimeUtils {
    /**
     * Convert time from HH:mm:ss to HH:mm
     *
     * @param {string} time
     * @returns {string}
     */
    public static formatTime(time: string): string {
        const splitTime = time.split(":");
        if (splitTime.length >= 2) {
            return splitTime[0] + ":" + splitTime[1];
        } else {
            return "";
        }
    }

    /**
     *
     * @param {string} from - time in string using HH:mm:ss format
     * @param {string} to - time in string using HH:mm:ss format
     * @returns {number}
     */
    public static getDurationInMinutes(from: string, to: string): number {
        const fromDate = moment("1970-01-01T" + from);
        const toDate = moment("1970-01-01T" + to);

        const duration = moment.duration(toDate.diff(fromDate));

        return duration.asMinutes();
    }

    public static getStartOfTheMonthDate(date: Date): string {
        date.setDate(1);

        return TimeUtils.getDateShort(date);
    }

    public static getDateShort(date: Date): string {
        return TimeUtils.format(date, "YYY-MM-DD");
    }

    public static formatDateAndTime(date: Date): string {
        return TimeUtils.format(date, "YYY-MM-DDTHH:mm:ss");
    }

    public static formatDateUTC(date: Date): string {
        if (!date) {
            return "";
        } else {
            return date.toUTCString();
        }
    }

    public static getStartOfTheDay(date: Date): Date {
        if (!date) {
            return new Date("");
        }

        return moment(date).startOf("day").toDate();
    }

    public static getEndOfTheDay(date: Date): Date {
        if (!date) {
            return new Date("");
        }

        return moment(date).endOf("day").toDate();
    }

    public static formatDate(date: Date): string {
        return moment(date).format();
    }

    public static getTimeFromDate(date: Date): string {
        return TimeUtils.format(date, "HH:mm");
    }

    private static format(date: Date, format: string): string {
        const toString = (time: number): string => time < 10 ? "0" + time : "" + time;

        const regex = new RegExp("(DD|MM|YYYY|YYY|YY|HH|mm|SS)", "g");
        const DD = toString(date.getDay() + 1);
        const MM = toString(date.getMonth() + 1);
        const YYYY = date.getFullYear() + "";
        const YYY = YYYY.substr(1, 4);
        const YY = YYY.substr(1, 4);
        const HH = toString(date.getHours());
        const mm = toString(date.getMinutes());
        const SS = toString(date.getSeconds());

        return format.replace(regex, (e) => {
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
    }

    public static toHHMMSS(time: string, decimals = 0): string {
        const secNum: number = parseInt(time, 10) / 1000;
        let hours: string | number = Math.floor(secNum / 3600);
        let minutes: string | number = Math.floor((secNum - (hours * 3600)) / 60);
        let seconds: string | number = secNum - (hours * 3600) - (minutes * 60);

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
    }
}
