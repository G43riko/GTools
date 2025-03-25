export class NumberCounterTickable {
    private readonly interval: number;
    private sum = 0;
    private count = 0;
    private lastTickAverage = 0;

    public constructor(tickDuration = 1000) {
        this.interval = setInterval(() => this.second(), tickDuration);
    }

    public execute(callback: () => unknown): void {
        const start = performance.now();
        callback();

        this.count++;
        this.sum = performance.now() - start;
    }

    public getAverageTime(): number | string {
        return `${this.lastTickAverage.toFixed(4)} ms`;
    }

    private second(): void {
        this.lastTickAverage = this.sum / this.count;
        this.sum = 0;
        this.count = 0;
    }

    public cleanUp(): void {
        clearInterval(this.interval);
    }
}
