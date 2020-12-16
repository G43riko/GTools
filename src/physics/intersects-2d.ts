export function intersects(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number,
): null | { x: number, y: number } {
    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    if (denom === 0) {
        return null;
    }

    const numeA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    const numeB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);

    const uA = numeA / denom;
    const uB = numeB / denom;

    if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
        const x = x1 + uA * (x2 - x1);
        const y = y1 + uA * (y2 - y1);

        return {x, y};
    }

    return null;
}
