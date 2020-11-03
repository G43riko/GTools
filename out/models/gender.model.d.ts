/**
 * @deprecated use {@link Gender} instead
 */
export declare type GenderType = "MAN" | "WOMAN" | "";
export declare enum Gender {
    MAN = "MAN",
    WOMAN = "WOMAN"
}
export declare function parseGender(gender: string): Gender | undefined;
/**
 * @deprecated use {@link parseGender} and {@link Gender} instead
 * Class is used for parsing gender
 */
export declare class GenderClass {
    /**
     * Method parse string and return GenderType
     * @deprecated use {@link parseGender} instead
     * @param gender gender in any format
     * @returns parsed gender as {@link GenderType}
     */
    static parse: typeof parseGender;
}
