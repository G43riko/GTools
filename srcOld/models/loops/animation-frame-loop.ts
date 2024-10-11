let loopCallbackIdCounter = 0;
const loopCallbacks: {
    readonly id: number;
    readonly onUpdate: (duration: number) => void;
    readonly requiredFps: number;
}[] = [];

let req: number;

if (typeof requestAnimationFrame === "undefined") {
    let running = true;
    global.requestAnimationFrame = (cb: FrameRequestCallback): number => {
        if (!running) {
            return 1;
        }
        setTimeout(() => cb(Date.now()), 0);

        return 0;
    };
    global.cancelAnimationFrame = (_id: number) => running = false;
}

export function animationFrameLoop(
    callback: (delta: number) => void,
    requiredFps = 60,
    emitOnlyOnTime = false,
): { stop: () => void } {
    const id = loopCallbackIdCounter++;
    const requiredDuration = 1000 / requiredFps;
    let totalDuration = 0;
    loopCallbacks.push({
        id,
        requiredFps,
        onUpdate: (duration) => {
            if (!emitOnlyOnTime || totalDuration > requiredDuration) {
                callback((totalDuration / requiredDuration) || 1);
                totalDuration = duration;
            }
            totalDuration += duration;
        },
    });

    if (loopCallbacks.length === 1) {
        let start = Date.now();

        const tick = (time: number): void => {
            const duration = time - start;
            start = time;
            loopCallbacks.forEach((item) => {
                item.onUpdate(duration);
            });
            req = requestAnimationFrame(tick);
        };

        req = requestAnimationFrame(tick);
    }

    return {
        stop: () => {
            const index = loopCallbacks.findIndex((e) => e.id === id);
            loopCallbacks.splice(index, 1);

            if (loopCallbacks.length === 0) {
                cancelAnimationFrame(req);
            }
        },
    };
}
