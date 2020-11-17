export declare class Runtime {
    static useRuntimeExceptions(value: boolean): void;
    static notNull<T>(obj: T): T;
    static exists<T>(obj: T): T;
    static isArray<T>(obj: T[]): T[];
    static isString(obj: string): string;
    static isNumber(obj: number): number;
    static isFunction<T>(obj: T): T;
    static checkFunction(func: Function, args?: any[], thisArg?: typeof Runtime): boolean;
    static isBoolean(obj: boolean): boolean;
    static min(obj: number, value: number): number;
    static max(obj: number, value: number): number;
}
//# sourceMappingURL=Runtime.d.ts.map