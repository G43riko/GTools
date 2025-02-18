import { beforeEach, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { SvgRectElementFactory } from "./svg-rect-element-factory.ts";
import { DrawingObjectType, type Rectangle } from "@g43/drawing";

describe("SvgRectElementFactory", () => {
    it("Should create basic empty rect", () => {
        expect(new SvgRectElementFactory().getSvgString()).toBe("<rect></rect>");
    });
    it("Outer html should have all set fields", () => {
        expect(
            new SvgRectElementFactory().patchFrom({
                x: 10,
                y: 20,
                width: 15,
                height: 25,
            }).getSvgString(),
        ).toBe(`<rect x="10" y="20" width="15" height="25"></rect>`);
    });

    let factory: SvgRectElementFactory;

    beforeEach(() => {
        factory = new SvgRectElementFactory();
    });

    it("should have the correct type", () => {
        expect(factory.type).toBe(DrawingObjectType.RECTANGLE);
    });

    it("should create an instance from a Rectangle", () => {
        const rectangle = {
            x: 10,
            y: 20,
            width: 100,
            height: 50,
            fillColor: "red",
            strokeColor: "black",
            strokeWidth: 2,
        } as Rectangle;

        const newFactory = SvgRectElementFactory.fromRectangle(rectangle);

        expect(newFactory.x).toBe(10);
        expect(newFactory.y).toBe(20);
        expect(newFactory.width).toBe(100);
        expect(newFactory.height).toBe(50);
        expect(newFactory.fillColor).toBe("red");
        expect(newFactory.strokeColor).toBe("black");
        expect(newFactory.strokeWidth).toBe(2);
    });

    it("should patch attributes from a partial rectangle", () => {
        const partialRectangle = { x: 15, y: 25, fillColor: "blue" };
        factory.patchFrom(partialRectangle);

        expect(factory.x).toBe(15);
        expect(factory.y).toBe(25);
        expect(factory.fillColor).toBe("blue");
    });

    it("should set and get fill color", () => {
        factory.setFillColor("green");
        expect(factory.fillColor).toBe("green");
    });

    it("should set and get stroke color", () => {
        factory.setStrokeColor("blue");
        expect(factory.strokeColor).toBe("blue");
    });

    it("should set and get stroke width", () => {
        factory.setStrokeWidth(3);
        expect(factory.strokeWidth).toBe(3);
    });

    it("should set and get size", () => {
        factory.setSize(200, 150);
        expect(factory.width).toBe(200);
        expect(factory.height).toBe(150);
    });

    it("should set and get position", () => {
        factory.setPosition(50, 75);
        expect(factory.x).toBe(50);
        expect(factory.y).toBe(75);
    });

    it("should set and get rounded corners", () => {
        factory.setRound(10, 20);
        expect(factory.rx).toBe(10);
        expect(factory.ry).toBe(20);
    });

    it("should set and get path length", () => {
        factory.setPathLength(500);
        expect(factory.pathLength).toBe(500);
    });
});
