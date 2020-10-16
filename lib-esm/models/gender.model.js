var maleRegexp = /^(male|man|muz|boy|chlapec|m)$/g;
var femaleRegexp = /^(female|woman|zena|girl|dievca|f|w|z)$/g;
/**
 * Class is used for parsing gender
 */
var Gender = /** @class */ (function () {
    function Gender() {
    }
    /**
     * Method parse string and return GenderType
     *
     * @param gender gender in any format
     * @returns parsed gender as {@link GenderType}
     */
    Gender.parse = function (gender) {
        if (!gender) {
            return "";
        }
        var genderLowerCase = gender.trim().toLowerCase().replace("ž", "z").replace("č", "c");
        if (genderLowerCase.match(maleRegexp)) {
            return "MAN";
        }
        if (genderLowerCase.match(femaleRegexp)) {
            return "WOMAN";
        }
        return "";
    };
    return Gender;
}());
export { Gender };
