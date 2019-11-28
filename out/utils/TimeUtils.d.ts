export declare class TimeUtils {
    /**
     *
     * @param from - time in string using HH:mm:ss format
     * @param to - time in string using HH:mm:ss format
     * @returns - duration in minutes
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
    static getStringFromSeconds(time: number): string;
    static toHHMMSS(time: string, decimals?: number): string;
    private static format;
}
