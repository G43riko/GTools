import { expect } from "chai";
import { astar } from "./a-star_download";
import { Graph } from "./graph_download";

describe("AStart", () => {
    const grid = [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
    ];

    it("Should find simple path", () => {
        const graph = new Graph(grid);
        const result = astar.search(
            graph,
            graph.get(0, 0),
            graph.get(4, 4),
        );

        const resultString =
            "[0 1], [0 2], [0 3], [0 4], [1 4], [2 4], [2 3], [2 2], [2 1], [2 0], [3 0], [4 0], [4 1], [4 2], [4 3], [4 4]";
        expect(result.join(", ")).to.be.equal(resultString);
    });

    it("Should find simple path wit diagonal movement", () => {
        const graph = new Graph(grid, { diagonal: true });
        const result = astar.search(
            graph,
            graph.get(0, 0),
            graph.get(4, 4),
        );

        expect(result.join(", ")).to.be.equal(
            "[0 1], [0 2], [0 3], [1 4], [2 3], [2 2], [2 1], [3 0], [4 1], [4 2], [4 3], [4 4]",
        );
    });
});
