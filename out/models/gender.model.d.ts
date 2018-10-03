export declare type GenderType = "MAN" | "WOMAN" | "";
/**
 * @class Gender
 */
export declare class Gender {
    /**
     * Method parse string and return GenderType
     *
     * @param {string} gender
     * @returns {GenderType}
     * @public
     * @static
     */
    static parse(gender: string): GenderType;
}
