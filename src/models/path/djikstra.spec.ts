import { expect } from "chai";
import { Dijkstra, DjikstraVertex } from "./djikstra";


describe("DJikstra", () => {
    it("Should find simple path", () => {
        const dijkstra = new Dijkstra();
        dijkstra.addVertex(new DjikstraVertex("A", [{nameOfVertex: "C", weight: 3}, {nameOfVertex: "E", weight: 7}, {nameOfVertex: "B", weight: 4}], 1));
        dijkstra.addVertex(new DjikstraVertex("B", [{nameOfVertex: "A", weight: 4}, {nameOfVertex: "C", weight: 6}, {nameOfVertex: "D", weight: 5}], 1));
        dijkstra.addVertex(new DjikstraVertex("C", [{nameOfVertex: "A", weight: 3}, {nameOfVertex: "B", weight: 6}, {nameOfVertex: "E", weight: 8}, {nameOfVertex: "D", weight: 11}], 1));
        dijkstra.addVertex(new DjikstraVertex("D", [{nameOfVertex: "B", weight: 5}, {nameOfVertex: "C", weight: 11}, {nameOfVertex: "E", weight: 2}, {nameOfVertex: "F", weight: 2}], 1));
        dijkstra.addVertex(new DjikstraVertex("E", [{nameOfVertex: "A", weight: 7}, {nameOfVertex: "C", weight: 8}, {nameOfVertex: "D", weight: 2}, {nameOfVertex: "G", weight: 5}], 1));
        dijkstra.addVertex(new DjikstraVertex("F", [{nameOfVertex: "D", weight: 2}, {nameOfVertex: "G", weight: 3}], 1));
        dijkstra.addVertex(new DjikstraVertex("G", [{nameOfVertex: "D", weight: 10}, {nameOfVertex: "E", weight: 5}, {nameOfVertex: "F", weight: 3}], 1));
        expect(dijkstra.findShortestWay("A", "F")).to.deep.equal({nodes: ["A", "B", "D", "F"], distance: 11});
    });
});
