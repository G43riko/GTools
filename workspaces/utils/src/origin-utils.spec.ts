import { assertSpyCalls, spy, type SpyLike } from "@std/testing/mock";

import { describe, it } from "@std/testing/bdd";
import { Origin } from "@g43/enums";
import { expect } from "@std/expect";
import { SimpleVector } from "@g43/math";
import { getOriginMultiplierX, getOriginMultiplierY, originToAnchor } from "./origin-utils.ts"; // Replace with the correct path

describe("originToAnchor", () => {
    it("should return the correct SimpleVector for predefined origins", () => {
        expect(originToAnchor(Origin.TL)).toEqual(SimpleVector.ZERO_2);
        expect(originToAnchor(Origin.CENTER)).toEqual(SimpleVector.HALF_2);
        expect(originToAnchor(Origin.BR)).toEqual(SimpleVector.ONE_2);
        expect(originToAnchor(Origin.BL)).toEqual(SimpleVector.UP_2);
        expect(originToAnchor(Origin.TR)).toEqual(SimpleVector.RIGHT_2);
    });

    it("should return a SimpleVector created with the correct multipliers for other origins", () => {
        expect(originToAnchor(Origin.L)).toEqual(SimpleVector.create(0, 0.5));
        expect(originToAnchor(Origin.R)).toEqual(SimpleVector.create(1, 0.5));
        expect(originToAnchor(Origin.T)).toEqual(SimpleVector.create(0.5, 0));
        expect(originToAnchor(Origin.B)).toEqual(SimpleVector.create(0.5, 1));
    });

    it("should handle custom origins (if any) correctly", () => {
        // If you have custom origins in your enum, add tests for them here.
        // Example (assuming you add Origin.CUSTOM to your enum):
        // expect(originToAnchor(Origin.CUSTOM)).toEqual(SimpleVector.create(0.25, 0.75)); // Example values
    });
});

describe("getOriginMultiplierX", () => {
    it("should return the correct multiplier for predefined origins", () => {
        expect(getOriginMultiplierX(Origin.TL)).toBe(0);
        expect(getOriginMultiplierX(Origin.BL)).toBe(0);
        expect(getOriginMultiplierX(Origin.L)).toBe(0);
        expect(getOriginMultiplierX(Origin.CENTER)).toBe(0.5);
        expect(getOriginMultiplierX(Origin.B)).toBe(0.5);
        expect(getOriginMultiplierX(Origin.T)).toBe(0.5);
        expect(getOriginMultiplierX(Origin.TR)).toBe(1);
        expect(getOriginMultiplierX(Origin.BR)).toBe(1);
        expect(getOriginMultiplierX(Origin.R)).toBe(1);
    });

    it("should throw an error for unsupported origins", () => {
        // Mock console.error to avoid console output during tests
        const fn = spy(() => null);
        console.error = fn;
        expect(() => getOriginMultiplierX("INVALID_ORIGIN" as any)).toThrow("Unsupported origin 'INVALID_ORIGIN'");
        assertSpyCalls(fn as SpyLike, 0);
    });
});

describe("getOriginMultiplierY", () => {
    it("should return the correct multiplier for predefined origins", () => {
        expect(getOriginMultiplierY(Origin.TL)).toBe(0);
        expect(getOriginMultiplierY(Origin.TR)).toBe(0);
        expect(getOriginMultiplierY(Origin.T)).toBe(0);
        expect(getOriginMultiplierY(Origin.CENTER)).toBe(0.5);
        expect(getOriginMultiplierY(Origin.R)).toBe(0.5);
        expect(getOriginMultiplierY(Origin.L)).toBe(0.5);
        expect(getOriginMultiplierY(Origin.BL)).toBe(1);
        expect(getOriginMultiplierY(Origin.BR)).toBe(1);
        expect(getOriginMultiplierY(Origin.B)).toBe(1);
    });

    it("should throw an error for unsupported origins", () => {
        // Mock console.error to avoid console output during tests
        const fn = spy(() => null);
        console.error = fn;
        expect(() => getOriginMultiplierY("INVALID_ORIGIN" as any)).toThrow("Unsupported origin 'INVALID_ORIGIN'");
        assertSpyCalls(fn, 0);
    });
});
