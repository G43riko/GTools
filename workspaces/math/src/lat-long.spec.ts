import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { LatLong } from "./lat-long.ts";

describe("LatLong", () => {
    describe("constructor", () => {
        it("defaults to 0, 0", () => {
            const ll = new LatLong();
            assertEquals(ll.lat, 0);
            assertEquals(ll.long, 0);
        });

        it("accepts lat and long values", () => {
            const ll = new LatLong(48.8566, 2.3522);
            assertEquals(ll.lat, 48.8566);
            assertEquals(ll.long, 2.3522);
        });
    });

    describe("set", () => {
        it("updates lat and long from object", () => {
            const ll = new LatLong();
            ll.set({ lat: 51.5074, long: -0.1278 });
            assertEquals(ll.lat, 51.5074);
            assertEquals(ll.long, -0.1278);
        });
    });

    describe("setData", () => {
        it("updates lat and long individually", () => {
            const ll = new LatLong();
            ll.setData(40.7128, -74.006);
            assertEquals(ll.lat, 40.7128);
            assertEquals(ll.long, -74.006);
        });
    });

    describe("equals", () => {
        it("returns true for equal coordinates", () => {
            assertEquals(LatLong.equals({ lat: 1, long: 2 }, { lat: 1, long: 2 }), true);
        });

        it("returns true for same object reference", () => {
            const a = { lat: 1, long: 2 };
            assertEquals(LatLong.equals(a, a), true);
        });

        it("returns false when lat differs", () => {
            assertEquals(LatLong.equals({ lat: 1, long: 2 }, { lat: 2, long: 2 }), false);
        });

        it("returns false when long differs", () => {
            assertEquals(LatLong.equals({ lat: 1, long: 2 }, { lat: 1, long: 3 }), false);
        });
    });

    describe("isLatLong", () => {
        it("returns true for a valid lat/long object", () => {
            assertEquals(LatLong.isLatLong({ lat: 0, long: 0 }), true);
            assertEquals(LatLong.isLatLong({ lat: -90, long: 180 }), true);
        });

        it("returns false for null or undefined", () => {
            assertEquals(LatLong.isLatLong(null), false);
            assertEquals(LatLong.isLatLong(undefined), false);
        });

        it("returns false when lat or long is not a number", () => {
            assertEquals(LatLong.isLatLong({ lat: NaN, long: 0 }), false);
            assertEquals(LatLong.isLatLong({ lat: 0, long: NaN }), false);
        });
    });

    describe("createSimple", () => {
        it("returns a plain SimpleLatLong object", () => {
            const result = LatLong.createSimple(10, 20);
            assertEquals(result.lat, 10);
            assertEquals(result.long, 20);
        });
    });

    describe("createReadonlySimple", () => {
        it("returns a plain ReadonlySimpleLatLong object", () => {
            const result = LatLong.createReadonlySimple(10, 20);
            assertEquals(result.lat, 10);
            assertEquals(result.long, 20);
        });
    });

    describe("toString", () => {
        it("converts a valid lat/long to string", () => {
            const result = LatLong.toString({ lat: 48, long: 2 });
            assertEquals(result.includes("48"), true);
            assertEquals(result.includes("2"), true);
        });

        it("formats with fixed decimal places when fixedSize is provided", () => {
            const result = LatLong.toString({ lat: 48.8566, long: 2.3522 }, 2);
            assertEquals(result, "[48.86, 2.35]");
        });

        it("returns stringified value for non-lat-long input", () => {
            assertEquals(LatLong.toString(undefined), "undefined");
            assertEquals(LatLong.toString("hello"), "hello");
        });
    });
});
