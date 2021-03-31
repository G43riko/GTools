export function simpleLoop(callback, requiredFps = 60) {
    let start;
    let req;
    const requiredDuration = 1000 / requiredFps;
    const tick = (time) => {
        const duration = time - start;
        start = time;
        req = requestAnimationFrame(tick);
        callback((duration / requiredDuration) || 1);
    };
    req = requestAnimationFrame(tick);
    return {
        stop: () => cancelAnimationFrame(req),
    };
}
//# sourceMappingURL=simple-loop.js.map