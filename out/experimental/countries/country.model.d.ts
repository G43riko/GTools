import { CountryData } from "./country.interface";
/**
 * @class Country
 */
export declare class Country {
    /**
     * Function try to get country by key and return CountryData or null if cannot parse country
     *
     * @param {string} key
     * @public
     * @returns {CountryData|null}
     */
    static getByKey(key: string): CountryData | null;
    /**
     * Function try to parse country by name or key or substring and return CountryData or null if cannot parse country
     *
     * @param {string} query
     * @public
     * @returns {CountryData|null}
     */
    static find(query: string): CountryData | null;
}
