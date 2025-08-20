import { DistanceUnit } from "@g43/enums";
import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { convertDistance, toMeters } from "./distance-utils.ts";

// Helper for approximate comparisons
const close = (received: number, expected: number, precision = 6) => {
  expect(received).toBeCloseTo(expected, precision);
};

describe("distance-utils", () => {
  describe("toMeters", () => {
    it("converts SI units to meters", () => {
      close(toMeters(1000, DistanceUnit.MM), 1);
      close(toMeters(200, DistanceUnit.CM), 2);
      close(toMeters(3, DistanceUnit.M), 3);
      close(toMeters(2, DistanceUnit.KM), 2000);
    });

    it("converts imperial and nautical units to meters", () => {
      close(toMeters(1, DistanceUnit.IN), 0.0254);
      close(toMeters(1, DistanceUnit.FT), 0.3048);
      close(toMeters(1, DistanceUnit.YD), 0.9144);
      close(toMeters(1, DistanceUnit.MI), 1609.344);
      close(toMeters(1, DistanceUnit.FL), 201.168);
      close(toMeters(1, DistanceUnit.NM), 1852);
    });

    it("converts astronomical units to meters", () => {
      close(toMeters(1, DistanceUnit.LY), 9.4607e15, 3);
      close(toMeters(1, DistanceUnit.AU), 1.495978707e11, 3);
      close(toMeters(1, DistanceUnit.PC), 3.085677581e16, 3);
    });
  });

  describe("convertDistance", () => {
    it("returns 0 for undefined value", () => {
      expect(convertDistance(undefined, DistanceUnit.M, DistanceUnit.M)).toBe(0);
    });

    it("converts to meters and kilometers via generic path", () => {
      // ~ 1 meter
      close(convertDistance(3.28084, DistanceUnit.FT, DistanceUnit.M), 1, 4);
      // 1234 m -> 1.234 km
      close(convertDistance(1234, DistanceUnit.M, DistanceUnit.KM), 1.234, 6);
    });

    it("converts KM to MI using the dedicated path", () => {
      close(convertDistance(1, DistanceUnit.KM, DistanceUnit.MI), 0.621371192, 9);
    });

    it("converts MI to KM via generic path", () => {
      close(convertDistance(1, DistanceUnit.MI, DistanceUnit.KM), 1.609344, 6);
    });

    it("throws on unsupported conversions", () => {
      expect(() => convertDistance(1, DistanceUnit.KM, DistanceUnit.FT)).toThrow();
    });
  });
});
