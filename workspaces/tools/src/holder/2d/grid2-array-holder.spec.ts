import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { Grid2ArrayHolder } from "./grid2-array-holder.ts";

describe("GridHolderStatic", () => {
    describe("Test getters", () => {
        const holder = new Grid2ArrayHolder(
            { x: 4, y: 4 },
            [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
            ],
        );
        it("Test get method", () => {
            expect(holder.get(0, 0)).toEqual("a");
            expect(holder.get(1, 0)).toEqual("b");
            expect(holder.get(0, 1)).toEqual("e");
            expect(holder.get(3, 3)).toEqual("p");
        });

        describe("Test get getAreaData", () => {
            it("With size 1", () => {
                expect((holder as any).getAreaInternally({ x: 0, y: 0 }, { x: 1, y: 1 }, "block"))
                    .toEqual([{ item: "a", coordinates: { x: 0, y: 0 } }]);
                expect((holder as any).getAreaInternally({ x: 1, y: 0 }, { x: 1, y: 1 }, "block"))
                    .toEqual([{ item: "b", coordinates: { x: 1, y: 0 } }]);
                expect((holder as any).getAreaInternally({ x: 0, y: 1 }, { x: 1, y: 1 }, "block"))
                    .toEqual([{ item: "e", coordinates: { x: 0, y: 1 } }]);
                expect((holder as any).getAreaInternally({ x: 3, y: 3 }, { x: 1, y: 1 }, "block"))
                    .toEqual([{ item: "p", coordinates: { x: 3, y: 3 } }]);
            });

            it("With size 1x2 and 2x1", () => {
                expect((holder as any).getAreaInternally({ x: 1, y: 1 }, { x: 1, y: 2 }, "block")).toEqual([
                    {
                        item: "f",
                        coordinates: { x: 1, y: 1 },
                    },
                    {
                        item: "j",
                        coordinates: { x: 1, y: 2 },
                    },
                ]);
                expect((holder as any).getAreaInternally({ x: 1, y: 1 }, { x: 2, y: 1 }, "block")).toEqual([
                    {
                        item: "f",
                        coordinates: { x: 1, y: 1 },
                    },
                    {
                        item: "g",
                        coordinates: { x: 2, y: 1 },
                    },
                ]);
            });

            it("With size 2", () => {
                expect((holder as any).getAreaInternally({ x: 1, y: 1 }, { x: 2, y: 2 }, "block")).toEqual([
                    {
                        item: "f",
                        coordinates: { x: 1, y: 1 },
                    },
                    {
                        item: "g",
                        coordinates: { x: 2, y: 1 },
                    },
                    {
                        item: "j",
                        coordinates: { x: 1, y: 2 },
                    },
                    {
                        item: "k",
                        coordinates: { x: 2, y: 2 },
                    },
                ]);
            });
        });

        describe("Test get getAroundSQ", () => {
            describe("With size 1", () => {
                it("Next to borders", () => {
                    expect(holder.getAroundSQ(0, 0)).toEqual(["a", "b", "e", "f"]);
                    expect(holder.getAroundSQ(1, 0)).toEqual(["a", "b", "c", "e", "f", "g"]);
                    expect(holder.getAroundSQ(0, 1)).toEqual(["a", "b", "e", "f", "i", "j"]);
                    expect(holder.getAroundSQ(3, 3)).toEqual(["k", "l", "o", "p"]);
                });
                it("In middle", () => {
                    expect(holder.getAroundSQ(1, 1)).toEqual([
                        "a",
                        "b",
                        "c",
                        "e",
                        "f",
                        "g",
                        "i",
                        "j",
                        "k",
                    ]);

                    expect(holder.getAroundSQ(2, 2)).toEqual([
                        "f",
                        "g",
                        "h",
                        "j",
                        "k",
                        "l",
                        "n",
                        "o",
                        "p",
                    ]);
                    expect(holder.getAroundSQ(1, 2)).toEqual([
                        "e",
                        "f",
                        "g",
                        "i",
                        "j",
                        "k",
                        "m",
                        "n",
                        "o",
                    ]);
                    expect(holder.getAroundSQ(2, 1)).toEqual([
                        "b",
                        "c",
                        "d",
                        "f",
                        "g",
                        "h",
                        "j",
                        "k",
                        "l",
                    ]);
                });
            });
        });

        describe("Test get getAround", () => {
            describe("With size 1", () => {
                it("Next to borders", () => {
                    expect(holder.getAround(0, 0)).toEqual(["a", "b", "e"]);
                    expect(holder.getAround(1, 0)).toEqual(["a", "b", "c", "f"]);
                    expect(holder.getAround(0, 1)).toEqual(["a", "e", "f", "i"]);
                    expect(holder.getAround(3, 3)).toEqual(["l", "o", "p"]);
                });
                it("In middle", () => {
                    expect(holder.getAround(1, 1)).toEqual([
                        "b",
                        "e",
                        "f",
                        "g",
                        "j",
                    ]);

                    expect(holder.getAround(2, 2)).toEqual([
                        "g",
                        "j",
                        "k",
                        "l",
                        "o",
                    ]);
                    expect(holder.getAround(1, 2)).toEqual([
                        "f",
                        "i",
                        "j",
                        "k",
                        "n",
                    ]);
                    expect(holder.getAround(2, 1)).toEqual([
                        "c",
                        "f",
                        "g",
                        "h",
                        "k",
                    ]);
                });
            });
        });

        describe("Test get getBetween", () => {
            it("1 point", () => {
                expect(holder.getBetween({ x: 0, y: 0 }, { x: 0, y: 0 })).toEqual(["a"]);
                expect(holder.getBetween({ x: 1, y: 1 }, { x: 1, y: 1 })).toEqual(["f"]);
                expect(holder.getBetween({ x: 3, y: 3 }, { x: 3, y: 3 })).toEqual(["p"]);
                expect(holder.getBetween({ x: 1, y: 0 }, { x: 1, y: 0 })).toEqual(["b"]);
                expect(holder.getBetween({ x: 0, y: 1 }, { x: 0, y: 1 })).toEqual(["e"]);
            });
            it("4 point", () => {
                expect(holder.getBetween({ x: 0, y: 0 }, { x: 1, y: 1 })).toEqual(["a", "b", "e", "f"]);
                expect(holder.getBetween({ x: 1, y: 1 }, { x: 2, y: 2 })).toEqual(["f", "g", "j", "k"]);
            });
        });

        describe("Test get getArea", () => {
            it("With size 1", () => {
                expect(holder.getArea({ x: 0, y: 0 }, { x: 1, y: 1 })).toEqual(["a"]);
                expect(holder.getArea({ x: 1, y: 0 }, { x: 1, y: 1 })).toEqual(["b"]);
                expect(holder.getArea({ x: 0, y: 1 }, { x: 1, y: 1 })).toEqual(["e"]);
                expect(holder.getArea({ x: 3, y: 3 }, { x: 1, y: 1 })).toEqual(["p"]);
            });
            it("With size 1x2 and 2x1", () => {
                expect(holder.getArea({ x: 1, y: 1 }, { x: 1, y: 2 })).toEqual(["f", "j"]);
                expect(holder.getArea({ x: 1, y: 1 }, { x: 2, y: 1 })).toEqual(["f", "g"]);
            });
            it("With size 2", () => {
                expect(holder.getArea({ x: 0, y: 0 }, { x: 2, y: 2 })).toEqual(["a", "b", "e", "f"]);
                expect(holder.getArea({ x: 1, y: 0 }, { x: 2, y: 2 })).toEqual(["b", "c", "f", "g"]);
                expect(holder.getArea({ x: 0, y: 1 }, { x: 2, y: 2 })).toEqual(["e", "f", "i", "j"]);
                expect(holder.getArea({ x: 2, y: 2 }, { x: 2, y: 2 })).toEqual(["k", "l", "o", "p"]);
            });
            it("With size 4", () => {
                expect(holder.getArea({ x: 0, y: 0 }, { x: 4, y: 4 })).toEqual([
                    "a",
                    "b",
                    "c",
                    "d",
                    "e",
                    "f",
                    "g",
                    "h",
                    "i",
                    "j",
                    "k",
                    "l",
                    "m",
                    "n",
                    "o",
                    "p",
                ]);
            });
        });
    });

    describe("Test expanders", () => {
        const holder = new Grid2ArrayHolder(
            { x: 4, y: 4 },
            [
                "b",
                "a",
                "b",
                "a",
                "b",
                "a",
                "a",
                "a",
                "c",
                "b",
                "b",
                "a",
                "c",
                "b",
                "a",
                "a",
            ],
        );

        it("Test expandConditionally", () => {
            expect(holder.expandConditionally(1, 0, (e) => e === "a").length).toEqual(8);
            expect(holder.expandConditionally(0, 0, (e) => e === "b").length).toEqual(2);
            expect(holder.expandConditionally(1, 2, (e) => e === "b").length).toEqual(3);
            expect(holder.expandConditionally(0, 2, (e) => e === "c").length).toEqual(2);
            expect(holder.expandConditionally(2, 0, (e) => e === "b").length).toEqual(1);
        });
    });

    describe("Test find", () => {
        const holder = new Grid2ArrayHolder(
            { x: 4, y: 4 },
            [
                "a",
                "a",
                "a",
                "a",
                "a",
                "a",
                "c",
                "a",
                "a",
                "a",
                "a",
                "a",
                "c",
                "a",
                "a",
                "a",
            ],
        );

        it("Test getNearest", () => {
            expect(holder.getNearest(2, 1, (e) => e === "c")).toEqual([
                {
                    item: "c",
                    coordinates: { x: 2, y: 1 },
                },
            ]);

            expect(holder.getNearest(1, 1, (e) => e === "c")).toEqual([
                {
                    item: "c",
                    coordinates: { x: 2, y: 1 },
                },
            ]);

            expect(holder.getNearest(1, 2, (e) => e === "c")).toEqual([
                {
                    item: "c",
                    coordinates: { x: 0, y: 3 },
                },
                {
                    item: "c",
                    coordinates: { x: 2, y: 1 },
                },
            ]);
        });
    });
});
