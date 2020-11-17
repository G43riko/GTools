import { CountryData } from "./country.interface";
/**
 * Class used for parsing countries
 */
export declare class Country {
    /**
     * Function try to get country by key and return CountryData or null if cannot parse country
     *
     * @param  key - Country key
     * @returns if found than CountryData otherwise null
     */
    static getByKey(key: string): CountryData | null;
    /**
     * Function try to parse country by name or key or substring and return CountryData or null if cannot parse country
     *
     * @param key - searched key
     * @returns if found than CountryData otherwise null
     */
    static find(key: string): CountryData | null;
}
//# sourceMappingURL=country.model.d.ts.map