export declare type GenderType = "MAN" | "WOMAN" | "";
export declare enum Gender {
    MAN = "MAN",
    WOMAN = "WOMAN"
}
export declare function parseGender(gender: string): Gender | null;
export declare class GenderClass {
    static parse: typeof parseGender;
}
