import { expect } from "chai";
import "mocha";
import { StringCheckers } from "./StringCheckers";

describe("StringCheckers", () => {
    const upperSnakeCase = [
        "HELLO_WORLD",
        "HELLO_MY_NAME_IS_CHOSE",
    ];
    const lowerSnakeCase = [
        "hello_world",
        "hello_my_name_is_chose",
    ];
    const upperCamelCase = [
        "HelloWorld",
        "HelloMyNameIsChose",
    ];
    const lowerCamelCase = [
        "helloWorld",
        "helloMyNameIsChose",
    ];
    const nothing        = [
        "",
        "123",
        "     ",
        "\t",
        "********",
        "______",
        "Hello how are you",
    ];
    describe("IsCamelCase", () => {
        it("It should return true if string is camel case", () => {
            [
                ...lowerCamelCase,
                ...upperCamelCase,
            ].forEach((text) => {
                expect(StringCheckers.isCamelCase(text)).to.be.true;
            });
            [
                ...lowerSnakeCase,
                ...upperSnakeCase,
                "HELLO_my_name_is_ChuaN",
            ].forEach((text) => {
                expect(StringCheckers.isCamelCase(text)).to.be.false;
            });
        });
    });
    describe("IsUpperCamelCase", () => {
        it("It should return true if string is upper camel case", () => {
            upperCamelCase.forEach((text) => {
                expect(StringCheckers.isCamelCase(text)).to.be.true;
            });
            [
                ...lowerCamelCase,
                ...lowerSnakeCase,
                ...upperSnakeCase,
                "HELLO_my_name_is_ChuaN",
            ].forEach((text) => {
                expect(StringCheckers.isUpperCamelCase(text)).to.be.false;
            });
        });
    });
    describe("IsLowerCamelCase", () => {
        it("It should return true if string is lower camel case", () => {
            lowerCamelCase.forEach((text) => {
                expect(StringCheckers.isCamelCase(text)).to.be.true;
            });
            [
                ...upperCamelCase,
                ...lowerSnakeCase,
                ...upperSnakeCase,
                "HELLO_my_name_is_ChuaN",
            ].forEach((text) => {
                expect(StringCheckers.isLowerCamelCase(text)).to.be.false;
            });
        });
    });
    describe("IsSnakeCase", () => {
        it("It should return true if string is snake case", () => {
            [
                ...lowerSnakeCase,
                ...upperSnakeCase,
                "HELLO_my_name_is_ChuaN",
            ].forEach((text) => {
                expect(StringCheckers.isSnakeCase(text)).to.be.true;
            });
            [
                ...lowerCamelCase,
                ...upperCamelCase,
            ].forEach((text) => {
                expect(StringCheckers.isSnakeCase(text)).to.be.false;
            });
        });
    });
    describe("IsUpperSnakeCase", () => {
        it("It should return true if string is upper snake case", () => {
            upperSnakeCase.forEach((text) => {
                expect(StringCheckers.isUpperSnakeCase(text)).to.be.true;
            });
            [
                ...lowerSnakeCase,
                ...lowerCamelCase,
                ...upperCamelCase,
            ].forEach((text) => {
                expect(StringCheckers.isUpperSnakeCase(text)).to.be.false;
            });
        });
    });
    describe("IsLowerSnakeCase", () => {
        it("It should return true if string is lower snake case", () => {
            lowerSnakeCase.forEach((text) => {
                expect(StringCheckers.isLowerSnakeCase(text)).to.be.true;
            });
            [
                ...upperSnakeCase,
                ...lowerCamelCase,
                ...upperCamelCase,
            ].forEach((text) => {
                expect(StringCheckers.isLowerSnakeCase(text)).to.be.false;
            });
        });
    });
    describe("IsHHmm", () => {
        it("It should return true if string time in HHmm format", () => {
            expect(StringCheckers.isHHmm("12:00")).to.be.true;
            expect(StringCheckers.isHHmm("01:09")).to.be.true;
            expect(StringCheckers.isHHmm("23:59")).to.be.true;
            expect(StringCheckers.isHHmm("00:59")).to.be.true;
            expect(StringCheckers.isHHmm("23:01")).to.be.true;

            expect(StringCheckers.isHHmm("9:09")).to.be.false;
            expect(StringCheckers.isHHmm("1:59")).to.be.false;
            expect(StringCheckers.isHHmm("9:9")).to.be.false;
            expect(StringCheckers.isHHmm("24:00")).to.be.false;
            expect(StringCheckers.isHHmm("12:61")).to.be.false;
            expect(StringCheckers.isHHmm("30:61")).to.be.false;
        });
    });
    describe("IsHHmmss", () => {
        it("It should return true if string time in HHmmss format", () => {
            expect(StringCheckers.isHHmmss("12:00:00")).to.be.true;
            expect(StringCheckers.isHHmmss("01:09:09")).to.be.true;
            expect(StringCheckers.isHHmmss("23:59:59")).to.be.true;
            expect(StringCheckers.isHHmmss("00:59:59")).to.be.true;
            expect(StringCheckers.isHHmmss("23:01:01")).to.be.true;

            expect(StringCheckers.isHHmmss("9:09:09")).to.be.false;
            expect(StringCheckers.isHHmmss("1:59:59")).to.be.false;
            expect(StringCheckers.isHHmmss("9:9:9")).to.be.false;
            expect(StringCheckers.isHHmmss("24:00:00")).to.be.false;
            expect(StringCheckers.isHHmmss("12:61:61")).to.be.false;
            expect(StringCheckers.isHHmmss("30:61:61")).to.be.false;
        });
    });
    describe("SsTimeFormat", () => {
        it("It should return true if string time in required format", () => {
            StringCheckers.isTimeFormat("12:53", "HH:mm");
            expect(StringCheckers.isTimeFormat("12:00", "HH:mm")).to.be.true;
            expect(StringCheckers.isTimeFormat("1:59", "H:mm")).to.be.true;
            expect(StringCheckers.isTimeFormat("01:09", "HH:mm")).to.be.true;
            expect(StringCheckers.isTimeFormat("23:59", "HH:mm")).to.be.true;
            expect(StringCheckers.isTimeFormat("00:59", "HH:mm")).to.be.true;
            expect(StringCheckers.isTimeFormat("9:9", "H:m")).to.be.true;
            expect(StringCheckers.isTimeFormat("9:09", "H:mm")).to.be.true;
            expect(StringCheckers.isTimeFormat("23:01", "HH:mm")).to.be.true;

            expect(StringCheckers.isTimeFormat("9:09", "H:mm")).to.be.true;
            expect(StringCheckers.isTimeFormat("24:00", "HH:mm")).to.be.false;
            expect(StringCheckers.isTimeFormat("12:61", "HH:mm")).to.be.false;
            expect(StringCheckers.isTimeFormat("30:61", "HH:mm")).to.be.false;

            expect(StringCheckers.isTimeFormat("12:00:00", "HH:mm:ss")).to.be.true;
            expect(StringCheckers.isTimeFormat("01:09:09", "HH:mm:ss")).to.be.true;
            expect(StringCheckers.isTimeFormat("23:59:59", "HH:mm:ss")).to.be.true;
            expect(StringCheckers.isTimeFormat("00:59:59", "HH:mm:ss")).to.be.true;
            expect(StringCheckers.isTimeFormat("9:9:9", "H:m:s")).to.be.true;
            expect(StringCheckers.isTimeFormat("23:01:01", "HH:mm:ss")).to.be.true;

            expect(StringCheckers.isTimeFormat("9:09:09", "HH:mm:ss")).to.be.false;
            expect(StringCheckers.isTimeFormat("1:59:59", "HH:mm:ss")).to.be.false;
            expect(StringCheckers.isTimeFormat("9:9:9", "HH:mm:ss")).to.be.false;
            expect(StringCheckers.isTimeFormat("24:00:00", "HH:mm:ss")).to.be.false;
            expect(StringCheckers.isTimeFormat("12:61:61", "HH:mm:ss")).to.be.false;
            expect(StringCheckers.isTimeFormat("30:61:61", "HH:mm:ss")).to.be.false;
        });
    });
});
