import { NearestItem, NearestVertex } from "./nearest-item";

describe("NearestItems", () => {
    it("Test max queue", () => {
        const graph = new NearestItem();

        graph.addVertex(new NearestVertex("A", "A", [{name: "B", weight: 1}]));
        graph.addVertex(new NearestVertex("B", "B", [{name: "C", weight: 2}, {name: "E", weight: 1}]));
        graph.addVertex(new NearestVertex("C", "C", [{name: "D", weight: 3}]));
        graph.addVertex(new NearestVertex("D", "D", []));
        graph.addVertex(new NearestVertex("E", "E", [{name: "F", weight: 1}]));
        graph.addVertex(new NearestVertex("F", "F", [{name: "D", weight: 1}]));

        console.log(graph.getNearestItem("A", "D"));
    });
});
