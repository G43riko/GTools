export declare class TimeUtils {
    /**
     * Convert time from HH:mm:ss to HH:mm
     *
     * @param {string} time
     * @returns {string}
     */
    static formatTime(time: string): string;
    /**
     *
     * @param {string} from - time in string using HH:mm:ss format
     * @param {string} to - time in string using HH:mm:ss format
     * @returns {number}
     */
    static getDurationInMinutes(from: string, to: string): number;
    static getStartOfTheMonthDate(date: Date): string;
    static getDateShort(date: Date): string;
    static formatDateAndTime(date: Date): string;
    static formatDateUTC(date: Date): string;
    static getStartOfTheDay(date: Date): Date;
    static getEndOfTheDay(date: Date): Date;
    static formatDate(date: Date): string;
    static getTimeFromDate(date: Date): string;
    static toHHMMSS(time: string, decimals?: number): string;
    private static format;
}
