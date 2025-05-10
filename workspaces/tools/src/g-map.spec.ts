import { expect } from "@std/expect";
import { beforeEach, describe, it } from "@std/testing/bdd";
import { assertSpyCallArgs, assertSpyCalls, spy } from "@std/testing/mock";
import { GMap } from "./g-map.ts";

// Mock the getValueFromProvider function
function mockGetValueFromProvider<T>(value: T): T {
    return value;
}

// Define the GMap test suite
describe("GMap", () => {
    let gmap: GMap<string, number>;
    describe("setAll", () => {
        let instance: GMap<string, number>;
        let setSpy: any;
        beforeEach(() => {
            instance = new GMap();
            setSpy = spy(instance, "set");
        });

        it("should set values from a Map", () => {
            const input = new Map<string, number>([
                ["a", 1],
                ["b", 2],
            ]);

            instance.setAll(input);
            assertSpyCallArgs(setSpy, 0, ["a", 1]);
            assertSpyCallArgs(setSpy, 1, ["b", 2]);
            assertSpyCalls(setSpy, 2);
        });

        it("should set values from a Record", () => {
            const input = {
                x: 10,
                y: 20,
            };

            instance.setAll(input);

            assertSpyCallArgs(setSpy, 0, ["x", 10]);
            assertSpyCallArgs(setSpy, 1, ["y", 20]);
            assertSpyCalls(setSpy, 2);
        });

        it("should handle empty Map", () => {
            const input = new Map();
            instance.setAll(input);

            assertSpyCalls(setSpy, 0);
        });

        it("should handle empty Record", () => {
            const input = {};
            instance.setAll(input);

            assertSpyCalls(setSpy, 0);
        });

        it("should return `this` for chaining", () => {
            const result = instance.setAll({ key: 123 });
            expect(result).toBe(instance);
        });
    });
    beforeEach(() => {
        gmap = new GMap<string, number>();
    });

    it("should return undefined for missing key with get() and no default", () => {
        expect(gmap.get("missing")).toBeUndefined();
    });

    it("should return default value for missing key with get()", () => {
        expect(gmap.get("missing", 42)).toEqual(42);
    });

    it("should throw an error for missing key with require()", () => {
        expect(() => gmap.require("missing")).toThrow(
            "Required key missing not found in map",
        );
    });

    it("should execute callback for each value in forEachValue()", () => {
        gmap.set("a", 1);
        gmap.set("b", 2);

        const values: number[] = [];
        gmap.forEachValue((value) => values.push(value));

        expect(values).toEqual([1, 2]);
    });

    it("should execute callback for each key in forEachKey()", () => {
        gmap.set("a", 1);
        gmap.set("b", 2);

        const keys: string[] = [];
        gmap.forEachKey((key) => keys.push(key));

        expect(keys).toEqual(["a", "b"]);
    });

    it("should add a missing key with addIfMissing()", () => {
        gmap.addIfMissing("newKey", () => mockGetValueFromProvider(100));
        expect(gmap.get("newKey")).toEqual(100);
    });

    it("should not overwrite existing key with addIfMissing()", () => {
        gmap.set("existingKey", 50);
        gmap.addIfMissing("existingKey", () => mockGetValueFromProvider(100));
        expect(gmap.get("existingKey")).toEqual(50);
    });

    it("should return existing value with getOrCreate()", () => {
        gmap.set("key", 200);
        expect(gmap.getOrCreate("key", () => mockGetValueFromProvider(300))).toEqual(
            200,
        );
    });

    it("should create new value with getOrCreate()", () => {
        expect(gmap.getOrCreate("newKey", () => mockGetValueFromProvider(300))).toEqual(
            300,
        );
    });

    it("should update existing value with upsert()", () => {
        gmap.set("key", 10);
        const result = gmap.upsert(
            "key",
            (existing) => existing + 10,
            () => mockGetValueFromProvider(100),
        );
        expect(result).toEqual(20);
        expect(gmap.get("key")).toEqual(20);
    });

    it("should create new value with upsert()", () => {
        const result = gmap.upsert(
            "newKey",
            (existing) => existing + 10,
            () => mockGetValueFromProvider(100),
        );
        expect(result).toEqual(100);
        expect(gmap.get("newKey")).toEqual(100);
    });
});
