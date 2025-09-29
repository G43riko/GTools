import { expect } from "@std/expect";
import { beforeEach, describe, it } from "@std/testing/bdd";
import { Histogram } from "./histogram.ts";

function buildYears(): Histogram<number> {
    const h = new Histogram<number>();
    // counts: 1992 -> 3, 1990 -> 2, 1991 -> 1
    h.add(1992 as any);
    h.add(1992 as any);
    h.add(1992 as any);
    h.add(1990 as any);
    h.add(1990 as any);
    h.add(1991 as any);
    return h;
}

describe("Histogram.printHist", () => {
    let hist: Histogram<number>;

    beforeEach(() => {
        hist = buildYears();
    });

    it("returns object when flat=false with bars scaled to max and counts appended", () => {
        const out = hist.printHist(hist as any, 10, {
            fillEmpty: false,
            appendValue: true,
            flat: false,
            minOccurences: 1,
        }) as Record<string, string>;
        // Order is by count desc internally; validate values by keys
        expect(out["1992"]).toBe("########## 3"); // 3/3 * 10 -> 10
        expect(out["1990"]).toBe("###### 2"); // 2/3 * 10 -> 6
        expect(out["1991"]).toBe("### 1"); // 1/3 * 10 -> 3
    });

    it("respects minOccurences filter", () => {
        const out = hist.printHist(hist as any, 10, {
            fillEmpty: false,
            appendValue: true,
            flat: false,
            minOccurences: 2,
        }) as Record<string, string>;
        expect(out["1992"]).toBe("########## 3");
        expect(out["1990"]).toBe("###### 2");
        expect(out["1991"]).toBeUndefined();
    });

    it("returns lines when flat=true and omit counts when appendValue=false", () => {
        const lines = hist.printHist(hist as any, 10, {
            fillEmpty: false,
            appendValue: false,
            flat: true,
            minOccurences: 1,
        }) as string[];
        // Should contain exactly three entries (since fillEmpty=false)
        expect(lines.length).toBe(3);
        // Lines include padded key, colon, and bar
        expect(lines).toContain("1992: ##########");
        expect(lines).toContain("1990: ######");
        expect(lines).toContain("1991: ###");
    });
});
