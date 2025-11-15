import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import {
    getNestedProperty,
    getNestedPropertyArray,
    getOrSetProperty,
    isPlain,
    makeFlat,
    setNestedProperty,
} from "./object-utils.ts";

describe("ObjectUtils", () => {
    describe("GetNestedPropertyArray", () => {
        it("It should access object attribute by string", () => {
            const GROUP_A = {
                persons: [{ age: 12 }, { age: 25 }],
            };
            const GROUP_B = {
                persons: [{ age: 33 }, { age: 45 }],
            };
            const MEGA_GROUP = {
                groups: [GROUP_A, GROUP_B],
            };
            expect(getNestedPropertyArray({ age: 12 }, "age")).toEqual(12);
            expect(getNestedPropertyArray(GROUP_A, "persons.*.age")).toEqual([
                12,
                25,
            ]);
            expect(getNestedPropertyArray(GROUP_A, "person.*.age")).toBeUndefined();
            expect(getNestedPropertyArray(GROUP_A, "persons*.age")).toBeUndefined();
            expect(getNestedPropertyArray(GROUP_A, "persons.*age")).toBeUndefined();

            expect(getNestedPropertyArray(MEGA_GROUP, "groups.*.persons.*.age")).toEqual([
                12,
                25,
                33,
                45,
            ]);
        });
    });
    describe("GetNestedProperty", () => {
        it("It should access object attribute by string", () => {
            const testObject: any = {
                a: {
                    b: {
                        c: {
                            d: "dd",
                        },
                    },
                },
            };
            expect(getNestedProperty(testObject, "a.c.b.d")).toBeUndefined();
            expect(getNestedProperty(testObject, "a_c_b_d", "_")).toBeUndefined();
            expect(getNestedProperty(testObject, "a.b.c.d")).toEqual("dd");
            expect(getNestedProperty(testObject, "a_b_c_d", "_")).toEqual("dd");
        });
    });
    describe("DeepEqual", () => {
        const items = new Array(10000).fill({});

        const arr = [
            {
                name: "default",
                test: (obj: unknown) => typeof obj === "object",
            },
            {
                name: "default",
                test: (obj: unknown) => typeof obj === "object",
            },
        ];

        arr.forEach((holder) => {
            const startTime = Date.now();
            items.forEach((item) => holder.test(item));

            console.log(`${holder.name} takes ${Date.now() - startTime}`);
        });
    });

    describe("isPlain", () => {
        it("It check if object is plain or not", () => {
            expect(
                isPlain({
                    a: "a",
                    b: "b",
                }),
            ).toBeTruthy();
            expect(
                isPlain({
                    a: 1,
                    b: "b",
                    c: true,
                }),
            ).toBeTruthy();
            expect(
                isPlain({
                    a: 1,
                    b: "b",
                    c: undefined,
                }),
            ).toBeTruthy();

            expect(
                isPlain({
                    a: {},
                    b: "b",
                }),
            ).toBeFalsy();
            expect(
                isPlain({
                    a: 1,
                    b: "b",
                    c: [],
                }),
            ).toBeFalsy();
            expect(
                isPlain({
                    a: 1,
                    b: "b",
                    c: null,
                }),
            ).toBeFalsy();
            expect(
                isPlain({
                    a: 1,
                    b: "b",
                    c: new Date(),
                }),
            ).toBeFalsy();
        });
    });

    describe("getOrSetProperty", () => {
        it("should return the existing property value if it exists", () => {
            const obj = { a: 1, b: 2 };
            expect(getOrSetProperty(obj, "a", 3)).toBe(1);
        });

        it("should set the property and return the new value if it doesn't exist", () => {
            const obj = { a: 1 } as any;
            expect(getOrSetProperty(obj, "b", 2)).toBe(2);
            expect(obj.b).toBe(2);
        });
    });

    describe("setNestedProperty", () => {
        it("should set nested properties using an array of keys", () => {
            const obj = { a: { b: { c: 1 } } } as any;
            setNestedProperty(obj, ["a", "b", "c"] as any, 2);
            expect(obj.a.b.c).toBe(2);

            const obj2 = { a: { b: 1 } } as any;
            setNestedProperty(obj2, ["a", "c"], { d: 3 });
            expect(obj2.a.c).toEqual({ d: 3 });
        });

        it("should set nested properties using a dot-separated string", () => {
            const obj = { a: { b: { c: 1 } } } as any;
            setNestedProperty(obj, "a.b.c", 2);
            expect(obj.a.b.c).toBe(2);

            const obj2 = { a: { b: 1 } } as any;
            setNestedProperty(obj2, "a.c", { d: 3 });
            expect(obj2.a.c).toEqual({ d: 3 });
        });

        it("should create nested objects if they don't exist", () => {
            const obj = {} as any;
            setNestedProperty(obj, "a.b.c", 2);
            expect(obj.a.b.c).toBe(2);
            expect(obj.a.b).toEqual({ c: 2 });
            expect(obj.a).toEqual({ b: { c: 2 } });
        });
    });

    describe("makeFlat", () => {
        const items = [
            { person: { name: "Gabriel" } },
            { person: { name: "Ella" } },
            { person: { name: "Gabriel" } },
            { person: { name: "Joe" } },
            { person: { name: undefined } }, // Add an item with undefined property
        ];

        it("should flatten the list based on the property path", () => {
            expect(makeFlat(items, "person.name")).toEqual([
                "Gabriel",
                "Ella",
                "Gabriel",
                "Joe",
                undefined,
            ]);
            expect(makeFlat(items, "person.name", ".", true)).toEqual([
                "Gabriel",
                "Ella",
                "Gabriel",
                "Joe",
            ]); // Skip undefined
            expect(makeFlat(items, "person_name", "_")).toEqual([
                "Gabriel",
                "Ella",
                "Gabriel",
                "Joe",
                undefined,
            ]);
            expect(makeFlat(items, "person_name", "_", true)).toEqual([
                "Gabriel",
                "Ella",
                "Gabriel",
                "Joe",
            ]); // Skip undefined
        });

        it("should handle empty list", () => {
            expect(makeFlat([], "person.name")).toEqual([]);
        });

        it("should handle property path not existing on objects", () => {
            const items2 = [{ person: { name: "test" } }, { something: "else" }];
            expect(makeFlat(items2, "person.name")).toEqual(["test", undefined]);
            expect(makeFlat(items2, "person.name", ".", true)).toEqual(["test"]);
        });
    });
});
