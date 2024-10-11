import { expect } from "chai";
import "mocha";
import { formatTime, getEndOfTheDay, getStartOfTheDay } from "./time-utils";

describe("Time utils", () => {
    const date = new Date("1993.11.12 11:12:13:999");
    describe("Check formatTime", () => {
        it("basic formatting", () => {
            expect(formatTime(date, "Gabo")).to.be.equal("Gabo");
            expect(formatTime(date, "YYYY-YYY-YY")).to.be.equal("1993-993-93");
            expect(formatTime(date, "YYYY-YYY-YY")).to.be.equal("1993-993-93");
            expect(formatTime(date, "HH-mm-SS")).to.be.equal("11-12-13");
            expect(formatTime(date, "DD-MM-YYYY")).to.be.equal("12-11-1993");
        });
    });
    describe("Check startOfDay", () => {
        it("basic checks", () => {
            expect(getStartOfTheDay(date).getDate()).to.be.equal(new Date("1993.11.12 00:00:00").getDate());
        });
    });
    describe("Check endOfDay", () => {
        it("basic checks", () => {
            expect(getEndOfTheDay(date).getDate()).to.be.equal(new Date("1993.11.12 23:59:59:999").getDate());
        });
    });
});
