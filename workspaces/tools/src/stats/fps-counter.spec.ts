import { expect } from "@std/expect";
import { afterEach, beforeEach, describe, it } from "@std/testing/bdd";
import { FpsCounter } from "./fps-counter.ts";

describe("FpsCounter", () => {
    let fpsCounter: FpsCounter;
    let originalSetInterval: typeof setInterval;
    let originalClearInterval: typeof clearInterval;
    let intervalCallback: (() => unknown) | null = null;
    const intervalId = 123; // Mock interval ID

    beforeEach(() => {
        // Save original timer functions
        originalSetInterval = globalThis.setInterval;
        originalClearInterval = globalThis.clearInterval;

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

        fpsCounter = new FpsCounter();
    });

    afterEach(() => {
        // Clean up and restore original timer functions
        fpsCounter.cleanUp();
        globalThis.setInterval = originalSetInterval;
        globalThis.clearInterval = originalClearInterval;
        intervalCallback = null;
    });

    describe("initial state", () => {
        it("should initialize with zero FPS", () => {
            expect(fpsCounter.getFps()).toBe(0);
        });
    });

    describe("tick", () => {
        it("should increment the internal tick counter", () => {
            // Add some ticks
            fpsCounter.tick();
            fpsCounter.tick();
            fpsCounter.tick();

            // Simulate a second passing
            if (intervalCallback) intervalCallback();

            // FPS should now be 3
            expect(fpsCounter.getFps()).toBe(3);
        });

        it("should reset the tick counter after each second", () => {
            // Add some ticks
            fpsCounter.tick();
            fpsCounter.tick();

            // Simulate a second passing
            if (intervalCallback) intervalCallback();

            // FPS should now be 2
            expect(fpsCounter.getFps()).toBe(2);

            // Add more ticks
            fpsCounter.tick();
            fpsCounter.tick();
            fpsCounter.tick();

            // Simulate another second passing
            if (intervalCallback) intervalCallback();

            // FPS should now be 3 (not 5)
            expect(fpsCounter.getFps()).toBe(3);
        });
    });

    describe("getFps", () => {
        it("should return the last calculated FPS value", () => {
            // Add some ticks
            fpsCounter.tick();
            fpsCounter.tick();

            // Simulate a second passing
            if (intervalCallback) intervalCallback();

            expect(fpsCounter.getFps()).toBe(2);

            // getFps should return the same value without new ticks
            expect(fpsCounter.getFps()).toBe(2);
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

            fpsCounter.cleanUp();

            expect(cleared).toBe(true);
        });
    });
});
