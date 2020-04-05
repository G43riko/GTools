export interface SimpleWrapper {
    key: string;
    count: number;
}

export declare class KeyValueCounter {
    private readonly data;
    private readonly results;
    private processed;
    private process;

    add(item: any): void;

    addAll(items: any[]): void;

    getAll(): SimpleWrapper[];

    getTopN(count: number): SimpleWrapper[];

    getCount(): number;
}