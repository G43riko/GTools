import { expect } from "chai";
import "mocha";
import { hex2int, hex2rgb, int2hex, int2rgb, parseColor, rgb2hex, rgb2int } from "./color-utils";

describe("Color utils", () => {
    const whiteInt = 16777215;
    it("It should test hex2rgb", () => {
        expect(hex2rgb("#000000")).to.deep.equal([0, 0, 0]);
        expect(hex2rgb("#ff00ff")).to.deep.equal([255, 0, 255]);
        expect(hex2rgb("#FF00FF")).to.deep.equal([255, 0, 255]);
    });

    it("It should test rgb2hex", () => {
        expect(rgb2hex(0, 0, 0)).to.be.equal("#000000");
        expect(rgb2hex(255, 0, 255)).to.be.equal("#FF00FF");
    });
    it("It should test int2hex", () => {
        expect(int2hex(0)).to.be.equal("#000000");
        expect(int2hex(255)).to.be.equal("#0000FF");
        expect(int2hex(whiteInt)).to.be.equal("#FFFFFF");
    });
    it("It should test hex2int", () => {
        expect(hex2int("#000000")).to.be.equal(0);
        expect(hex2int("#000")).to.be.equal(0);
        expect(hex2int("#FFFFFF")).to.be.equal(whiteInt);
        expect(hex2int("#ffffff")).to.be.equal(whiteInt);
        expect(hex2int("#0000FF")).to.be.equal(255);
        expect(hex2int("#0000ff")).to.be.equal(255);
    });

    it("It should test int2rgb", () => {
        expect(int2rgb(0)).to.deep.equal([0, 0, 0]);
        expect(int2rgb(255)).to.deep.equal([0, 0, 255]);
        expect(int2rgb(128)).to.deep.equal([0, 0, 128]);
    });

    it("It should test rgb2int", () => {
        expect(rgb2int(0, 0, 0)).to.be.equal(0);
        expect(rgb2int(0, 0, 255)).to.be.equal(255);
        expect(rgb2int(0, 0, 128)).to.be.equal(128);
        expect(rgb2int(0, 0, 255)).to.be.equal(255);
        expect(rgb2int(255, 255, 255)).to.be.equal(whiteInt);
    });

    describe("parseColor", () => {
        it("It should parse int color", () => {
            expect(parseColor("0")).to.deep.equal([0, 0, 0]);
            expect(parseColor(String(whiteInt))).to.deep.equal([255, 255, 255]);
            expect(parseColor("255")).to.deep.equal([0, 0, 255]);
        });
        it("It should parse hex color", () => {
            expect(parseColor("#000000")).to.deep.equal([0, 0, 0]);
            expect(parseColor("#FFFFFF")).to.deep.equal([255, 255, 255]);
            expect(parseColor("#ffffff")).to.deep.equal([255, 255, 255]);
            expect(parseColor("#FF00ff")).to.deep.equal([255, 0, 255]);
        });
        it("It should parse rgb color", () => {
            expect(parseColor("rgb(0,0,0)")).to.deep.equal([0, 0, 0]);
            expect(parseColor("rgb(255,255,255)")).to.deep.equal([255, 255, 255]);
            expect(parseColor("rgb(255, 255, 255)")).to.deep.equal([255, 255, 255]);
            expect(parseColor("rgb(255 ,255 ,255)")).to.deep.equal([255, 255, 255]);
            expect(parseColor("rgb(255 , 255 , 255)")).to.deep.equal([255, 255, 255]);
            expect(parseColor("rgb(255 , 255 , 255)")).to.deep.equal([255, 255, 255]);
            expect(parseColor("rgb( 255 , 255 , 255  )")).to.deep.equal([255, 255, 255]);
        });

        it("It should parse rgba color", () => {
            expect(parseColor("rgba(0,0,0, 1)")).to.deep.equal([0, 0, 0]);
            expect(parseColor("rgba(255,255,255, 1)")).to.deep.equal([255, 255, 255]);
            expect(parseColor("rgba(255, 255, 255, 1)")).to.deep.equal([255, 255, 255]);
            expect(parseColor("rgba(255 ,255 ,255, 1)")).to.deep.equal([255, 255, 255]);
            expect(parseColor("rgba(255 , 255 , 255, 1)")).to.deep.equal([255, 255, 255]);
            expect(parseColor("rgba(255 , 255 , 255, 1)")).to.deep.equal([255, 255, 255]);
            expect(parseColor("rgba( 255 , 255 , 255, 1  )")).to.deep.equal([255, 255, 255]);
        });
    });
});
