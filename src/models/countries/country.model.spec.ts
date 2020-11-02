import { expect } from "chai";
import "mocha";
import { CountryData } from "./country.interface";
import { Country } from "./country.model";

describe("Country", () => {
    describe("GetByKey", () => {
        it("It should find country by key", () => {
            const result = Country.getByKey("SK") as CountryData;
            expect(result).to.be.an("object");
            expect(result).to.not.be.null;
            expect(result.name).to.be.equal("Slovakia");
            expect(result.capitalCity).to.be.equal("Bratislava");
            expect(result.diallingCode).to.be.equal("421");
        });
    });
    describe("Find", () => {
        it("It should find country by pattern", () => {
            [
                "Slovenská republika",
                "Slovakia",
                "Slovak republic",
                "sk",
                "svk",
                "Slovensko",
            ].forEach((countryName) => {
                expect(Country.find(countryName), `'${countryName}' is valid country name`).to.not.be.null;
            });
        });
    });
});
