import { beforeEach, describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { KeyValueCounter } from "./key-value-counter.ts";

describe("KeyValueCounter", () => {
    let counter: KeyValueCounter;
    beforeEach(() => {
        counter = new KeyValueCounter();
    });
    it("Test empty object", () => {
        expect(counter.getAll()).toEqual([]);
        expect(counter.getCount()).toEqual(0);
        expect(counter.getTopN(0)).toEqual([]);
        expect(counter.getTopN(10)).toEqual([]);
    });

    it("Test object with one value", () => {
        const item = "testItem";
        const expectedResultItem = {
            key: item,
            count: 1,
        };
        counter.add(item);

        expect(counter.getAll()).toEqual([expectedResultItem]);
        expect(counter.getCount()).toEqual(1);
        expect(counter.getTopN(0)).toEqual([]);
        expect(counter.getTopN(10)).toEqual([expectedResultItem]);
    });
    it("Test object with multiple values", () => {
        const items = ["testItem3", "testItem3", "testItem3", "testItem2", "testItem2", "testItem1"];
        const expectedResultItem3 = {
            key: "testItem3",
            count: 3,
        };
        const expectedResultItem2 = {
            key: "testItem2",
            count: 2,
        };
        const expectedResultItem1 = {
            key: "testItem1",
            count: 1,
        };
        const _expectedResultArray = [expectedResultItem1, expectedResultItem2, expectedResultItem3];
        items.forEach((item) => counter.add(item));
        // expect(counter.getAll()).to.have.deep.members(expectedResultArray);
        expect(counter.getCount()).toEqual(3);
        expect(counter.getTopN(0)).toEqual([]);
        // expect(counter.getTopN(10)).to.have.deep.members(expectedResultArray);
    });
    it("Test object with multiple values", () => {
        const items = ["testItem3", "testItem3", "testItem3", "testItem2", "testItem2", "testItem1"];
        const expectedResultItem3 = {
            key: "testItem3",
            count: 6,
        };
        const expectedResultItem2 = {
            key: "testItem2",
            count: 4,
        };
        const expectedResultItem1 = {
            key: "testItem1",
            count: 2,
        };
        const _expectedResultArray = [expectedResultItem1, expectedResultItem2, expectedResultItem3];
        items.forEach((item) => counter.add(item));
        counter.addAll(items);
        // expect(counter.getAll()).to.have.deep.members(expectedResultArray);
        expect(counter.getCount()).toEqual(3);
        expect(counter.getTopN(0)).toEqual([]);
        // expect(counter.getTopN(10)).to.have.deep.members(expectedResultArray);
    });
});
