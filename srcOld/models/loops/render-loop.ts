export class RenderLoop {
    private msLastFrame = performance.now();
    private isActive    = false;
    private readonly msFpsLimit: number;
    private readonly run: () => unknown;
    private currentFps  = 0;

    public constructor(private readonly callback: (delta: number) => void, private readonly fps = 60) {
        this.isActive = false;

        this.msFpsLimit = 1000 / fps;
        if (fps > 0) {
            this.run = () => {
                const msCurrent = performance.now();
                const msDelta   = (msCurrent - this.msLastFrame);
                const deltaTime = msDelta / 1000.0;

                if (msDelta >= this.msFpsLimit) {
                    this.currentFps  = Math.floor(1 / deltaTime);
                    this.msLastFrame = msCurrent;
                    this.callback(deltaTime);
                }

                if (this.isActive) {
                    window.requestAnimationFrame(this.run);
                }
            };
        } else {
            this.run = () => {
                const msCurrent = performance.now();
                const deltaTime = (msCurrent - this.msLastFrame) / 1000.0;

                this.currentFps  = Math.floor(1 / deltaTime);
                this.msLastFrame = msCurrent;

                this.callback(deltaTime);
                if (this.isActive) {
                    window.requestAnimationFrame(this.run);
                }
            };
        }
    }

    public start(): this {
        this.isActive    = true;
        this.msLastFrame = performance.now();
        window.requestAnimationFrame(this.run);

        return this;
    }

    public stop(): void {
        this.isActive = false;
    }
}
