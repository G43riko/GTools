import { beforeEach, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { CustomSvgElementClassList } from "./custom-svg-element-class-list.ts";

describe("CustomSvgElementClassList", () => {
    let classList: CustomSvgElementClassList;

    beforeEach(() => {
        classList = new CustomSvgElementClassList();
    });

    it("should initialize with an empty class list", () => {
        expect(classList.length).toBe(0);
        expect(classList.value).toBe("");
    });

    it("should add class names", () => {
        classList.add("foo", "bar");
        expect(classList.length).toBe(2);
        expect(classList.contains("foo")).toBe(true);
        expect(classList.contains("bar")).toBe(true);
        expect(classList.contains("baz")).toBe(false);
    });

    it("should remove class names", () => {
        classList.add("foo", "bar", "baz");
        classList.remove("bar");
        expect(classList.length).toBe(2);
        expect(classList.contains("bar")).toBe(false);
        expect(classList.contains("foo")).toBe(true);
        expect(classList.contains("baz")).toBe(true);
    });

    it("should replace class names", () => {
        classList.add("oldClass");
        const result = classList.replace("oldClass", "newClass");

        expect(result).toBe(true);
        expect(classList.contains("oldClass")).toBe(false);
        expect(classList.contains("newClass")).toBe(true);
    });

    it("should return false when replacing a non-existent class", () => {
        const result = classList.replace("nonExistent", "newClass");
        expect(result).toBe(false);
    });

    it("should get class name by index", () => {
        classList.add("first", "second");
        expect(classList.item(0)).toBe("first");
        expect(classList.item(1)).toBe("second");
        expect(classList.item(2)).toBeNull();
    });

    it("should set and get value as a space-separated string", () => {
        classList.value = "one two three";
        expect(classList.length).toBe(3);
        expect(classList.contains("one")).toBe(true);
        expect(classList.contains("two")).toBe(true);
        expect(classList.contains("three")).toBe(true);
        expect(classList.value).toBe("one two three");
    });

    it("should iterate over class names using forEach", () => {
        classList.add("a", "b", "c");
        const collectedClasses: string[] = [];

        classList.forEach((className) => {
            collectedClasses.push(className);
        });

        expect(collectedClasses).toEqual(["a", "b", "c"]);
    });

    it("should throw an error when calling supports", () => {
        expect(() => classList.supports("test")).toThrow("Not implemented");
    });

    it("should always return false when calling toggle", () => {
        expect(classList.toggle("test")).toBe(false);
        expect(classList.toggle("test", true)).toBe(false);
    });
});
