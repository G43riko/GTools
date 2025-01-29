import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { randomIntBetween } from "./random-utils.ts";

describe("Random utils", () => {
    it("Should test randomIntBetween", () => {
        const min = 5;
        const max = 10;

        for (let i = 0; i < 1000; i++) {
            const result = randomIntBetween(min, max);

            expect(result).toBeGreaterThanOrEqual(min);
            expect(result).toBeLessThanOrEqual(max);
            expect(result % 1).toBe(0);
        }
    });
});
