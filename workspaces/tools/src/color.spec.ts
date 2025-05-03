import { expect } from "@std/expect";
import { beforeEach, describe, it } from "@std/testing/bdd";
import { Color } from "./color.ts";

describe("Color", () => {
    let color: Color;

    beforeEach(() => {
        // Create a red color for testing
        color = new Color(255, 0, 0);
    });

    describe("constructor", () => {
        it("should create a color with the specified RGB values", () => {
            expect(color.red).toBe(255);
            expect(color.green).toBe(0);
            expect(color.blue).toBe(0);
            expect(color.alpha).toBe(255); // Default alpha
        });

        it("should create a color with the specified RGBA values", () => {
            const transparentRed = new Color(255, 0, 0, 128);
            expect(transparentRed.red).toBe(255);
            expect(transparentRed.green).toBe(0);
            expect(transparentRed.blue).toBe(0);
            expect(transparentRed.alpha).toBe(128);
        });
    });

    describe("static color constants", () => {
        it("should have correct RGB values for predefined colors", () => {
            expect(Color.RED.rgb).toEqual([255, 0, 0]);
            expect(Color.GREEN.rgb).toEqual([0, 255, 0]);
            expect(Color.BLUE.rgb).toEqual([0, 0, 255]);
            expect(Color.BLACK.rgb).toEqual([0, 0, 0]);
            expect(Color.WHITE.rgb).toEqual([255, 255, 255]);
            expect(Color.TRANSPARENT.rgba).toEqual([0, 0, 0, 0]);
        });
    });

    describe("static factory methods", () => {
        it("should create a color from hex string", () => {
            const hexColor = Color.fromHex("#ff0000");
            expect(hexColor.red).toBe(255);
            expect(hexColor.green).toBe(0);
            expect(hexColor.blue).toBe(0);
        });

        it("should create a color from integer", () => {
            const intColor = Color.fromInt(16711680); // 0xFF0000
            expect(intColor.red).toBe(255);
            expect(intColor.green).toBe(0);
            expect(intColor.blue).toBe(0);
        });

        it("should create a color from RGBA array", () => {
            const arrayColor = Color.fromRgbaArray([255, 0, 0, 128]);
            expect(arrayColor.red).toBe(255);
            expect(arrayColor.green).toBe(0);
            expect(arrayColor.blue).toBe(0);
            expect(arrayColor.alpha).toBe(128);
        });

        it("should create a random color", () => {
            const randomColor = Color.random(42); // Use seed for predictable result
            expect(randomColor).toBeInstanceOf(Color);
            expect(randomColor.red).toBeGreaterThanOrEqual(0);
            expect(randomColor.red).toBeLessThanOrEqual(255);
            expect(randomColor.green).toBeGreaterThanOrEqual(0);
            expect(randomColor.green).toBeLessThanOrEqual(255);
            expect(randomColor.blue).toBeGreaterThanOrEqual(0);
            expect(randomColor.blue).toBeLessThanOrEqual(255);
        });
    });

    describe("color format getters", () => {
        it("should return correct RGB array", () => {
            expect(color.rgb).toEqual([255, 0, 0]);
        });

        it("should return correct RGBA array", () => {
            expect(color.rgba).toEqual([255, 0, 0, 255]);
        });

        it("should return correct RGB string", () => {
            expect(color.rgbString).toBe("rgb(255, 0, 0)");
        });

        it("should return correct RGBA string", () => {
            expect(color.rgbaString).toBe("rgba(255, 0, 0, 255)");
        });

        it("should return correct hex string", () => {
            expect(color.hex).toBe("#FF0000");
        });

        it("should return correct integer value", () => {
            expect(color.int).toBe(16711680); // 0xFF0000
        });
    });

    describe("color manipulation methods", () => {
        it("should create a darker color", () => {
            const darker = color.getDarker(50);
            expect(darker.red).toBe(205);
            expect(darker.green).toBe(0);
            expect(darker.blue).toBe(0);
        });

        it("should not go below 0 when darkening", () => {
            const veryDark = color.getDarker(300);
            expect(veryDark.red).toBe(0);
            expect(veryDark.green).toBe(0);
            expect(veryDark.blue).toBe(0);
        });

        it("should create a lighter color", () => {
            const lighter = color.getLighter(50);
            expect(lighter.red).toBe(255); // Already at max
            expect(lighter.green).toBe(50);
            expect(lighter.blue).toBe(50);
        });

        it("should not go above 255 when lightening", () => {
            const veryLight = color.getLighter(300);
            expect(veryLight.red).toBe(255);
            expect(veryLight.green).toBe(255);
            expect(veryLight.blue).toBe(255);
        });

        it("should create a transparent color", () => {
            const transparent = color.getTransparent(128);
            expect(transparent.red).toBe(255);
            expect(transparent.green).toBe(0);
            expect(transparent.blue).toBe(0);
            expect(transparent.alpha).toBe(128);
        });

        it("should clone a color", () => {
            const clone = color.clone();
            expect(clone).not.toBe(color); // Different object
            expect(clone.red).toBe(color.red);
            expect(clone.green).toBe(color.green);
            expect(clone.blue).toBe(color.blue);
            expect(clone.alpha).toBe(color.alpha);
        });
    });

    describe("parse method", () => {
        it("should parse named colors", () => {
            const red = Color.parse("RED");
            expect(red.rgb).toEqual([255, 0, 0]);
        });

        it("should parse hex colors", () => {
            const hex = Color.parse("#00ff00");
            expect(hex.rgb).toEqual([0, 255, 0]);
        });

        it("should parse hex colors with alpha", () => {
            const hexAlpha = Color.parse("#00ff0080");
            expect(hexAlpha.rgba).toEqual([0, 255, 0, 128]);
        });

        it("should parse rgb format", () => {
            const rgb = Color.parse("rgb(0, 0, 255)");
            expect(rgb.rgb).toEqual([0, 0, 255]);
        });

        it("should parse rgba format", () => {
            const rgba = Color.parse("rgba(0, 0, 255, 0.5)");
            expect(rgba.rgb).toEqual([0, 0, 255]);
        });

        it("should parse integer colors", () => {
            const int = Color.parse("255");
            expect(int.rgb).toEqual([0, 0, 255]);
        });

        it("should throw for invalid color strings", () => {
            expect(() => Color.parse("not-a-color")).toThrow();
        });
    });

    describe("toString method", () => {
        it("should return the hex representation", () => {
            expect(color.toString()).toBe("#FF0000");
        });
    });

    describe("normalized method", () => {
        it("should normalize color values to 0-1 range", () => {
            const normalized = color.normalized();
            expect(normalized.red).toBe(1);
            expect(normalized.green).toBe(0);
            expect(normalized.blue).toBe(0);
            expect(normalized.alpha).toBe(1);
        });

        it("should return the same color if already normalized", () => {
            const alreadyNormalized = new Color(0.5, 0.5, 0.5, 0.5);
            const result = alreadyNormalized.normalized();
            expect(result).toBe(alreadyNormalized);
        });
    });
});
