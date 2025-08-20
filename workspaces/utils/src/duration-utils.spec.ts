import { DurationUnit } from "@g43/enums";
import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { convertDuration } from "./duration-utils.ts";

describe("duration-utils", () => {
  it("returns 0 for undefined value", () => {
    expect(convertDuration(undefined, DurationUnit.MS, DurationUnit.S)).toBe(0);
  });

  describe("from MS", () => {
    it("converts MS to MS/S/M/H", () => {
      expect(convertDuration(1500, DurationUnit.MS, DurationUnit.MS)).toBe(1500);
      expect(convertDuration(1500, DurationUnit.MS, DurationUnit.S)).toBe(1.5);
      expect(convertDuration(120000, DurationUnit.MS, DurationUnit.M)).toBe(2);
      expect(convertDuration(7200000, DurationUnit.MS, DurationUnit.H)).toBe(2);
    });
  });

  describe("from S", () => {
    it("converts S to MS/S/M/H", () => {
      expect(convertDuration(2, DurationUnit.S, DurationUnit.MS)).toBe(2000);
      expect(convertDuration(2, DurationUnit.S, DurationUnit.S)).toBe(2);
      expect(convertDuration(120, DurationUnit.S, DurationUnit.M)).toBe(2);
      expect(convertDuration(7200, DurationUnit.S, DurationUnit.H)).toBe(2);
    });
  });

  describe("from M", () => {
    it("converts M to MS/S/M/H", () => {
      expect(convertDuration(2, DurationUnit.M, DurationUnit.MS)).toBe(120000);
      expect(convertDuration(2, DurationUnit.M, DurationUnit.S)).toBe(120);
      expect(convertDuration(2, DurationUnit.M, DurationUnit.M)).toBe(2);
      expect(convertDuration(120, DurationUnit.M, DurationUnit.H)).toBe(2);
    });
  });

  it("throws on unsupported from-unit", () => {
    expect(() => convertDuration(1, DurationUnit.H as DurationUnit, DurationUnit.M)).toThrow();
  });
});
