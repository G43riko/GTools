import { describe, it } from "@std/testing/bdd";
import { assertSpyCall, spy } from "@std/testing/mock";
import { expect } from "@std/expect";

import { parseBooleanValue, parseSize } from "./parser-utils.ts";

describe("parserUtils", () => {
    describe("parseBooleanValue", () => {
        it('should return true for "true", "yes", "ano", "áno", and "1"', () => {
            expect(parseBooleanValue("true")).toBe(true);
            expect(parseBooleanValue("yes")).toBe(true);
            expect(parseBooleanValue("ano")).toBe(true);
            expect(parseBooleanValue("áno")).toBe(true);
            expect(parseBooleanValue("1")).toBe(true);
        });

        it('should return false for "false", "no", "nie", "", "0", "null", and "undefined"', () => {
            expect(parseBooleanValue("false")).toBe(false);
            expect(parseBooleanValue("no")).toBe(false);
            expect(parseBooleanValue("nie")).toBe(false);
            expect(parseBooleanValue("")).toBe(false);
            expect(parseBooleanValue("0")).toBe(false);
            expect(parseBooleanValue("null")).toBe(false);
            expect(parseBooleanValue(null)).toBe(false);
            expect(parseBooleanValue("undefined")).toBe(false);
            expect(parseBooleanValue(undefined)).toBe(false);
        });

        it("should parse other values using JSON.parse and return true for valid JSON true values", () => {
            expect(parseBooleanValue("true")).toBe(true);
            expect(parseBooleanValue("[true]")).toBe(true); //Example of a valid JSON true value
            expect(parseBooleanValue('{ "value": true }')).toBe(true); //Example of a valid JSON true value
        });

        it("should parse other values using JSON.parse and return false for valid JSON false values", () => {
            expect(parseBooleanValue("false")).toBe(false);
            expect(parseBooleanValue("[false]")).toBe(false); //Example of a valid JSON false value
            expect(parseBooleanValue('{ "value": false }')).toBe(true);
        });

        it("should parse other values using JSON.parse and throw an error for invalid JSON values", () => {
            // Mock console.error to avoid console output during tests
            const fn = spy(() => null);
            console.error = fn;

            expect(() => parseBooleanValue("invalid json")).toThrow();
            assertSpyCall(fn, 0, {
                args: ["Parsing 'invalid json'"],
            });

            expect(() => parseBooleanValue("{ invalid json")).toThrow();
            assertSpyCall(fn, 1, {
                args: ["Parsing '{ invalid json'"],
            });
        });

        it("should parse other values using JSON.parse and return a boolean for valid JSON numbers", () => {
            expect(parseBooleanValue("123")).toBe(true); // JSON.parse("123") is 123 which is truthy in JS
            expect(parseBooleanValue("0")).toBe(false); // JSON.parse("0") is 0 which is falsy in JS
            expect(parseBooleanValue("-1")).toBe(true); // JSON.parse("-1") is -1 which is truthy in JS
        });

        it("should parse other values using JSON.parse and return a boolean for valid JSON strings", () => {
            expect(parseBooleanValue('"test"')).toBe(true); // JSON.parse("\"test\"") is "test" which is truthy in JS
            expect(parseBooleanValue('""')).toBe(false); // JSON.parse("\"\"") is "" which is falsy in JS
        });
    });

    describe("parseSize", () => {
        it("parses bytes with no unit", () => {
            expect(parseSize("123")).toBe(123);
        });

        it('parses bytes with "b"', () => {
            expect(parseSize("123b")).toBe(123);
        });

        it("parses SI units", () => {
            expect(parseSize("1kb")).toBe(1000);
            expect(parseSize("1.5mb")).toBe(1500000);
            expect(parseSize("2gb")).toBe(2000000000);
            expect(parseSize("0.1tb")).toBe(100000000000);
            expect(parseSize("0.0002pb")).toBe(200000000000);
        });

        it("parses binary units (power-of-two)", () => {
            expect(parseSize("1kib")).toBe(1024);
            expect(parseSize("1.5mib")).toBe(1572864);
            expect(parseSize("2gib")).toBe(2147483648);
            expect(parseSize("0.5tib")).toBe(549755813888);
            expect([1125899906842, 1125899906843].includes(parseSize("0.001pib"))).toBeTruthy();
        });

        it("trims and parses mixed casing", () => {
            expect(parseSize(" 1.5 MiB ")).toBe(1572864);
            expect(parseSize("  100 KB")).toBe(100000);
            expect(parseSize("\t2.5  GiB")).toBe(2684354560);
        });

        it("throws on unknown units", () => {
            expect(() => parseSize("10zb")).toThrow('Invalid string: "10zb"');
            expect(() => parseSize("20megabytes")).toThrow('Invalid string: "20megabytes"');
        });

        it("throws on invalid input", () => {
            expect(() => parseSize("hello world")).toThrow('Invalid string: "hello world"');
            expect(() => parseSize("")).toThrow('Invalid string: ""');
            // expect(() => parseSize("12..3mb")).toThrow('Invalid string: "12..3mb"');
        });
    });
    describe("parseSize", () => {
        it("parses bytes with no unit", () => {
            expect(parseSize("100")).toBe(100);
            expect(parseSize("0")).toBe(0);
            expect(parseSize("123b")).toBe(123);
        });

        it("parses SI units (base 10)", () => {
            expect(parseSize("1kb")).toBe(1000);
            expect(parseSize("1mb")).toBe(1_000_000);
            expect(parseSize("1gb")).toBe(1_000_000_000);
            expect(parseSize("1tb")).toBe(1_000_000_000_000);
            expect(parseSize("1pb")).toBe(1_000_000_000_000_000);
        });

        it("parses binary units (base 2)", () => {
            expect(parseSize("1kib")).toBe(1024);
            expect(parseSize("1mib")).toBe(1024 ** 2);
            expect(parseSize("1gib")).toBe(1024 ** 3);
            expect(parseSize("1tib")).toBe(1024 ** 4);
            expect(parseSize("1pib")).toBe(1024 ** 5);
        });

        it("handles floats", () => {
            expect(parseSize("1.5kb")).toBe(1500);
            expect(parseSize("0.5mb")).toBe(500_000);
            expect(parseSize("2.5mib")).toBe(2.5 * 1024 * 1024);
        });

        it("ignores spaces and is case-insensitive", () => {
            expect(parseSize("  10 KB")).toBe(10_000);
            expect(parseSize("2 GiB")).toBe(2 * 1024 ** 3);
            expect(parseSize("0.1 mIb")).toBe(Math.round(0.1 * 1024 * 1024));
        });

        it("throws on invalid input", () => {
            expect(() => parseSize("abc")).toThrow("Invalid string");
            expect(() => parseSize("123zz")).toThrow("Invalid string");
            expect(() => parseSize("")).toThrow("Invalid string");
        });
        describe("parseSize - valid inputs", () => {
            it("parses plain bytes", () => {
                expect(parseSize("123")).toBe(123);
                expect(parseSize("123b")).toBe(123);
            });

            it("parses SI units (base 10)", () => {
                expect(parseSize("1kb")).toBe(1000);
                expect(parseSize("1.5mb")).toBe(1500000);
                expect(parseSize("2gb")).toBe(2000000000);
                expect(parseSize("0.1tb")).toBe(100000000000);
                expect(parseSize("0.0002pb")).toBe(200000000000);
            });

            it("parses binary units (base 2)", () => {
                expect(parseSize("1kib")).toBe(1024);
                expect(parseSize("1.5mib")).toBe(1572864);
                expect(parseSize("2gib")).toBe(2147483648);
                expect(parseSize("0.5tib")).toBe(549755813888);
                expect([1125899906842, 1125899906843].includes(parseSize("0.001pib"))).toBeTruthy();
            });
        });

        describe("parseSize - whitespace and casing", () => {
            it("handles extra spaces and tabs", () => {
                expect(parseSize(" 1 KB ")).toBe(1000);
                expect(parseSize("\t2.5  MiB")).toBe(2621440);
                expect(parseSize("  100 mib ")).toBe(104857600);
                expect(parseSize("5   GiB")).toBe(5368709120);
                expect(parseSize("1.25   PB")).toBe(1250000000000000);
            });

            it("is case-insensitive", () => {
                expect(parseSize("1KB")).toBe(1000);
                expect(parseSize("2MiB")).toBe(2097152);
                expect(parseSize("3GiB")).toBe(3221225472);
            });
        });

        describe("parseSize - missing units (defaults to bytes)", () => {
            it("defaults to bytes when no unit is provided", () => {
                expect(parseSize("0")).toBe(0);
                expect(parseSize("42")).toBe(42);
                expect(parseSize("100.5")).toBe(101); // rounded
            });
        });

        describe("parseSize - invalid inputs", () => {
            it("throws on gibberish", () => {
                expect(() => parseSize("ten megabytes")).toThrow('Invalid string: "ten megabytes"');
                expect(() => parseSize("")).toThrow('Invalid string: ""');
                // expect(() => parseSize("12..3mb")).toThrow('Invalid string: "12..3mb"');
                expect(() => parseSize("3.5 xyz")).toThrow('Invalid string: "3.5 xyz"');
                expect(() => parseSize("1zb")).toThrow('Invalid string: "1zb"');
                expect(() => parseSize("1 bps")).toThrow('Invalid string: "1 bps"');
                expect(() => parseSize("3MBs")).toThrow('Invalid string: "3MBs"');
                expect(() => parseSize("1b1kb")).toThrow('Invalid string: "1b1kb"');
                expect(() => parseSize("3kb extra")).toThrow('Invalid string: "3kb extra"');
            });
        });
    });
});
