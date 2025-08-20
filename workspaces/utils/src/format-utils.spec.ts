import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { formatBytes, formatDateAgo, formatElapsed } from "./format-utils.ts";

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
