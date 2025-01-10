import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import {
    hex2int,
    hex2rgb,
    int2hex,
    int2rgb,
    lerpColor,
    lerpHexColor,
    rgb2hex,
    rgb2int,
    rgba2hex,
} from "./color-utils.ts";

describe("Color utils", () => {
    const whiteInt = 0xFFFFFF;

    describe("hex2rgb", () => {
        it("converts valid hex color to rgb color", () => {
            expect(hex2rgb("#000000")).toEqual([0, 0, 0]);
            expect(hex2rgb("#ff00ff")).toEqual([255, 0, 255]);
            expect(hex2rgb("ff00ff")).toEqual([255, 0, 255]);
            expect(hex2rgb("#FF00FF")).toEqual([255, 0, 255]);
        });
        it("returns null for invalid hex color", () => {
            expect(hex2rgb("#invalid", true)).toBeNull();
            expect(hex2rgb("invalid", true)).toBeNull();
        });
    });

    describe("rgb2hex", () => {
        it("converts valid rgb color to hex color", () => {
            expect(rgb2hex(0, 0, 0)).toEqual("#000000");
            expect(rgb2hex(255, 0, 255)).toEqual("#FF00FF");
        });
        it("returns null for invalid rgb color", () => {
            expect(rgb2hex(-1, 0, 255, true)).toBeNull();
            expect(rgb2hex(256, 0, 255, true)).toBeNull();
            expect(rgb2hex(1.5, 0, 255, true)).toBeNull();
        });
    });

    describe("rgba2hex", () => {
        it("converts valid rgba color to hex color", () => {
            expect(rgba2hex(0, 0, 0, 0)).toEqual("#00000000");
            expect(rgba2hex(255, 0, 255, 255)).toEqual("#FF00FFFF");
        });
        it("returns null for invalid rgba color", () => {
            expect(rgba2hex(0, 0, 0, 1.1, true)).toBeNull();
            expect(rgba2hex(255, -1, 255, 256, true)).toBeNull();
        });
    });

    describe("int2hex", () => {
        it("converts valid int color to hex color", () => {
            expect(int2hex(0)).toEqual("#000000");
            expect(int2hex(255)).toEqual("#0000FF");
            expect(int2hex(whiteInt)).toEqual("#FFFFFF");
        });
        it("returns null for invalid int color", () => {
            expect(int2hex(-1, true)).toBeNull();
            expect(int2hex(0xFFFFFF + 1, true)).toBeNull();
        });
    });

    describe("hex2int", () => {
        it("converts valid hex color to int color", () => {
            expect(hex2int("#000000")).toEqual(0);
            expect(hex2int("#000")).toEqual(0);
            expect(hex2int("#FFFFFF")).toEqual(whiteInt);
            expect(hex2int("#ffffff")).toEqual(whiteInt);
            expect(hex2int("#0000FF")).toEqual(0x0000FF);
            expect(hex2int("#0000ff")).toEqual(0x0000FF);
        });
        it("returns null for invalid hex color", () => {
            expect(hex2int("#invalid", true)).toBeNull();
            expect(hex2int("invalid", true)).toBeNull();
        });
    });

    describe("int2rgb", () => {
        it("converts int to rgb", () => {
            expect(int2rgb(0)).toEqual([0, 0, 0]);
            expect(int2rgb(255)).toEqual([0, 0, 255]);
            expect(int2rgb(128)).toEqual([0, 0, 128]);
            expect(int2rgb(0xFFFFFF)).toEqual([255, 255, 255]);
        });
        it("returns null for invalid int color", () => {
            expect(int2rgb(-1, true)).toBeNull();
            expect(int2rgb(0xFFFFFF + 1, true)).toBeNull();
        });
    });

    describe("rgb2int", () => {
        it("converts rgb to int", () => {
            expect(rgb2int(0, 0, 0)).toEqual(0);
            expect(rgb2int(0, 0, 255)).toEqual(255);
            expect(rgb2int(0, 0, 128)).toEqual(128);
            expect(rgb2int(0, 0, 255)).toEqual(255);
            expect(rgb2int(255, 255, 255)).toEqual(whiteInt);
        });
        it("returns null for invalid rgb color", () => {
            expect(rgb2int(-1, 0, 255, true)).toBeNull();
            expect(rgb2int(256, 0, 255, true)).toBeNull();
            expect(rgb2int(121.5, 0, 255, true)).toBeNull();
        });
    });

    describe("lerpColor", () => {
        it("lerps color between [0,0,0,0] and [255,255,255,255]", () => {
            const resultColor = lerpColor([0, 0, 0, 0], [255, 255, 255, 255], 0.5);
            expect(resultColor).toEqual([127.5, 127.5, 127.5, 127.5]);
        });

        it("lerps color between [255,255,255,255] and [0,0,0,0]", () => {
            const resultColor = lerpColor([255, 255, 255, 255], [0, 0, 0, 0], 0.5);
            expect(resultColor).toEqual([127.5, 127.5, 127.5, 127.5]);
        });
    });

    describe("lerpHexaColor", () => {
        it("lerps hexa color between '#000000' and '#ffffff'", () => {
            const resultColor = lerpHexColor("#000000", "#ffffff", 0.5);
            expect(resultColor).toBe("#7f7f7f");
        });

        it("lerps hexa color between '#ffffff' and '#000000'", () => {
            const resultColor = lerpHexColor("#ffffff", "#000000", 0.5);
            expect(resultColor).toBe("#7f7f7f");
        });
    });
});
