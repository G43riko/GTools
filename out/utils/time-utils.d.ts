export declare function dateAgo(value: number | string | Date): number | string | Date;
export declare function format(date: Date, pattern: string): string;
export declare function createStopWatch(): {
    getDiffMs(): number;
    getDiff(): string;
};
export declare function getStartOfTheDay(date: Date): Date;
export declare function getEndOfTheDay(date: Date): Date;
