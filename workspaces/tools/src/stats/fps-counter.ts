export class FpsCounter {
    private readonly interval = setInterval(() => this.onSecond(), 1000);
    private tickCounter = 0;
    private lastFps = 0;

    public tick(): void {
        this.tickCounter++;
    }

    /**
     * TODO: if lastFps is zero, we should calculate aproximate FPS
     */
    public getFps(): number {
        return this.lastFps;
    }

    private onSecond(): void {
        this.lastFps = this.tickCounter;
        this.tickCounter = 0;
    }

    public cleanUp(): void {
        clearInterval(this.interval);
    }
}
