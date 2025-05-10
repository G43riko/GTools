export class NumericCounter {
    private _min = Infinity;
    private _max = -Infinity;
    private _sum = 0;
    private readonly numbers: number[] = [];

    public get min(): number {
        return this._min;
    }
    public get max(): number {
        return this._max;
    }
    public get sum(): number {
        return this._sum;
    }

    public reset(): void {
        this._max = -Infinity;
        this._min = Infinity;
        this._sum = 0;
        this.numbers.splice(0, this.numbers.length);
    }

    public add(value: number): void {
        this.numbers.push(value);

        this._min = Math.min(this._min, value);
        this._max = Math.max(this._max, value);
        this._sum += value;
    }
    public getMin(): number {
        return this._min;
    }

    public getMax(): number {
        return this._max;
    }

    public getCount(): number {
        return this.numbers.length;
    }

    public getAverage(): number {
        return this._sum / this.numbers.length;
    }

    public addAll(items: readonly number[]): void {
        items.forEach((item) => this.add(item));
    }
}
