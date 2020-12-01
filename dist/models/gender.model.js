"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderClass = exports.parseGender = exports.Gender = void 0;
var maleRegexp = /^(male|man|muz|boy|chlapec|m)$/g;
var femaleRegexp = /^(female|woman|zena|girl|dievca|f|w|z)$/g;
var Gender;
(function (Gender) {
    Gender["MAN"] = "MAN";
    Gender["WOMAN"] = "WOMAN";
})(Gender = exports.Gender || (exports.Gender = {}));
function parseGender(gender) {
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
exports.parseGender = parseGender;
var GenderClass = (function () {
    function GenderClass() {
    }
    GenderClass.parse = parseGender;
    return GenderClass;
}());
exports.GenderClass = GenderClass;
//# sourceMappingURL=gender.model.js.map