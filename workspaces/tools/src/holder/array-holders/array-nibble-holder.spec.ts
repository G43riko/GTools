import { beforeEach, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { ArrayNibbleHolder, type NibbleType } from "./array-nibble-holder.ts";

describe("ArrayNibbleHolder", () => {
    let nibbleHolder: ArrayNibbleHolder;

    beforeEach(() => {
        const initialData = [0x12, 0x34, 0x56, 0x78]; // Example initial data
        nibbleHolder = ArrayNibbleHolder.fromData(initialData);
    });

    it("should correctly initialize ArrayNibbleHolder", () => {
        expect(nibbleHolder.getData()).toEqual([0x12, 0x34, 0x56, 0x78]);
    });

    it("should correctly get nibble at a given index", () => {
        expect(nibbleHolder.get(0)).toBe(0x1);
        expect(nibbleHolder.get(1)).toBe(0x2);
        expect(nibbleHolder.get(2)).toBe(0x3);
        expect(nibbleHolder.get(3)).toBe(0x4);
        expect(nibbleHolder.get(4)).toBe(0x5);
        expect(nibbleHolder.get(5)).toBe(0x6);
        expect(nibbleHolder.get(6)).toBe(0x7);
        expect(nibbleHolder.get(7)).toBe(0x8);
    });

    it("should correctly fill nibbles", () => {
        nibbleHolder.fill(0xA);
        expect(nibbleHolder.getData()).toEqual([0xAA, 0xAA, 0xAA, 0xAA]);
    });

    it("should correctly convert to readonly array", () => {
        const readonlyArray: readonly NibbleType[] = nibbleHolder.toReadonlyArray();
        expect(readonlyArray).toEqual([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
    });

    it("should correctly set nibbles at a given index", () => {
        nibbleHolder.set(0, 0xB);
        nibbleHolder.set(1, 0xC);
        nibbleHolder.set(2, 0xD);
        nibbleHolder.set(3, 0xE);

        expect(nibbleHolder.getData()).toEqual([0xBC, 0xDE, 0x56, 0x78]);
    });

    it("should correctly set nibbles at an odd index", () => {
        nibbleHolder.set(1, 0xB);
        nibbleHolder.set(3, 0xC);

        expect(nibbleHolder.getData()).toEqual([0x1B, 0x3C, 0x56, 0x78]);
    });

    it("should correctly set nibbles at an even index", () => {
        nibbleHolder.set(0, 0xA);
        nibbleHolder.set(2, 0xF);

        expect(nibbleHolder.getData()).toEqual([0xA2, 0xF4, 0x56, 0x78]);
    });

    it("should correctly set nibbles with default value", () => {
        nibbleHolder.set(0);
        nibbleHolder.set(2);

        expect(nibbleHolder.getData()).toEqual([0x02, 0x04, 0x56, 0x78]);
    });

    it("should correctly override data", () => {
        const newData: readonly NibbleType[] = [0xA, 0xB, 0xC, 0xD];
        nibbleHolder.overrideData(newData);

        expect(nibbleHolder.getData()).toEqual([0xAB, 0xCD]);
    });

    it("should correctly set data from ArrayHolder", () => {
        const arrayHolder = ArrayNibbleHolder.fromNibbles([0xA, 0xB, 0xC, 0xD]);
        nibbleHolder.setData(arrayHolder);

        expect(nibbleHolder.getData()).toEqual([0xAB, 0xCD]);
    });
});
