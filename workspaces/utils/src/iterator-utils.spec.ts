import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { IteratorUtils } from "./iterator-utils.ts";

describe("IteratorUtils", () => {
    describe("IterateAround", () => {
        it("Should test iterating around distance 0", () => {
            let count = 0;
            const result = IteratorUtils.iterateAround(0, 0, 0, () => count++);
            expect(result).toBeTruthy();
            expect(count).toBe(1);
        });

        it("Should test iterating around distance 1", () => {
            let count = 0;
            const result = IteratorUtils.iterateAround(0, 0, 1, () => count++);
            expect(result).toBeTruthy();
            expect(count).toBe(9);
        });

        it("Should test iterating around distance 2", () => {
            let count = 0;
            const result = IteratorUtils.iterateAround(0, 0, 2, () => count++);
            expect(result).toBeTruthy();
            expect(count).toBe(25);
        });

        it("Should test iterating around distance 3", () => {
            let count = 0;
            const result = IteratorUtils.iterateAround(0, 0, 3, () => count++);
            expect(result).toBeTruthy();
            expect(count).toBe(49);
        });

        it("Should test unique iteration", () => {
            let count = 0;

            const map: { [key in string]: true } = {};
            IteratorUtils.iterateAround(0, 0, 4, (x, y) => {
                count++;

                const key = `${x}-${y}`;
                expect(map[key]).toBeUndefined();
                map[key] = true;
            });
            expect(count).toBe(81);
        });
    });
});
