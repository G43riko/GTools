export declare function where<T extends Record<string, unknown>>(array: T[], condition: Partial<T>): T[];
export declare function compareArrays<T>(prev: T[], act: T[], comparator?: (a: T, b: T) => boolean): boolean;
export declare function groupByLast<T, S extends keyof T>(arr: T[], key: S): {
    [k in S]: T;
};
export declare function analyzeArrayChanges<T>(prev: T[], act: T[], comparator?: (a: T, b: T) => boolean): {
    toAdd: T[];
    toRemove: T[];
};
export declare function subArray<T = any>(array: T[], minIndex?: number, maxIndex?: number): T[];
export declare function max(array: number[]): number;
export declare function min(array: number[]): number;
export declare function sum(array: number[]): number;
export declare function avg(array: number[]): number;
export declare function join<T>(array: T[], delimiter: string, prefix?: string, postfix?: string): string;
export declare function getLast<T>(array: T[]): T | undefined;
export declare function getRandomItem<T = unknown>(array: T[]): T | null;
export declare function getNRandom<T>(args: T[], count: number): T[];
export declare function makeUnique<T>(array: T[]): T[];
export declare function createFilledArray<T>(length: number, provider: (() => T) | T): T[];
export declare function eachOther<T>(arr: T[], callback: (a: T, b: T) => void): void;
export declare function mergeArrays2<S, T, R>(arr1: S[], arr2: T[], callback: (item1: S, item2: T) => R): R[];
export declare function mergeArrays3<S, T, U, R>(arr1: S[], arr2: T[], arr3: U[], callback: (item1: S, item2: T, item3: U) => R): R[];
