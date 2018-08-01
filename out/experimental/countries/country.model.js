"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = require("../../utils/StringUtils");
// tslint:disable-next-line
var data = require("./countries.data.json");
// only for optimization
var countries = {};
data.forEach(function (country) { return countries[country.key] = country; });
var Country = /** @class */ (function () {
    function Country() {
    }
    Country.getByKey = function (key) {
        var finalKey = key.toUpperCase();
        return countries[finalKey] || data.find(function (country) { return country.key === finalKey; }) || null;
    };
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
