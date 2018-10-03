import { StringUtils } from "../../utils/StringUtils";
import { CountryData } from "./country.interface";

// tslint:disable-next-line
const data: CountryData[] = require("./countries.data.json");

// only for optimization
const countries: { [key: string]: CountryData } = {};
data.forEach((country) => countries[country.key] = country);

/**
 * @class Country
 */
export class Country {
    /**
     * Function try to get country by key and return CountryData or null if cannot parse country
     *
     * @param {string} key
     * @public
     * @returns {CountryData|null}
     */
    public static getByKey(key: string): CountryData | null {
        const finalKey = key.toUpperCase();

        return countries[finalKey] || data.find((country) => country.key === finalKey) || null;
    }

    /**
     * Function try to parse country by name or key or substring and return CountryData or null if cannot parse country
     *
     * @param {string} query
     * @public
     * @returns {CountryData|null}
     */
    public static find(query: string): CountryData | null {
        const finalQuery = StringUtils.toBasicForm(query);

        return data.find((country) => {
            return country.key.toLowerCase() === finalQuery || country.patterns.some((pattern) => {
                return finalQuery.indexOf(pattern) >= 0;
            });
        }) || null;
    }
}
