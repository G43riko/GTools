export class NumberCounter {
    private min                        = Infinity;
    private max                        = -Infinity;
    private sum                        = 0;
    private readonly numbers: number[] = [];

    public add(value: number): void {
        this.numbers.push(value);

        this.min = Math.min(this.min, value);
        this.max = Math.max(this.max, value);
        this.sum += value;
    }

    public getMin(): number {
        return this.min;
    }

    public getMax(): number {
        return this.max;
    }

    public getCount(): number {
        return this.numbers.length;
    }

    public getAverage(): number {
        return this.sum / this.numbers.length;
    }

    public addAll(items: number[]): void {
        items.forEach((item) => this.add(item), this);
    }
}
