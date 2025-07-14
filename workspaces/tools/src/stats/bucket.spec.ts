import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { Bucket, BucketOptions } from "./bucket.ts";


describe("Bucket", () => {
  const options: BucketOptions = {
    min: 0,
    max: 100,
    outliers: "ERROR",
  };

  it("adds values within range to correct buckets", () => {
    const bucket = new Bucket(10, options);
    bucket.add(5);   // bucket 0
    bucket.add(15);  // bucket 1
    bucket.add(95);  // bucket 9

    const result = bucket.getMap();
    expect(result["0"]).toBe(1);
    expect(result["1"]).toBe(1);
    expect(result["9"]).toBe(1);
  });

  it("throws error on outlier if outliers=ERROR", () => {
    const bucket = new Bucket(5, { min: 10, max: 20, outliers: "ERROR" });

    expect(() => bucket.add(5)).toThrow(/lower than min/);
    expect(() => bucket.add(25)).toThrow(/greater than max/);
  });

  it("ignores outliers if outliers=IGNORE", () => {
    const bucket = new Bucket(5, { min: 10, max: 20, outliers: "IGNORE" });

    expect(() => bucket.add(5)).not.toThrow();
    expect(() => bucket.add(25)).not.toThrow();

    // Still empty
    expect(Object.values(bucket.getMap()).every((val) => val === 0)).toBe(true);
  });

  it("throws for values that fall outside bucket range due to precision", () => {
    const bucket = new Bucket(3, { min: 0, max: 3 });
    expect(() => bucket.add(3)).toThrow(/Invalid bucket index/);
  });

  it("getMap returns a proper bucket-indexed object", () => {
    const bucket = new Bucket(4, { min: 0, max: 40 });
    bucket.add(10);
    bucket.add(10);
    bucket.add(35);

    const result = bucket.getMap();

    expect(result).toEqual({
      "0": 0,
      "1": 2, // 10 falls here
      "2": 0,
      "3": 1, // 35 falls here
    });
  });

  it("createKeyMapper formats bucket labels correctly", () => {
    const bucket = new Bucket(2, { min: 0, max: 1 });
    const keyMapper = Bucket.createKeyMapper(bucket, (v: number) => v.toFixed(1));

    expect(keyMapper(0)).toBe("0.0-0.5");
    expect(keyMapper(1)).toBe("0.5-1.0");
  });

  it("works with default options", () => {
    const bucket = new Bucket(); // uses defaults: buckets=10, min=0, max=1
    bucket.add(0.05);
    const result = bucket.getMap();
    expect(result["0"]).toBe(1);
  });
});
