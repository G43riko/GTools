import { CountryData } from "./country.interface";
export declare class Country {
    static getByKey(key: string): CountryData | null;
    static find(query: string): CountryData | null;
}
