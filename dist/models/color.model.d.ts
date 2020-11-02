export declare class Color {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly alpha: number;
    static readonly BLACK: Color;
    static readonly WHITE: Color;
    static readonly GRAY: Color;
    static readonly RED: Color;
    static readonly GREEN: Color;
    static readonly BLUE: Color;
    constructor(red: number, green: number, blue: number, alpha?: number);
    static fromHex(color: string): Color;
    static fromInt(color: number): Color;
    get rgb(): [number, number, number];
    get rgbString(): string;
    normalized(): Color;
    get rgba(): [number, number, number, number];
    get hex(): string;
    get int(): number;
}
