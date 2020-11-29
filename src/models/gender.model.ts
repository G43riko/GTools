/**
 * @deprecated use {@link Gender} instead
 */
export type GenderType = "MAN" | "WOMAN" | "";

const maleRegexp   = /^(male|man|muz|boy|chlapec|m)$/g;
const femaleRegexp = /^(female|woman|zena|girl|dievca|f|w|z)$/g;

export enum Gender {
    MAN   = "MAN",
    WOMAN = "WOMAN",
}

export function parseGender(gender: string): Gender | null {
    if (!gender) {
        return null;
    }
    const genderLowerCase = gender.trim().toLowerCase().replace("ž", "z").replace("č", "c");
    if (genderLowerCase.match(maleRegexp)) {
        return Gender.MAN;
    }

    if (genderLowerCase.match(femaleRegexp)) {
        return Gender.WOMAN;
    }

    return null;
}

/**
 * @deprecated use {@link parseGender} and {@link Gender} instead
 * Class is used for parsing gender
 */
export class GenderClass {
    /**
     * Method parse string and return GenderType
     * @deprecated use {@link parseGender} instead
     * @param gender gender in any formatTime
     * @returns parsed gender as {@link GenderType}
     */
    public static parse = parseGender;
}
