import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { getValueFromProvider, isProviderFunction, type ValueProvider } from "./value-provider.ts";

describe("isProviderFunction", () => {
    it("should return true when the provider is a function", () => {
        const provider = () => 42;
        expect(isProviderFunction(provider)).toBe(true);
    });

    it("should return false when the provider is not a function", () => {
        const provider = 42;
        expect(isProviderFunction(provider)).toBe(false);
    });
});

describe("getValueFromProvider", () => {
    it("should return the value when the provider is not a function", () => {
        const provider: ValueProvider<number> = 42;
        expect(getValueFromProvider(provider)).toBe(42);
    });

    it("should call the function and return its value when the provider is a function", () => {
        const provider: ValueProvider<number> = () => 42;
        expect(getValueFromProvider(provider)).toBe(42);
    });

    it("should work with string values", () => {
        const provider: ValueProvider<string> = "hello";
        expect(getValueFromProvider(provider)).toBe("hello");
    });

    it("should work with string provider functions", () => {
        const provider: ValueProvider<string> = () => "hello";
        expect(getValueFromProvider(provider)).toBe("hello");
    });
});
