import { expect } from "chai";
import { Box, Point, QuadTree } from "./quad-tree";

describe("Quad tree", () => {
    it("Basic testing", () => {
        const tree = new QuadTree(
            new Box(
                new Point(0, 0),
                new Point(100, 100),
            ),
        );

        expect(tree.queryRange(
            new Box(
                new Point(0, 0),
                new Point(100, 100),
            ),
        )).to.deep.equal([]);
    });

    it("Basic testing 2", () => {
        const tree = new QuadTree(
            new Box(
                new Point(0, 0),
                new Point(100, 100),
            ),
        );

        tree.insert(new Point(10, 10), null);

        expect(tree.queryRange(
            new Box(
                new Point(0, 5),
                new Point(100, 5),
            ),
        )).to.deep.equal([]);
        expect(tree.queryRange(
            new Box(
                new Point(0, 15),
                new Point(100, 15),
            ),
        )).to.deep.equal([]);
        expect(tree.queryRange(
            new Box(
                new Point(5, 0),
                new Point(5, 100),
            ),
        )).to.deep.equal([]);
        expect(tree.queryRange(
            new Box(
                new Point(15, 0),
                new Point(15, 100),
            ),
        )).to.deep.equal([]);
        expect(tree.queryRange(
            new Box(
                new Point(5, 5),
                new Point(15, 15),
            ),
        ).length).to.be.equal(1);
    });

    it("Basic testing 2", () => {
        const tree = new QuadTree(
            new Box(
                new Point(0, 0),
                new Point(100, 100),
            ),
        );

        tree.insert(new Point(10, 10), "A");

        expect(tree.queryPoint(new Point(10, 10))).to.be.equal("A");
        tree.removePoint(new Point(10, 10));
        expect(tree.queryPoint(new Point(10, 10))).to.be.null;
        expect(tree.queryRange(
            new Box(
                new Point(0, 5),
                new Point(100, 5),
            ),
        )).to.deep.equal([]);
    });
});
