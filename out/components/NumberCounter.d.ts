export declare class NumberCounter {
    private min;
    private max;
    private sum;
    private readonly numbers;

    add(value: number): void;

    getMin(): number;

    getMax(): number;

    getCount(): number;

    getAverage(): number;

    addAll(items: any[]): void;
}
