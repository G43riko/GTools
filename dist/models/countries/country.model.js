"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
var string_utils_1 = require("../../utils/string-utils");
// tslint:disable-next-line
var data = require("./countries.data.json");
// only for optimization
var countries = {};
data.forEach(function (country) { return countries[country.key] = country; });
/**
 * Class used for parsing countries
 */
var Country = /** @class */ (function () {
    function Country() {
    }
    /**
     * Function try to get country by key and return CountryData or null if cannot parse country
     *
     * @param  key - Country key
     * @returns if found than CountryData otherwise null
     */
    Country.getByKey = function (key) {
        var finalKey = key.toUpperCase();
        return countries[finalKey] || data.find(function (country) { return country.key === finalKey; }) || null;
    };
    /**
     * Function try to parse country by name or key or substring and return CountryData or null if cannot parse country
     *
     * @param key - searched key
     * @returns if found than CountryData otherwise null
     */
    Country.find = function (key) {
        var finalKey = string_utils_1.toBasicForm(key);
        return data.find(function (country) {
            return country.key.toLowerCase() === finalKey || country.patterns.some(function (pattern) {
                return finalKey.indexOf(pattern) >= 0;
            });
        }) || null;
    };
    return Country;
}());
exports.Country = Country;
