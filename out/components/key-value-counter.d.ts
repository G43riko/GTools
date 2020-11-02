export interface SimpleWrapper {
    key: string;
    count: number;
}
export declare class KeyValueCounter<T> {
    private readonly data;
    private readonly results;
    private processed;
    add(item: string): void;
    addAll(items: string[]): void;
    getAll(): SimpleWrapper[];
    getTopN(count: number): SimpleWrapper[];
    getCount(): number;
    private process;
}
