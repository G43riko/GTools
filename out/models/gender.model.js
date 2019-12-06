"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maleRegexp = /^(male|man|muz|boy|chlapec|m)$/g;
var femaleRegexp = /^(female|woman|zena|girl|dievca|f|w|z)$/g;
/**
 * @class Gender
 */
var Gender = /** @class */ (function () {
    function Gender() {
    }
    /**
     * Method parse string and return GenderType
     *
     * @param {string} gender
     * @returns {GenderType}
     * @public
     * @static
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
exports.Gender = Gender;