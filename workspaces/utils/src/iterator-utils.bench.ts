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

// ---------------------------------------------------------------------------
// iterateAround2D (circle mode) — optimised variant
// ---------------------------------------------------------------------------

/**
 * Optimised circle variant of `iterateAround2D`.
 *
 * Problem with the original (when `squared = false`):
 *   - Calls `Math.sqrt(distX² + distY²)` for **every** candidate cell and then
 *     compares the result to `radius`.
 *   - `Math.sqrt` is a non-trivial transcendental; it is the most expensive
 *     operation in the inner loop.
 *
 * Fix: compare squared distances — `distX² + distY² <= radius²`.
 *   - Hoist `radiusSq = radius * radius` above the outer loop.
 *   - Inner loop becomes two multiplies, one add, one compare — no sqrt at all.
 */
function iterateAround2DFast(
    centerX: number,
    centerY: number,
    radius: number,
    squared: boolean,
    callback: (x: number, y: number) => unknown,
): void {
    const minX = centerX - radius;
    const maxX = centerX + radius;
    const minY = centerY - radius;
    const maxY = centerY + radius;

    if (squared) {
        for (let x = minX; x <= maxX; x++) {
            for (let y = minY; y <= maxY; y++) {
                callback(x, y);
            }
        }
    } else {
        const radiusSq = radius * radius; // hoist sqrt out of the loop
        for (let x = minX; x <= maxX; x++) {
            const distX = x - centerX;
            const distXSq = distX * distX;
            for (let y = minY; y <= maxY; y++) {
                const distY = y - centerY;
                if (distXSq + distY * distY <= radiusSq) {
                    callback(x, y);
                }
            }
        }
    }
}

const around2DCallback = () => null;
const circleRadii = [10, 50, 100];

for (const r of circleRadii) {
    Deno.bench(`iterateAround2D (circle, r=${r})     original`, { group: `iterateAround2D circle r=${r}` }, () => {
        IteratorUtils.iterateAround2D(0, 0, r, false, around2DCallback);
    });
    Deno.bench(`iterateAround2D (circle, r=${r})     fast    `, {
        group: `iterateAround2D circle r=${r}`,
        baseline: true,
    }, () => {
        iterateAround2DFast(0, 0, r, false, around2DCallback);
    });
}

