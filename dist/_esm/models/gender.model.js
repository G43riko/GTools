const maleRegexp = /^(male|man|muz|boy|chlapec|m)$/g;
const femaleRegexp = /^(female|woman|zena|girl|dievca|f|w|z)$/g;
export var Gender;
(function (Gender) {
    Gender["MAN"] = "MAN";
    Gender["WOMAN"] = "WOMAN";
})(Gender || (Gender = {}));
export function parseGender(gender) {
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
export class GenderClass {
}
GenderClass.parse = parseGender;
//# sourceMappingURL=gender.model.js.map