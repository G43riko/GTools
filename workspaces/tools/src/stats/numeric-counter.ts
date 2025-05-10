/**
 * A class for tracking statistics of numeric values including minimum, maximum, sum, and average
 */
export class NumericCounter {
    private _min = Infinity;
    private _max = -Infinity;
    private _sum = 0;
    private readonly numbers: number[] = [];

    /**
     * Gets the minimum value in the counter
     */
    public get min(): number {
        return this._min;
    }

    /**
     * Gets the maximum value in the counter
     */
    public get max(): number {
        return this._max;
    }

    /**
     * Gets the sum of all values in the counter
     */
    public get sum(): number {
        return this._sum;
    }

    /**
     * Resets the counter to its initial state
     */
    public reset(): void {
        this._max = -Infinity;
        this._min = Infinity;
        this._sum = 0;
        this.numbers.splice(0, this.numbers.length);
    }

    /**
     * Adds a single numeric value to the counter
     * @param value - The number to add
     */
    public add(value: number): void {
        this.numbers.push(value);

        this._min = Math.min(this._min, value);
        this._max = Math.max(this._max, value);
        this._sum += value;
    }

    /**
     * Gets the minimum value in the counter
     * @returns The minimum value
     */
    public getMin(): number {
        return this._min;
    }

    /**
     * Gets the maximum value in the counter
     * @returns The maximum value
     */
    public getMax(): number {
        return this._max;
    }

    /**
     * Gets the count of values in the counter
     * @returns The number of values
     */
    public getCount(): number {
        return this.numbers.length;
    }

    /**
     * Calculates the average of all values in the counter
     * @returns The average value
     */
    public getAverage(): number {
        return this._sum / this.numbers.length;
    }

    /**
     * Adds multiple numeric values to the counter
     * @param items - Array of numbers to add
     */
    public addAll(items: readonly number[]): void {
        items.forEach((item) => this.add(item));
    }
}
