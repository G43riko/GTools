export declare class StringCheckers {
    static isCamelCase(text: string): boolean;
    static isUpperCamelCase(text: string): boolean;
    static isLowerCamelCase(text: string): boolean;
    static isLowerSnakeCase(text: string): boolean;
    static isUpperSnakeCase(text: string): boolean;
    static isSnakeCase(text: string): boolean;
    static isTimeFormat(text: string, format: string): boolean;
    static isHHmm(text: string, divider?: string): boolean;
    static isHHmmss(text: string, divider?: string): boolean;
}
