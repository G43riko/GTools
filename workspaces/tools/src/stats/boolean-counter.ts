/**
 * @example
 * ```ts
 * import {BooleanCounter} from "@g43/tools";
 *
 * const counter = new BooleanCounter();
 * counter.add(true);
 * counter.add(true);
 * counter.add(false);
 *
 * console.log(`Success: ${counter.toPercentage()}`);
 * ```
 */
export class BooleanCounter {
    private _totalValues = 0;
    private _trueValues = 0;

    /**
     * Gets the count of true values added to the counter
     * @returns The number of true values
     */
    public get trueValues(): number {
        return this._trueValues;
    }

    /**
     * Gets the count of false values added to the counter
     * @returns The number of false values
     */
    public get falseValues(): number {
        return this._totalValues - this._trueValues;
    }

    /**
     * Gets the total count of values added to the counter
     * @returns The total number of values
     */
    public get totalValues(): number {
        return this._totalValues;
    }

    /**
     * Adds a value to the counter
     * @param value - The value to add. Any truthy value will be counted as true
     */
    public add(value: unknown): void {
        this._totalValues++;
        if (value) {
            this._trueValues++;
        }
    }

    /**
     * Resets the counter to initial state
     */
    public reset(): void {
        this._totalValues = 0;
        this._trueValues = 0;
    }

    /**
     * Converts the counter state to a percentage string
     * @param fixedValues - Number of decimal places to include in the output
     * @returns A string representing the percentage of true values with % symbol
     */
    public toPercentage(fixedValues = 2): string {
        return `${(this._trueValues / this._totalValues * 100 || 0).toFixed(fixedValues)}%`;
    }

    /**
     * Creates a string representation of the counter
     * @returns A string in format "trueValues (percentage%)"
     */
    public toString(): string {
        return `${this._trueValues} (${this.toPercentage()}`;
    }

    /**
     * Creates a JSON representation of the counter
     * @returns An object containing the true values count, total values count, and percentage
     */
    public toJSON(): { trueValues: number; totalValues: number; percentage: string } {
        return {
            trueValues: this._trueValues,
            totalValues: this._totalValues,
            percentage: this.toPercentage(),
        };
    }
}
