import { hex2rgb, int2rgb, rgb2hex, rgb2int } from "../utils/color-utils";

function checkColorValue(value: number): void {
    console.assert(value >= 0);
    console.assert(value <= 255);
}

export class Color {
    public static readonly BLACK = new Color(0, 0, 0);
    public static readonly WHITE = new Color(255, 255, 255);
    public static readonly GRAY  = new Color(128, 128, 128);
    public static readonly RED   = new Color(255, 0, 0);
    public static readonly GREEN = new Color(0, 255, 0);
    public static readonly BLUE  = new Color(0, 0, 255);

    public constructor(public readonly red: number,
                       public readonly green: number,
                       public readonly blue: number,
                       public readonly alpha = 255) {
        checkColorValue(red);
        checkColorValue(green);
        checkColorValue(blue);
        checkColorValue(alpha);
    }

    public get rgb(): [number, number, number] {
        return [this.red, this.green, this.blue];
    }

    public get rgbString(): string {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

    public get rgba(): [number, number, number, number] {
        return [this.red, this.green, this.blue, this.alpha];
    }

    public get hex(): string {
        return rgb2hex(Math.floor(this.red), Math.floor(this.green), Math.floor(this.blue));
    }

    public get int(): number {
        return rgb2int(this.red, this.green, this.blue);
    }

    public static fromHex(color: string): Color {
        const value = hex2rgb(color);

        return new Color(...value);
    }

    public static fromInt(color: number): Color {
        const value = int2rgb(color);

        return new Color(...value);
    }

    public normalized(): Color {
        if (this.red > 1 || this.green > 1 || this.blue > 1 || this.alpha > 1) {
            return new Color(this.red / 255, this.green / 255, this.blue / 255, this.alpha / 255);
        }

        return this;
    }
}
