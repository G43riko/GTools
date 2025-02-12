import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { GraphHolder } from "./graph-holder.ts";

describe("GraphHolder", () => {
    it("should test graph with single triangle", () => {

        const graph = GraphHolder.from(
            [{ x: 0, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 2 }],
            [[0, 1], [1, 2], [2, 0]],
            [[0, 1, 2]],
        );

        expect(graph.edgeCells[0]).toEqual([0, -1]);
        expect(graph.edgeCells[1]).toEqual([0, -1]);
        expect(graph.edgeCells[2]).toEqual([0, -1]);

        expect(graph.vertexCells[0]).toEqual([0]);
        expect(graph.vertexCells[1]).toEqual([0]);
        expect(graph.vertexCells[2]).toEqual([0]);

        expect(graph.vertexEdges[0]).toEqual([0, 2]);
        expect(graph.vertexEdges[1]).toEqual([0, 1]);
        expect(graph.vertexEdges[2]).toEqual([1, 2]);


        expect(graph.vertexNeighbors[0]).toEqual([1, 2]);
        expect(graph.vertexNeighbors[1]).toEqual([0, 2]);
        expect(graph.vertexNeighbors[2]).toEqual([1, 0]);
    });
});
