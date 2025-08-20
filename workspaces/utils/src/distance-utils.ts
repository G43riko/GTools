import { DistanceUnit } from "@g43/enums";

/**
 * Converts a numeric distance from the specified unit to meters.
 *
 * Supported units are defined in {@link DistanceUnit}. If an unsupported unit is passed,
 * an Error will be thrown.
 *
 * @param value - Numeric value to convert.
 * @param unit - Unit of the input value.
 * @returns The equivalent distance in meters.
 */
export function toMeters(value: number, unit: DistanceUnit): number {
    switch (unit) {
        case DistanceUnit.MM:
            return value * 0.001;
        case DistanceUnit.CM:
            return value * 0.01;
        case DistanceUnit.M:
            return value;
        case DistanceUnit.KM:
            return value * 1000;

        case DistanceUnit.IN:
            return value * 0.0254;
        case DistanceUnit.FT:
            return value * 0.3048;
        case DistanceUnit.YD:
            return value * 0.9144;
        case DistanceUnit.MI:
            return value * 1609.344;
        case DistanceUnit.FL:
            return value * 201.168;

        case DistanceUnit.NM:
            return value * 1852;

        case DistanceUnit.LY:
            return value * 9.4607e15;
        case DistanceUnit.AU:
            return value * 1.495978707e11;
        case DistanceUnit.PC:
            return value * 3.085677581e16;

        default:
            throw new Error(`Unsupported distance unit: ${unit}`);
    }
}

/**
 * Converts a distance between two units.
 *
 * Supported target units via generic conversion path:
 * - to meters (M)
 * - to kilometers (KM)
 * - to centimeters (CM)
 *
 * Additionally supports converting from kilometers to miles (KM -> MI).
 *
 * If value is undefined or 0, returns 0. For unsupported combinations, throws an Error.
 *
 * Note: The set of supported conversions is intentionally limited.
 *
 * @param value - Numeric distance to convert (undefined or 0 returns 0).
 * @param from - Source unit.
 * @param to - Target unit.
 * @returns Converted numeric distance.
 */
export const convertDistance = (value: number | undefined, from: DistanceUnit, to: DistanceUnit): number => {
    if (!value) {
        return 0;
    }
    if (to === DistanceUnit.M) {
        return toMeters(value, from);
    }
    if (to === DistanceUnit.KM) {
        return toMeters(value, from) / 1000;
    }
    if (to === DistanceUnit.CM) {
        return toMeters(value, from) * 1000;
    }

    if (from === DistanceUnit.KM) {
        const KM_TO_MI = 0.621371192;
        switch (to) {
            case DistanceUnit.MI:
                return value * KM_TO_MI;
            default:
                throw new Error(`Unsupported length unit '${to}'`);
        }
    }
    throw new Error(`Unsupported length unit '${from}'`);
};
