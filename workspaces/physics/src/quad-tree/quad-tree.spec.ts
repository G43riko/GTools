import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { SimpleVector } from "@g43/math";
import { QuadBox, QuadTree } from "./quad-tree.ts";

describe("Quad tree", () => {
    it("Basic testing", () => {
        const tree = new QuadTree(
            new QuadBox(
                SimpleVector.create2(0, 0),
                SimpleVector.create2(100, 100),
            ),
        );

        expect(tree.queryRange(
            new QuadBox(
                SimpleVector.create2(0, 0),
                SimpleVector.create2(100, 100),
            ),
        )).toEqual([]);
    });

    it("Basic testing 2", () => {
        const tree = new QuadTree(
            new QuadBox(
                SimpleVector.create2(0, 0),
                SimpleVector.create2(100, 100),
            ),
        );

        tree.insert(SimpleVector.create2(10, 10), null);

        expect(tree.queryRange(
            new QuadBox(
                SimpleVector.create2(0, 5),
                SimpleVector.create2(100, 5),
            ),
        )).toEqual([]);
        expect(tree.queryRange(
            new QuadBox(
                SimpleVector.create2(0, 15),
                SimpleVector.create2(100, 15),
            ),
        )).toEqual([]);
        expect(tree.queryRange(
            new QuadBox(
                SimpleVector.create2(5, 0),
                SimpleVector.create2(5, 100),
            ),
        )).toEqual([]);
        expect(tree.queryRange(
            new QuadBox(
                SimpleVector.create2(15, 0),
                SimpleVector.create2(15, 100),
            ),
        )).toEqual([]);
        expect(
            tree.queryRange(
                new QuadBox(
                    SimpleVector.create2(5, 5),
                    SimpleVector.create2(15, 15),
                ),
            ).length,
        ).toEqual(1);
    });

    it("Basic testing 2", () => {
        const tree = new QuadTree(
            new QuadBox(
                SimpleVector.create2(0, 0),
                SimpleVector.create2(100, 100),
            ),
        );

        tree.insert(SimpleVector.create2(10, 10), "A");

        expect(tree.queryPoint(SimpleVector.create2(10, 10))).toEqual("A");
        tree.insert(SimpleVector.create2(10, 10), "B");
        expect(tree.queryPoint(SimpleVector.create2(10, 10))).toEqual("B");
        tree.removePoint(SimpleVector.create2(10, 10));
        expect(tree.queryPoint(SimpleVector.create2(10, 10))).toBeNull();
    });
});
