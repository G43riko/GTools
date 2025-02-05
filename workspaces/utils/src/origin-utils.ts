import { Origin } from "@g43/enums";
import { SimpleVector } from "@g43/math";
import type { ReadonlySimpleVector2 } from "@g43/types";

export function originToAnchor(origin: Origin): ReadonlySimpleVector2 {
    switch (origin) {
        case Origin.TL:
            return SimpleVector.ZERO_2;
        case Origin.CENTER:
            return SimpleVector.HALF_2;
        case Origin.BR:
            return SimpleVector.ONE_2;
        case Origin.BL:
            return SimpleVector.UP_2;
        case Origin.TR:
            return SimpleVector.RIGHT_2;
        default:
            return SimpleVector.create(getOriginMultiplierX(origin), getOriginMultiplierY(origin));
    }
}

export function getOriginMultiplierX(origin: Origin): 0 | 0.5 | 1 {
    switch (origin) {
        case Origin.TL:
        case Origin.BL:
        case Origin.L:
            return 0;
        case Origin.CENTER:
        case Origin.B:
        case Origin.T:
            return 0.5;
        case Origin.TR:
        case Origin.BR:
        case Origin.R:
            return 1;
        default:
            throw new Error(`Unsupported origin '${origin}'`);
    }
}

export function getOriginMultiplierY(origin: Origin): 0 | 0.5 | 1 {
    switch (origin) {
        case Origin.TL:
        case Origin.TR:
        case Origin.T:
            return 0;
        case Origin.CENTER:
        case Origin.R:
        case Origin.L:
            return 0.5;
        case Origin.BL:
        case Origin.BR:
        case Origin.B:
            return 1;
        default:
            throw new Error(`Unsupported origin '${origin}'`);
    }
}
