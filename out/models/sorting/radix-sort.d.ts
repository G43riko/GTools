export declare class RadixSort<T> {
    private readonly mapper;
    constructor(mapper: (item: T) => number);
    sort(a: T[]): void;
    sort2(a: number[]): void;
}
