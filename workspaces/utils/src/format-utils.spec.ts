import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { formatBytes, formatDateAgo, formatElapsed, formatRelative } from "./format-utils.ts";

describe("formatElapsed", () => {
    it("formats milliseconds below 1 ms", () => {
        expect(formatElapsed(0.123)).toBe("0.12 ms");
    });

    it("formats milliseconds between 1 and 10", () => {
        expect(formatElapsed(5.4)).toBe("5.4 ms");
    });

    it("formats milliseconds above 10", () => {
        expect(formatElapsed(123)).toBe("123 ms");
    });

    it("formats seconds properly", () => {
        expect(formatElapsed(1234)).toBe("1s");
    });

    it("formats minutes and seconds", () => {
        expect(formatElapsed(65_000)).toBe("1m 5s");
    });

    it("formats hours, minutes, seconds", () => {
        expect(formatElapsed(9_654_321)).toBe("2h 40m 54s");
    });

    it("formats days, hours, minutes, seconds", () => {
        expect(formatElapsed(172_800_000 + 3661_000)).toBe("2d 1h 1m 1s");
    });
});

describe("formatBytes", () => {
    it("handles 0 bytes", () => {
        expect(formatBytes(0)).toBe("0 B");
    });

    it("formats kilobytes", () => {
        expect(formatBytes(1024)).toBe("1 KB");
    });

    it("formats megabytes with decimals", () => {
        expect(formatBytes(123456789)).toBe("117.74 MB");
    });

    it("formats gigabytes with custom decimals", () => {
        expect(formatBytes(5_368_709_120, 1)).toBe("5 GB");
    });

    it("formats using long units", () => {
        expect(formatBytes(1024, { long: true })).toBe("1 Kilobytes");
    });
});

describe("formatDateAgo", () => {
    it("returns 'Just now' for dates < 30 seconds ago", () => {
        const now = new Date();
        expect(formatDateAgo(now)).toBe("Just now");
    });

    it("returns minutes ago", () => {
        const past = new Date(Date.now() - 90_000); // 1.5 minutes
        expect(formatDateAgo(past)).toBe("1 minute ago");
    });

    it("returns hours ago", () => {
        const past = new Date(Date.now() - 3_600_000); // 1 hour
        expect(formatDateAgo(past)).toBe("1 hour ago");
    });

    it("returns days ago", () => {
        const past = new Date(Date.now() - 2 * 86_400_000); // 2 days
        expect(formatDateAgo(past)).toBe("2 days ago");
    });

    it("returns the input string if invalid date", () => {
        expect(formatDateAgo("not-a-date")).toBe("not-a-date");
    });
});

describe("formatRelative", () => {
    const now = new Date("2026-05-06T12:00:00Z").getTime(); // Fixed reference time

    it("returns '—' for null input", () => {
        expect(formatRelative(null)).toBe("—");
    });

    it("returns '—' for undefined input", () => {
        expect(formatRelative(undefined)).toBe("—");
    });

    it("returns '—' for invalid date", () => {
        expect(formatRelative("invalid-date")).toBe("—");
    });

    it("returns 'just now' for very recent times", () => {
        const time = now - 2000; // 2 seconds ago
        expect(formatRelative(time, { now })).toBe("just now");
    });

    it("formats seconds ago (short)", () => {
        const time = now - 10_000; // 10 seconds ago
        expect(formatRelative(time, { now })).toBe("10s ago");
    });

    it("formats minutes ago (short)", () => {
        const time = now - 120_000; // 2 minutes ago
        expect(formatRelative(time, { now })).toBe("2m ago");
    });

    it("formats hours ago (short)", () => {
        const time = now - 7_200_000; // 2 hours ago
        expect(formatRelative(time, { now })).toBe("2h ago");
    });

    it("formats days ago (short)", () => {
        const time = now - 172_800_000; // 2 days ago
        expect(formatRelative(time, { now })).toBe("2d ago");
    });

    it("formats weeks ago (short)", () => {
        const time = now - 1_209_600_000; // 2 weeks ago
        expect(formatRelative(time, { now })).toBe("2w ago");
    });

    it("formats months ago (short)", () => {
        const time = now - 5_184_000_000; // 2 months ago (approx)
        expect(formatRelative(time, { now })).toBe("2mo ago");
    });

    it("formats years ago (short)", () => {
        const time = now - 63_072_000_000; // 2 years ago (approx)
        expect(formatRelative(time, { now })).toBe("2y ago");
    });

    it("formats future seconds (short)", () => {
        const time = now + 30_000; // 30 seconds in future
        expect(formatRelative(time, { now })).toBe("in 30s");
    });

    it("formats future minutes (short)", () => {
        const time = now + 300_000; // 5 minutes in future
        expect(formatRelative(time, { now })).toBe("in 5m");
    });

    it("formats future hours (short)", () => {
        const time = now + 3_600_000; // 1 hour in future
        expect(formatRelative(time, { now })).toBe("in 1h");
    });

    it("formats long format for past", () => {
        const time = now - 120_000; // 2 minutes ago
        expect(formatRelative(time, { now, short: false })).toBe("2 minutes ago");
    });

    it("formats long format for future", () => {
        const time = now + 120_000; // 2 minutes in future
        expect(formatRelative(time, { now, short: false })).toBe("in 2 minutes");
    });

    it("uses custom suffix for past", () => {
        const time = now - 120_000; // 2 minutes ago
        expect(formatRelative(time, { now, suffixPast: "before" })).toBe("2m before");
    });

    it("uses custom prefix for future", () => {
        const time = now + 120_000; // 2 minutes in future
        expect(formatRelative(time, { now, prefixFuture: "later" })).toBe("later 2m");
    });

    it("handles Date object input", () => {
        const date = new Date(now - 120_000);
        expect(formatRelative(date, { now })).toBe("2m ago");
    });

    it("handles ISO string input", () => {
        const iso = new Date(now - 120_000).toISOString();
        expect(formatRelative(iso, { now })).toBe("2m ago");
    });

    it("respects justNowThresholdMs", () => {
        const time = now - 10_000; // 10 seconds ago
        expect(formatRelative(time, { now, justNowThresholdMs: 15_000 })).toBe("just now");
    });
});

describe("compareFormatRelativeAndFormatDateAgo", () => {
    const values = [1, Date.now(), Date.now() - 1000 * 60 * 60, Date.now() - 1000 * 60 * 60 * 24 * 365 * 5];

    values.forEach((i) => {
        it(`Should compare ${i}`, () => {
            const formatRelativeResult = formatRelative(i, { short: false }).toLowerCase();
            const formatDateAgoResult = formatDateAgo(i).toLowerCase();
            const isEqual = formatRelativeResult === formatDateAgoResult;
            if (!isEqual) {
                console.log({ formatRelativeResult, formatDateAgoResult });
            }
            expect(isEqual).toBeTruthy();
        });
    });
});
