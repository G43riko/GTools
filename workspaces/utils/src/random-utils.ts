/**
 * TODO: implements this {@link https://github.com/zeh/prando/blob/main/src/Prando.ts}
 * @module
 * @param min
 * @param max
 * @returns
 */

export function randomFloatBetween(min: number, max: number): number {
    return min + Math.random() * (max - min);
}

export function randomAngleInRadians(): number {
    return randomFloatBetween(0, Math.PI * 2);
}

export function randomChance(probability: 1): true;
export function randomChance(probability: 0): false;
export function randomChance(probability: number): boolean;
/**
 * @param probability - value between 0 and 1 (0 = no chance, 1 = always)
 */
export function randomChance(probability: number): boolean {
    return Math.random() < probability;
}

export function randomAngleInDegrees(): number {
    return randomIntBetween(0, 360);
}

export function randomIntBetween(min: number, max: number): number {
    return Math.round(randomFloatBetween(min, max));
}

export function randomBoolean(): boolean {
    return Math.random() < 0.5;
}

export function randomItem<T>(...items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
}
