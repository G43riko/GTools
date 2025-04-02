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

    public get trueValues(): number {
        return this._trueValues;
    }
    public get falseValues(): number {
        return this._totalValues - this._trueValues;
    }
    public get totalValues(): number {
        return this._totalValues;
    }

    public add(value: unknown): void {
        this._totalValues++;
        if (value) {
            this._trueValues++;
        }
    }

    public reset(): void {
        this._totalValues = 0;
        this._trueValues = 0;
    }

    public toPercentage(fixedValues = 2): string {
        return `${(this._trueValues / this._totalValues * 100 || 0).toFixed(fixedValues)}%`;
    }

    public toString(): string {
        return `${this._trueValues} (${this.toPercentage()}`;
    }
    public toJSON(): { trueValues: number; totalValues: number; percentage: string } {
        return {
            trueValues: this._trueValues,
            totalValues: this._totalValues,
            percentage: this.toPercentage(),
        };
    }
}
