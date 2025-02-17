import { beforeEach, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { TypedArrayHolder } from "./typed-array-holder.ts";

describe("TypedArrayHolder", () => {
    let typedArrayHolder: TypedArrayHolder<number, Int32Array>;

    beforeEach(() => {
        // Example initial data
        const initialData = new Int32Array([1, 2, 3, 4, 5]);
        typedArrayHolder = new TypedArrayHolder(initialData);
    });

    it("should correctly initialize TypedArrayHolder", () => {
        expect(typedArrayHolder.getData()).toEqual(new Int32Array([1, 2, 3, 4, 5]));
    });

    it("should correctly get item at a given index", () => {
        expect(typedArrayHolder.get(0)).toBe(1);
        expect(typedArrayHolder.get(2)).toBe(3);
        expect(typedArrayHolder.get(4)).toBe(5);
    });

    it("should correctly fill items", () => {
        typedArrayHolder.fill(10);
        expect(typedArrayHolder.getData()).toEqual(new Int32Array([10, 10, 10, 10, 10]));
    });

    it("should correctly convert to readonly array", () => {
        const readonlyArray: readonly number[] = typedArrayHolder.toReadonlyArray();
        expect(readonlyArray).toEqual([1, 2, 3, 4, 5]);
    });

    it("should correctly set data from another TypedArrayHolder", () => {
        const newData = new TypedArrayHolder(new Int32Array([6, 7, 8, 9, 10]));
        typedArrayHolder.setData(newData);

        expect(typedArrayHolder.getData()).toEqual(new Int32Array([6, 7, 8, 9, 10]));
    });

    it("should correctly override data with a new array", () => {
        const newData: number[] = [6, 7, 8, 9, 10];
        typedArrayHolder.overrideData(newData);

        expect(typedArrayHolder.getData()).toEqual(new Int32Array([6, 7, 8, 9, 10]));
    });

    it("should correctly set item at a given index with a value", () => {
        typedArrayHolder.set(2, 15);
        expect(typedArrayHolder.getData()).toEqual(new Int32Array([1, 2, 15, 4, 5]));
    });

    it("should correctly set item at a given index with undefined value", () => {
        typedArrayHolder.set(3, undefined);
        expect(typedArrayHolder.getData()).toEqual(new Int32Array([1, 2, 3, 0, 5]));
    });
});
