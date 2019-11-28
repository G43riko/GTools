"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = require("../../utils/StringUtils");
// tslint:disable-next-line
var data = require("./countries.data.json");
// only for optimization
var countries = {};
data.forEach(function (country) { return countries[country.key] = country; });
/**
 * @class Country
 */
var Country = /** @class */ (function () {
    function Country() {
    }
    /**
     * Function try to get country by key and return CountryData or null if cannot parse country
     *
     * @param {string} key
     * @public
     * @returns {CountryData|null}
     */
    Country.getByKey = function (key) {
        var finalKey = key.toUpperCase();
        return countries[finalKey] || data.find(function (country) { return country.key === finalKey; }) || null;
    };
    /**
     * Function try to parse country by name or key or substring and return CountryData or null if cannot parse country
     *
     * @param {string} query
     * @public
     * @returns {CountryData|null}
     */
    Country.find = function (query) {
        var finalQuery = StringUtils_1.StringUtils.toBasicForm(query);
        return data.find(function (country) {
            return country.key.toLowerCase() === finalQuery || country.patterns.some(function (pattern) {
                return finalQuery.indexOf(pattern) >= 0;
            });
        }) || null;
    };
    return Country;
}());
exports.Country = Country;
