import { StringUtils } from "../../utils/StringUtils";
import { CountryData } from "./country.interface";

// tslint:disable-next-line
const data: CountryData[] = require("./countries.data.json");

// only for optimization
const countries: { [key: string]: CountryData } = {};
data.forEach((country) => countries[country.key] = country);

/**
 * Class used for parsing countries
 */
export class Country {
    /**
     * Function try to get country by key and return CountryData or null if cannot parse country
     *
     * @param  key - Country key
     * @returns if found than CountryData otherwise null
     */
    public static getByKey(key: string): CountryData | null {
        const finalKey = key.toUpperCase();

        return countries[finalKey] || data.find((country) => country.key === finalKey) || null;
    }

    /**
     * Function try to parse country by name or key or substring and return CountryData or null if cannot parse country
     *
     * @param key - searched key
     * @returns if found than CountryData otherwise null
     */
    public static find(key: string): CountryData | null {
        const finalKey = StringUtils.toBasicForm(key);

        return data.find((country) => {
            return country.key.toLowerCase() === finalKey || country.patterns.some((pattern) => {
                return finalKey.indexOf(pattern) >= 0;
            });
        }) || null;
    }
}
