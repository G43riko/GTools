import { expect } from "@std/expect";
import { afterEach, beforeEach, describe, it } from "@std/testing/bdd";
import { NumberCounterTickable } from "./numeric-counter-tickable.ts";

describe("NumberCounterTickable", () => {
    let counter: NumberCounterTickable;
    let originalSetInterval: typeof setInterval;
    let originalClearInterval: typeof clearInterval;
    let originalPerformanceNow: typeof performance.now;
    let intervalCallback: (() => unknown) | null = null;
    const intervalId = 456; // Mock interval ID
    const performanceTime = 1000; // Starting mock time

    beforeEach(() => {
        // Save original functions
        originalSetInterval = globalThis.setInterval;
        originalClearInterval = globalThis.clearInterval;
        originalPerformanceNow = performance.now;

        // Mock setInterval
        globalThis.setInterval = ((callback: () => unknown) => {
            intervalCallback = callback;
            return intervalId;
        }) as any;

        // Mock clearInterval
        globalThis.clearInterval = ((id: number) => {
            if (id === intervalId) {
                intervalCallback = null;
            }
        }) as any;

        // Mock performance.now
        performance.now = () => performanceTime;

        counter = new NumberCounterTickable(1000);
    });

    afterEach(() => {
        // Clean up and restore original functions
        counter.cleanUp();
        globalThis.setInterval = originalSetInterval;
        globalThis.clearInterval = originalClearInterval;
        performance.now = originalPerformanceNow;
        intervalCallback = null;
    });

    describe("initial state", () => {
        it("should initialize with zero average time", () => {
            expect(counter.getAverageTime()).toBe("0.0000 ms");
        });
    });

    describe("execute", () => {
        it("should measure execution time of a callback", () => {
            // Set up performance.now to return different values on each call
            let callCount = 0;
            performance.now = () => {
                callCount++;
                return callCount === 1 ? 1000 : 1050; // 50ms execution time
            };

            counter.execute(() => {
                // Simulate work
            });

            // Simulate a tick passing
            if (intervalCallback) intervalCallback();

            expect(counter.getAverageTime()).toBe("50.0000 ms");
        });

        it("should use the last execution time before tick", () => {
            // First execution: 50ms
            let callCount = 0;
            performance.now = () => {
                callCount++;
                return callCount === 1 ? 1000 : 1050;
            };

            counter.execute(() => {
                // Simulate work
            });

            // Second execution: 30ms
            callCount = 0;
            performance.now = () => {
                callCount++;
                return callCount === 1 ? 2000 : 2030;
            };

            counter.execute(() => {
                // Simulate more work
            });

            // Simulate a tick passing
            if (intervalCallback) intervalCallback();

            // Average should be the last execution time (30ms) divided by the count (2)
            // 30 / 2 = 15ms
            expect(counter.getAverageTime()).toBe("15.0000 ms");
        });

        it("should reset counters after each tick", () => {
            // First execution: 50ms
            let callCount = 0;
            performance.now = () => {
                callCount++;
                return callCount === 1 ? 1000 : 1050;
            };

            counter.execute(() => {
                // Simulate work
            });

            // Simulate a tick passing
            if (intervalCallback) intervalCallback();
            expect(counter.getAverageTime()).toBe("50.0000 ms");

            // New execution after tick: 20ms
            callCount = 0;
            performance.now = () => {
                callCount++;
                return callCount === 1 ? 3000 : 3020;
            };

            counter.execute(() => {
                // Simulate more work
            });

            // Simulate another tick passing
            if (intervalCallback) intervalCallback();

            // Average should now be 20ms, not influenced by previous 50ms
            expect(counter.getAverageTime()).toBe("20.0000 ms");
        });
    });

    describe("getAverageTime", () => {
        it("should return the formatted average execution time", () => {
            // Set up an execution time
            let callCount = 0;
            performance.now = () => {
                callCount++;
                return callCount === 1 ? 1000 : 1025.5678; // 25.5678ms execution time
            };

            counter.execute(() => {
                // Simulate work
            });

            // Simulate a tick passing
            if (intervalCallback) intervalCallback();

            // Should format to 4 decimal places
            expect(counter.getAverageTime()).toBe("25.5678 ms");
        });
    });

    describe("cleanUp", () => {
        it("should clear the interval", () => {
            let cleared = false;

            // Override the mock to check if clearInterval was called
            globalThis.clearInterval = ((id: number) => {
                if (id === intervalId) {
                    cleared = true;
                    intervalCallback = null;
                }
            }) as any;

            counter.cleanUp();

            expect(cleared).toBe(true);
        });
    });
});
