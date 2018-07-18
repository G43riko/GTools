"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gender = /** @class */ (function () {
    function Gender() {
    }
    Gender.parse = function (gender) {
        if (!gender) {
            return "";
        }
        var genderLowerCase = gender.trim().toLowerCase().replace("ž", "z");
        if (genderLowerCase === "male" ||
            genderLowerCase === "man" ||
            genderLowerCase === "muz" ||
            genderLowerCase === "m") {
            return "MAN";
        }
        if (genderLowerCase === "female" ||
            genderLowerCase === "woman" ||
            genderLowerCase === "zena" ||
            genderLowerCase === "w" ||
            genderLowerCase === "f") {
            return "WOMAN";
        }
        return "";
    };
    return Gender;
}());
exports.Gender = Gender;
