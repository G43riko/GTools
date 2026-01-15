import { convertDuration } from "@g43/utils";
import { DurationUnit } from "@g43/enums";

export const Units = {
    MEMORY: {
        MB: (mb: number) => mb * 1024 * 1024,
        BYTES: (bytes: number) => bytes
    },
    DURATION: {
        SECOND: (): number  => Units.DURATION.SECONDS(1),
        SECONDS: (seconds: number): number  => convertDuration(seconds, DurationUnit.S, DurationUnit.MS),
        MINUTE: (): number  => Units.DURATION.MINUTES(1),
        MINUTES: (minutes: number): number  => convertDuration(minutes, DurationUnit.M, DurationUnit.MS),
        HOUR: (): number  => Units.DURATION.MINUTES(60),
        HOURS: (hours: number): number  => Units.DURATION.MINUTES(hours * 60),
        DAY: (): number  => Units.DURATION.DAYS(1),
        DAYS: (days: number): number => Units.DURATION.HOURS(days * 24),
        WEEK: (): number => Units.DURATION.DAYS(7),
        YEAR: (): number => Units.DURATION.DAYS(365)
    }
};
