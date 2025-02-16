import { describe, it } from "@std/testing/bdd";
import { assertSpyCall, spy } from "@std/testing/mock";
import { expect } from "@std/expect";

import { parseBooleanValue } from "./parser-utils.ts";

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
