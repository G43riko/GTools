import { IteratorUtils } from "./iterator-utils.ts";

function iterateFlatXY(x: number, y: number, callback: (x: number, y: number, index: number) => void): void {
    let counter = 0;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            callback(i, j, counter++);
        }
    }
}

const sizes = [100, 1000, 10000];
const callback = () => null;
Deno.bench("IterateXY old ", { group: "IteratorUtils.iterateXY" }, () => {
    sizes.forEach((e) => {
        iterateFlatXY(e, e, callback);
    });
});
Deno.bench("iterateXY new", { group: "IteratorUtils.iterateXY" }, () => {
    sizes.forEach((e) => {
        IteratorUtils.iterateXY(e, e, callback);
    });
});
