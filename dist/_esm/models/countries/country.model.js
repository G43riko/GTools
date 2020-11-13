import { toBasicForm } from "gtools/utils";
const data = require("./countries.data.json");
const countries = {};
data.forEach((country) => countries[country.key] = country);
export class Country {
    static getByKey(key) {
        const finalKey = key.toUpperCase();
        return countries[finalKey] || data.find((country) => country.key === finalKey) || null;
    }
    static find(key) {
        const finalKey = toBasicForm(key);
        return data.find((country) => country.key.toLowerCase() === finalKey || country.patterns.some((pattern) => finalKey.indexOf(pattern) >= 0)) || null;
    }
}
//# sourceMappingURL=country.model.js.map