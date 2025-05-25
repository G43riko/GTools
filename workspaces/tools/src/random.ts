/**
 * A utility class for generating random numbers and selecting random items.
 * Includes methods for seeded random number generation and weighted random selection.
 */
export class Random {
    /** Singleton instance for static methods that require state */
    private static readonly instance = new Random();

    /** The modulus for the linear congruential generator (2^31) */
    private static readonly m = 0x80000000;

    /** The multiplier for the linear congruential generator */
    private static readonly a = 1103515245;

    /** The increment for the linear congruential generator */
    private static readonly c = 12345;

    /** The current state of the linear congruential generator */
    private state: number;

    /**
     * Creates a new Random instance, optionally with a seed.
     * @param seed - The initial seed for the random number generator. Defaults to a random value.
     */
    public constructor(seed?: number) {
        this.state = typeof seed === "number" ? seed : Math.floor(Math.random() * (Random.m - 1));
    }

    /**
     * Generates a random integer between the specified minimum (inclusive) and maximum (exclusive).
     * @param min - The minimum value (inclusive).
     * @param max - The maximum value (exclusive).
     * @returns A random integer between min and max.
     */
    public static intBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    public static item<T>(array: readonly [T, ...T[]]): T;
    public static item<T>(array: readonly T[]): T | undefined;
    public static item<T>(array: readonly T[]): T | undefined {
        return array[Random.intBetween(0, array.length)];
    }
    /**
     * Generates a random float between the specified minimum (inclusive) and maximum (exclusive).
     * @param min - The minimum value (inclusive).
     * @param max - The maximum value (exclusive).
     * @returns A random float between min and max.
     */
    public static floatBetween(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    /**
     * Generates a random angle in radians between 0 and 2π.
     * @returns A random angle in radians.
     */
    public static angleInRadians(): number {
        return this.floatBetween(0, Math.PI * 2);
    }

    /**
     * Generates a random integer based on a seed.
     * @param seed - The seed for the random number generator.
     * @returns A random integer.
     */
    public static randomInt(seed: number): number {
        Random.instance.state = seed;
        return Random.instance.nextInt();
    }

    /**
     * Generates the next random integer using the linear congruential generator.
     * @returns A random integer between 0 and 2^31 - 1.
     */
    public nextInt(): number {
        this.state = (Random.a * this.state + Random.c) % Random.m;

        if (this.state < 0) {
            this.state += Random.m;
        }

        return this.state;
    }

    /**
     * Generates a random float between 0 (inclusive) and 1 (exclusive).
     * @returns A random float.
     */
    public nextFloat(): number {
        return this.nextInt() / (Random.m - 1);
    }

    /**
     * Generates a random float between the specified range.
     * @param start - The start of the range (inclusive).
     * @param end - The end of the range (exclusive).
     * @returns A random float between start and end.
     */
    public nextFloatBetween(start: number, end: number): number {
        return start + this.nextFloat() * (end - start);
    }

    /**
     * Generates a random integer between the specified range.
     * @param start - The start of the range (inclusive).
     * @param end - The end of the range (exclusive).
     * @returns A random integer between start and end.
     */
    public nextIntBetween(start: number, end: number): number {
        return start + Math.floor(this.nextFloat() * (end - start));
    }

    public nextItem<T>(array: readonly [T, ...T[]]): T;
    public nextItem<T>(array: readonly T[]): T | undefined;
    /**
     * Selects a random item from a non-empty array.
     * @param array - An array of items to choose from.
     * @returns A random item from the array, or undefined if the array is empty.
     */
    public nextItem<T>(array: readonly T[]): T | undefined {
        return array[this.nextIntBetween(0, array.length)];
    }

    /**
     * Selects a random item from an array, weighted by a weight provider function.
     * @param data - An array of items to choose from.
     * @param weightProvider - A function that provides the weight for each item.
     * @returns A random weighted item, or undefined if the array is empty.
     */
    public nextWeightItemUsingWeighProvider<T>(
        data: readonly T[],
        weightProvider: (item: T) => number,
    ): T | undefined {
        const totalWeight = data.reduce((acc, item) => acc + weightProvider(item), 0);
        let randomValue = this.nextFloatBetween(0, totalWeight);

        for (const item of data) {
            randomValue -= weightProvider(item);
            if (randomValue <= 0) {
                return item;
            }
        }
    }

    /**
     * Selects a random item from a record of items with weights.
     * @param data - A record where keys are items and values are their weights.
     * @returns A random weighted item, or undefined if the record is empty.
     */
    public nextWeightItem<T extends string>(data: Record<T, number>): T | undefined {
        const totalWeight = Object.values<number>(data).reduce((acc, weight) => acc + weight, 0);
        let randomValue = this.nextFloatBetween(0, totalWeight);

        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                randomValue -= data[key];
                if (randomValue <= 0) {
                    return key;
                }
            }
        }
    }

    /**
     * Ensures a random weighted item is selected, throwing an error if the input is empty.
     * @param data - A record where keys are items and values are their weights.
     * @param message - The error message if no item is selected.
     * @returns The selected item.
     */
    public requireNextWeightItem<T extends string>(data: Record<T, number>, message = "Data cannot be empty"): T {
        const item = this.nextWeightItem(data);
        if (item !== undefined) {
            return item;
        }

        throw new Error(message);
    }

    /**
     * Ensures a random item is selected, throwing an error if the array is empty.
     * @param array - An array of items to choose from.
     * @param message - The error message if no item is selected.
     * @returns The selected item.
     */
    public requireNextItem<T>(array: readonly T[], message = "Array cannot be empty"): T {
        const item = this.nextItem(array);
        if (item !== undefined) {
            return item;
        }

        throw new Error(message);
    }

    /**
     * Shuffles an array in place using the Fisher-Yates algorithm.
     * @param array The array to shuffle.
     * @returns A new array with the elements shuffled.
     */
    public shuffleArray<T>(array: T[]): T[] {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = this.nextIntBetween(0, i + 1);
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    /**
     * Selects a random subset of elements from the array.
     * @param array The source array.
     * @param count The number of elements to select.
     * @returns An array containing the random subset.
     * @throws If count is greater than the array length.
     */
    public randomSubset<T>(array: T[], count: number): T[] {
        if (count > array.length) throw new Error("Subset size exceeds array length.");
        return this.shuffleArray(array).slice(0, count);
    }

    /**
     * Generates a random number following a Gaussian (normal) distribution.
     * @param mean The mean (average) of the distribution.
     * @param standardDeviation The standard deviation of the distribution.
     * @returns A random number following the specified Gaussian distribution.
     */
    public nextGaussian(mean = 0, standardDeviation = 1): number {
        let u = 0, v = 0;
        while (u === 0) u = this.nextFloat(); // Avoid 0
        while (v === 0) v = this.nextFloat(); // Avoid 0
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return z * standardDeviation + mean;
    }

    /**
     * Generates a random boolean value with a specified probability of being true.
     * @param chance - The probability of returning true (default is 0.5).
     * @returns A random boolean value.
     */
    public nextBoolean(chance = 0.5): boolean {
        return this.nextFloat() < chance;
    }
}
