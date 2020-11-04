var maleRegexp = /^(male|man|muz|boy|chlapec|m)$/g;
var femaleRegexp = /^(female|woman|zena|girl|dievca|f|w|z)$/g;
export var Gender;
(function (Gender) {
    Gender["MAN"] = "MAN";
    Gender["WOMAN"] = "WOMAN";
})(Gender || (Gender = {}));
export function parseGender(gender) {
    if (!gender) {
        return null;
    }
    var genderLowerCase = gender.trim().toLowerCase().replace("ž", "z").replace("č", "c");
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
var GenderClass = /** @class */ (function () {
    function GenderClass() {
    }
    /**
     * Method parse string and return GenderType
     * @deprecated use {@link parseGender} instead
     * @param gender gender in any format
     * @returns parsed gender as {@link GenderType}
     */
    GenderClass.parse = parseGender;
    return GenderClass;
}());
export { GenderClass };
