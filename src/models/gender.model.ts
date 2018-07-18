export type GenderType = "MAN" | "WOMAN" | "";

export class Gender {
    public static parse(gender: string): GenderType {
        if (!gender) {
            return "";
        }
        const genderLowerCase = gender.trim().toLowerCase().replace("ž", "z");
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
    }
}
