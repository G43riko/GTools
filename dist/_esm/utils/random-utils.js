export function randomFloatBetween(min, max) {
    return min + Math.random() * (max - min);
}
export function randomIntBetween(min, max) {
    return Math.floor(randomFloatBetween(min, max));
}
export function randomBoolean() {
    return Math.random() < 0.5;
}
export function randomItem(...items) {
    return items[Math.floor(Math.random() * items.length)];
}
//# sourceMappingURL=random-utils.js.map