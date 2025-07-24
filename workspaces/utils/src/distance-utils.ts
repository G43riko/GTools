import { DistanceUnit } from "@g43/enums";

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
