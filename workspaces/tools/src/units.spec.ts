import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { Units } from "./units.ts";

describe("Units", () => {
    describe("MEMORY", () => {
        it("MB converts megabytes to bytes", () => {
            assertEquals(Units.MEMORY.MB(1), 1_048_576);
            assertEquals(Units.MEMORY.MB(2), 2_097_152);
            assertEquals(Units.MEMORY.MB(0), 0);
        });

        it("BYTES returns bytes as-is", () => {
            assertEquals(Units.MEMORY.BYTES(100), 100);
            assertEquals(Units.MEMORY.BYTES(0), 0);
        });
    });

    describe("DURATION", () => {
        it("SECOND returns one second in milliseconds", () => {
            assertEquals(Units.DURATION.SECOND(), 1_000);
        });

        it("SECONDS converts seconds to milliseconds", () => {
            assertEquals(Units.DURATION.SECONDS(1), 1_000);
            assertEquals(Units.DURATION.SECONDS(5), 5_000);
        });

        it("MINUTE returns one minute in milliseconds", () => {
            assertEquals(Units.DURATION.MINUTE(), 60_000);
        });

        it("MINUTES converts minutes to milliseconds", () => {
            assertEquals(Units.DURATION.MINUTES(1), 60_000);
            assertEquals(Units.DURATION.MINUTES(2), 120_000);
        });

        it("HOUR returns one hour in milliseconds", () => {
            assertEquals(Units.DURATION.HOUR(), 3_600_000);
        });

        it("HOURS converts hours to milliseconds", () => {
            assertEquals(Units.DURATION.HOURS(1), 3_600_000);
            assertEquals(Units.DURATION.HOURS(2), 7_200_000);
        });

        it("DAY returns one day in milliseconds", () => {
            assertEquals(Units.DURATION.DAY(), 86_400_000);
        });

        it("DAYS converts days to milliseconds", () => {
            assertEquals(Units.DURATION.DAYS(1), 86_400_000);
            assertEquals(Units.DURATION.DAYS(2), 172_800_000);
        });

        it("WEEK returns one week in milliseconds", () => {
            assertEquals(Units.DURATION.WEEK(), 604_800_000);
        });

        it("YEAR returns one year (365 days) in milliseconds", () => {
            assertEquals(Units.DURATION.YEAR(), 31_536_000_000);
        });
    });
});
