export function randomFloatBetween(min, max) {
    return min + Math.random() * (max - min);
}
export function randomIntBetween(min, max) {
    return Math.floor(randomFloatBetween(min, max));
}
export function randomBoolean() {
    return Math.random() < 0.5;
}
export function randomItem() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return items[Math.floor(Math.random() * items.length)];
}
//# sourceMappingURL=random-utils.js.map