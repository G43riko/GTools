const now = () => (typeof performance === "undefined" ? Date : performance).now();

export class Clock {
    private startTime = 0;
    private oldTime = 0;
    private elapsedTime = 0;
    private running = false;

    public constructor(
        private autostart = true,
    ) {
    }

    public start(): void {
        this.startTime = now();
        this.oldTime = this.startTime;
        this.elapsedTime = 0;
        this.running = true;
    }

    public stop(): void {
        this.getElapsedTime();
        this.running = false;
        this.autostart = false;
    }

    public getElapsedTime(): number {
        this.getDelta();

        return this.elapsedTime;
    }

    public getDelta(): number {
        let diff = 0;
        if (this.autostart && !this.running) {
            this.start();

            return 0;
        }

        if (this.running) {
            const newTime = now();
            diff = (newTime - this.oldTime) / 1000;
            this.oldTime = newTime;

            this.elapsedTime += diff;
        }

        return diff;
    }
}
