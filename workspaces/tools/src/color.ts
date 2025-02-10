import { hex2rgb, int2rgb, rgb2hex, rgb2int, rgba2hex } from "@g43/utils";
import { Random } from "./random.ts";

function checkColorValue(value: number): void {
    console.assert(value >= 0, `Color value must be greater than or equal to 0 but now is ${value}`);
    console.assert(value <= 255, `Color value must be less than or equal to 255 but now is ${value}`);
}

const MAXIMAL_INT_COLOR_VALUE = 16777215;

export interface HexColor {
    readonly hex: `#${string}`;
    readonly hex4: `#${string}`;
}

export interface RgbColor {
    readonly rgb: readonly [red: number, green: number, blue: number];
    readonly rgbString: `rgb(${number}, ${number}, ${number})`;
}

export interface RgbaColor extends RgbColor {
    readonly rgba: readonly [red: number, green: number, blue: number, alpha: number];
    readonly rgbaString: `rgba(${number}, ${number}, ${number}, ${number})`;
}

export interface IntColor {
    readonly int: number;
}

/**
 * @see https://github.com/excaliburjs/Excalibur/blob/main/src/engine/Color.ts
 * @see https://colorjs.io/
 */
export class Color implements HexColor, RgbColor, RgbaColor, IntColor {
    public static readonly WHITE: Color = new Color(255, 255, 255);
    public static readonly YELLOW: Color = new Color(255, 255, 0);
    public static readonly MAGENTA: Color = new Color(255, 0, 255);
    public static readonly AQUA: Color = new Color(0, 255, 255);
    public static readonly LEMON: Color = new Color(255, 247, 0);
    public static readonly ORANGE: Color = Color.fromHex("#FFA500");

    public static readonly BLACK: Color = new Color(0, 0, 0);
    public static readonly RED: Color = new Color(255, 0, 0);
    public static readonly GREEN: Color = new Color(0, 255, 0);
    public static readonly BLUE: Color = new Color(0, 0, 255);

    public static readonly GRAY: Color = new Color(128, 128, 128);
    public static readonly NAVY: Color = new Color(0, 0, 128);
    public static readonly TEAL: Color = new Color(0, 128, 128);
    public static readonly OLIVE: Color = new Color(128, 128, 0);
    public static readonly PURPLE: Color = new Color(128, 0, 128);

    public static readonly SILVER: Color = new Color(192, 192, 192);
    public static readonly TRANSPARENT: Color = new Color(0, 0, 0, 0);

    public static random(seedOrRandom?: number | Random): Color {
        if (typeof seedOrRandom === "number") {
            // return new Color(seed * 1515648 % 255, seed * 13518874 % 255, seed * 884141063 % 255);

            const random = new Random(seedOrRandom);

            return new Color(
                random.nextIntBetween(0, 255),
                random.nextIntBetween(0, 255),
                random.nextIntBetween(0, 255),
            );
        } else if (seedOrRandom instanceof Random) {
            return new Color(
                seedOrRandom.nextIntBetween(0, 255),
                seedOrRandom.nextIntBetween(0, 255),
                seedOrRandom.nextIntBetween(0, 255),
            );
        }

        return new Color(Random.intBetween(0, 255), Random.intBetween(0, 255), Random.intBetween(0, 255));
    }

    public static fromRgbaArray(data: readonly [red: number, green: number, blue: number, alpha: number]): Color {
        return new Color(data[0], data[1], data[2], data[3]);
    }

    public toString(): string {
        return this.hex;
    }

    public readonly hex: `#${string}`;
    public readonly hexAlpha: `#${string}`;

    public constructor(
        /**
         * Red color value between 0 and 255
         */
        public readonly red: number,
        /**
         * Green color value between 0 and 255
         */
        public readonly green: number,
        /**
         * Blue color value between 0 and 255
         */
        public readonly blue: number,
        /**
         * Alpha color value between 0 and 255
         */
        public readonly alpha = 255,
    ) {
        checkColorValue(red);
        checkColorValue(green);
        checkColorValue(blue);
        checkColorValue(alpha);
        this.hex = rgb2hex(Math.floor(this.red), Math.floor(this.green), Math.floor(this.blue));
        this.hexAlpha = rgba2hex(
            Math.floor(this.red),
            Math.floor(this.green),
            Math.floor(this.blue),
            Math.floor(this.alpha),
        );
    }

    public get rgb(): readonly [red: number, green: number, blue: number] {
        return [this.red, this.green, this.blue];
    }

    public get rgbaString(): `rgba(${number}, ${number}, ${number}, ${number})` {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }

    public get rgbString(): `rgb(${number}, ${number}, ${number})` {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

    public getDarker(amount: number): Color {
        return new Color(
            Math.max(0, this.red - amount),
            Math.max(0, this.green - amount),
            Math.max(0, this.blue - amount),
            this.alpha,
        );
    }

    public getTransparent(alpha: number): Color {
        return new Color(
            this.red,
            this.green,
            this.blue,
            alpha,
        );
    }

    public getLighter(amount: number): Color {
        return new Color(
            Math.min(255, this.red + amount),
            Math.min(255, this.green + amount),
            Math.min(255, this.blue + amount),
            this.alpha,
        );
    }

    public get rgba(): readonly [red: number, green: number, blue: number, alpha: number] {
        return [this.red, this.green, this.blue, this.alpha];
    }

    public get hex4(): `#${string}` {
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

    public static parse(color: string): Color {
        const namedColor = Color[color.toUpperCase() as keyof typeof Color];
        if (namedColor instanceof Color) {
            return namedColor;
        }

        const hexaWithAlphaMatch = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/.exec(color);
        if (hexaWithAlphaMatch) {
            return new Color(
                parseInt(hexaWithAlphaMatch[1], 16),
                parseInt(hexaWithAlphaMatch[2], 16),
                parseInt(hexaWithAlphaMatch[3], 16),
                parseInt(hexaWithAlphaMatch[4], 16),
            );
        }
        const hexaMatch = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/.exec(color);
        if (hexaMatch) {
            return new Color(
                parseInt(hexaMatch[1], 16),
                parseInt(hexaMatch[2], 16),
                parseInt(hexaMatch[3], 16),
            );
        }

        const rgbaMath = /rgba\(( *\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3}) *, *( *\d*.?\d*) *\)/.exec(color);
        if (rgbaMath) {
            return new Color(
                parseInt(rgbaMath[1], 10),
                parseInt(rgbaMath[2], 10),
                parseInt(rgbaMath[3], 10),
            );
        }

        const rgbMath = /rgb\( *(\d{1,3}) *, *(\d{1,3}) *, *(\d{1,3}) *\)/.exec(color);
        if (rgbMath) {
            return new Color(
                parseInt(rgbMath[1], 10),
                parseInt(rgbMath[2], 10),
                parseInt(rgbMath[3], 10),
            );
        }

        const parsedInt = parseInt(color, 10);
        if (!isNaN(parsedInt) && parsedInt >= 0 && parsedInt <= MAXIMAL_INT_COLOR_VALUE) {
            return Color.fromInt(parsedInt);
        }

        throw new Error(`Cannot parse color: ${color}`);
    }

    public clone(): Color {
        return new Color(this.red, this.green, this.blue, this.alpha);
    }
}
