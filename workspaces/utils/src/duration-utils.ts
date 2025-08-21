import { DurationUnit } from "@g43/enums";

/**
 * Converts a duration between two units.
 *
 * Supported source units: milliseconds (MS), seconds (S), minutes (M).
 * Supported target units: milliseconds (MS), seconds (S), minutes (M), hours (H).
 *
 * If value is undefined or 0, returns 0. For unsupported combinations, throws an Error.
 *
 * @param value - Numeric duration to convert (undefined or 0 returns 0).
 * @param from - Source duration unit.
 * @param to - Target duration unit.
 * @returns Converted numeric duration.
 */
export const convertDuration = (value: number | undefined, from: DurationUnit, to: DurationUnit): number => {
    if (!value) {
        return 0;
    }
    if (from === DurationUnit.MS) {
        switch (to) {
            case DurationUnit.MS:
                return value;
            case DurationUnit.S:
                return value / 1000;
            case DurationUnit.M:
                return value / 60_000;
            case DurationUnit.H:
                return value / 3_600_000; //60_000 * 60;
            default:
                throw new Error(`Unsupported duration conversion '${from}' => '${to}'`);
        }
    }
    if (from === DurationUnit.M) {
        switch (to) {
            case DurationUnit.MS:
                return value * 60_000;
            case DurationUnit.S:
                return value * 60;
            case DurationUnit.M:
                return value;
            case DurationUnit.H:
                return value / 60;
            default:
                throw new Error(`Unsupported duration conversion '${from}' => '${to}'`);
        }
    }
    if (from === DurationUnit.S) {
        switch (to) {
            case DurationUnit.MS:
                return value * 1000;
            case DurationUnit.S:
                return value;
            case DurationUnit.M:
                return value / 60;
            case DurationUnit.H:
                return value / 3600; // 60 * 60;
            default:
                throw new Error(`Unsupported duration conversion '${from}' => '${to}'`);
        }
    }
    throw new Error(`Unsupported duration conversion '${from}' => '${to}'`);
};
