import { StringUtils } from "../../utils/StringUtils";
import { CountryData } from "./country.interface";

// tslint:disable-next-line
const data: CountryData[] = require("./countries.data.json");

// only for optimization
const countries: { [key: string]: CountryData } = {};
data.forEach((country) => countries[country.key] = country);

export class Country {
    public static getByKey(key: string): CountryData | null {
        const finalKey = key.toUpperCase();

        return countries[finalKey] || data.find((country) => country.key === finalKey) || null;
    }

    public static find(query: string): CountryData | null {
        const finalQuery = StringUtils.toBasicForm(query);

        return data.find((country) => {
            return country.key.toLowerCase() === finalQuery || country.patterns.some((pattern) => {
                return finalQuery.indexOf(pattern) >= 0;
            });
        }) || null;
    }
}
