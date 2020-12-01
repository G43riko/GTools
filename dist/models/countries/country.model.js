"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
var utils_1 = require("gtools/utils");
var data = require("./countries.data.json");
var countries = {};
data.forEach(function (country) { return countries[country.key] = country; });
var Country = (function () {
    function Country() {
    }
    Country.getByKey = function (key) {
        var finalKey = key.toUpperCase();
        return countries[finalKey] || data.find(function (country) { return country.key === finalKey; }) || null;
    };
    Country.find = function (key) {
        var finalKey = utils_1.toBasicForm(key);
        return data.find(function (country) { return country.key.toLowerCase() === finalKey || country.patterns.some(function (pattern) { return finalKey.indexOf(pattern) >= 0; }); }) || null;
    };
    return Country;
}());
exports.Country = Country;
//# sourceMappingURL=country.model.js.map