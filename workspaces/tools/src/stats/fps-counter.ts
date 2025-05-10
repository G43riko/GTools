export class FpsCounter {
    private readonly interval = setInterval(() => this.onSecond(), 1000);
    private tickCounter = 0;
    private lastFps = 0;

    /**
     * Increments the internal tick counter used for FPS calculation.
     * Should be called once per frame.
     */
    public tick(): void {
        this.tickCounter++;
    }

    /**
     * Returns the current frames per second (FPS) value.
     * TODO: if lastFps is zero, we should calculate aproximate FPS
     * @returns The number of frames processed in the last second
     */
    public getFps(): number {
        return this.lastFps;
    }

    private onSecond(): void {
        this.lastFps = this.tickCounter;
        this.tickCounter = 0;
    }

    /**
     * Cleans up resources by clearing the internal timer interval.
     * Should be called when the FPS counter is no longer needed.
     */
    public cleanUp(): void {
        clearInterval(this.interval);
    }
}
