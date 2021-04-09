export function simpleLoop(callback, requiredFps) {
    if (requiredFps === void 0) { requiredFps = 60; }
    var start;
    var req;
    var requiredDuration = 1000 / requiredFps;
    var tick = function (time) {
        var duration = time - start;
        start = time;
        req = requestAnimationFrame(tick);
        callback((duration / requiredDuration) || 1);
    };
    req = requestAnimationFrame(tick);
    return {
        stop: function () { return cancelAnimationFrame(req); },
    };
}
//# sourceMappingURL=simple-loop.js.map