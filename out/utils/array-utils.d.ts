export declare function where<T extends Record<string, unknown>>(array: T[], condition: Partial<T>): T[];
export declare function compareArrays<T>(prev: T[], act: T[], comparator?: (a: T, b: T) => boolean): boolean;
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
export declare function eachOther<T>(arr: T[], callback: (a: T, b: T) => void): void;
