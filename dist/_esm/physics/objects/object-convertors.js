export function convertMinMaxToPosSize({ min, max }) {
    return {
        position: {
            x: min.x,
            y: min.y,
        },
        size: {
            x: max.x - min.x,
            y: max.y - min.y,
        },
    };
}
export function convertPosSizeToMinMax({ position, size }) {
    return {
        min: {
            x: position.x,
            y: position.y,
        },
        max: {
            x: position.x + size.x,
            y: position.y + size.y,
        },
    };
}
//# sourceMappingURL=object-convertors.js.map