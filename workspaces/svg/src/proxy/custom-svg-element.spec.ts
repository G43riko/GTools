import { beforeEach, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { CustomSvgElement } from "./custom-svg-element.ts";

describe("CustomSvgElement", () => {
    let element: CustomSvgElement;

    beforeEach(() => {
        element = new CustomSvgElement("rect");
    });

    it("should initialize with given name", () => {
        expect(element.name).toBe("rect");
    });

    it("should set and get attributes", () => {
        element.setAttribute("width", "100");
        expect(element.getAttribute("width")).toBe("100");
    });

    it("should remove attributes", () => {
        element.setAttribute("height", "200");
        element.removeAttribute("height");
        expect(element.getAttribute("height")).toBeUndefined();
    });

    it("should add child elements", () => {
        const child = new CustomSvgElement("circle");
        element.addChild(child);
        expect(element.querySelector("circle")).toBe(child);
    });

    it("should throw error when setting parent twice", () => {
        const parent = new CustomSvgElement("svg");
        element.setParent(parent);
        expect(() => element.setParent(new CustomSvgElement("g"))).toThrow("Parent elready exists");
    });

    it("should generate correct outerHTML", () => {
        element.setAttribute("width", "100");
        element.setAttribute("height", "50");
        expect(element.outerHTML).toContain('<rect width="100" height="50">');
    });

    it("should not find non-existing selector", () => {
        expect(element.querySelector("nonexistent")).toBeUndefined();
    });

    it("should support class-based querySelector", () => {
        element.classList.add("my-class");
        const parent = new CustomSvgElement("svg");
        parent.addChild(element);
        expect(parent.querySelector(".my-class")).toBe(element);
    });

    it("should throw error for unsupported selectors", () => {
        expect(() => element.querySelector("#invalid"))
            .toThrow("Unsupported selector #invalid");
    });

    it("should return NaN bounding box", () => {
        const bbox = element.calculateBoundingBox();
        expect(bbox).toEqual({ x: NaN, y: NaN, w: NaN, h: NaN });
    });

    it("should throw error for unimplemented methods", () => {
        const target = {} as any;
        expect(() => element.prependTo(target)).toThrow("Not implemented method prependTo");
        expect(() => element.appendTo(target)).toThrow("Not implemented method appendTo");
        expect(() => element.removeFrom(target)).toThrow("Not implemented method removeFrom");
    });
});
