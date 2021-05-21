export function simpleLoop(callback: (delta: number) => void, requiredFps = 60): { stop: () => void } {
    let start: number;
    let req: number;
    const requiredDuration = 1000 / requiredFps;
    const tick             = (time: number): void => {
        const duration = time - start;
        start          = time;
        req            = requestAnimationFrame(tick);
        callback((duration / requiredDuration) || 1);
    };
    req                    = requestAnimationFrame(tick);

    return {
        stop: () => cancelAnimationFrame(req),
    };
}
