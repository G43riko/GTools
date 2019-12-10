export declare type GenderType = "MAN" | "WOMAN" | "";

/**
 * Class is used for parsing gender
 */
export declare class Gender {
    /**
     * Method parse string and return GenderType
     *
     * @param gender gender in any format
     * @returns parsed gender as {@link GenderType}
     */
    static parse(gender: string): GenderType;
}
