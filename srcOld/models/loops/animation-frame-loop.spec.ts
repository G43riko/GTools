import { expect } from "chai";
import { animationFrameLoop } from "./animation-frame-loop";

describe("AnimationFrameLoop", () => {
    xit("It should test single second limited loop", (done) => {
        let counter = 0;
        const startTime = Date.now();
        let totalTime = 0;
        const fps = 1;
        const loop = animationFrameLoop(
            (time) => {
                counter++;
                totalTime += time;
            },
            fps,
            true,
        );
        setTimeout(() => {
            loop.stop();
            const totalDuration = Date.now() - startTime;
            expect(counter).to.be.within(fps - 1, fps + 1);
            expect(totalTime).to.be.within(fps, fps + fps);
            expect(totalDuration).to.be.within(1000, 1020);
            done();
        }, 1000);
    });
    xit("It should test single limited loop", (done) => {
        let counter = 0;
        const startTime = Date.now();
        let totalTime = 0;
        const loop = animationFrameLoop(
            (time) => {
                counter++;
                totalTime += time;
            },
            20,
            true,
        );
        setTimeout(() => {
            loop.stop();
            const totalDuration = Date.now() - startTime;
            expect(counter).to.be.within(19, 22);
            expect(totalTime).to.be.within(20, 30);
            expect(totalDuration).to.be.within(1000, 1020);
            done();
        }, 1000);
    });
});
