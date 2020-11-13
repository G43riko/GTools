export declare class ArrayUtils {
    static where<T extends {
        [key: string]: any;
    }>(array: T[], condition: any): T[];
    static subArray<T = any>(array: T[], minIndex?: number, maxIndex?: number): T[];
    static max(array: number[]): number;
    static min(array: number[]): number;
    static sum(array: number[]): number;
    static avg(array: number[]): number;
    static join<T>(array: T[], delimiter: string, prefix?: string, postfix?: string): string;
    static getLast<T = any>(array: T[]): T | undefined;
    static getRandom<T = any>(array: T[]): T | null;
    static getNRandom<T = any>(array: T[], count: number): T[];
    static makeUnique<T = any>(array: T[]): T[];
}
