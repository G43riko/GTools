export declare class Grid3ObjectHolder<T> {
    private readonly data;
    get(x: number, y: number, z: number): T;
    set(x: number, y: number, z: number, value: T): void;
    forEach(callback: (item: T, x: number, y: number, z: number) => void): void;
}
