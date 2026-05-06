import { convertDuration } from "@g43/utils";
import { DurationUnit } from "@g43/enums";

/**
 * A collection of unit-conversion helpers grouped by category.
 *
 * @example
 * ```ts ignore
 * // Convert 2 MB to bytes
 * const bytes = Units.MEMORY.MB(2); // 2_097_152
 *
 * // Get a one-minute timeout in milliseconds
 * const timeout = Units.DURATION.MINUTE(); // 60_000
 * ```
 */
export const Units = {
    /** Memory-size conversion helpers. All methods return a value in bytes. */
    MEMORY: {
        /** Converts megabytes to bytes. */
        MB: (mb: number) => mb * 1024 * 1024,
        /** Returns the given byte count unchanged. */
        BYTES: (bytes: number) => bytes,
    },
    /** Duration conversion helpers. All methods return a value in milliseconds. */
    DURATION: {
        /** Returns the number of milliseconds in one second (1 000). */
        SECOND: (): number => Units.DURATION.SECONDS(1),
        /**
         * Converts seconds to milliseconds.
         * @param seconds - Number of seconds.
         */
        SECONDS: (seconds: number): number => convertDuration(seconds, DurationUnit.S, DurationUnit.MS),
        /** Returns the number of milliseconds in one minute (60 000). */
        MINUTE: (): number => Units.DURATION.MINUTES(1),
        /**
         * Converts minutes to milliseconds.
         * @param minutes - Number of minutes.
         */
        MINUTES: (minutes: number): number => convertDuration(minutes, DurationUnit.M, DurationUnit.MS),
        /** Returns the number of milliseconds in one hour (3 600 000). */
        HOUR: (): number => Units.DURATION.MINUTES(60),
        /**
         * Converts hours to milliseconds.
         * @param hours - Number of hours.
         */
        HOURS: (hours: number): number => Units.DURATION.MINUTES(hours * 60),
        /** Returns the number of milliseconds in one day (86 400 000). */
        DAY: (): number => Units.DURATION.DAYS(1),
        /**
         * Converts days to milliseconds.
         * @param days - Number of days.
         */
        DAYS: (days: number): number => Units.DURATION.HOURS(days * 24),
        /** Returns the number of milliseconds in one week (604 800 000). */
        WEEK: (): number => Units.DURATION.DAYS(7),
        /** Returns the number of milliseconds in one year of 365 days (31 536 000 000). */
        YEAR: (): number => Units.DURATION.DAYS(365),
    },
};
