export type GenderType = "MAN" | "WOMAN" | "";

const maleRegexp   = /^(male|man|muz|boy|chlapec|m)$/g;
const femaleRegexp = /^(female|woman|zena|girl|dievca|f|w|z)$/g;

/**
 * Class is used for parsing gender
 */
export class Gender {
    /**
     * Method parse string and return GenderType
     *
     * @param gender gender in any format
     * @returns parsed gender as {@link GenderType}
     */
    public static parse(gender: string): GenderType {
        if (!gender) {
            return "";
        }
        const genderLowerCase = gender.trim().toLowerCase().replace("ž", "z").replace("č", "c");
        if (genderLowerCase.match(maleRegexp)) {
            return "MAN";
        }

        if (genderLowerCase.match(femaleRegexp)) {
            return "WOMAN";
        }

        return "";
    }
}
