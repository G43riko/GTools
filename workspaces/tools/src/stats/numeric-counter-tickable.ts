/**
 * A utility class that measures and tracks execution time of operations over periodic intervals.
 * Calculates average execution time per tick period.
 */
export class NumberCounterTickable {
    private readonly interval: number;
    private sum = 0;
    private count = 0;
    private lastTickAverage = 0;

    /**
     * Creates a new instance of NumberCounterTickable
     * @param tickDuration - The duration of each tick interval in milliseconds. Defaults to 1000ms (1 second)
     */
    public constructor(tickDuration = 1000) {
        this.interval = setInterval(() => this.second(), tickDuration);
    }

    /**
     * Executes the provided callback function and measures its execution time
     * @param callback - The function to execute and measure
     */
    public execute(callback: () => unknown): void {
        const start = performance.now();
        callback();

        this.count++;
        this.sum = performance.now() - start;
    }

    /**
     * Returns the average execution time for operations in the last tick period
     * @returns A string representing the average execution time in milliseconds
     */
    public getAverageTime(): number | string {
        return `${this.lastTickAverage.toFixed(4)} ms`;
    }

    private second(): void {
        this.lastTickAverage = this.sum / this.count;
        this.sum = 0;
        this.count = 0;
    }

    /**
     * Cleans up resources by clearing the internal timer interval
     * Should be called when the counter is no longer needed
     */
    public cleanUp(): void {
        clearInterval(this.interval);
    }
}
