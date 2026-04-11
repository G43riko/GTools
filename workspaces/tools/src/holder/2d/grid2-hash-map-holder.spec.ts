import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { Grid2HashMapHolder } from "./grid2-hash-map-holder.ts";

describe("Grid2HashMapHolder", () => {
    describe("get / set", () => {
        it("returns undefined for a cell that has not been set", () => {
            const holder = new Grid2HashMapHolder<string>();
            expect(holder.get(0, 0)).toBeUndefined();
        });

        it("returns the value that was set", () => {
            const holder = new Grid2HashMapHolder<string>();
            holder.set(1, 2, "hello");
            expect(holder.get(1, 2)).toBe("hello");
        });

        it("distinguishes between different coordinates", () => {
            const holder = new Grid2HashMapHolder<number>();
            holder.set(0, 1, 10);
            holder.set(1, 0, 20);
            expect(holder.get(0, 1)).toBe(10);
            expect(holder.get(1, 0)).toBe(20);
        });

        it("overwrites the previous value at the same coordinates", () => {
            const holder = new Grid2HashMapHolder<number>();
            holder.set(3, 3, 100);
            holder.set(3, 3, 200);
            expect(holder.get(3, 3)).toBe(200);
        });
    });

    describe("getOrCreate", () => {
        it("creates and stores the value on the first call", () => {
            const holder = new Grid2HashMapHolder<number>();
            const result = holder.getOrCreate(5, 5, () => 42);
            expect(result).toBe(42);
            expect(holder.get(5, 5)).toBe(42);
        });

        it("returns the existing value on subsequent calls", () => {
            const holder = new Grid2HashMapHolder<number>();
            holder.set(5, 5, 99);
            let providerCalled = false;
            const result = holder.getOrCreate(5, 5, () => {
                providerCalled = true;
                return 0;
            });
            expect(result).toBe(99);
            expect(providerCalled).toBe(false);
        });
    });

    describe("delete", () => {
        it("removes a value so subsequent get returns undefined", () => {
            const holder = new Grid2HashMapHolder<string>();
            holder.set(2, 2, "value");
            holder.delete(2, 2);
            expect(holder.get(2, 2)).toBeUndefined();
        });

        it("silently ignores deleting a non-existent entry", () => {
            const holder = new Grid2HashMapHolder<string>();
            expect(() => holder.delete(99, 99)).not.toThrow();
        });
    });

    describe("clear", () => {
        it("removes all entries", () => {
            const holder = new Grid2HashMapHolder<number>();
            holder.set(0, 0, 1);
            holder.set(1, 1, 2);
            holder.set(2, 2, 3);
            holder.clear();
            expect(holder.get(0, 0)).toBeUndefined();
            expect(holder.get(1, 1)).toBeUndefined();
            expect(holder.get(2, 2)).toBeUndefined();
        });
    });

    describe("forEach", () => {
        it("iterates over all stored entries", () => {
            const holder = new Grid2HashMapHolder<number>();
            holder.set(1, 2, 10);
            holder.set(3, 4, 20);

            const collected: Array<[number, number, number]> = [];
            holder.forEach((value, x, y) => collected.push([value, x, y]));

            expect(collected).toHaveLength(2);
            expect(collected).toContainEqual([10, 1, 2]);
            expect(collected).toContainEqual([20, 3, 4]);
        });

        it("does nothing on an empty holder", () => {
            const holder = new Grid2HashMapHolder<number>();
            let called = false;
            holder.forEach(() => {
                called = true;
            });
            expect(called).toBe(false);
        });
    });

    describe("length", () => {
        it("returns 0 on an empty holder", () => {
            const holder = new Grid2HashMapHolder<number>();
            expect(holder.length).toBe(0);
        });
    });
});
