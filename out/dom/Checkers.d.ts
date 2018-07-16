export declare class Checkers {
    static isFunction(arg: any): boolean;
    static isString(arg: any): boolean;
    static isObject(arg: any): boolean;
    static isNumber(arg: any): boolean;
    static isBoolean(arg: any): boolean;
    static isArray(arg: any): boolean;
    static isEmpty(arg: any): boolean;
    static isInt(arg: any): boolean;
    static isFloat(arg: any): boolean;
    static isUndefined(arg: any): boolean;
    static isElement(obj: any): boolean;
    static notNull<T>(obj: T): T;
    static exists<T>(obj: T): T;
}
